import iconv from "iconv-lite";
import xml2js from "xml2js";

export const beautifyURL = (title = "") =>
  title
    .replace(/\s/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-å0-9-]/gi, "")
    .toLowerCase();

export const getFeeds = async (filter = null) => {
  const products = [];
  const partnerAds = [
    "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=102750&feedid=3055",
  ]; // link til feeds
  const promises = partnerAds.map((partner) =>
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

    result.forEach((product, key) => {
      // Push all products into one array
      products.push({
        productKey: key,
        shop: product?.forhandler?.[0] || null,
        category: product?.kategorinavn?.[0] || null,
        title: product?.produktnavn?.[0] || null,
        price: product?.nypris?.[0] || null,
        oldPrice: product?.glpris?.[0] || null,
        discount:
          Number(product?.glpris?.[0]) - Number(product?.nypris?.[0]) || null,
        url: product?.vareurl?.[0] || null,
        image: product?.billedurl?.[0] || null,
        brand: product?.brand?.[0] || null,
        // description: handleEncoding(product?.beskrivelse?.[0]) || null,
        id: product?.produktid?.[0] || null,
        inStock: product?.lagerantal?.[0] || null,
        keywords: product?.produktnavn?.[0]?.split(" ") || null,
        sku: product?.ean?.[0] || null,
        path: beautifyURL(product?.produktnavn?.[0]),
      });
    });
  });

  return products;
};
