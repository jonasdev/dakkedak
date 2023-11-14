import classNames from "classnames";
import Link from "next/link";
import React from "react";

export type CategoryLinkProps = {
  href: string;
  text: string;
  mode?: "light" | "dark";
};

export default function CategoryLink({
  text,
  href,
  mode = "dark",
}: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className={classNames(
        mode === "dark"
          ? "lg:group-hover:text-gray-600 active:text-gray-600"
          : "lg:group-hover:text-gray-100 active:text-gray-100",
        "block rounded-lg px-4 py-2 text-sm whitespace-nowrap hover:bg-primary hover:bg-opacity-30"
      )}
      role="menuitem"
    >
      {text}
    </Link>
  );
}
