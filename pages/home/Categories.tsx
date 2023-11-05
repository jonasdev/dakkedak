import Image from "next/image";
import React from "react";

function CategoryCard() {
  return <div></div>;
}

export default function Categories() {
  return (
    <section className="flex flex-col items-center w-10/12">
      <h2 className="text-4xl font-semibold mb-6">Kategorier</h2>

      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="flex justify-center items-center rounded-2xl bg-gray-200 col-span-1">
          <h3 className="text-xl py-10">Barnevogn</h3>
        </div>
        <div className="flex justify-center items-center rounded-2xl bg-gray-200 col-span-1">
          <h3 className="text-xl py-10">Klapvogn</h3>
        </div>
        <div className="flex justify-center items-center rounded-2xl bg-gray-200 lg:col-span-2">
          <h3 className="text-xl py-10">Sutter</h3>
        </div>
      </div>
    </section>
  );
}
