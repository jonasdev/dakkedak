import { Product } from "@/components/Product";

const count = 4;

export default function getRelatedProducts(
  allProducts: Product[],
  currentProduct: Product
): Product[] {
  const { id, category } = currentProduct;

  const matchingObjects = allProducts.filter(
    (product) =>
      product.category === category &&
      product.inStock === "in_stock" &&
      product.id !== id
  );

  const getRandomFour = (products: Product[]): Product[] => {
    const randomFour: Product[] = [];

    while (randomFour.length < count && products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      randomFour.push(products.splice(randomIndex, 1)[0]);
    }

    return randomFour;
  };

  // Get four random objects that match the condition
  const fourRandomMatchingObjects = getRandomFour(matchingObjects);

  return fourRandomMatchingObjects;
}
