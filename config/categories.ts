type Category = { slug: string; name: string; regex: string };

export const paaTurVogneCategories: Category[] = [
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
    slug: "lifte",
    name: "Lifte",
    regex: "Lift",
  },
];

export const paaTurTilbehoerCategories: Category[] = [
  {
    slug: "barnevognspuder",
    name: "Barnevognspuder",
    regex: "barnevognspude",
  },
  // {
  //   slug: "holdere",
  //   name: "Holdere",
  //   regex: "kopholder|smartphone|kaffe|tray|cup|",
  // },
  {
    slug: "regnslag-og-insektnet",
    name: "Regnslag og insektnet",
    regex: "Regnslag|Insektnet|Insekt|Mygge",
  },
  {
    slug: "seler",
    name: "Seler",
    regex: "sele til barnevogn|sele til vogn",
  },
  // {
  //   slug: "solskaerme",
  //   name: "Solskærme",
  //   regex: "Solskærm|Solskaerm",
  // },
  // {
  //   slug: "vedligeholdese",
  //   name: "Vedligeholdelse",
  //   regex: "behandling|rengøring|spray til barnevogn",
  // },
];

export const vogneCategories: Category[] = [
  ...paaTurVogneCategories,
  ...paaTurTilbehoerCategories,
];

export const paaFartenCategories: Category[] = [
  {
    slug: "autostole",
    name: "Autostole",
    regex: "Autostol",
  },
  {
    slug: "koereposer",
    name: "Køreposer",
    regex: "Kørepose|voksi",
  },
  {
    slug: "spejle",
    name: "Spejle",
    regex: "autostol spejl|bagsæde spejl|bagsædespejl|Cover med spejl",
  },
];

export const babyOgBoerneToejCategories: Category[] = [
  {
    slug: "badetoej",
    name: "Badetøj",
    regex: "Badetøj|Badebukser|Svømme|Badedragt|Bikini",
  },
  {
    slug: "bodyer",
    name: "Bodyer",
    regex: "Body",
  },
  {
    slug: "flyverdragter",
    name: "Flyverdragter",
    regex: "flyverdragt",
  },
  {
    slug: "kjoler-og-nederdele",
    name: "Kjoler og nederdele",
    regex: "Kjole|nederdel",
  },
  {
    slug: "nattoej",
    name: "Nattøj",
    regex: "Nattøj|Natbukser|Nattrøje|Nathue|Sovedragt|Sovetøj",
  },
  {
    slug: "overdele",
    name: "Overdele",
    regex:
      "Overdel|Bluse|Trøje|T-shirt|Striktrøje|Sweater|Hættetrøje|Langærmet|Cardigan|Sweatshirt|Crewsuit|Skjorte",
  },
  {
    slug: "overtoej",
    name: "Overtøj",
    regex:
      "Overtøj|Babyjakke|Børnejakke|Boernejakke|Vinterjakke|Jakke i uld|Softshell jakke|Jakke i 100%|Fleecejakke|Ulddragt",
  },
  {
    slug: "regntoej",
    name: "Regntøj",
    regex: "Regntøj|Regnjakke|Regnbukser",
  },
  {
    slug: "sparkedragter",
    name: "Sparkedragter",
    regex: "Sparkedragt|Heldragt",
  },
  {
    slug: "stroemper-og-stroempebukser",
    name: "Strømper og strømpebukser",
    regex: "Strømpe|Strømpebukser",
  },
  {
    slug: "termotoej",
    name: "Termotøj",
    regex: "Termotøj|Termo Regnbukser|Termosæt|Termo Regnjakke|Thermo Jacket",
  },
  {
    slug: "undertoej",
    name: "Undertøj",
    regex: "Undertøj|Underbuks|Undertrøje|Tanktop",
  },
  {
    slug: "underdele",
    name: "Underdele",
    regex: "Jeans|Overall|Leggings|Strikbuks|Pants|Bukser",
  },
];

export const fodtoejCategories: Category[] = [
  {
    slug: "futter-og-hjemmesko",
    name: "Futter og hjemmesko",
    regex: "Futter|Hjemmesko",
  },
  {
    slug: "gummistoevler",
    name: "Gummistøvler",
    regex: "Gummistøvler",
  },
  {
    slug: "sandaler",
    name: "Sandaler",
    regex: "Sandal|KlipKlap",
  },
  {
    slug: "sneakers",
    name: "Sneakers",
    regex: "Sneakers",
  },
  {
    slug: "vinter-og-termostoevler",
    name: "Vinter og Termostøvler",
    regex: "Vinterstøvler|Termostøvler",
  },
];

