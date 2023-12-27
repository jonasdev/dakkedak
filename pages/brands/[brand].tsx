import { Product } from "@/components/Product";
import ProductList from "@/components/ProductList";
import { beautifyUrl, revertBeautifyUrl } from "@/utils/beautifyUrl";
import { getFeeds } from "@/utils/getFeeds";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

type Props = {
  products: Product[];
};

export default function BrandPage({ products }: Props) {
  const brand = products[0].brand || products[0].shop;

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
      brand: beautifyUrl(product.brand || ""),
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
  console.log(brand);

  const revertedBrand = revertBeautifyUrl(brand);

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
