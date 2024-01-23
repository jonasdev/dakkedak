// @ts-ignore
import iconv from "iconv-lite";
import xml2js from "xml2js";
import { handleCategory } from "./handleCategory";
import formatDescription from "./formatDescription";
import decodeString from "./decodeString";
import { beautifyUrl } from "./beautifyUrl";
import { partnerFeeds } from "@/config/partners";
import { Product } from "@/types/types";
import fs from "fs";
import { generateSitemap } from "./generateSitemap";
import { handleDiscount } from "./handleDiscount";
import { badProducts } from "@/config/badProducts";

type FeedProduct = {
  produkt: {
    forhandler?: string[];
    kategorinavn?: string[];
    produktnavn?: string[];
    nypris?: string[];
    glpris?: string[];
    vareurl?: string[];
    billedurl?: string[];
    brand?: string[];
    beskrivelse?: string[];
    produktid?: string[];
    lagerantal?: string[];
    ean?: string[];
  };
};

type Feed = {
  produkter: FeedProduct[];
};

type Filter = {
  category?: string;
  title?: string;
  shop?: string;
  brands?: string;
  others?: string;
};

const cachedProducts: any = {};

const handleProducts = (
  filter: Filter | null,
  filteredBadProducts: Product[]
) => {
  const productsByFilter = filter
    ? handleFilter(filteredBadProducts, filter)
    : filteredBadProducts;

  return productsByFilter;
};

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://static8-api.herokuapp.com/babyhaj?fbclid=IwAR1MVan21-5E-EXH5ACberO_ke0ubDkwbQ2c-7cvI1WzQoLSZj89wTjFD-A"
    );
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

export const getFeeds = async (
  filter: Filter | null = null
): Promise<Product[]> => {
  if (cachedProducts.products && cachedProducts.products.length > 0) {
    return handleProducts(filter, cachedProducts.products);
  } else {
    try {
      const products: Product[] = await fetchData();

      console.log('products ::', products.length);

      const filteredBadProducts = products?.filter(
        (product: any) => !badProducts.includes(product.path || "")
      );

      const updatedArray = filteredBadProducts.map((obj) => ({
        ...obj,
        category: handleCategory(obj),
        path: beautifyUrl(obj.title),
      }));

      const uniqueCombinations = new Set<string>();

      const uniqueProducts = updatedArray.filter((pdt: Product) => {
        const { category, path } = pdt;

        if (!category) return false;

        const combination = `${category}-${path}`;
        if (!uniqueCombinations.has(combination)) {
          uniqueCombinations.add(combination);
          return true;
        }

        return false;
      });

      cachedProducts.products = uniqueProducts;

      const sitemapPath = "public/sitemap.xml";
      fs.readFile(sitemapPath, (noSitemap, data) => {
        if (noSitemap) {
          generateSitemap(uniqueProducts);
          console.log("Sitemap.xml created!");
        }
      });

      const productsToReturn = handleProducts(filter, uniqueProducts);

      return productsToReturn;
    } catch (error) {
      console.error("Error fetching and processing data:", error);
      throw error;
    }
  }
};

export const handleFilter = (
  products: Product[],
  filter: Filter
): Product[] => {
  let filterProducts: Product[] = [...products];
  const { category, title, shop, others, brands } = filter;

  filterProducts = filterProducts.filter((product) => {
    if (category && product.category === category) return product;

    if (
      brands &&
      beautifyUrl(product?.brand || product?.shop || "")
        ?.toLowerCase()
        .match(brands.toLowerCase())
    )
      return product;

    return null;
  });

  return filterProducts;
};
