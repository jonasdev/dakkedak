import { getFeeds } from "@/utils/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Product } from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import { IconHeart, IconMoodWink2 } from "@tabler/icons-react";

export const getStaticProps = (async (context) => {
  const products = await getFeeds({ category: /Barnevogn|Klapvogn/gi });

  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[] | null;
}>;

export default function FavoritesPage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteItemsArray = JSON.parse(favorites) as string[];
      setFavoriteItems(favoriteItemsArray);
    }
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-4xl">Favorit produkter</h1>
      <div className="mt-16">
        {favoriteItems.length ? (
          <ul>
            {favoriteItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center text-center space-y-8 px-3">
            <p className="font-medium">Du har ikke nogle favoritter endnu.</p>
            <p className="font-medium flex">
              Klik
              <IconHeart className="mx-1" /> på et produkt, for at tilføje en
              favorit.
            </p>
            <p className="font-medium flex break-words">
              Så kan du nemt finde produktet igen
              <IconMoodWink2 className="ml-1" />
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
