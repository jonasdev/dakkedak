import { Category, categories } from "@/config/categories";
import classNames from "classnames";
import Link from "next/link";
import React, { useMemo } from "react";

type Props = {
  categories: Category[];
  isActive: boolean;
  onPageChange: () => void;
  index: string;
};

export default function CategoryAccordionItem({
  categories,
  isActive,
  onPageChange,
  index,
}: Props) {
  const categoriesSorted = useMemo(() => {
    const sortedCategories: Category[] = Object.values(categories)
      .slice()
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA.includes("Andet") && !nameB.includes("Andet")) {
          return 1; // 'Andet' containing name should be placed at the end
        } else if (!nameA.includes("Andet") && nameB.includes("Andet")) {
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
  }, [categories]);

  return (
    <ul className="space-y-4" key={index}>
      <strong className="block border-b border-white pb-1 border-opacity-40 text-base font-semibold">
        {index}
      </strong>
      {Object.values(categoriesSorted).map((category) => (
        <li key={category.name} className="w-full">
          <Link
            href={`/${category.slug}`}
            className={classNames(
              isActive ? "pointer-events-auto" : "pointer-events-none",
              "text-base flex items-center justify-between py-1.5"
            )}
          >
            <span onClick={onPageChange}>{category.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
