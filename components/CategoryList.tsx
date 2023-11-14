import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import CategoryLink, { CategoryLinkProps } from "./CategoryLink";

type CategorySubList = {
  subtitle: string;
  categories: CategoryLinkProps[];
};

type Props = {
  title: string;
  icon?: JSX.Element;
  mode?: "light" | "dark";
  categoryList: CategorySubList[];
  onClickAction?: () => void;
};

export default function CategoryList({
  title,
  icon,
  categoryList,
  mode = "dark",
}: Props) {
  return (
    <div className="relative group pl-6">
      <div className="inline-flex items-center overflow-hidden">
        <Link
          href="#"
          className="font-semibold transition duration-300 text-sm lg:text-xs"
        >
          <div
            className={classNames(
              mode === "dark"
                ? "lg:group-hover:text-gray-600 active:text-gray-600"
                : "lg:group-hover:text-gray-100 active:text-gray-100",
              "flex justify-center items-center pb-1"
            )}
          >
            {icon && <i className="mr-1">{icon}</i>}
            <span
              className={classNames(
                mode === "dark"
                  ? "border-black lg:group-hover:border-gray-600 active:border-gray-600"
                  : "border-white lg:group-hover:border-gray-100 active:border-gray-100",
                "border-b pb-0.5 whitespace-nowrap"
              )}
            >
              {title}
            </span>
            <IconChevronDown className="ml-1" size={16} />
          </div>
        </Link>
      </div>

      <div
        className="absolute end-0 z-10 pt-2 w-fit rounded-md border border-gray-100 bg-white shadow-lg hidden group-hover:flex group-active:flex items-start"
        role="menu"
      >
        {categoryList.map((list) => (
          <div className="p-2">
            <strong className="block p-2 text-xs font-bold uppercase text-primary-dark">
              {list.subtitle}
            </strong>

            {list.categories.map((category) => (
              <CategoryLink href={category.href} text={category.text} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
