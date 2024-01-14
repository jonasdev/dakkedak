import React from "react";
import ProductCard from "./ProductCard";
import FavoriteButton from "./FavoriteButton";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import ProductCarousel from "./ProductCarousel";
import Breadcrumb from "./Breadcrumb";
import decodeString from "@/utils/decodeString";
import ProductStock from "./ProductStock";
import { Product } from "@/types/types";

type Props = {
  product: Product;
  relatedProducts?: Product[];
};

export default function ProductDetails({ product, relatedProducts }: Props) {
  const {
    brand,
    description,
    discount,
    image,
    inStock,
    oldPrice,
    price,
    title,
    url,
  } = product;

  const handleDescription = () => {
    if (!description) return "Ingen beskrivelse tilgængelig";
    const decodedString = decodeString(description || "");
    return decodedString;
  };

  return (
    <section className="overflow-hidden">
      <div className="container p-6 mx-auto bg-white rounded-2xl shadow-lg z-10">
        <Breadcrumb product={product} />
        <div className="px-3 pb-12 lg:py-20">
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
                {price && oldPrice && price !== oldPrice && discount && (
                  <span className="ml-2 whitespace-nowrap w-fit bg-white text-primary border-primary border px-3 py-1.5 text-xs font-medium capitalize">
                    -{100 - discount}%
                  </span>
                )}
              </div>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {title}
              </h1>

              <p className="leading-relaxed">{handleDescription()}</p>
              <div className="flex justify-center my-4 lg:my-8">
                <div className="w-1/2 h-1 bg-primary bg-opacity-30" />
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <ProductStock inStock={inStock} />

                <div className="flex flex-col">
                  {price && oldPrice && price !== oldPrice && (
                    <span className="title-font font-medium text-lg line-through text-gray-900">
                      {oldPrice}
                    </span>
                  )}
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {price || oldPrice} <span className="text-sm">DKK</span>
                  </span>
                </div>

                <div className="flex space-x-5">
                  <Button text="Gå til forhandler" href={url as Url} />
                  <FavoriteButton
                    product={product}
                    category={product.category || ""}
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts && (
        <div className="flex flex-col items-center mt-16 lg:mt-24 mb-14">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6">
            Relaterede produkter
          </h2>
          <div className="lg:hidden block">
            <ProductCarousel products={relatedProducts} />
          </div>
          <div className="hidden lg:w-5/6 lg:grid lg:gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {relatedProducts?.map((product) => (
              <ProductCard product={product} key={product.productKey} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
