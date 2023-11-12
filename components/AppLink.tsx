import Link from "next/link";

export type NavLinkProps = {
  href: string;
  text: string;
  icon?: JSX.Element;
};

export default function AppLink({ href, text, icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="group font-semibold transition duration-300 text-sm lg:text-xs"
    >
      <div className="flex justify-center items-center pb-1 lg:group-hover:text-gray-600 active:text-gray-600">
        {icon && <i className="mr-1">{icon}</i>}
        <span className="border-b border-black pb-0.5">{text}</span>
      </div>
      {/* <span className="block h-0.5 scale-0 bg-black origin-center font-semibold transition-all duration-500 group-hover:scale-100" /> */}
    </Link>
  );
}
