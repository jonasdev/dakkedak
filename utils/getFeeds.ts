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

const badProducts: string[] = [
  "test-vare-1",
  "test-vare-2",
  "test-vare-3",
  "kort",
  "alm-indpakning-og-kort",
  "ekstra-køb-af-porto",
  "juleindpakning-og-kort",
];

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

export const getFeeds = async (
  filter: any = null,
  api: boolean = false
): Promise<Product[]> => {
  let products: Product[] = [];
  if (api && products.length) {
    return products;
  }

  const promises: Promise<FeedProduct>[] = partnerFeeds.map((partner) =>
    fetch(partner)
      .then((response) => response.arrayBuffer())
      .then((buffer) => iconv.decode(Buffer.from(buffer), "iso-8859-1"))
      .then((res) => {
        if (res?.match("Feed findes ikke")) return [];

        let feed: Feed | null = null;
        xml2js.parseString(res, (err, all) => {
          if (err) {
            console.log(err);
            return;
          }

          feed = all;
        });

        //@ts-ignore
        if (!feed || !feed?.produkter) return [];

        //@ts-ignore
        return feed.produkter.produkt;
      })
  );

  await Promise.all(promises).then(async (response) => {
    const result = ([] as any[]).concat.apply([], response);
    if (!result || !result.length) return [];

    result.forEach((product: any, key: number) => {
      products.push({
        productKey: key,
        shop: product?.forhandler?.[0] || "",
        originalCategory: product?.kategorinavn?.[0] || null,
        category: handleCategory(product) || null,
        title: product?.produktnavn?.[0]
          ? decodeString(product?.produktnavn?.[0] || "")
          : "",
        price: product?.nypris?.[0] || "",
        oldPrice: product?.glpris?.[0] || "",
        // discount:
        //   Number(product?.glpris?.[0]) - Number(product?.nypris?.[0]) || null,
        discount: handleDiscount(
          Number(product?.nypris?.[0]),
          Number(product?.glpris?.[0])
        ),
        url: product?.vareurl?.[0] || "",
        image: product?.billedurl?.[0] || "",
        brand: product?.brand?.[0] ? decodeString(product?.brand?.[0]) : null,
        description: formatDescription(product?.beskrivelse?.[0]) || "",
        id: product?.produktid?.[0] || "",
        inStock: product?.lagerantal?.[0] || "",
        keywords: product?.produktnavn?.[0]?.split(" ") || [],
        sku: product?.ean?.[0] || "",
        path: beautifyUrl(product?.produktnavn?.[0]),
      });
    });
  });

  const filteredBadProducts = products.filter(
    (product) => !badProducts.includes(product.path || "")
  );

  const sitemapPath = "public/sitemap.xml";
  fs.readFile(sitemapPath, (noSitemap, data) => {
    if (noSitemap) {
      generateSitemap(filteredBadProducts);
      console.log("Sitemap.xml created!");
    }
  });

  const productsByFilter = filter
    ? handleFilter(filteredBadProducts, filter)
    : filteredBadProducts;

  const uniqueCombinations = new Set<string>();

  const productsToReturn = productsByFilter.filter((product) => {
    const combination = `${product.category}-${product.path}`;
    if (!uniqueCombinations.has(combination)) {
      uniqueCombinations.add(combination);
      return true;
    }
    return false;
  });

  return productsToReturn;
};

export const handleFilter = (products: Product[], filter: any): Product[] => {
  let filterProducts: Product[] = [...products];
  const { category, title, shop, others, brands } = filter;

  filterProducts = filterProducts.filter((product) => {
    if (category && product.category === category) return product;

    if (
      brands &&
      beautifyUrl(product.brand || product.shop || "")
        ?.toLowerCase()
        .match(brands.toLowerCase())
    )
      return product;

    return null;
  });

  return filterProducts;
};
