import { useMemo, useRef } from "react";
import { ICategoryList } from "./Navbar";
import { IconChevronDown, IconTriangleFilled } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  categoryList: ICategoryList;
  isActive: boolean;
  setIsActive: (arg: string) => void;
  onPageChange: () => void;
};

export default function CategoryAccordion({
  categoryList,
  isActive,
  setIsActive,
  onPageChange,
}: Props) {
  const { categorySet, title, icon } = categoryList;
  const accordionContentElement = useRef(null);

  return (
    <div className="flex flex-col items-stretch justify-center w-full py-2 ">
      <div
        className="flex items-center justify-between mb-4 px-4"
        onClick={() => setIsActive(isActive ? "" : title)}
      >
        <h4 className="text-lg flex items-center">
          <i className="mr-2">{icon}</i>
          {title}
        </h4>
        <IconChevronDown
          size={16}
          className={classNames(
            isActive ? "rotate-180" : "rotate-0",
            "transition-all ease-in-out duration-200"
          )}
        />
      </div>
      <div
        ref={accordionContentElement}
        style={{
          maxHeight: isActive
            ? // @ts-ignore
              `${accordionContentElement.current.scrollHeight}px`
            : "0px",
        }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out bg-primary-dark rounded-xl mx-2"
      >
        <div className="p-4 space-y-6">
          {Object.entries(categorySet).map(([key, cats]) => {
            if (!cats || cats.length === 0) return null;

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
              <ul className="space-y-4" key={key}>
                <strong className="block border-b border-white pb-1 border-opacity-40 text-base font-semibold">
                  {key}
                </strong>
                {Object.values(categoriesSorted).map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/${category.slug}`}
                      className={classNames(
                        isActive
                          ? "pointer-events-auto"
                          : "pointer-events-none",
                        "text-base flex items-center justify-between"
                      )}
                    >
                      <span onClick={onPageChange}>{category.name}</span>
                      <IconTriangleFilled className="rotate-90" size={8} />
                    </Link>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
