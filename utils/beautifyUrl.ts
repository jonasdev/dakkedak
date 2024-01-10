export const beautifyUrl = (title = "") =>
  title
    .replace(/\s/g, "-")
    .replace(/-+/g, "-")
    .replace(/|/g, "")
    .replace(/[^a-å0-9-]/gi, "")
    .toLowerCase();

export const revertBeautifyUrl = (url: string) => {
  return url
    .replace(/-/g, " ")
    .replace(/(\s|^)([a-zå0-9])/g, (_, space, char) => char.toUpperCase());
};
