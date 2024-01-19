import { useState, useEffect } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
import { Product } from "@/types/types";
import ProductSort from "./ProductSort";

export type SortingOption =
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
  }, [searchTerm, sortOption, allProducts, setFilteredProducts]);

  return (
    // <div className="flex  lg:flex-row flex-col-reverse gap-y-4 lg:gap-y-0 lg:justify-between w-full items-center mb-6">
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-0 lg:gap-x-10 gap-y-4 lg:gap-y-0 lg:justify-between w-full items-center mb-6">
      <div className="col-span-1 text-center order-last lg:order-first">
        <span className="text-sm whitespace-nowrap font-semibold">
          Antal produkter: {filteredProducts.length}
        </span>
      </div>
      <div className="flex justify-center w-full col-span-1 lg:col-span-4">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            id="search-products"
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Søg..."
            className="w-full rounded-lg border-gray-200 py-2.5 pe-60 px-3 shadow-sm font-medium sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
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
      </div>
      <div className="flex justify-center col-span-1">
        <div className="relative max-w-md w-full">
          <ProductSort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
    </div>
  );
}
