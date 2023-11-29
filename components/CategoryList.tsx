import { IconChevronDown, IconDots } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";
import CategoryLink, { CategoryLinkProps } from "./CategoryLink";
import { CategorySet } from "@/config/categories";
import { ICategoryList } from "./Navbar";
import AppLink from "./AppLink";

export type CategorySubList = {
  subtitle: string;
  categories: CategoryLinkProps[];
};

type Props = {
  mode?: "light" | "dark";
  categoryList: ICategoryList;
  onClickAction?: () => void;
};

export default function CategoryList({ categoryList, mode = "dark" }: Props) {
  const { categorySet, title, icon } = categoryList;

  const gridCols = Object.entries(categorySet).length;

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
        className="absolute end-0 z-10 pt-2 rounded-md border border-gray-100 bg-white shadow-lg hidden group-hover:flex items-start justify-evenly"
        role="menu"
      >
        {Object.entries(categorySet).map(([key, cats]) => {
          if (!cats) return null;

          return (
            <div className="p-2" key={key}>
              <strong className="block p-2 text-xs font-bold uppercase text-primary-dark">
                {key}
              </strong>
              {Object.values(cats).map((category) => (
                <CategoryLink
                  href={category.slug}
                  text={category.name}
                  key={category.name}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
