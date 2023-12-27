import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps } from "next";
import BrandsList from "@/components/BrandsList";
import { ProductCardProps } from "@/components/ProductCard";
import { Product } from "@/components/Product";

interface IBrandsPage {
  brands: string[];
}

export default function BrandsPage({ brands }: IBrandsPage) {
  return <BrandsList brands={brands} />;
}

export const getStaticProps: GetStaticProps<IBrandsPage> = async () => {
  const products = await getFeeds();

  if (!products) {
    return {
      notFound: true,
    };
  }

  const productsBrands: string[] = (products as Product[])
    .map((product) => product.brand)
    .filter(
      (brand) => typeof brand === "string" && brand.length > 0
    ) as string[];

  const uniqueBrands: string[] = products.reduce(
    (unique: string[], product: Product) => {
      if (product.brand) {
        const primaryBrand = product.brand.split(",")[0].trim(); // Get the primary brand name
        const lowercaseBrand = primaryBrand.toLowerCase();
        const isDuplicate = unique.some(
          (existingBrand) => existingBrand.toLowerCase() === lowercaseBrand
        );
        if (!isDuplicate) {
          unique.push(primaryBrand);
        }
      }
      return unique;
    },
    []
  );

  return {
    props: {
      brands: uniqueBrands,
    },
  };
};
