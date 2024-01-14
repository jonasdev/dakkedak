import { IconArrowRight, IconSearch, IconX } from "@tabler/icons-react";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { Product } from "@/types/types";
import ProductStock from "./ProductStock";

export default function Searchbar() {
  const [data, setData] = useState<Product[] | undefined>();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const { products } = await import("@/config/products.js");
        setData((products as Product[]) || undefined);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1 && data && data?.length > 0) {
      const filteredProducts = data?.filter((product) =>
        product.title.toLowerCase().match(searchQuery.toLowerCase())
      );
      if (filteredProducts) {
        if (filteredProducts.length > 0) {
          setSearchResults(filteredProducts);
        } else {
          setSearchResults([]);
        }
      }
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    },
    [setShowSuggestions]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="lg:w-96 xl:w-[550px]" ref={searchRef}>
      <div className="relative border border-black rounded-lg min-w-full">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          autoComplete="off"
          placeholder="Søg..."
          value={searchQuery}
          onFocus={handleSearchFocus}
          onChange={(e) => handleInputChange(e)}
          className="w-full rounded-lg border-gray-200 py-2.5 pe-60 px-3 shadow-sm sm:text-sm focus:rounded-none transition-all duration-300 ease-out"
        />
        <span className="absolute inset-y-0 end-6 w-10 grid grid-cols-2 gap-x-8 place-content-center">
          <span className="col-span-1">
            {searchQuery.length > 0 && (
              <span
                className="col-span-1 cursor-pointer"
                onClick={() => setSearchQuery("")}
              >
                <IconX />
              </span>
            )}
          </span>
          <IconSearch className="text-gray-600 col-span-1" />
        </span>
      </div>
      <div className="relative">
        {showSuggestions && (
          <div className="bg-white absolute max-h-80 overflow-y-scroll overflow-x-hidden shadow-lg z-50 rounded-b-lg top-0.5">
            {searchResults?.map((product: Product) => (
              <div
                onClick={() => setSearchQuery("")}
                key={`${product.path}-${product.id}`}
              >
                <SearchResultItem {...product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchResultItem(product: Product) {
  if (!product) return null;

  const { image, price, oldPrice, title, url, inStock } = product;

  return (
    <Link
      className="bg-white py-2 pl-1 pr-3 grid grid-cols-7 gap-x-2 border-b max-w-full group"
      href={`/${product.category}/${product.path}`}
    >
      <div className="flex items-center col-span-1">
        <img alt={product.id} src={image} className="h-auto" />
      </div>

      <div className="col-span-5 flex flex-col items-start justify-center">
        <span className="truncate w-full font-semibold">{title}</span>
        <span className="text-sm mb-2">
          {price || oldPrice} <span className="text-xs">DKK</span>
        </span>
        <ProductStock size="sm" inStock={inStock} />
      </div>
      <div className="flex items-center justify-end col-span-1 lg:group-hover:text-primary group-active:text-primary lg:group-hover:-translate-x-1 group-active:-translate-x-1 transition-all duration-300 ease-in-out">
        <IconArrowRight />
      </div>
    </Link>
  );
}
