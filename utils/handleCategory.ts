import { categories } from "@/config/categories";

export const handleCategory = (product: any) => {
  if (!product) return "";
  const { category, produktid } = product;

  if (!category) return null;

  const matchingCategory = categories.find(
    (
      cat //
    ) => {
      const regex = new RegExp(cat.regex, "gi");
      if (category.match(regex)) return cat;
    }
  )?.slug;

  if (matchingCategory) return matchingCategory;

  return "diverse";
};
