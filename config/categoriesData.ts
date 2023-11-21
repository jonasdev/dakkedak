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

export type CategoryName =
  | "barnevogne"
  | "klapvogne"
  | "joggere"
  | "lifte"
  | "tvillingevogne"
  | "kombivogne"
  | "rejseklapvogne"
  | "multivogne"
  | "barnevognspuder"
  | "holdere"
  | "madrasser-og-lagner"
  | "regnslag-og-insektnet"
  | "seler"
  | "solskaerme"
  | "vedligeholdese";

export type CategoryData = { href: string; text: string };

export type CategorySet = Record<CategoryName, CategoryData>;

export const vogneCategories: CategorySet = {
  barnevogne: {
    href: "/barnevogne",
    text: "Barnevogne",
  },
  klapvogne: {
    href: "/klapvogne",
    text: "Klapvogne",
  },
  joggere: {
    href: "/joggere",
    text: "Joggere",
  },
  lifte: {
    href: "/lifte",
    text: "Lifte",
  },
  tvillingevogne: {
    href: "/tvillingevogne",
    text: "Tvillingevogne",
  },
  kombivogne: {
    href: "/kombivogne",
    text: "Kombivogne",
  },
  rejseklapvogne: {
    href: "/rejseklapvogne",
    text: "Rejseklapvogne",
  },
  multivogne: {
    href: "/multivogne",
    text: "Multivogne",
  },
  barnevognspuder: {
    href: "/barnevognspuder",
    text: "Barnevognspuder",
  },
  holdere: {
    href: "/holdere",
    text: "Holdere",
  },
  "madrasser-og-lagner": {
    href: "/madrasser-og-lagner",
    text: "Madrasser og lagner",
  },
  "regnslag-og-insektnet": {
    href: "/regnslag-og-insektnet",
    text: "Regnslag og insektnet",
  },
  seler: {
    href: "/seler",
    text: "Seler",
  },
  solskaerme: {
    href: "/solskaerme",
    text: "Solskærme",
  },
  vedligeholdese: {
    href: "/vedligeholdese",
    text: "Vedligholdelse",
  },
};

export const categories: CategorySet = {
  ...vogneCategories,
};
