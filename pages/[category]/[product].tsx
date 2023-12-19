import ProductDetails from "@/components/ProductDetails";
import { categories } from "@/config/categories";
import { getFeeds } from "@/utils/getFeeds";
import getRelatedProducts from "@/utils/getRelatedProducts";
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
  const data = await getFeeds();

  const paths = data?.map((product) => ({
    params: {
      category: product.category || "",
      product: product.path || "",
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

  const { product, category } = params!;
  const currentCategory = categories.find((cat) => cat.slug === category);

  if (!currentCategory) {
    return {
      notFound: true,
    };
  }

  const products = await getFeeds({
    category: currentCategory.slug,
  });

  if (!products) {
    return {
      notFound: true,
    };
  }

  const [currentProduct] = products.filter((pro) => product === pro.path);

  if (!currentProduct) {
    return {
      notFound: true,
    };
  }

  const relatedProducts = getRelatedProducts(products, currentProduct);

  return {
    props: { product: { ...currentProduct }, relatedProducts: relatedProducts },
  };
};
