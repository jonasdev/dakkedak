import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps } from "next";
import BrandsList from "@/components/BrandsList";

interface ICategoryPage {
  brands: string[];
}

export default function BrandsPage({ brands }: ICategoryPage) {
  return <BrandsList brands={brands} />;
}

export const getStaticProps: GetStaticProps<ICategoryPage> = async ({
  params,
}) => {
  const products = await getFeeds();

  if (!products) {
    return {
      notFound: true,
    };
  }

  const uniqueBrands: string[] = products.reduce((unique, product) => {
    if (product.brand && !unique.includes(product.brand)) {
      unique.push(product.brand);
    }
    return unique;
  }, []);

  const sortedUniqueBrands = uniqueBrands.sort((a, b) => a.localeCompare(b));

  return {
    props: {
      brands: sortedUniqueBrands,
    },
  };
};
