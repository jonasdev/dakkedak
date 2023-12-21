import iconv from "iconv-lite";
import xml2js from "xml2js";
import { handleCategory } from "./handleCategory";
import formatDescription from "./formatDescription";
import decodeString from "./decodeString";
import { beautifyUrl } from "./beautifyUrl";
import { partnerFeeds } from "@/config/partners";

const badProducts = [
  "test-vare-1",
  "test-vare-2",
  "test-vare-3",
  "kort",
  "alm-indpakning-og-kort",
  "ekstra-køb-af-porto",
  "juleindpakning-og-kort",
];

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

  await Promise.all(promises).then(async (response) => {
    const result = [].concat.apply([], response);
    if (!result || !result.length) return [];

    console.log("Total products!: ", result.length);
    result.forEach((product, key) => {
      products.push({
        productKey: key,
        shop: product?.forhandler?.[0] || null,
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
        description: formatDescription(product?.beskrivelse?.[0]) || null,
        id: product?.produktid?.[0] || null,
        inStock: product?.lagerantal?.[0] || null, // (in_stock / "backorder")
        keywords: product?.produktnavn?.[0]?.split(" ") || null,
        sku: product?.ean?.[0] || null,
        path: beautifyUrl(product?.produktnavn?.[0]),
      });
    });
  });

  const filteredBadProducts = products.filter(
    (product) => !badProducts.includes(product.path)
  );

  const productsByFilter = filter
    ? handleFilter(filteredBadProducts, filter)
    : filteredBadProducts;

  // const trimmedByDifferentSize = filterUniqueProducts(productsByFilter);

  const uniqueCombinations = new Set();

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

export const handleFilter = (products, filter) => {
  let filterProducts = [...products];
  const { category, title, shop, others, brands } = filter;

  filterProducts = filterProducts.filter((product) => {
    // Filter by category

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
