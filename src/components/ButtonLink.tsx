import { Button, Link } from "@nextui-org/react";

interface ButtonLinkProps {
  href: string;
  text: string;
  variant: "primary-on-black" | "black-on-primary";
}

export function ButtonLink(props: ButtonLinkProps) {
  const { href, text, variant } = props;

  const buttonStyle =
    variant === "primary-on-black"
      ? "bg-primary text-black"
      : "bg-black text-primary";

  return (
    <Link href={href}>
      <Button
        size="sm"
        radius="lg"
        className={`w-48 p-6 text-lg font-black uppercase md:p-8 ${buttonStyle}`}
      >
        {text}
      </Button>
    </Link>
  );
}
