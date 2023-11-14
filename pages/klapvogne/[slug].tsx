import ProductDetails from "@/components/ProductDetails";
import { getFeeds } from "@/utils/getFeeds";
import selectRandomObjectsWithKeywords from "@/utils/getRelatedProducts";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

export default function ProductPage({
  product,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content={`Find den helt rigtige slyngevugge til dit barn. Det kunne f.eks. være en ${product.title} fra ${product.shop}.`}
        />
      </Head>

      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getFeeds({ category: /Klapvogn/gi });

  const paths = data?.map((product) => ({
    params: { slug: product.path },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getFeeds({ category: /Klapvogn/gi });

  if (!data) {
    return {
      notFound: true,
    };
  }

  const [product] = data.filter((product) => params.slug === product.path);

  if (!product) {
    console.log("No Product");

    return {
      notFound: true,
    };
  }

  const relatedProducts = selectRandomObjectsWithKeywords(data, product);

  return {
    props: { product: { ...product }, relatedProducts: relatedProducts },
  };
};
