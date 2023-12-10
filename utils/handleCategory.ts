import { categories } from "@/config/categories";

export const handleCategory = (product: any) => {
  if (!product) return "";
  const { produktnavn, kategorinavn } = product;

  if (!produktnavn && !kategorinavn) return null;

  // let matchingCategory: string | undefined = undefined;

  // matchingCategory = categories.find(
  //   (
  //     cat //
  //   ) => {
  //     const regex = new RegExp(cat.regex, "gi");
  //     if (kategorinavn[0].match(regex)) {
  //       return cat;
  //     }
  //   }
  // )?.slug;

  // console.log("matchingCategory after prodktnavn: ", matchingCategory);

  // if (!matchingCategory) {
  //   matchingCategory = categories.find(
  //     (
  //       cat //
  //     ) => {
  //       const regex = new RegExp(cat.regex, "gi");

  //       if (produktnavn[0].match(regex)) {
  //         return cat;
  //       }
  //     }
  //   )?.slug;
  // }

  // console.log("matchingCategory after kategorinavn: ", matchingCategory);

  // return matchingCategory ?? "diverse";

  const x = categories.find(
    (
      cat //
    ) => {
      const regex = new RegExp(cat.regex, "gi");
      if (kategorinavn[0].match(regex)) {
        return cat;
      }
    }
  )?.slug;

  return x ?? "diverse";

  //return matchingCategory;
};
