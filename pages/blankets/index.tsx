import React from "react";

import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";

export const getStaticProps = (async (context) => {
  const products = await getFeeds({ category: "Blanket" });

  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[] | null;
}>;

export default function Page({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="flex justify-center w-full items-center">
      <ProductList products={products} productCategory="blankets" />
    </section>
  );
}
