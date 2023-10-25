import { getFeeds } from "@/utils/getFeeds";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";

export const getStaticPaths = async () => {
  const data = await getFeeds({ category: "Slyngevugger" });

  const paths = data?.map((product) => ({
    params: { slug: product.path },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getFeeds({ category: "Slyngevugger" });
  console.log("Data: ", data);
  console.log("Data: ", data);

  const slug = params.slug;

  console.log("Slug: ", slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const [product] = data.filter((product) => slug === product.path);

  if (!product) {
    console.log("No Product");

    return {
      notFound: true,
    };
  }

  return { props: { product: { ...product } } };
};

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex justify-center w-full items-center">
      <h1>{product.title}</h1>
      <img src={product.image} alt={`product-${product.productKey}`} />
    </div>
  );
}
