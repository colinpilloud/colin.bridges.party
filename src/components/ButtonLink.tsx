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
      className={`btn btn-lg w-48 rounded-2xl py-8 text-xl font-bold ${buttonStyle}`}
    >
      {text}
    </Link>
  );
}
