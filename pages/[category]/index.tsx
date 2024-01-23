import { getFeeds } from "@/utils/getFeeds";
import ProductList from "@/components/ProductList";
import { categories } from "@/config/categories";
import Head from "next/head";
import { Product } from "@/types/types";

interface ICategoryPage {
  category: {
    slug: string | null;
    name: string | null;
  };
  products: Product[];
}

export default function CategoryPage({ category, products }: ICategoryPage) {
  const lowerCasedCategoryName = category?.name?.toLowerCase() || "";

  return (
    <>
      <Head>
        <title>Babyhaj</title>
        <meta
          name="description"
          content={`Se det brede udvalg hos babyhaj og find det helt rigtige til netop dit barn.`}
        />
      </Head>

      <ProductList products={products} title={category?.name} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }));

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
  const currentCategory = categories.find((cat) => cat.slug === category);
  if (!currentCategory) {
    return {
      notFound: true,
    };
  }

  const products = getFeeds({
    category: currentCategory.slug,
  });

  return {
    props: {
      category: currentCategory || null,
      products: products || [],
    },
  };
};
