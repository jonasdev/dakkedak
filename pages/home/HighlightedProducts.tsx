import ProductCard, { Product } from "@/components/ProductCard";
import React from "react";

const testProducts: Array<Product> = [
  {
    productKey: "6233",
    shop: "KÆRE BØRN",
    category:
      "PÅ TUR > Tilbehør til vogne > Regnslag > På farten > EBS - Tilbehør > Emmaljunga Barnevogne > På farten - i det fri > Emmaljunga tilbehør",
    title: "Regnslag til NXT 90B /Big Star",
    price: "499.95",
    oldPrice: "499.95",
    discount: null,
    url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=76492&partnerid=50033&htmlurl=https://www.kaereboern.dk/shop/paa-farten/paa-farten-i-det-fri/regnslag-til-nxt-90b-big-star/",
    image: "https://www.kaereboern.dk/wp-content/uploads/2022/10/81856.jpg",
    brand: "Emmaljunga",
    id: "229609",
    inStock: "in_stock",
    keywords: ["Regnslag", "til", "NXT", "90B", "/Big", "Star"],
    sku: "7332650811563",
    path: "regnslag-til-nxt-90b-big-star",
  },
  {
    productKey: 5042,
    shop: "KÆRE BØRN",
    category: "BØRNEVÆRELSET > Vugger > Slyngevugger",
    title: "Nonomo Tvilling Slyngevugge m. Mikrofiber Madras - Natur",
    price: "2499.00",
    oldPrice: "2499.00",
    discount: null,
    url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=76492&partnerid=50033&htmlurl=https://www.kaereboern.dk/shop/boernevaerelset/vugger/nonomo-tvilling-slyngevugge-m-mikrofiber-madras-natur/",
    image: "https://www.kaereboern.dk/wp-content/uploads/2022/10/3411-11_1.jpg",
    brand: "Nonomo",
    id: "236526",
    inStock: "in_stock",
    keywords: [
      "Nonomo",
      "Tvilling",
      "Slyngevugge",
      "m.",
      "Mikrofiber",
      "Madras",
      "-",
      "Natur",
    ],
    sku: "4251243304509",
    path: "nonomo-tvilling-slyngevugge-m-mikrofiber-madras-natur",
  },
  {
    productKey: 6356,
    shop: "Kraes",
    category: "Babyserien > KRAES junior > KRAES pakker",
    title: "Lindring af sæbe/sprit-hænder",
    price: "424.00",
    oldPrice: "424.00",
    discount: null,
    url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=91977&partnerid=50033&htmlurl=https://kraes.dk/produkt/roede-haender/",
    image:
      "https://kraes.dk/wp-content/uploads/2020/04/94324717_10158141437469477_9177815662343487488_n.jpg",
    brand: "kraes",
    id: "100000016996",
    inStock: "in stock",
    keywords: ["Lindring", "af", "sæbe/sprit-hænder"],
    sku: null,
    path: "lindring-af-sæbesprit-hænder",
  },
  {
    productKey: 6445,
    shop: "Junama",
    category: "Autostole",
    title: "Autostol, S-class lyseblå",
    price: null,
    oldPrice: "1999.00",
    discount: null,
    url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=105813&partnerid=50033&htmlurl=https://junama.dk/da/autostole/133-autostol-s-class-lyserod.html",
    image: "https://junama.dk/1255-large_default/autostol-s-class-lyserod.jpg",
    brand: null,
    id: "133",
    inStock: "on demand",
    keywords: ["Autostol,", "S-class", "lyseblå"],
    sku: null,
    path: "autostol-s-class-lyseblå",
  },
];

export default function HighlightedProducts() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
        Anbefalede produkter
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 w-5/6">
        {testProducts.map((product) => (
          <ProductCard
            product={product}
            productCategory="barnevogne"
            key={product.productKey}
          />
        ))}
      </div>
    </div>
  );
}
