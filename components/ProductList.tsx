import ProductCard, { Product } from "./ProductCard";

type Props = {
  productCategory: string;
  products: Product[] | null;
};

export default function ProductList({ productCategory, products }: Props) {
  if (!products) return null;
  return (
    <section className="w-full flex flex-col justify-center lg:w-10/12">
      <p>Antal produkter: {products.length}</p>
      <div className="flex justify-center w-full items-center">
        <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8 p-6">
          {products.map((product) => (
            <ProductCard
              productCategory={productCategory}
              product={product}
              key={product.productKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
