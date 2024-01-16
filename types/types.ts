import { Url } from "next/dist/shared/lib/router/router";

export type Product = {
  productKey: number | string;
  shop: string;
  category: string | null;
  originalCategory: string | null;
  title: string;
  price: string | null;
  oldPrice: string | null;
  discount: number | null;
  url: string;
  description: string;
  image: string;
  brand: string | null;
  id: string;
  inStock: string;
  keywords: string[] | null;
  sku: string | null;
  path: string;
};

export type HighlightedCategory = {
  name: string;
  categorySet: string;
  img: string;
  size: "sm" | "lg";
  href: string | Url;
};

export type BlogPost = {
  title: string;
  date: string;
  href: Url;
  img: string;
  content: {
    subtitle: string;
    text: string;
  }[];
};
