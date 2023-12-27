import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { IconHeart, IconMoodWink2, IconTools } from "@tabler/icons-react";
import { FavoriteItem } from "@/components/FavoriteButton";

export default function ChecklistPage() {
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
      <h1 className="text-4xl">Tjekliste</h1>
      <div className="mt-16 flex flex-col items-center justify-center">
        <IconTools size={65} /> Kommer snart!
      </div>
    </section>
  );
}
