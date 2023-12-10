import ProductDetails from "@/components/ProductDetails";
import ProductList from "@/components/ProductList";
import { getFeeds } from "@/utils/getFeeds";
import getRelatedProducts from "@/utils/getRelatedProducts";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

export default function BrandPage({
  products,
  brand,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{brand}</title>
        <meta
          name="description"
          content={`Udforsk produkter fra mærket ${brand} og find lige det du mangler til dit barn`}
        />
      </Head>
      <ProductList products={products} title={brand} />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getFeeds();

  const paths = data?.map((product) => ({
    params: {
      brand: product.brand || "",
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { brand } = params;

  const products = await getFeeds({ brands: brand });

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products: products, brand: brand },
  };
};
