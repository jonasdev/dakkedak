export const handleCategory = (category: string | undefined) => {
  if (!category) return "";
  const categoryModified = category.toLowerCase();
  if (categoryModified.match("barnevogne")) return "barnevogne";
  if (categoryModified.match("klapvogn")) return "klapvogne";
  if (categoryModified.match("lift")) return "lifte";
  if (categoryModified.match("slyngevugge")) return "slyngevugger";
};
