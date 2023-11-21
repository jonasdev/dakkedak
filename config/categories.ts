type Category = { slug: string; name: string; regex?: string };

export const vogneCategories: Category[] = [
  {
    slug: "barnevogne",
    name: "Barnevogne",
    regex: "Barnevogn",
  },
  {
    slug: "klapvogne",
    name: "Klapvogne",
    regex: "Klapvogn",
  },
  {
    slug: "joggere",
    name: "Joggere",
    regex: "Jogger",
  },
  {
    slug: "lifte",
    name: "Lifte",
    regex: "Lift",
  },
  {
    slug: "tvillingevogne",
    name: "Tvillingevogne",
    regex: "Tvillingevogn",
  },
  {
    slug: "kombivogne",
    name: "Kombivogne",
    regex: "Kombivogn",
  },
  {
    slug: "rejseklapvogne",
    name: "Rejseklapvogne",
    regex: "Rejseklapvogn",
  },
  {
    slug: "multivogne",
    name: "Multivogne",
    regex: "Multivogn",
  },
  {
    slug: "barnevognspuder",
    name: "Barnevognspuder",
    regex: "Barnevognspude",
  },
  {
    slug: "holdere",
    name: "Holdere",
    regex: "Holder",
  },
  {
    slug: "madrasser-og-lagner",
    name: "Madrasser og lagner",
    regex: "Madras|Lagen|Lagner",
  },
  {
    slug: "regnslag-og-insektnet",
    name: "Regnslag og insektnet",
    regex: "Regnslag|Insektnet",
  },
  {
    slug: "seler",
    name: "Seler",
    regex: "Sele",
  },
  {
    slug: "solskaerme",
    name: "Solskærme",
    regex: "Solskærm",
  },
  {
    slug: "vedligeholdese",
    name: "Vedligholdelse",
    regex: "Vedligeholdelse",
  },
];

export const categories: Category[] = [
  ...vogneCategories,
  {
    slug: "diverse",
    name: "Diverse",
  },
];

export type CategorySet = Record<string, Category[]>;

export const vogneCategoriesSet: CategorySet = {
  Vogntyper: { ...vogneCategories },
};
