import React, { useState } from "react";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import FavoriteButton from "./FavoriteButton";
import ProductStock from "./ProductStock";

export type Product = {
  productKey: number | string;
  shop?: string;
  category?: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: number;
  url: string;
  description?: string;
  image: string;
  brand?: string;
  id?: string;
  inStock?: string;
  keywords?: string[];
  sku?: string;
  path?: string;
};

export type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
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
    shop,
    path,
    inStock,
  } = product;

  const [imgSrc, setImgSrc] = useState(image);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-lg shadow-xl col-span-1">
      <div className="absolute end-4 top-4 z-20">
        <FavoriteButton product={product} category={category || ""} size="sm" />
      </div>
      {/* <div className="absolute start-4 top-4 z-20">
        {price && oldPrice && price !== oldPrice && (
          <div className="bg-primary-dark rounded-full w-14 h-14 flex justify-center items-center text-xs font-semibold text-white">
            %
          </div>
        )}
      </div> */}

      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={`product-${title}`}
          className="min-h-[256px] h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 sm:min-h-[288px] bg-white"
          // onError={() => setImgSrc(<IconPhoto />)}
        />
      </div>

      <div className="relative border border-gray-100 bg-gray-100 p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="h-6">
            {(brand || shop) && (
              <span className="whitespace-nowrap w-fit bg-primary-dark text-white px-3 py-1.5 text-xs font-medium">
                {brand || shop}
              </span>
            )}
            {price && oldPrice && price !== oldPrice && (
              <span className="ml-2 whitespace-nowrap w-fit bg-white text-primary border-primary border px-3 py-1.5 text-xs font-medium">
                Nedsat
              </span>
            )}
          </span>
          <span className="whitespace-nowrap">
            <ProductStock inStock={inStock} />
          </span>
        </div>

        <h3 className="mt-4 text-lg font-medium text-gray-900 truncate">
          {title}
        </h3>

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
            href={`/${category}/${path}`}
          />
        </form>
      </div>
    </article>
  );
}
