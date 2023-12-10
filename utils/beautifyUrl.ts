export const beautifyUrl = (title = "") =>
  title
    .replace(/\s/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-å0-9-]/gi, "")
    .toLowerCase();
