import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { FavoriteItem } from "@/components/FavoriteButton";
import Head from "next/head";
import { IconListCheck, IconMoodSmile } from "@tabler/icons-react";

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
    <>
      <Head>
        <title>
          Tjekliste - Skab overblik over hvad du skal løbe - Babyhaj
        </title>
        <meta
          name="description"
          content={
            "Du kan lave en tjekliste for nemt, at organisere hvad du skal have købt. Tryk på liste-ikonet på et produkt for at tilføje et"
          }
        />
      </Head>
      <section className="w-full h-full flex flex-col items-center">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center">
          Tjekliste
        </h1>
        <div className="mt-16 flex justify-center">
          {checklist.length ? (
            <div className="lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {checklist.map((item) => (
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
                <IconListCheck className="mx-1" /> ikonet på et produkt, for at
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
