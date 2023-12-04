type Category = { slug: string; name: string; regex: string };

export const tilBilenCategories: Category[] = [
  {
    slug: "autostole",
    name: "Autostole",
    regex: "Autostol",
  },
  {
    slug: "koereposer",
    name: "Køreposer",
    regex: "Kørepose|Voksi|Sovepose",
  },
  {
    slug: "spejle",
    name: "Spejle",
    regex: "autostol spejl|bagsæde spejl|bagsædespejl|Cover med spejl",
  },
];

export const vogneCategories: Category[] = [
  {
    slug: "barnevogne",
    name: "Barnevogne",
    regex: "Barnevogn|Basic V2 Junama kollektion|Baby Strollers",
  },
  {
    slug: "klapvogne",
    name: "Klapvogne",
    regex: "Klapvogn",
  },
  {
    slug: "kombivogne",
    name: "Kombivogne",
    regex: "Kombivogn",
  },
  {
    slug: "lifte",
    name: "Lifte",
    regex: "Lift|Carrier|Babynest",
  },
  {
    slug: "tilbehoer-til-vogne",
    name: "Tilbehør til vogne",
    regex: "Tilbehør til vogne|Insekt|Mygge|Regnslag|Solskærm|Kopholder",
  },
];

export const paaTurCategories: Category[] = [
  ...vogneCategories,
  ...tilBilenCategories,
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
    name: "Savle- og hagesmække",
    regex: "Savlesmæk|Savl|TØJ & SKO > Hagesmække",
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
      "Babyseng|Babysenge|Leander Babysenge|Barneseng|Børneseng|Juniorseng|Boerneseng|Tremmeseng|Voksenseng|Rejsesenge|madras|sengemadras",
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

export const spisetidServiceCategories: Category[] = [
  {
    slug: "bestik",
    name: "Bestik",
    regex: "Bestik|Cutlery Set",
  },
  {
    slug: "drikkedunke-og-madkasser",
    name: "Drikkedunke og madkasser",
    regex: "Drikkedunk|Madkasse",
  },
  {
    slug: "hagesmaekke",
    name: "Hagesmække",
    regex: "MÅLTIDET > Hagesmække|Service > Hagesmække",
  },
  {
    slug: "kopper",
    name: "Kopper",
    regex: "Kopper|Tudkop|Krus|Sugerør",
  },
  {
    slug: "tallerkner-og-skaale",
    name: "Tallerkner og skåle",
    regex: "Tallerken|Skål",
  },
  {
    slug: "andet-service",
    name: "Andet Service",
    regex: "Service",
  },
];

export const spisetidsMoeblerCategories: Category[] = [
  {
    slug: "hoejstole-og-tilbehoer",
    name: "Højstole og Tilbehør",
    regex: "Højstole",
  },
];

export const plejeCategories: Category[] = [
  {
    slug: "badekar-badestole",
    name: "Badekar, stativer og badestole",
    regex: "Badekar|Badestativer|Badestole",
  },
  {
    slug: "hudpleje-og-shampoo",
    name: "Hudpleje, og shampoo",
    regex: "Hudpleje|Shampoo",
  },
  {
    slug: "plejeartikler",
    name: "Plejeartikler til baby",
    regex: "Plejeartikler",
  },
  {
    slug: "plejeartikler",
    name: "Plejeartikler til mor",
    regex: "Plejeartikler",
  },
  {
    slug: "potter-toilet-skamler",
    name: "Potter, toiletsæder og skamler",
    regex: "Potter|Toilet|Skammel",
  },
  {
    slug: "solprodukter",
    name: "Solprodukter",
    regex: "Solprodukter",
  },
  {
    slug: "sutter",
    name: "Sutter",
    regex: "Sut|Sutter|Pacifier|Suttesnore|Sutteboks",
  },
  {
    slug: "andet-pleje",
    name: "Andet pleje",
    regex: "Pleje",
  },
];

export const pusleCategories: Category[] = [
  {
    slug: "puslepuder-og-hynder",
    name: "Puslepuder- og hynder",
    regex: "Puslepude|Puslehynde",
  },
];

export const spisetidOgPlejeCategories: Category[] = [
  ...spisetidServiceCategories,
  ...spisetidsMoeblerCategories,
  ...plejeCategories,
  ...pusleCategories,
];

export const legetoejIndendoersCategories: Category[] = [
  {
    slug: "babylegetøj",
    name: "Babylegetøj",
    regex: "Legetøj 0-1 år|Babylegetøj",
  },
  {
    slug: "badelegetoej",
    name: "Badelegetøj",
    regex: "Badelegetøj",
  },
  {
    //Check
    slug: "bamser",
    name: "Bamser",
    regex: "Bamse",
  },
  {
    slug: "bidelegetoej",
    name: "Bidelegetøj",
    regex: "Bidering|Bidelegetøj",
  },
  {
    //Check
    slug: "biler-fly-tog",
    name: "Biler, fly og tog",
    regex: " Biler|Legetøjsbil|Flyvemaskine|Tog",
  },
  {
    slug: "bolde",
    name: "Bolde",
    regex:
      "Bold|Boldbassin|Badebold|Bold med Labels|Lærebold|Uldbolde|Skindbold|Sansebold|Aktivitetsbold|Massagebold|Motorisk Bold|Aktivitetsbold|Stressbold",
  },
  {
    slug: "boeger",
    name: "Bøger",
    regex: "Bøger",
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
    regex: "Dukke|Barbie",
  },
  {
    slug: "gaavogne-ruller-vipper",
    name: "Gåvogne, vipper og rullebræt",
    regex:
      "Gåbil|Gåvogn|Gå-vogn|Modu gåbil|Modu rullebræt|Modu drejehjul|Modu Explorer|Modu Curiosity|Modu Dreamer|Modu samlepinde|Vippe",
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
    regex: "Legetæppe|Gulv|Legetøjstæpper",
  },

  {
    slug: "telte",
    name: "Telte",
    regex: "Telt|Tipi",
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
    slug: "aktivitetslegetoej",
    name: "Aktivitetslegetøj",
    regex: "Aktivitetslegetøj",
  },
];

export const legetoejUdendoersCategories: Category[] = [
  {
    //Check
    slug: "loebecykler-loebehjul-biler",
    name: "Løbehjul, løbecykler og biler",
    regex:
      "Løbehjul|Løbecykel|Cykel|Scooter|Motorcykel|Traktor|Cross|Gåbil|Trailer",
  },
  {
    slug: "rutsjebane",
    name: "Rutsjebane",
    regex: "Rutsjebane",
  },
  {
    slug: "sand-og-vand",
    name: "Sand og vand",
    regex: "Udeleg|Vandpistol|Legetøj til sand og vand",
  },
];

export const legetoejCategories: Category[] = [
  ...legetoejIndendoersCategories,
  ...legetoejUdendoersCategories,
  {
    slug: "andet-legetoej",
    name: "Andet legetøj",
    regex: "Legetøj",
  },
];

export const categories: Category[] = [
  ...paaTurCategories,
  ...toejOgSkoCategories,
  ...udstyrCategories,
  ...sovetidCategories,
  ...spisetidOgPlejeCategories,
  ...legetoejCategories,

  // {
  //   slug: "diverse",
  //   name: "Diverse",
  //   regex: "",
  // },
];

export type CategorySet = Record<string, Category[]>;

export const paaTurCategorySet: CategorySet = {
  "Vogne og tilbehør": { ...vogneCategories },
  "Til bilturen": { ...tilBilenCategories },
};

export const paaFartenCategorySet: CategorySet = {};

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

export const spisetidOgPlejeCategoriesSet: CategorySet = {
  Service: { ...spisetidServiceCategories },
  Møbler: { ...spisetidsMoeblerCategories },
  Pleje: { ...plejeCategories },
  Pusle: { ...pusleCategories },
};

export const legetoejCategorySet: CategorySet = {
  Indendørs: { ...legetoejIndendoersCategories },
  Udendørs: { ...legetoejUdendoersCategories },
  Andet: [
    {
      slug: "andet-legetoej",
      name: "Andet legetøj",
      regex: "Legetøj",
    },
  ],
};
