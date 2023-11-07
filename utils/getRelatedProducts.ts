import { Product } from "@/components/ProductCard";

function selectRandomObjects<T>(array: Product[], count: number): Product[] {
  if (count >= array.length) {
    // If count is greater than or equal to the array length, return a shuffled copy of the entire array.
    return array.sort(() => Math.random() - 0.5);
  }

  const selectedObjects: Product[] = [];
  const arrayCopy = [...array]; // Create a copy of the original array to avoid modifying it.

  while (selectedObjects.length < count) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    const randomObject = arrayCopy.splice(randomIndex, 1)[0];
    selectedObjects.push(randomObject);
  }

  return selectedObjects;
}

const count = 4;

export default function selectRandomObjectsWithKeywords<T>(
  array: Product[],
  currentProduct: Product
): Product[] {
  const { id, keywords = [] } = currentProduct;

  // Filter objects that have at least one matching keyword
  const matchingObjects = array.filter(
    (object) =>
      keywords?.some(
        (keyword) => (object as any).keywords?.includes(keyword)
      ) && object.id !== id
  );

  // Shuffle the matchingObjects array
  matchingObjects.sort(() => Math.random() - 0.5);

  if (count >= matchingObjects.length) {
    // If count is greater than or equal to the number of matching objects, return all matching objects.
    return matchingObjects;
  }

  const selectedObjects: Product[] = [];
  const arrayCopy = [...matchingObjects]; // Create a copy of the matching objects to avoid modifying it.

  while (selectedObjects.length < count) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    const randomObject = arrayCopy.splice(randomIndex, 1)[0];
    selectedObjects.push(randomObject);
  }

  if (selectedObjects.length < count) {
    // If we haven't selected enough objects yet, fill the remaining slots with random objects.
    const remainingRandomObjects = selectRandomObjects(
      array,
      count - selectedObjects.length
    );
    selectedObjects.push(...remainingRandomObjects);
  }

  return selectedObjects;
}
