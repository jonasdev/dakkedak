export const handleCategory = (category: string | undefined) => {
  if (!category) return "";
  const categoryModified = category.toLowerCase();
  if (categoryModified.match("barnevogne")) return "barnevogne";
  if (categoryModified.match("slyngevugge")) return "slyngevugger";
};
