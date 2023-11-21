import { IconArrowRight, IconSearch, IconX } from "@tabler/icons-react";
import { Product } from "./ProductCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Searchbar() {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Called handleInputChange");

    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetch(`/api/feed?query=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.feed);
      });
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
        <div className="bg-white rounded-md absolute max-h-72 overflow-y-scroll overflow-x-hidden">
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
  console.log(product.category);

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
