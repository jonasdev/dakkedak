import HighlightedCategoryCarousel from "@/components/HighlightedCategoryCarousel";
import HighlightedCategoryCard from "@/components/HighlightedCategoryCard";
import { highlightesCategories } from "@/config/highlightedCategories";
import React from "react";

export default function HighlightedCategories() {
  return (
    <section className="flex flex-col items-center w-10/12">
      <h2 className="text-4xl font-semibold mb-10">Udvalgte kategorier</h2>

      <div className="w-full grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 hidden lg:grid">
        {highlightesCategories.map((category) => (
          <HighlightedCategoryCard key={category.name} {...category} />
        ))}
      </div>
      <div className="w-full lg:hidden">
        <HighlightedCategoryCarousel
          highlightedCategories={highlightesCategories}
        />
      </div>
    </section>
  );
}
