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
          Tjekliste - Kommer snart
        </h1>
        <div className="flex flex-col w-full p-6">
          {checklist.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
              {checklist.map((item) => (
                <ProductCard product={item.product} key={item.productKey} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-8 px-3">
              <p className="font-medium">
                Du har ikke nogle produkter op din tjekliste endnu.
              </p>
              <p className="font-medium flex">
                Klik på
                <IconListCheck className="mx-1" /> ikonet på et produkt, for at
                tilføje et.
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
