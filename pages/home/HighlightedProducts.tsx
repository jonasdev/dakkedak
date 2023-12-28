import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/components/Product";
import React from "react";

type HighlightedProduct = {
  product: Product;
};

const highlightedProducts: Array<HighlightedProduct> = [
  {
    product: {
      productKey: 7707,
      shop: "KÆRE BØRN",
      originalCategory:
        "Emmaljunga Stor Barnevogn > Emmaljunga 2024 > PÅ > Barnevogne > Emmaljunga Barnevogne > Emmaljunga Big Star SENTO MAX",
      category: "barnevogne",
      title: "Big Star Sento MAX Outdoor Olive",
      price: "9999.00",
      oldPrice: "9999.00",
      discount: null,
      url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=76492&partnerid=50033&htmlurl=https://www.kaereboern.dk/shop/paa/barnevogne-paa/emmaljunga-barnevogne-barnevogne-paa/big-star-sento-max-outdoor-olive/",
      image:
        "https://www.kaereboern.dk/wp-content/uploads/2023/07/16407_2.webp",
      brand: "Emmaljunga",
      description:
        "Mød vores flagskibsmodel: Big Star SENTO MAX er stærk, robust og fuldt udstyret med funktioner. Det solide stel, lavet af lavkulstof aluminium, sikrer ikke kun holdbarhed, men reducerer også barnevognens miljøpåvirkning.",
      id: "298614",
      inStock: "in_stock",
      keywords: ["Big", "Star", "Sento", "MAX", "Outdoor", "Olive"],
      sku: "7332650174521",
      path: "big-star-sento-max-outdoor-olive",
    },
  },
  {
    product: {
      productKey: 11217,
      shop: "KÆRE BØRN",
      originalCategory:
        "BØRNEVÆRELSET > Højstole > Stokke Tripp Trapp > Tripp Trapp højstole og tilbehør",
      category: "hoejstole",
      title: "Stokke® Tripp Trapp® Højstol - Oak Natur",
      price: "2299.00",
      oldPrice: "2299.00",
      discount: null,
      url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=76492&partnerid=50033&htmlurl=https://www.kaereboern.dk/shop/maaltidet/hoejstole/stokke-tripp-trapp-hoejstol-oak-natur/",
      image:
        "https://www.kaereboern.dk/wp-content/uploads/2022/10/oakwhite3.jpg",
      brand: "Stokke",
      description:
        "Stokke Tripp Trapp Højstol Oak Natur. Højstolen, der vokser med barnet. Kan reguleres både i højden og dybden. På den måde sikres en ergonomisk rigtig siddestilling med støtte for både fødder og ryg.",
      id: "214274",
      inStock: "in_stock",
      keywords: [
        "StokkeÂ®",
        "Tripp",
        "TrappÂ®",
        "Højstol",
        "-",
        "Oak",
        "Natur",
      ],
      sku: null,
      path: "stokkeâ®-tripp-trappâ®-højstol-oak-natur",
    },
  },
  {
    product: {
      productKey: 135,
      shop: "BIBS - Sutter & Tilbehør",
      originalCategory: "Rattle",
      category: "rangler",
      title: "Baby Rattle Kangaroo - Vanilla",
      price: null,
      oldPrice: "119.95",
      discount: null,
      url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=102750&partnerid=50033&htmlurl=https://bibsworld.com/da-dk/products/baby-rattle-kangaroo-vanilla?variant=46760451866952&amp;currency=DKK",
      image:
        "https://cdn.shopify.com/s/files/1/0498/1184/9373/files/9408214_5713795247363_BIBS_BabyRattleKangaroo_Vanilla_1000x1000_803ef2ee-1ded-497c-b656-fa705d7d7bb7.png?v=1685523819",
      brand: "BIBS",
      description:
        "Blødt ranglelegetøj fyldt med stimulerende funktioner - perfekt til nysgerrige små udforskere.",
      id: "8437189509448_46760451866952",
      inStock: "in stock",
      keywords: ["Baby", "Rattle", "Kangaroo", "-", "Vanilla"],
      sku: "5713795247363",
      path: "baby-rattle-kangaroo-vanilla",
    },
  },
  {
    product: {
      productKey: 6445,
      shop: "Junama",
      category: "autostole",
      title: "Autostol, S-class lyseblå",
      price: undefined,
      oldPrice: "1999.00",
      discount: undefined,
      url: "https://www.partner-ads.com/dk/klikbanner.php?bannerid=105813&partnerid=50033&htmlurl=https://junama.dk/da/autostole/133-autostol-s-class-lyserod.html",
      image:
        "https://junama.dk/1255-large_default/autostol-s-class-lyserod.jpg",
      brand: undefined,
      id: "133",
      inStock: "on demand",
      keywords: ["Autostol,", "S-class", "lyseblå"],
      sku: undefined,
      path: "autostol-s-class-lyseblå",
    },
  },
];

export default function HighlightedProducts() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-10">
        Anbefalede produkter
      </h2>

      <div className="lg:hidden block">
        <ProductCarousel
          products={highlightedProducts.map(
            (highlightedProduct) => highlightedProduct.product
          )}
        />
      </div>
      <div className="hidden lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
        {highlightedProducts?.map((highlightedProduct) => (
          <ProductCard
            product={highlightedProduct.product}
            key={highlightedProduct.product.productKey}
          />
        ))}
      </div>
    </div>
  );
}
