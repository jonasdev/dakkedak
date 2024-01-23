import { HighlightedCategory } from "@/types/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HighlightedCategoryCard({
  name,
  categorySet,
  img,
  size,
  href,
}: HighlightedCategory) {
  return (
    <Link
      className={classNames(
        size === "lg" ? "lg:col-span-2 col-span-1" : "col-span-1",
        "group relative h-80 w-full cursor-pointer rounded-xl"
      )}
      href={href ?? ""}
    >
      <img
        alt={`category-card-${name}`}
        src={img}
        className="absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity group-hover:opacity-90"
      />
      <div className="absolute inset-0 rounded-xl bg-black/30"></div>
      <div className="absolute right-0 bottom-0 w-fit text-end">
        <div className="flex h-full w-full flex-col p-4">
          <span className="text-sm font-semibold text-gray-200">
            {categorySet}
          </span>
          <h3 className="w-full text-2xl font-semibold text-white">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
