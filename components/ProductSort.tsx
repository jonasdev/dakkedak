import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SortingOption } from "./ProductFilters";

type Props = {
  sortOption: SortingOption;
  setSortOption: (opt: SortingOption) => void;
};

const sortingOptions: Record<string, SortingOption> = {
  "Vælg sortering": "",
  "Pris høj til lav": "priceHighToLow",
  "Pris lav til høj": "priceLowToHigh",
  "Titel, A-Z": "titleAZ",
  "Titel, Z-A": "titleZA",
};

export default function ProductSort({ sortOption, setSortOption }: Props) {
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const selectedOptionLabel = Object.entries(sortingOptions).map(
    ([label, option]) => {
      if (option === sortOption) return label;
    }
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="w-full" ref={sortRef} onClick={() => setOpen(!open)}>
      <button
        type="button"
        className="relative w-full cursor-default rounded-md h-11 bg-white py-1 pl-3 pr-6 text-left text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60 sm:text-sm sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span className="block truncate font-medium">
          {selectedOptionLabel}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <IconChevronDown
            size={18}
            className={classNames(
              open ? "rotate-180" : "rotate-0",
              "transition duration-200 ease-out"
            )}
          />
        </span>
      </button>

      <ul
        className={classNames(
          open ? "opacity-100" : "opacity-0 pointer-events-none",
          "absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 px-1 text-base shadow-lg focus:outline-none sm:text-sm transition duration-300 ease-in-out"
        )}
      >
        {Object.entries(sortingOptions).map(([label, option], index) => (
          <li
            className={classNames(
              sortOption === option ? "bg-secondary" : "",
              "relative cursor-default select-none py-2 pl-3 pr-6 rounded-lg hover:bg-primary hover:bg-opacity-30"
            )}
            id="listbox-option-0"
            key={index}
          >
            <div
              className="flex items-center"
              onClick={() => setSortOption(option)}
            >
              <span className="font-medium ml-3 block truncate">{label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
