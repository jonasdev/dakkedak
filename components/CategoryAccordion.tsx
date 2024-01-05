import { useMemo, useRef } from "react";
import { ICategoryList } from "./Navbar";
import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import CategoryAccordionItem from "./CategoryAccordionItem";

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

            return (
              <CategoryAccordionItem
                categories={cats}
                isActive={isActive}
                key={key}
                index={key}
                onPageChange={onPageChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
