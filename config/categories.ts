export type CategoryLinkProps = {
  href: string;
  text: string;
};

type MainCategory =
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

  export type Category = Record<CategoryName, SubCategoryData[]>;

export type SubCategoryData = { href: string; text: string };

type SubCategoryTuple = Record<
  Partial<SubCategory>,
  Record<string, SubCategoryData>
>;

type TestCategory = {
  section: string;
  subCategories: Record<string, SubCategoryData[]>;
};

// type Category = Record<Partial<MainCategory>, Partial<SubCategoryTuple[]>>;
type Category = Record<Partial<MainCategory>, TestCategory[]>;

export const categories: Category = {
    vogne: [
      {
        section: "Vogntyper",
        subCategories: [
          "barnevogne":{
            href: "/barnevogne",
            text: "Barnevogne",
          },
          {
            href: "/klapvogne",
            text: "Klapvogne",
          },
          {
            href: "/joggere",
            text: "Joggere",
          },
          {
            href: "/lifte",
            text: "Lifte",
          },
          {
            href: "/tvillingevogne",
            text: "Tvillingevogne",
          },
          {
            href: "/kombivogne",
            text: "Kombivogne",
          },
          {
            href: "/rejseklapvogne",
            text: "Rejseklapvogne",
          },
          {
            href: "/multivogne",
            text: "Multivogne",
          },
        ],
      },
      {
        section: "Tilbehør",
        subCategories: [
          {
            href: "/barnevognspuder",
            text: "Barnevognspuder",
          },
          {
            href: "/holdere",
            text: "Holdere",
          },
          {
            href: "/madrasser-og-lagner",
            text: "Madrasser og lagner",
          },
          {
            href: "/regnslag-og-insektnet",
            text: "Regnslag og insektnet",
          },
          {
            href: "/seler",
            text: "Seler",
          },
          {
            href: "/solskaerme",
            text: "Solskærme",
          },
          {
            href: "/vedligeholdese",
            text: "Vedligholdelse",
          },
        ],
      },
    ],
  };

// export const categories: Category = {
//   vogne: [
//     {
//       section: "Vogntyper",
//       subCategories: [
//         {
//           href: "/barnevogne",
//           text: "Barnevogne",
//         },
//         {
//           href: "/klapvogne",
//           text: "Klapvogne",
//         },
//         {
//           href: "/joggere",
//           text: "Joggere",
//         },
//         {
//           href: "/lifte",
//           text: "Lifte",
//         },
//         {
//           href: "/tvillingevogne",
//           text: "Tvillingevogne",
//         },
//         {
//           href: "/kombivogne",
//           text: "Kombivogne",
//         },
//         {
//           href: "/rejseklapvogne",
//           text: "Rejseklapvogne",
//         },
//         {
//           href: "/multivogne",
//           text: "Multivogne",
//         },
//       ],
//     },
//     {
//       section: "Tilbehør",
//       subCategories: [
//         {
//           href: "/barnevognspuder",
//           text: "Barnevognspuder",
//         },
//         {
//           href: "/holdere",
//           text: "Holdere",
//         },
//         {
//           href: "/madrasser-og-lagner",
//           text: "Madrasser og lagner",
//         },
//         {
//           href: "/regnslag-og-insektnet",
//           text: "Regnslag og insektnet",
//         },
//         {
//           href: "/seler",
//           text: "Seler",
//         },
//         {
//           href: "/solskaerme",
//           text: "Solskærme",
//         },
//         {
//           href: "/vedligeholdese",
//           text: "Vedligholdelse",
//         },
//       ],
//     },
//   ],
// };

// export const categories: Category = {
//   vogne: [
//         "vogne": {
//             barnevogne: {
//                 href: "/barnevogne",
//                 title: "Barnevogne",
//               }
//         },
//     // "klapvogne",
//     // "joggere",
//     // "lifte",
//     // "tvillingevogne",
//     // "kombivogne",
//     // "rejseklapvogne",
//     // "multivogne",
//     // "barnevognspuder",
//     // "holdere",
//     // "madrasser-og-lagner",
//     // "regnslag-og-insektnet",
//     // "seler",
//     // "solskaerme",
//     // "vedligeholdese",
//   ],
//   "toej-og-sko": [],
//   amning: [],
//   barsel: [],
//   diverse: [],
//   grej: [],
//   koersel: [],
//   legetoej: [],
//   pleje: [],
//   sovetid: [],
//   spisetid: [],
// };
