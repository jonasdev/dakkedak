import React from "react";
import ProductCard, { Product } from "./ProductCard";
import FavoriteButton from "./FavoriteButton";
import Button from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import Carousel from "./Carousel";
import Breadcrumb from "./Breadcrumb";
import { IconCircleCheck, IconCircleX, IconClock } from "@tabler/icons-react";

type Props = {
  product: Product;
  relatedProducts?: Product[];
};

export default function ProductDetails({ product, relatedProducts }: Props) {
  console.log("CURRENT PRODUCT: ", product);

  const { image, brand, oldPrice, price, title, url, description, inStock } =
    product;

  const renderStock = () => {
    if (inStock === "in_stock" || "in stock")
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleCheck className="text-green-500" />{" "}
          <span className="font-medium">På lager</span>
        </span>
      );
    if (inStock === "out_of_stock") {
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleX className="text-red-500" />{" "}
          <span className="font-medium">Udsolgt</span>
        </span>
      );
    }
    if (inStock === "back_order" || "backorder") {
      return (
        <span className="flex items-center gap-x-1">
          <IconClock className="text-yellow-500" />{" "}
          <span className="font-medium">Kan bestilles</span>
        </span>
      );
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="container p-6 mx-auto bg-white rounded-2xl shadow-lg z-10">
        <Breadcrumb />
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
                {price && oldPrice && price !== oldPrice && (
                  <span className="ml-2 whitespace-nowrap w-fit bg-white text-primary border-primary border px-3 py-1.5 text-xs font-medium capitalize">
                    På tilbud
                  </span>
                )}
              </div>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {title}
              </h1>

              <p className="leading-relaxed">{description}</p>
              <div className="flex justify-center my-4 lg:my-8">
                <div className="w-1/2 h-1 bg-primary bg-opacity-30" />
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {renderStock()}

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
                    // TODO: FIX ME
                    category=""
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
            <Carousel products={relatedProducts} />
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