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
      className="group font-semibold transition duration-300 text-sm lg:text-xs"
    >
      <div className="flex justify-center items-center pb-1">
        {icon && <i className="mr-2">{icon}</i>}
        {text}
      </div>
      <span className="block h-0.5 scale-0 bg-black origin-center font-semibold transition-all duration-500 group-hover:scale-100" />
    </Link>
  );
}
