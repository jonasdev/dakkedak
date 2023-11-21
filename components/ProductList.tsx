import ProductCard, { Product } from "./ProductCard";

type Props = {
  products: Product[] | null;
  category: any;
};

export default function ProductList({ products, category }: Props) {
  if (!products) return null;
  console.log(category);

  return (
    <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10">
      <h1 className="text-6xl font-semibold text-center mb-10">
        {category?.name}
      </h1>
      <div className="flex justify-center mb-10">Filters Go here</div>

      <div className="flex flex-col w-full p-6">
        <p className="mb-4 font-semibold">Antal produkter: {products.length}</p>
        <div className="grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.productKey} />
          ))}
        </div>
      </div>
    </section>
  );
}
