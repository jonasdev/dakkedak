import ProductList from "@/components/ProductList";
import { Product } from "@/types/types";
import { beautifyUrl, revertBeautifyUrl } from "@/utils/beautifyUrl";
import { getFeeds } from "@/utils/getFeeds";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

type Props = {
  products: Product[];
};

export default function BrandPage({ products }: Props) {
  const brand = products[0]?.brand || products[0]?.shop;

  return (
    <>
      <Head>
        <title>{brand} - Babyhaj</title>
        <meta
          name="description"
          content={`Udforsk produkter fra mærket ${brand} og find lige det du mangler til dit barn.`}
        />
      </Head>
      <ProductList products={products} title={brand} />
    </>
  );
}

export const getStaticPaths = async () => {
  const products = await getFeeds();

  if (!products) {
    return {
      notFound: true,
    };
  }

  const brands: string[] = products
    .map((product: Product) => product?.brand)
    .filter(
      (brand: string | undefined | null) =>
        brand !== undefined && brand !== null && brand !== ""
    ) as string[];

  const paths = brands.map((brand) => ({
    params: {
      brand: beautifyUrl(brand),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params {
  brand: string;
}

export const getStaticProps = async ({ params }: { params: Params }) => {
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
    props: { products: products },
  };
};
