import type React from "react";
import { useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const DEFAULT_OPEN_KEYS: string[] = [];

export interface ResumeSubsectionItem {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface ResumeSubsectionAccordionProps {
  items: ResumeSubsectionItem[];
  defaultOpenKeys?: string[];
  containerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function ResumeSubsectionAccordion({
  items,
  defaultOpenKeys = DEFAULT_OPEN_KEYS,
  containerClassName,
  titleClassName,
  contentClassName,
}: ResumeSubsectionAccordionProps) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    () => new Set(defaultOpenKeys),
  );

  const isOpen = (key: string) => selectedKeys.has(key);

  const handleToggle = (key: string) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>
      {items.map((item) => {
        const open = isOpen(item.key);

        return (
          <div className="mb-2" key={item.key}>
            <div
              className={`collapse w-screen rounded-none md:[--work-content-indent:clamp(1rem,15vw,15.5rem)] md:[--work-title-indent:calc(var(--work-content-indent)-1rem)] ${open ? "collapse-open" : ""} ${containerClassName ?? ""}`}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => handleToggle(item.key)}
                className={`collapse-title to-secondary/20 text-secondary print:text-md flex w-full cursor-pointer items-center justify-start bg-gradient-to-l from-transparent via-transparent via-[15%] py-3 pl-1 text-left text-lg font-bold uppercase md:text-xl print:ml-4 print:text-left ${titleClassName ?? ""}`}
              >
                <span className="ml-2 text-xl text-black md:pl-[var(--work-title-indent)] print:hidden">
                  {open ? (
                    <FeatherIcon
                      size="16"
                      icon="minus"
                      className="text-secondary"
                    />
                  ) : (
                    <FeatherIcon
                      size="16"
                      icon="plus"
                      className="text-secondary"
                    />
                  )}
                </span>
                <span className="pl-2">{item.title}</span>
              </button>
              <div
                className={`collapse-content mt-1 mb-6 flex w-full flex-col space-y-4 pt-2 pl-4 shadow transition-all duration-200 md:space-y-6 md:pl-[var(--work-content-indent)] print:mb-3 print:space-y-2 ${open ? "block" : "hidden"} ${contentClassName ?? ""}`}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
