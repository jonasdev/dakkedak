import { getFeeds } from "@/utils/getFeeds";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductList from "@/components/ProductList";
import { categories } from "@/config/categories";
import Head from "next/head";
import { Product } from "@/types/types";

interface ICategoryPage {
  category: {
    slug: string;
    name: string;
  };
  products: Product[];
}

export default function CategoryPage({ category, products }: ICategoryPage) {
  const lowerCasedCategoryName = category?.name?.toLowerCase() || "";
  return (
    <>
      <Head>
        <title>{category.name} - Babyhaj</title>
        <meta
          name="description"
          content={`Se det brede udvalg af ${lowerCasedCategoryName} og find det helt rigtige til netop dit barn.`}
        />
      </Head>

      <ProductList products={products} title={category.name} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: { category: category.slug.toString() },
  }));

  console.log("Made it past getStaticPaths");

  return {
    paths,
    fallback: false,
  };
};

interface Params {
  category: string;
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { category } = params || {};
  console.log("category: ", category);
  const currentCategory = categories.find((cat) => cat.slug === category);
  console.log("currentCategory: ", currentCategory);
  if (!currentCategory) {
    return {
      notFound: true,
    };
  }

  console.log("Made it past currentCategory");

  const products = await getFeeds({
    category: currentCategory.slug,
  });

  console.log("Made it past products: ", products?.length);

  return {
    props: {
      category: currentCategory,
      products: products,
    },
  };
};
