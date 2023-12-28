import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { FavoriteItem } from "@/components/FavoriteButton";

export default function ChecklistPage() {
  const [checklist, setChecklist] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const checklist = localStorage.getItem("checklist");
    if (checklist) {
      const checklistItemsArray = JSON.parse(checklist) as FavoriteItem[];
      setChecklist(checklistItemsArray);
    }
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-4xl">Tjekliste</h1>
      <div className="mt-16 flex flex-col items-center justify-center font-bold">
        Kommer snart
      </div>
    </section>
  );
}
