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

export const cachedProducts = {};

const handleProducts = (filter, filteredBadProducts) => {
  const productsPath = "config/products.js";
  fs.readFile(productsPath, (noProducts, data) => {
    if (noProducts) {
      const content = `export const products = ${JSON.stringify(
        filteredBadProducts,
        null,
        2
      )}`;
      console.log("Products created!");

      fs.writeFileSync(productsPath, content, "utf-8");
    }
  });

  const productsByFilter = filter
    ? handleFilter(filteredBadProducts, filter)
    : filteredBadProducts;

  const uniqueCombinations = new Set();

  const productsToReturn = productsByFilter.filter((pdt) => {
    const { category: pdtCategory, path } = pdt;
    if (!pdtCategory) return false;

    const combination = `${pdtCategory}-${path}`;
    if (!uniqueCombinations.has(combination)) {
      uniqueCombinations.add(combination);
      return true;
    }
    return false;
  });

  return productsToReturn;
};

export const allProducts = [];

export const getFeedsJs = async (filter) => {
  if (filter && cachedProducts.products) {
    return handleProducts(filter, cachedProducts.products);
  }

  const promises = partnerFeeds.map((partner) =>
    fetch(partner)
      .then((response) => response.arrayBuffer())
      .then((buffer) => iconv.decode(Buffer.from(buffer), "iso-8859-1"))
      .then((res) => {
        if (res?.match("Feed findes ikke")) return [];

        let feed = null;
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

  const products = [];
  await Promise.all(promises).then(async (response) => {
    const result = [].concat.apply([], response);
    if (!result || !result.length) return [];

    result.forEach((product, key) => {
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

  cachedProducts.products = filteredBadProducts;

  const sitemapPath = "public/sitemap.xml";
  fs.readFile(sitemapPath, (noSitemap, data) => {
    if (noSitemap) {
      generateSitemap(filteredBadProducts);
      console.log("Sitemap.xml created!");
    }
  });

  return handleProducts(filter, filteredBadProducts);
};

export const handleFilter = (products, filter) => {
  let filterProducts = [...products];
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
