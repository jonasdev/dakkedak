import { Category } from "@/config/categories";
import React, { useMemo } from "react";
import CategoryLink from "./CategoryLink";

type Props = {
  categories: Category[];
  index: string;
};

export default function CategoryListItem({ categories, index }: Props) {
  const categoriesSorted = useMemo(() => {
    const sortedCategories = Object.values(categories)
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
    <div className="p-2">
      <strong className="block p-2 text-xs font-bold uppercase text-primary-dark">
        {index}
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
}
