import { IconArrowRight, IconSearch, IconX } from "@tabler/icons-react";
import { Product } from "./ProductCard";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ApiResponse {
  products: Product[]; // Modify this according to the structure of your API response
}

function fetchDataFromAPI(query: string): Promise<ApiResponse> {
  return fetch(`/api/feed?query=${query}`)
    .then((res) => res.json())
    .then((data: ApiResponse) => data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return {} as ApiResponse;
    });
}

// Debounce function implementation
function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as (...args: Parameters<T>) => ReturnType<T>;
}

export default function Searchbar() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const debouncedFetchData = debounce(fetchDataFromAPI, 500); // Adjust debounce delay as needed

      debouncedFetchData(searchQuery)?.then((data: ApiResponse) => {
        setSearchResults(data.products);
      });
    }
  }, [searchQuery]);

  return (
    <div className="lg:w-[550px]">
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
          onChange={(e) => handleInputChange(e)}
          className="w-full rounded-lg border-gray-200 py-2.5 pe-60 px-3 shadow-sm sm:text-sm"
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
        {/* <div className="">Search Query: {searchQuery}</div>
        <div className="">Search Results: {searchResults.length}</div> */}
        <div className="bg-white rounded-md absolute max-h-72 overflow-y-scroll overflow-x-hidden z-50">
          {searchResults.map((product) => (
            <div onClick={() => setSearchQuery("")}>
              <SearchResultItem {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchResultItem(product: Product) {
  if (!product) return null;

  const { image, price, title, url } = product;

  return (
    <Link
      className="bg-white py-2 pl-1 pr-3 grid grid-cols-7 gap-x-2 border-b max-w-full group"
      href={`/${product.category}/${product.path}`}
    >
      <div className="flex items-center col-span-1">
        <img src={image} className="h-auto" />
      </div>

      <div className="col-span-5 flex items-center">
        <span className="truncate w-full font-semibold lg:group-hover:text-primary group-active:text-primary">
          {title}
        </span>
      </div>
      <div className="flex items-center justify-end col-span-1 lg:group-hover:text-primary group-active:text-primary">
        <IconArrowRight />
      </div>
    </Link>
  );
}
