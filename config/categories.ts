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
    regex: "Lift|Carrier|Babynest|Liftmadras",
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
    regex: "Badetøj|Badebukser|Svømme|Badedragt|Badesokker",
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
    slug: "boejler",
    name: "Børnebøjler",
    regex: "Børnebøjler",
  },
  {
    slug: "huer-og-hatte",
    name: "Huer og hatte",
    regex: "Hue|Solhat|Bøllehat|Stråhat|Kasket|Nissehue",
  },
  {
    slug: "haarspaender-og-elastikker",
    name: "Hårspænder -og elastikker",
    regex: "Hårspænde|Hårbånd|Hårelastik",
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

export const moeblerCategories: Category[] = [
  {
    slug: "garderobe",
    name: "Garderobe",
    regex: "Garderobe",
  },
  {
    slug: "skraastol",
    name: "Skråstole",
    regex: "Skråstol|skraastol|skråstol|Bouncer|Vippestol",
  },
  {
    slug: "hoejstole",
    name: "Højstole og tilbehør",
    regex: "Hoejstole|Tripp",
  },
  {
    slug: "kravlegaard",
    name: "Kravlegård",
    regex: "Kravlegård|Kravle",
  },
  {
    slug: "puslebord",
    name: "Puslebord",
    regex: "Puslebord|Puslemøbel",
  },
  {
    slug: "reol",
    name: "Reoler og kommoder",
    regex: "Reol|Kommode|Bogreoler",
  },
  // {
  //   slug: "tumlemoebler",
  //   name: "Tumlemøbler",
  //   regex: "Tumlemøbler",
  // },
  {
    slug: "vugger",
    name: "Vugger",
    regex: "vugge|slyngevugge|vuggemotor",
  },
  {
    slug: "madrasser",
    name: "Madrasser",
    regex: "madras",
  },
  {
    slug: "senge",
    name: "Senge",
    regex:
      "Babyseng|Babysenge|Leander Babysenge|Barneseng|Børneseng|Juniorseng|Boerneseng|Tremmeseng|Voksenseng|Rejsesenge",
  },
  {
    slug: "tyngdedyner-og-soveposer",
    name: "Tyngdedyner og soveposer",
    regex: "Tyngdedyne",
  },
  {
    slug: "dyner-og-puder",
    name: "Dyner og Puder",
    regex:
      "dyne|Dyner|Dyner, puder mm.|babydyne|hovedpude|juniordyne|barnedyne|børnedyne|boernedyne|dundyne|fjerdyne|sovedyne|sengedyne",
  },
  {
    slug: "andet-moebler",
    name: "Andet møbler",
    regex: "boernemoebler",
  },
  {
    slug: "Dørstoppere",
    name: "Dørstoppere",
    regex: "Dørstoppere",
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
    slug: "sutteflasker",
    name: "Sutteflasker",
    regex: "Sutteflaske|Flaskebarn",
  },
  {
    slug: "tallerkner-og-skaale",
    name: "Tallerkner og skåle",
    regex: "Tallerken|Skål",
  },
  {
    slug: "andet-service",
    name: "Andet Service",
    regex: "Service|Dækserviet|Place Mat|Spise-service",
  },
];

export const plejeCategories: Category[] = [
  {
    slug: "badekar-badestole",
    name: "Badekar, stativer og badestole",
    regex: "Badekar|Badestativer|Badestole",
  },
  {
    slug: "haandklaeder-og-badekaaber",
    name: "Håndklæder og badekåber",
    regex: "Håndklæde|Badekåber",
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
    regex: "Badelegetøj|Badetid",
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
    regex: "Bidering|Bidelegetøj|Bidedyr|Armbåndsbidering|Bidesmykker",
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
    regex: "Dukke|Barbie|Dukketøj",
  },
  {
    slug: "figure",
    name: "Figure",
    regex: "Avengers tema",
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
    regex: "Legetæppe|Gulv|Legetøjstæpper|Legemadras",
  },

  {
    slug: "telte",
    name: "Telte",
    regex: "Telt|Tipi",
  },
  {
    slug: "rangler",
    name: "Rangler",
    regex: "Rangler|Rattle",
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
    slug: "loebecykler-loebehjul",
    name: "Løbehjul, løbecykler",
    regex:
      "Løbehjul|Løbecykel|Cykel|Scooter|Motorcykel|Traktor|Cross|Trailer|Børnecykler|Cykelhjelme",
  },
  {
    slug: "rutsjebane",
    name: "Rutsjebane",
    regex: "Rutsjebane",
  },
  {
    slug: "sand-og-vand",
    name: "Sand og vand",
    regex: "Vandpistol|Legetøj til sand og vand|Børnepools",
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

export const barselCategories: Category[] = [
  {
    slug: "barselstoej",
    name: "Barselstøj",
    regex: "Graviditetstøj|På barsel|Ammetøj",
  },
  {
    slug: "baerejakker",
    name: "Bærejakker",
    regex: "Bærejakke",
  },
];

export const amningCategories: Category[] = [
  {
    slug: "ammeindlaeg",
    name: "Ammeindlæg",
    regex: "Ammeindlæg",
  },
  {
    slug: "ammepuder",
    name: "Ammepuder",
    regex: "Ammepude|Graviditetspude",
  },
  {
    slug: "ammebh",
    name: "Amme BH'er",
    regex: "BH|Amning",
  },
  {
    slug: "brystpumper",
    name: "Brystpumper",
    regex: "Brystpumpe",
  },
];

export const barselOgVentetidCategories: Category[] = [
  ...barselCategories,
  ...amningCategories,
];

export const gaverCategories: Category[] = [
  {
    slug: "foedselsdag-og-fejring",
    name: "Fødselsdag og fejring",
    regex: "Bannere og guirlander|Balloner|Duge",
  },
];

export const categories: Category[] = [
  ...paaTurCategories,
  ...toejOgSkoCategories,
  ...udstyrCategories,
  ...moeblerCategories,
  ...spisetidOgPlejeCategories,
  ...legetoejCategories,
  ...barselOgVentetidCategories,
  ...gaverCategories,

  {
    slug: "diverse",
    name: "Diverse",
    regex: "Dørstoppere",
  },
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

export const moeblerCategorySet: CategorySet = {
  Møbler: { ...moeblerCategories },
};

export const udstyrCategoriesSet: CategorySet = {
  Udstyr: { ...udstyrCategories },
};

export const spisetidOgPlejeCategoriesSet: CategorySet = {
  Service: { ...spisetidServiceCategories },
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
      regex: "Legetøj|Blandet legetøj",
    },
  ],
};

export const barselOgVentetidCategoriesSet: CategorySet = {
  Barsel: { ...barselCategories },
  Amning: { ...amningCategories },
};

export const gaverCategoriesSet: CategorySet = {
  "Gaver og fest": { ...gaverCategories },
};
