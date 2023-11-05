rimport { getFeeds } from "@/utils/getFeeds";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex justify-center w-full items-center">
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content={`Find den helt rigtige slyngevugge til dit barn. Det kunne f.eks. være en ${product.title} fra ${product.shop}.`}
        />
      </Head>
      <h1>{product.title}</h1>
      <img src={product.image} alt={`product-${product.productKey}`} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await getFeeds({ category: "Autostole" });

  const paths = data?.map((product) => ({
    params: { slug: product.path },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};


export const getStaticProps = async ({ params }) => {
  const data = await getFeeds({ category: "Autostole" });
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
