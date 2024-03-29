import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { IconHeart, IconMoodSmile } from "@tabler/icons-react";
import { FavoriteItem } from "@/components/FavoriteButton";
import Head from "next/head";
import { Product } from "@/types/types";

export default function FavoritesPage() {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteItemsArray = JSON.parse(favorites) as FavoriteItem[];
      setFavoriteItems(favoriteItemsArray);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Favoritter - Gør det nemt at finde dine produkter igen - Babyhaj
        </title>
        <meta
          name="description"
          content={
            "Brug for at finde et produkt igen næste gang du besøger os? Tryk på hjertet på et produkt, og gem det som en favorit!"
          }
        />
      </Head>
      <section className="w-full h-full flex flex-col items-center overflow-x-hidden">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center">
          Favoritter
        </h1>

        <div className="flex flex-col w-full p-6">
          {favoriteItems.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
              {favoriteItems.map((item) => (
                <ProductCard product={item.product} key={item.productKey} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-8 px-3">
              <p className="font-medium">
                Du har ikke nogle favorit produkter endnu.
              </p>
              <p className="font-medium flex">
                Klik på
                <IconHeart className="mx-1" /> ikonet på et produkt, for at
                tilføje en favorit.
              </p>
              <p className="font-medium break-words flex">
                <span className="mr-1">
                  Så kan du nemt finde produktet igen{" "}
                </span>
                <IconMoodSmile />
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
