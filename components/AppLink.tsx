import classNames from "classnames";
import Link from "next/link";

export type AppLinkProps = {
  href: string;
  text: string;
  icon?: JSX.Element;
  mode?: "light" | "dark";
  onClickAction?: () => void;
};

export default function AppLink({
  href,
  text,
  icon,
  mode = "dark",
  onClickAction,
}: AppLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClickAction}
      className="group font-semibold transition duration-300 text-sm lg:text-xs"
    >
      <div
        className={classNames(
          mode === "dark"
            ? "lg:group-hover:text-gray-600 active:text-gray-600"
            : "lg:group-hover:text-gray-100 active:text-gray-100",
          "flex items-center pb-1"
        )}
      >
        {icon && <i className="mr-1">{icon}</i>}
        <span
          className={classNames(
            mode === "dark"
              ? "border-black lg:group-hover:border-gray-600 active:border-gray-600"
              : "border-white lg:group-hover:border-gray-100 active:border-gray-100",
            "whitespace-nowrap"
          )}
        >
          {text}
        </span>
      </div>
      {/* <span className="block h-0.5 scale-0 bg-black origin-center font-semibold transition-all duration-500 group-hover:scale-100" /> */}
    </Link>
  );
}
