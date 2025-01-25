import {
  Accordion,
  AccordionItem,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { Prose } from "../components/Prose.tsx";
import bbl from "../bbl.png";
import bmc from "../bmc.png";

function ExpandableImage({ src, alt }: { src: string; alt: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Image
        className="md:[600px] w-[400px] md:cursor-zoom-in"
        src={src}
        alt={alt}
        tabIndex={window.innerWidth < 768 ? -1 : 0}
        onClick={() => {
          if (window.innerWidth >= 768) {
            onOpen();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && window.innerWidth >= 768) {
            onOpen();
          }
        }}
      />
      <Modal
        size="full"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
            onOpenChange();
          }
        }}
        classNames={{
          base: "bg-black",
          body: "flex flex-row justify-center items-center",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Image
                  src={src}
                  alt={alt}
                  className="max-h-[90vh] cursor-zoom-out"
                  onClick={onClose}
                  onKeyDown={(e) => {
                    onClose();
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function Portfolio() {
  return (
    <Accordion
      defaultExpandedKeys={["bmc-bbl"]}
      itemClasses={{
        title:
          "text-md sm:text-xl md:text-2xl font-black text-black uppercase text-right whitespace-pre-line ml-16",
        trigger:
          "w-screen bg-gradient-to-r from-transparent to-primary to-20% pb-3 pt-5 mb-2 md:pr-[10vw] -ml-2 overflow-hidden",
        indicator: "text-black text-xl rotate-0 data-[open=true]:rotate-45",
        content: "flex flex-col flex-nowrap items-end space-y-4 mb-4",
      }}
    >
      <AccordionItem
        title={
          <div className="flex flex-row flex-wrap justify-end gap-x-2 md:gap-x-4">
            <Link
              isExternal={true}
              className="text-[length:inherit] text-inherit"
              href="https://bestmagiccard.com"
            >
              bestmagiccard.com
            </Link>
            {
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              <span> // </span>
            }
            <Link
              isExternal={true}
              className="text-[length:inherit] text-inherit"
              href="https://bestbasicland.com"
            >
              bestbasicland.com
            </Link>
          </div>
        }
        key="bmc-bbl"
        indicator="+"
      >
        <div className="flex flex-row flex-wrap justify-end gap-4">
          <ExpandableImage src={bmc} alt="bestmagiccard.com" />
          <ExpandableImage src={bbl} alt="bestbasicland.com" />
        </div>
        <Prose>
          I've been playing Magic: the Gathering
          <span className="align-super text-xs">TM</span> since 2003, and every
          Magic player I know has entrenched opinions about which cards are the
          "best", according to their own arbitrary criteria (and opinion of the
          color blue).
        </Prose>
        <Prose>
          I built these two sister sites to crowdsource card rankings; users are
          presented an endless stream of randomized groupings of cards and asked
          to pick their favorite. The winner is recorded and scores are
          aggregated over time.
        </Prose>
        <Prose>
          The frontend is two{" "}
          <span className="font-semibold text-secondary">
            TypeScript / React SPA
          </span>
          s, managed in one monorepo with a shared components library, and the
          backend is written in{" "}
          <span className="font-semibold text-secondary">Scala</span>, talks to
          Postgres, gets packaged as a native image, and deploys into{" "}
          <span className="font-semibold text-secondary">AWS Lambda</span> as a
          custom runtime. Data is synchronized from{" "}
          <Link
            className="text-secondary underline"
            href="https://scryfall.com"
            isExternal={true}
          >
            Scryfall's
          </Link>{" "}
          API.
        </Prose>
      </AccordionItem>
    </Accordion>
  );
}
