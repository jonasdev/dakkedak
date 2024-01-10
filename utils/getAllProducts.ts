import iconv from "iconv-lite";
import xml2js from "xml2js";
import { handleCategory } from "./handleCategory";
import formatDescription from "./formatDescription";
import decodeString from "./decodeString";
import { beautifyUrl } from "./beautifyUrl";
import { partnerFeeds } from "@/config/partners";
import { handleDiscount } from "./handleDiscount";
import { badProducts } from "@/config/badProducts";

export const getAllProducts = async () => {
  const promises: any = partnerFeeds.map((partner) =>
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

  const products: any = [];
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
    (product: any) => !badProducts.includes(product.path || "")
  );

  return filteredBadProducts;
};
