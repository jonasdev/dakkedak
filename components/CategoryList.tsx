import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import CategoryLink, { CategoryLinkProps } from "./CategoryLink";
import { ICategoryList } from "./Navbar";
import CategoryListItem from "./CategoryListItem";

export type CategorySubList = {
  subtitle: string;
  categories: CategoryLinkProps[];
};

type Props = {
  mode?: "light" | "dark";
  categoryList: ICategoryList;
  onClickAction?: () => void;
  navbarIdnex: number;
};

export default function CategoryList({
  categoryList,
  mode = "dark",
  navbarIdnex: navbarIndex,
}: Props) {
  const { categorySet, title, icon } = categoryList;

  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleHoverEnter = () => {
    setNavbarVisible(true);
  };

  const handleHoverLeave = () => {
    setNavbarVisible(false);
  };

  return (
    <div
      className="relative group pl-6"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <div className="inline-flex items-center overflow-hidden">
        <span className="font-semibold transition duration-300 text-sm lg:text-xs">
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
                "whitespace-nowrap"
              )}
            >
              {title}
            </span>
            <IconChevronDown className="ml-1" size={16} />
          </div>
        </span>
      </div>

      <div
        className={classNames(
          navbarIndex < 4 ? "start-0" : "end-0 ",
          "absolute z-40 pt-2 rounded-md border border-gray-100 bg-white shadow-lg items-start justify-evenly",
          navbarVisible ? "flex" : "hidden"
        )}
        role="menu"
      >
        {Object.entries(categorySet).map(([key, cats]) => {
          if (!cats) return null;

          return (
            <CategoryListItem
              onSelect={handleHoverLeave}
              categories={cats}
              index={key}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}
