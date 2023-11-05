import React from "react";
import ProductCard, { Product } from "./ProductCard";
import FavoriteButton from "./FavoriteButton";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  product: Product;
  relatedProducts?: Product[];
};

export default function ProductDetails({ product, relatedProducts }: Props) {
  const { image, brand, oldPrice, price, title, url, description } = product;

  return (
    <section className="overflow-hidden ">
      <div className="container px-5 py-24 mx-auto bg-white rounded-2xl shadow-lg z-10">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="product-details-img"
            className="lg:w-1/2 w-full object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="w-fit mb-4">
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
            </div>

            <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
              {title}
            </h1>

            <p className="leading-relaxed">{description}</p>
            <div className="flex justify-center my-4 lg:my-8">
              <div className="w-1/2 h-1 bg-primary bg-opacity-30" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-6">
                {price && oldPrice && price !== oldPrice && (
                  <span className="title-font font-medium text-lg line-through text-gray-900">
                    {oldPrice}
                  </span>
                )}
                <span className="title-font font-medium text-2xl text-gray-900">
                  {price || oldPrice} <span className="text-sm">DKK</span>
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <Button text="Gå til forhandler" href={url as Url} />
                <FavoriteButton itemId={product.path || ""} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts && (
        <div className="flex flex-col items-center mt-32 mb-14">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
            Relaterede produkter
          </h2>
          <div className="grid grid-cols-4 gap-8 w-5/6">
            {relatedProducts?.map((product) => (
              <ProductCard
                productCategory="barnevogne"
                product={product}
                key={product.productKey}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
