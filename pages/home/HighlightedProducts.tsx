import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";
import { IconLoader } from "@tabler/icons-react";

export default function HighlightedProducts() {
  const [data, setData] = useState<Product[] | undefined>();
  const [highlightedProducts, setHighlightedProducts] = useState<
    Product[] | undefined
  >();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const { products } = await import("@/config/products.js");
        setData((products as Product[]) || undefined);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const categoriesToSelectFrom = [
      "barnevogne",
      "bodyer",
      "rangler",
      "autostole",
    ];

    const selectedObjects: Product[] = [];

    categoriesToSelectFrom.forEach((category) => {
      const matchingProducts = data.filter(
        (prd) =>
          prd.category === category &&
          ["in_stock", "in stock"].includes(prd.inStock)
      );

      if (matchingProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingProducts.length);
        const selectedObject = matchingProducts[randomIndex];
        selectedObjects.push(selectedObject);
      } else {
        console.error(`No objects found for category ${category}`);
      }
    });

    setHighlightedProducts(selectedObjects);
  }, [data]); // Empty dependency array ensures that this effect runs once on component mount

  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-10">
        Anbefalede produkter
      </h2>

      <div className="flex flex-col items-center h-[550px]">
        {!data ? (
          <IconLoader size={40} className="animate-spin text-primary-dark" />
        ) : (
          <>
            <div className="lg:hidden block">
              {highlightedProducts && (
                <ProductCarousel
                  products={highlightedProducts.map(
                    (highlightedProduct) => highlightedProduct
                  )}
                />
              )}
            </div>
            <div className="hidden lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4 min-h-[530px]">
              {highlightedProducts?.map((highlightedProduct) => (
                <ProductCard
                  product={highlightedProduct}
                  key={highlightedProduct.productKey}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
