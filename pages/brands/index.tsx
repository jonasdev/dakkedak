import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps } from "next";
import BrandsList from "@/components/BrandsList";
import Head from "next/head";
import { Product } from "@/types/types";

interface IBrandsPage {
  brands: string[];
}

export default function BrandsPage({ brands }: IBrandsPage) {
  return (
    <>
      <Head>
        <title>Brands og mærker - Babyhaj</title>
        <meta
          name="description"
          content={
            "Udforsk de mange brands og mærker for produkter som du kan finde her på siden."
          }
        />
      </Head>
      <BrandsList brands={brands} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IBrandsPage> =  async() => {
  const products = getFeeds();

  if (!products) {
    return {
      notFound: true,
    };
  }

  const uniqueBrandsMap: Map<string, string> = new Map();
  products.forEach((product: Product) => {
    if (product?.brand) {
      const brandLowerCase = product.brand.toLowerCase();
      if (!uniqueBrandsMap.has(brandLowerCase)) {
        uniqueBrandsMap.set(brandLowerCase, product.brand);
      }
    }
  });

  const sortedBrands: string[] = Array.from(uniqueBrandsMap.values()).sort(
    (a: string, b: string) => a.localeCompare(b)
  );

  return {
    props: {
      brands: sortedBrands || [],
    },
  };
};
