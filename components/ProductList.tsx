import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ProductCard, { Product } from "./ProductCard";
import {
  IconArrowDown,
  IconMoodCry,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

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
  products: Product[] | null;
  category: any;
};

export default function ProductList({ products, category }: Props) {
  if (!products) return null;

  const [filteredProducts, setFilteredProducts] =
    useState<Array<Product>>(products);
  // const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortingOption>("");

  useEffect(() => {
    let updatedProducts: Product[] = [...products];

    // if (categoryFilter !== 'All') {
    //   updatedProducts = updatedProducts.filter(
    //     product => product.category === categoryFilter
    //   );
    // }

    if (searchTerm.trim() !== "") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "priceLowToHigh") {
      updatedProducts.sort((a, b) => {
        if (a.price && b.price) {
          return parseFloat(a.price) - parseFloat(b.price);
        }
        return 0;
      });
    } else if (sortOption === "priceHighToLow") {
      updatedProducts.sort((a, b) => {
        if (a.price && b.price) {
          return parseFloat(b.price) - parseFloat(a.price);
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
  }, [searchTerm, sortOption, products]);

  return (
    <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10 min-h-full">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        {category?.name}
      </h1>

      <div className="flex flex-col w-full p-6">
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
          <div className="w-full lg:w-fit">
            <select
              id="sort"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setSortOption(event.target.value)
              }
              className="w-full flex rounded-lg border-gray-300 sm:text-sm py-2 px-3 leading-tight focus:outline-none"
            >
              {Object.entries(sortingOptions).map(([label, option], index) => (
                <option key={index} value={option} className="hover:bg-primary">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.productKey} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full font-semibold gap-x-2 py-10">
              <p>Ingen produkter fundet</p>
              <IconMoodCry />
            </div>
          )}
          <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8"></div>
        </div>
      </div>
    </section>
  );
}
