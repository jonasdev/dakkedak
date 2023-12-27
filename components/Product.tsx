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
