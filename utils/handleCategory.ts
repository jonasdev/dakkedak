import { categories } from "@/config/categories";

export const handleCategory = (category: string | undefined) => {
  if (!category) return "";
  // return Object.keys(categories).find((key) =>
  //   category.toLowerCase().match(key)
  // );

  // const reg = new RegExp(category, "gi");
  // // Filter by category
  // if (category && product.category?.match(reg)) {
  //   return product;
  // }

  // const matchingCategory = categories.find((cat) =>
  //   category.toLowerCase().match(cat.slug)
  // )?.slug;

  const matchingCategory = categories.find((cat) =>
    category.toLowerCase().match(new RegExp(cat?.regex || cat.slug, "gi"))
  )?.slug;

  // return matchingCategory ?? "diverse";
  return matchingCategory;
};

export const handleCategory2 = (product: any) => {
  if (!product) return "";
  const { produktnavn, kategorinavn } = product;

  if (!produktnavn && !kategorinavn) return null;
  // return Object.keys(categories).find((key) =>
  //   category.toLowerCase().match(key)
  // );

  // const reg = new RegExp(category, "gi");
  // // Filter by category
  // if (category && product.category?.match(reg)) {
  //   return product;
  // }

  // const matchingCategory = categories.find((cat) =>
  //   category.toLowerCase().match(cat.slug)
  // )?.slug;

  const matchingCategory = categories.find(
    (cat) =>
      kategorinavn[0]
        .toLowerCase()
        .match(new RegExp(cat?.regex || cat.slug, "gi")) ||
      produktnavn[0]
        .toLowerCase()
        .match(new RegExp(cat?.regex || cat.slug, "gi"))
  )?.slug;

  // return matchingCategory ?? "diverse";
  return matchingCategory;
};
