import { getFeeds } from "@/utils/getFeeds";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { categories } from "@/config/categories";

interface ICategoryPage {
  category: {
    slug: string;
    name: string;
  };
  products: Product[];
}

export default function CategoryPage({ category, products }: ICategoryPage) {
  console.log(products.length);

  return <ProductList products={products} category={category} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: { category: category.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ICategoryPage> = async ({
  params,
}) => {
  const { category } = params!;
  const currentCategory = categories.find((cat) => cat.slug === category);

  if (!currentCategory) {
    return {
      notFound: true,
    };
  }

  //   const products = await getFeeds({
  //     category: new RegExp(`${currentCategory}`, "gi"),
  //   });
  const products = await getFeeds({
    category: new RegExp(
      `${currentCategory?.regex || currentCategory.slug}`,
      "gi"
    ),
  });

  console.log("products.length: ", products.length);

  return {
    props: {
      category: currentCategory,
      products: products,
    },
  };
};
