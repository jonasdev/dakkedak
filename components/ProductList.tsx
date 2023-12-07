import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { IconMoodCry } from "@tabler/icons-react";
import ProductFilters from "./ProductFilters";

type Props = {
  products: Product[] | null;
  category: any;
};

export default function ProductList({ products, category }: Props) {
  if (!products) return null;

  const [filteredProducts, setFilteredProducts] =
    useState<Array<Product>>(products);

  return (
    <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10 min-h-full">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        {category?.name}
      </h1>

      <div className="flex flex-col w-full p-6">
        <ProductFilters
          allProducts={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.productKey} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full font-semibold gap-x-2 py-10">
              <p>Ingen produkter fundet</p>
              <IconMoodCry />
            </div>
          )}
          <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8"></div>
        </div>
      </div>
    </section>
  );
}
