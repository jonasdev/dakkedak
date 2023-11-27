import { Product } from "@/components/ProductCard";

export default function filterUniqueProducts(products: Product[]): Product[] {
  const titleCountMap: { [key: string]: number } = {};

  // Count occurrences of each title
  for (const product of products) {
    if (product?.title) {
      const baseString = product.title.replace(/str\. \d+$/, "").trim();
      titleCountMap[baseString] = (titleCountMap[baseString] || 0) + 1;
    }
  }

  // Filter items with unique titles
  const uniqueTitleItems = products.filter((product) => {
    if (product?.title) {
      const baseString = product.title.replace(/str\. \d+$/, "").trim();
      return titleCountMap[baseString] === 1;
    }
  });

  return uniqueTitleItems;
}
