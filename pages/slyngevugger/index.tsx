import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductCard, { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export const getStaticProps = (async (context) => {
  const products = await getFeeds({ category: "Slyngevugger" });

  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[] | null;
}>;

export default function Page({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="flex justify-center w-full items-center">
      <ProductList products={products} productCategory="slyngevugger" />
    </section>
  );
}
