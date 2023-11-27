import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { IconHeart, IconMoodWink2 } from "@tabler/icons-react";
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
      <h1 className="text-4xl">Favorit produkter</h1>
      <div className="mt-16 flex justify-center">
        {favoriteItems.length ? (
          <div className="lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {favoriteItems.map((item) => (
              <ProductCard product={item.product} key={item.productKey} />
            ))}
          </div>
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
