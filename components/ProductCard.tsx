import React from "react";
import { IconHeart } from "@tabler/icons-react";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export type Product = {
  productKey: string;
  shop?: string | null;
  category?: string | null;
  title: string | null;
  price: number | null;
  oldPrice?: number | null;
  discount?: number | null;
  url: string | null;
  description?: string | null;
  image: string;
  brand?: string | null;
  id?: string | null;
  inStock?: number | null;
  keywords?: string[] | null;
  sku?: string | null;
  path?: string | null;
};

export type ProductCardProps = {
  productCategory: string;
  product: Product;
};

export default function ProductCard({
  productCategory,
  product: {
    brand,
    title,
    url,
    price,
    oldPrice,
    image,
    productKey,
    category,
    id,
    path,
  },
}: ProductCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-lg shadow-xl col-span-1 ">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <IconHeart className="h-4 w-4" />
      </button>

      <Link href={`${productCategory}/${path}`}>
        <img
          src={image}
          alt={`product-${productKey}`}
          className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 bg-gray-200"
        />
      </Link>

      <div className="relative border border-gray-100 bg-white p-6 h-full flex flex-col justify-between">
        <span className="whitespace-nowrap w-fit bg-primary-dark text-white px-3 py-1.5 text-xs font-medium">
          {brand}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-1.5 text-sm text-gray-700">
          Old Price: {oldPrice} DKK
        </p>
        <p className="mt-1.5 text-sm text-gray-700">Price: {price} DKK</p>

        <form className="mt-4 grid grid-cols-2 gap-6">
          <Button
            text="Gå til forhandler"
            className="flex justify-center"
            href={url as Url}
          />
          <Button
            text="Læs mere"
            className="flex justify-center"
            type="secondary"
            href={`${productCategory}/${path}`}
          />
        </form>
      </div>
    </article>
  );
}
