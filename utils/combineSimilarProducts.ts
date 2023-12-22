import { Product } from "@/components/ProductCard";

export default function combineSimilarProducts(products: Product[]): Product[] {
  const combinedProducts: { [title: string]: Product } = {};

  products.forEach((product) => {
    const titleParts = product.title.split(/ - (str\.\s\d+)$/);

    if (titleParts.length === 3) {
      const mainTitle = titleParts[0].trim();
      const size = titleParts[2].trim();

      if (!combinedProducts[mainTitle]) {
        combinedProducts[mainTitle] = {
          title: mainTitle,
          price: product.price,
          oldPrice: product.oldPrice,
          discount: product.discount,
          urls: [product.url],
          description: product.description,
          image: product.image,
          brand: product.brand,
          id: product.id,
          inStock: product.inStock,
          keywords: product.keywords,
          sku: product.sku,
          path: product.path,
        };
      } else {
        combinedProducts[mainTitle].urls.push(product.url);
      }
    } else {
      // Products that don't match the specific naming convention
      combinedProducts[product.title] = {
        title: product.title,
        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        urls: [product.url],
        description: product.description,
        image: product.image,
        brand: product.brand,
        id: product.id,
        inStock: product.inStock,
        keywords: product.keywords,
        sku: product.sku,
        path: product.path,
      };
    }
  });

  return Object.values(combinedProducts);
}