export const toejAccessoriesCategories: Category[] = [
  {
    slug: "huer-og-hatte",
    name: "Huer og hatte",
    regex: "Hue|Solhat|Bøllehat|Stråhat|Kasket|Nissehue",
  },
  {
    slug: "smykker",
    name: "Smykker",
    regex:
      "Smykke|Ørering|Fingerring|Armbånd|Halskæde|Hårspænde|Hårbånd|Hårelastik",
  },
  {
    slug: "savlesmaek",
    name: "Savlesmæk",
    regex: "Savlesmæk|Savl",
  },
  {
    slug: "solbriller",
    name: "Solbriller",
    regex: "Solbrille",
  },
  {
    slug: "vanter-og-luffer",
    name: "Vanter og luffer",
    regex: "Vanter|Luffer",
  },
];

export const toejOgSkoCategories: Category[] = [
  ...babyOgBoerneToejCategories,
  ...fodtoejCategories,
  ...toejAccessoriesCategories,
];

export const udstyrCategories: Category[] = [
  {
    slug: "babyalarmer",
    name: "Babyalarmer",
    regex: "Babyalarm",
  },
  {
    slug: "vikler-og-baeresele",
    name: "Vikler og bæreseler",
    regex: "Bæresele|Strækvikle|Vikle|Ringslynge",
  },
  {
    slug: "pusletasker",
    name: "Pusletasker",
    regex: "Pusletaske",
  },
  {
    slug: "sikkerhedsgitre",
    name: "Sikkerhedsgitre",
    regex: "Gitter",
  },
];

export const plejeCategories: Category[] = [
  {
    slug: "sutter",
    name: "Sutter",
    regex: "Sut|Sutter|Pacifier",
  },
];

export const sovetidCategories: Category[] = [
  {
    slug: "vugger",
    name: "Vugger",
    regex: "vugge|slyngevugge|vuggemotor",
  },
  {
    slug: "senge-og-madrasser",
    name: "Senge og Madrasser",
    regex:
      "Babyseng|Barneseng|Børneseng|Juniorseng|Boerneseng|Tremmeseng|Voksenseng|Rejsesenge|madras|sengemadras",
  },
  {
    slug: "babynest",
    name: "Babynest",
    regex: "Babynest",
  },
  {
    slug: "dyner-og-puder",
    name: "Dyner og Puder",
    regex:
      "babydyne|hovedpude|juniordyne|barnedyne|børnedyne|boernedyne|dundyne|fjerdyne|sovedyne|sengedyne",
  },
];

