import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export const getStaticProps = (async (context) => {
  const products = await getFeeds({ category: /Barnevogn|Klapvogn/gi });

  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[] | null;
}>;

export default function Page({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ProductList products={products} />;
}
