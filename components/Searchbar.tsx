import {
  IconClearAll,
  IconCross,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { Product } from "./ProductCard";
import { useEffect, useState } from "react";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import { handleCategory } from "@/utils/handleCategory";
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
      .then((dav) => {
        setSearchResults(dav.feed);
      });
  }, [searchQuery]);

  return (
    <div>
      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Søg efter produkter..."
          value={searchQuery}
          onChange={(e) => handleInputChange(e)}
          className="w-full rounded-md border-gray-200 py-2.5 pe-60 px-3 shadow-sm sm:text-sm"
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
        <div className="bg-white rounded-md absolute max-h-80 overflow-y-scroll">
          {searchResults.map((product) => (
            <SearchResultItem {...product} />
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
      className="bg-white p-2 grid grid-cols-7 gap-x-8 rounded-md"
      href={`/${product.category}/${product.path}`}
    >
      <img src={image} className="w-10 h-auto col-span-1" />
      <span className="line-clamp-2 col-span-4 flex-wrap">{title}</span>
      <span className="col-span-1">{price}</span>
      <Button className="col-span-1" href={url as Url} text="Køb" />
    </Link>
  );
}
