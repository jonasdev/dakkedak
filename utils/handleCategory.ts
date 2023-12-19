import { categories } from "@/config/categories";

export const handleCategory = (product: any) => {
  if (!product) return "";
  const { kategorinavn, produktid } = product;

  if (!kategorinavn) return null;

  const matchingCategory = categories.find(
    (
      cat //
    ) => {
      const regex = new RegExp(cat.regex, "gi");
      if (kategorinavn[0].match(regex)) return cat;
    }
  )?.slug;

  if (matchingCategory) return matchingCategory;

  return "diverse";
};
