import { categories } from "@/config/categories";

export const handleCategory = (category: string | undefined) => {
  if (!category) return "";
  return Object.keys(categories).find((key) =>
    category.toLowerCase().match(key)
  );
};
