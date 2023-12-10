import iconv from "iconv-lite";
import xml2js from "xml2js";
import { handleCategory } from "./handleCategory";
import formatDescription from "./formatDescription";
import decodeString from "./decodeString";
import filterUniqueProducts from "./findUniqueString";
import { beautifyUrl } from "./beautifyUrl";
import { partnerFeeds } from "@/config/partners";

const handleSpecialCategories = () => {};

export const getFeeds = async (filter = null, api = false) => {
  let products = [];
  if (api && products.length) {
    return products;
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

        if (!feed || !feed?.produkter) return [];

        return feed.produkter.produkt;
      })
  );

  let filteredProducts = null;

  await Promise.all(promises).then(async (response) => {
    const result = [].concat.apply([], response);
    if (!result || !result.length) return [];

    console.log("Total products!: ", result.length);
    result.forEach((product, key) => {
      // if (product?.kategorinavn?.[0] === "Basic V2 Junama kollektion")
      //   console.log(product);
      // Push all products into one array
      products.push({
        productKey: key,
        shop: product?.forhandler?.[0] || null,
        // category: product?.kategorinavn?.[0] || null,
        // category: handleCategory(product?.kategorinavn?.[0]) || null,
        originalCategory: product?.kategorinavn?.[0],
        category: handleCategory(product) || null,
        title: product?.produktnavn?.[0]
          ? decodeString(product?.produktnavn?.[0] || "")
          : null,
        price: product?.nypris?.[0] || null,
        oldPrice: product?.glpris?.[0] || null,
        discount:
          Number(product?.glpris?.[0]) - Number(product?.nypris?.[0]) || null,
        url: product?.vareurl?.[0] || null,
        image: product?.billedurl?.[0] || null,
        brand: product?.brand?.[0] ? decodeString(product?.brand?.[0]) : null,
        // description: replaceInvalidCharacters(product?.beskrivelse?.[0]) || null,
        description: formatDescription(product?.beskrivelse?.[0]) || null,
        id: product?.produktid?.[0] || null,
        inStock: product?.lagerantal?.[0] || null, // (in_stock / "backorder")
        keywords: product?.produktnavn?.[0]?.split(" ") || null,
        sku: product?.ean?.[0] || null,
        path: beautifyUrl(product?.produktnavn?.[0]),
      });
    });

    if (filter) {
      filteredProducts = handleFilter(products, filter);
    }
  });

  const productsToReturn = filter ? filteredProducts : products;

  const trimmedByDifferentSize = filterUniqueProducts(productsToReturn);

  return productsToReturn;
};

export const handleFilter = (products, filter) => {
  let filterProducts = [...products];
  const { category, title, shop, others, brands } = filter;

  // Andet
  if (others) {
    filterProducts = filterProducts.filter((product) => {
      const reg = new RegExp(category, "gi");
      if (!product.category?.match(reg)) {
        return product;
      }
    });

    return filterProducts;
  }

  filterProducts = filterProducts.filter((product) => {
    // Filter by shop - used if a shop only sells a specific category
    if (shop && product.shop?.toLowerCase().match(shop.toLowerCase())) {
      return product;
    }

    const categoryRegex = new RegExp(category, "gi");
    // Filter by category
    if (category && product.category?.match(categoryRegex)) {
      return product;
    }

    if (brands && product.brand?.toLowerCase().match(brands.toLowerCase())) {
      return product;
    }

    // const titleRegex = new RegExp(title, "gi");
    // if (category && product.title?.match(titleRegex)) {
    //   return product;
    // }
  });

  return filterProducts;
};
