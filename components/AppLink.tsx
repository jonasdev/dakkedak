import Link from "next/link";

type Props = {
  href: string;
  text: string;
  icon?: JSX.Element;
};

export default function AppLink({ href, text, icon }: Props) {
  return (
    <Link
      href={href}
      className="w-fit flex justify-center items-center font-semibold transition-all hover:border-b-2 hover:border-b-black border-b-transparent"
    >
      {icon && <i className="mr-2">{icon}</i>}
      <span>{text}</span>
    </Link>
  );
}
