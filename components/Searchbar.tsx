import { IconSearch } from "@tabler/icons-react";
import { Product } from "./ProductCard";
import { useEffect, useState } from "react";
import { products } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Searchbar() {
  console.log("products: ", products);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [prods, setProds] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setProds(products);
  }, [products]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Called handleInputChange");

    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect!");
    console.log("searchQuery: ", searchQuery);

    if (products) {
      const filteredProducts = (products as Product[]).filter((product) => {
        console.log("product.title: ", product.title);
        console.log(
          "product.title?.includes(searchQuery): ",
          product.title?.includes(searchQuery)
        );

        return product.title?.includes(searchQuery);
      });
      console.log(filteredProducts);

      return setSearchResults(filteredProducts);
    }
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
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <IconSearch className="text-gray-600" />
        </span>
      </div>
      <div>
        <div className="">Search Results: {searchResults.length}</div>
        <div className="">Prods: {prods.length}</div>
      </div>
    </div>
  );
}
