import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { IconHeart, IconMoodSmile, IconMoodWink2 } from "@tabler/icons-react";
import { FavoriteItem } from "@/components/FavoriteButton";

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
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center">
        Favoritter
      </h1>
      <div className="mt-16 flex justify-center">
        {favoriteItems.length ? (
          <div className="lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
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
              Klik
              <IconHeart className="mx-1" /> på et produkt, for at tilføje en
              favorit.
            </p>
            <p className="font-medium break-words flex">
              <span className="mr-1">Så kan du nemt finde produktet igen </span>
              <IconMoodSmile />
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
