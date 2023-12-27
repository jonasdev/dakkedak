import { Url } from "next/dist/shared/lib/router/router";

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

export type HighlightedCategory = {
  name: string;
  categorySet: string;
  img: string;
  size: "sm" | "lg";
  href: string | Url;
};
