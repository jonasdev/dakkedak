import React from "react";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export type Product = {
  productKey: number | string;
  shop?: string | null;
  category?: string | null;
  title: string | null;
  price: string | null;
  oldPrice?: string | null;
  discount?: number | null;
  url: string | null;
  description?: string | null;
  image: string;
  brand?: string | null;
  id?: string | null;
  inStock?: string | null;
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
  product,
}: ProductCardProps) {
  const {
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
  } = product;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-lg shadow-xl col-span-1 ">
      <div className="absolute end-4 top-4 z-30">
        <FavoriteButton itemId={product.path || ""} size="sm" />
      </div>

      <Link href={`${productCategory}/${path}`}>
        <img
          src={image}
          alt={`product-${productKey}`}
          className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 bg-white"
        />
      </Link>

      <div className="relative border border-gray-100 bg-gray-100 p-6 h-full flex flex-col justify-between">
        <span>
          {brand && (
            <span className="whitespace-nowrap w-fit bg-primary-dark text-white px-3 py-1.5 text-xs font-medium capitalize">
              {brand}
            </span>
          )}
          {price && oldPrice && price !== oldPrice && (
            <span className="ml-2 whitespace-nowrap w-fit bg-white text-primary border-primary border px-3 py-1.5 text-xs font-medium capitalize">
              På tilbud
            </span>
          )}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

        <div className="mt-1.5 flex flex-col w-fit">
          {price && oldPrice && price !== oldPrice && (
            <span className="text-xs line-through">{oldPrice} DKK</span>
          )}
          <span className="mt-1.5 text-lg font-semibold">
            {price || oldPrice} <span className="text-xs">DKK</span>
          </span>
        </div>

        <form className="mt-4 grid 2xl:grid-cols-2 gap-6">
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
