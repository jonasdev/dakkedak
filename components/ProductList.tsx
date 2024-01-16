import { useState } from "react";
import ProductCard from "./ProductCard";
import { IconMoodCry } from "@tabler/icons-react";
import ProductFilters from "./ProductFilters";
import { Product } from "@/types/types";

type Props = {
  products: Product[] | null;
  title: string | null;
};

export default function ProductList({ products, title }: Props) {
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>(
    products || []
  );

  if (!products) return null;

  return (
    <section className="w-full flex flex-col lg:w-10/12 pt-10 min-h-[70vh] pb-12">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        {title}
      </h1>

      <div className="flex flex-col w-full p-6">
        <ProductFilters
          allProducts={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
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
        </div>
      </div>
    </section>
  );
}