export const legetoejIndendoersCategories: Category[] = [
  {
    //Check
    slug: "bamser",
    name: "Bamser",
    regex: "Bamse",
  },
  {
    slug: "bideringe",
    name: "Bideringe",
    regex: "Bidering",
  },
  {
    //Check
    slug: "biler-fly-tog",
    name: "Biler, fly og tog",
    regex: "Biler|Flyvemaskine|Tog",
  },
  {
    slug: "bolde",
    name: "Bolde",
    regex:
      "Boldbassin|Badebold|Kidkii 50 Bolde|Baby Einstein Bøjelig Bold|Oball Disney|Oball Rattle|Oball Grasp|Oball Floating|Oball Rainstick|Oball Classic Bold|Oball Frogball|Tiny Tot Silikone Bold|Bold med Labels|Lærebold|Uldbolde|Skindbold|Sansebold|Aktivitetsbold|Massagebold|Motorisk Bold|Aktivitetsbold",
  },
  {
    slug: "byggesaet-og-klodser",
    name: "Byggesæt og klodser",
    regex: "Byggesæt|Klodser",
  },
  {
    slug: "boerneboeger",
    name: "Børnebøger",
    regex:
      "Børnebog|Bogstaverne|Flip bog|Musikbog|Min bedste bog|Folde-ud bog|Lydbog|Bog med farver|Aktivitetsbog|Dobbeltsidet bog|Playgro Bog|Playgro Halebog|Opdagelsesbog|Min Lille Ordbog|Stofbog|Magnetbog|Regnbuebog|Mærk og Føl-bog|Malebog|Løft Flapperne-bog|Papbog|Billedbog|SangbogTotte- og Lotte",
  },
  {
    // Made it here
    slug: "boernemoebler",
    name: "Børnemøbler",
    regex: "Børnemøbler",
  },
  {
    slug: "dukker",
    name: "Dukker",
    regex: "Dukke",
  },
  {
    slug: "figurer",
    name: "Figurer",
    regex: "Figur",
  },
  {
    slug: "gaavogne",
    name: "Gåvogne",
    regex: "Gåbil|Gåvogn|Gå-vogn",
  },
  {
    slug: "hoppedyr-og-gynger",
    name: "Hoppedyr og gynger",
    regex: "Hoppedyr|Gynge|Hoppebold|Little Tikes Vippe Hval|Kænguru bold",
  },
  {
    slug: "haandtryk-og-fodtryk",
    name: "Hånd- og fodaftryk",
    regex: "Aftryk|Afstøbning",
  },
  {
    slug: "julekalendere",
    name: "Julekalendere",
    regex: "Julekalender",
  },
  {
    //Remove?
    slug: "kostumer",
    name: "Kostumer",
    regex: "Kostume|Udklædning",
  },
  {
    slug: "kreativ-leg",
    name: "Kreativ leg",
    regex:
      "Kreativ|Modellervoks|Farvelæg|Mosaik|Malebog|Vandfarver|Skrabeark|Maling|Papirsaks|Tavle|Blyanter|Viskelædder|Stempler|Farvekridt|Tusser",
  },
  {
    // Check
    slug: "koekken",
    name: "Køkken",
    regex: "Køkken|Kitchen|Frugt|Kaffemaskine|Småkage|Legetøjsmad|Bagesæt",
  },
  {
    // Made it here
    slug: "legetaepper-og-gulve",
    name: "Legetæpper og gulve",
    regex: "Legetæppe|Gulv",
  },

  {
    slug: "telte",
    name: "Telte",
    regex: "Telt|Tipi",
  },
  {
    slug: "musik",
    name: "Musik",
    regex: "Musik",
  },
  {
    slug: "rangler",
    name: "Rangler",
    regex: "Rangler",
  },
  {
    slug: "rollespil",
    name: "Rollespil",
    regex: "Rollespil",
  },
  {
    slug: "braetspil-og-puslespil",
    name: "Bræt- og puslespil",
    regex: "Brætspil|Puslespil",
  },
  {
    slug: "traekdyr",
    name: "Trækdyr",
    regex: "Trækdyr",
  },
  {
    slug: "traelegetoej",
    name: "Trælegetøj",
    regex: "Trælegetøj",
  },
  {
    slug: "tumlemoebler",
    name: "Tumlemøbler",
    regex: "Tumlem",
  },
  {
    slug: "uroer",
    name: "Uroer",
    regex: "Uro",
  },
  {
    slug: "andet-legetoej",
    name: "Andet legetøj",
    regex: "Legetøj",
  },
];

export const legetoejCategories: Category[] = [...legetoejIndendoersCategories];

export const categories: Category[] = [
  ...vogneCategories,
  ...paaFartenCategories,
  ...toejOgSkoCategories,
  ...udstyrCategories,
  ...legetoejCategories,
  ...plejeCategories,
  ...sovetidCategories,
  // {
  //   slug: "diverse",
  //   name: "Diverse",
  //   regex: "",
  // },
];

export type CategorySet = Record<string, Category[]>;

export const paaTurCategorySet: CategorySet = {
  Vogne: { ...paaTurVogneCategories },
  Tilbehør: { ...paaTurTilbehoerCategories },
};

export const paaFartenCategorySet: CategorySet = {
  "Til bilen": { ...paaFartenCategories },
};

export const toejOgSkoCategorySet: CategorySet = {
  Tøj: { ...babyOgBoerneToejCategories },
  Fodtøj: { ...fodtoejCategories },
  Diverse: { ...toejAccessoriesCategories },
};

export const udstyrCategoriesSet: CategorySet = {
  Udstyr: { ...udstyrCategories },
};

export const sovetidCategorySet: CategorySet = {
  Vugger: { ...sovetidCategories },
};

export const legetoejCategorySet: CategorySet = {
  Indendørs: { ...legetoejIndendoersCategories },
};
