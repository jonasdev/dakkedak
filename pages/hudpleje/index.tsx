import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductCard, { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export const getStaticProps = (async (context) => {
  const products = await getFeeds({ category: "Kraes" });

  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[] | null;
}>;

export default function Page({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ProductList products={products} productCategory="hudpleje" />;
}
