import { useState, useEffect } from "react";
import { Product } from "./Product";
import { IconSearch, IconX } from "@tabler/icons-react";

type SortingOption =
  | ""
  | "priceLowToHigh"
  | "priceHighToLow"
  | "titleAZ"
  | "titleZA";

const sortingOptions: Record<string, SortingOption> = {
  "Vælg sortering": "",
  "Pris høj til lav": "priceHighToLow",
  "Pris lav til høj": "priceLowToHigh",
  "Titel, A-Z": "titleAZ",
  "Titel, Z-A": "titleZA",
};

type Props = {
  allProducts: Product[];
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
};

export default function ProductFilters({
  allProducts,
  filteredProducts,
  setFilteredProducts,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortingOption>("");

  useEffect(() => {
    let updatedProducts: Product[] = [...allProducts];

    if (searchTerm.trim() !== "") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "priceLowToHigh") {
      updatedProducts.sort((a, b) => {
        const priceA = a?.price || a?.oldPrice;
        const priceB = b?.price || b?.oldPrice;

        if (priceA && priceB) {
          return parseFloat(priceA) - parseFloat(priceB);
        }
        return 0;
      });
    } else if (sortOption === "priceHighToLow") {
      updatedProducts.sort((a, b) => {
        const priceA = a?.price || a?.oldPrice;
        const priceB = b?.price || b?.oldPrice;

        if (priceA && priceB) {
          return parseFloat(priceB) - parseFloat(priceA);
        }
        return 0;
      });
    } else if (sortOption === "titleAZ") {
      updatedProducts.sort((a, b) => {
        if (a.title && b.title) {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    } else if (sortOption === "titleZA") {
      updatedProducts.sort((a, b) => {
        if (a.title && b.title) {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, sortOption, allProducts]);

  return (
    <div className="flex lg:flex-row flex-col-reverse gap-y-4 lg:gap-y-0 lg:justify-between w-full items-center mb-6">
      <div>
        <span className="text-sm font-semibold">
          Antal produkter: {filteredProducts.length}
        </span>
      </div>
      <div className="relative max-w-2xl">
        <input
          type="text"
          id="search-products"
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Søg..."
          className="w-full rounded-lg border-gray-200 py-2.5 pe-60 px-3 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-6 w-10 grid grid-cols-2 gap-x-8 place-content-center">
          <span className="col-span-1">
            {searchTerm.length > 0 && (
              <span
                className="col-span-1 cursor-pointer"
                onClick={() => setSearchTerm("")}
              >
                <IconX />
              </span>
            )}
          </span>
          <IconSearch className="text-gray-600 col-span-1" />
        </span>
      </div>
      <div className="w-full lg:w-fit max-w-lg">
        <select
          id="sort"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setSortOption(event.target.value as SortingOption)
          }
          className="w-full flex rounded-lg border-gray-300 sm:text-sm py-2 px-3 leading-tight focus:outline-none border-r-8 border-r-transparent"
        >
          {Object.entries(sortingOptions).map(([label, option], index) => (
            <option key={index} value={option} className="">
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
