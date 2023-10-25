import ProductCard, { Product } from "./ProductCard";

type Props = {
  productCategory: string;
  products: Product[] | null;
};

export default function ProductList({ productCategory, products }: Props) {
  if (!products) return null;
  return (
    <div className="flex justify-center w-full items-center">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 p-6 lg:w-5/6">
        {products.map((product) => (
          <ProductCard
            productCategory={productCategory}
            product={product}
            key={product.productKey}
          />
        ))}
      </div>
    </div>
  );
}
