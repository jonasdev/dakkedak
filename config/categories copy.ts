export type CategoryLinkProps = {
  href: string;
  text: string;
};

type CategoryCollection =
  | "vogne"
  | "koersel"
  | "spisetid"
  | "sovetid"
  | "toej-og-sko"
  | "amning"
  | "barsel"
  | "legetoej"
  | "grej"
  | "pleje"
  | "diverse";

export type CategoryName = "barnevogne" | "klapvogne" | "pacifier";
// | "joggere"
// | "lifte"
// | "tvillingevogne"
// | "kombivogne"
// | "rejseklapvogne"
// | "multivogne"
// | "barnevognspuder"
// | "holdere"
// | "madrasser-og-lagner"
// | "regnslag-og-insektnet"
// | "seler"
// | "solskaerme"
// | "vedligeholdese";

export type CategoryData = { href: string; text: string };

export type Category = Record<CategoryName, CategoryData>;

export const allCategories: Category = {
  barnevogne: {
    href: "/barnevogne",
    text: "Barnevogne",
  },
  klapvogne: {
    href: "/klapvogne",
    text: "Klapvogne",
  },
  pacifier: {
    href: "/barnevogne",
    text: "Barnevogne",
  },
};

export const categoriesMap: Record<
  CategoryCollection,
  Record<string, Category>
> = {
  vogne: {
    Vogntyper: {
      barnevogne: {
        href: "/barnevogne",
        text: "Barnevogne",
      },
    },
  },
};
