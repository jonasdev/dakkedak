import ProductDetails from "@/components/ProductDetails";
import { categories } from "@/config/categories";
import { setProducts } from "@/context/ProductsContext";
import { Product } from "@/types/types";
import { getFeeds } from "@/utils/getFeeds";
import getRelatedProducts from "@/utils/getRelatedProducts";
import Head from "next/head";
import React from "react";

export default function ProductPage({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const lowerCasedCategoryName = product.category?.toLowerCase() || "";
  return (
    <>
      <Head>
        <title>{product.title} - Babyhaj</title>
        <meta
          name="description"
          content={`Find den helt rigtige ${lowerCasedCategoryName} til dit barn. Det kunne f.eks. være en ${
            product.title
          } fra ${product.brand || product.shop}.`}
        />
      </Head>

      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await getFeeds();

  const paths = data?.map((product: Product) => ({
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

interface Params {
  category: string;
  product: string;
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { product, category } = params || {};
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

  const [currentProduct] = products.filter(
    (pro: Product) => product === pro.path
  );

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
