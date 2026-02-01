import { Link } from "react-router-dom";

interface ButtonLinkProps {
  href: string;
  text: string;
  variant: "primary-on-black" | "black-on-secondary";
}

export function ButtonLink(props: ButtonLinkProps) {
  const { href, text, variant } = props;

  const buttonStyle =
    variant === "primary-on-black"
      ? "bg-primary text-black"
      : "bg-black text-secondary";

  return (
    <Link
      to={href}
      className={`w-48 p-6 text-lg font-black uppercase md:p-8 ${buttonStyle}`}
    >
      {text}
    </Link>
  );
}
