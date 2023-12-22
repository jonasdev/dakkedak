import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import React, { useMemo } from "react";
import CategoryLink, { CategoryLinkProps } from "./CategoryLink";
import { ICategoryList } from "./Navbar";

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

  return (
    <div className="relative group pl-6">
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
          "absolute z-40 pt-2 rounded-md border border-gray-100 bg-white shadow-lg hidden group-hover:flex items-start justify-evenly"
        )}
        role="menu"
      >
        {Object.entries(categorySet).map(([key, cats]) => {
          if (!cats) return null;

          const categoriesSorted = useMemo(() => {
            const sortedCategories = Object.values(cats)
              .slice()
              .sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA.includes("Andet") && !nameB.includes("Andet")) {
                  return 1; // 'Andet' containing name should be placed at the end
                } else if (
                  !nameA.includes("Andet") &&
                  nameB.includes("Andet")
                ) {
                  return -1; // 'Andet' containing name should come after other names
                } else {
                  // For names not containing 'Andet', sort alphabetically
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
                }
              });

            // Move 'Andet' containing entries to the end
            const andetEntries = sortedCategories.filter((category) =>
              category.name.toUpperCase().includes("ANDET")
            );

            const nonAndetEntries = sortedCategories.filter(
              (category) => !category.name.toUpperCase().includes("ANDET")
            );

            return [...nonAndetEntries, ...andetEntries];
          }, []);

          return (
            <div className="p-2" key={key}>
              <strong className="block p-2 text-xs font-bold uppercase text-primary-dark">
                {key}
              </strong>

              {Object.values(categoriesSorted).map((category) => (
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
