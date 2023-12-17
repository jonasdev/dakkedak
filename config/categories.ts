export type Category = { slug: string; name: string; regex: string };

export const tilBilenCategories: Category[] = [
  {
    slug: "tilbehoer-autostole",
    name: "Autostole - Tilbehør",
    regex:
      "Tilbehør til autostolen|autostol spejl|bagsæde spejl|bagsædespejl|Cover med spejl|AUTOSTOLE > Til bilturen|AUTOSTOLE > Tilbehør til autostol og bil|AUTOSTOLE > Tilbehør til autostol og bil > På farten > På farten - i bilen",
  },
  {
    slug: "autostole",
    name: "Autostole",
    regex: "Autostol",
  },
  {
    slug: "koeredragter",
    name: "Køredragter",
    regex: "Køredragt",
  },
  {
    slug: "koereposer",
    name: "Køreposer",
    regex: "Kørepose|Voksi|Sovepose|Tilbehør til kørepose",
  },
];

export const vogneCategories: Category[] = [
  {
    slug: "tilbehoer-til-vogne",
    name: "Tilbehør til vogne",
    regex:
      "Tilbehør til vogne|Insekt|Mygge|Regnslag|Solskærm|Kopholder|Tilbehør til barnevogn|Barnevognskæde|Barnevognsophæng",
  },
  {
    slug: "barnevognspude",
    name: "Barnevognspude",
    regex:
      "Barnevognspude|BØRNEVÆRELSET > PÅ TUR > Gode tilbud til turen > Tekstiler",
  },
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
    regex:
      "Lift|Carrier|Babynest|Liftmadras|Cover til babynest|Kantpude|lagen til babynest|lagen til juniornest|Liftcover|Tilbehør til babynest",
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
    regex: "Body|Baby One-Pieces|Body Long|Body Short",
  },
  {
    slug: "flyverdragter",
    name: "Flyverdragter",
    regex: "Flyverdragt",
  },
  {
    slug: "kjoler-og-nederdele",
    name: "Kjoler og nederdele",
    regex:
      "Kjole|Nederdel|Spencer - Ellie - Clove|Spencer - Ellie - Flintstone",
  },
  {
    slug: "nattoej",
    name: "Nattøj",
    regex:
      "Nattøj|Natbukser|Nattrøje|Nathue|Sovedragt|Sovetøj|Baby & Toddler Sleepwear|natdragt|Jumpsuit",
  },
  {
    slug: "overdele",
    name: "Overdele",
    regex:
      "Baby & Toddler Tops|Overdel|Bluse|Trøje|T-shirt|Striktrøje|Sweater|Hættetrøje|Langærmet|Cardigan|Sweatshirt|Crewsuit|Skjorte|Baby & Toddler Outerwear|Busseronne|Merino Bluse|Merino Cardigan|Top - Elva - Tan",
  },
  {
    slug: "overtoej",
    name: "Overtøj",
    regex:
      "Overtøj|Babyjakke|Børnejakke|Boernejakke|Vinterjakke|Jakke i uld|Softshell jakke|Jakke i 100%|Fleecejakke|Ulddragt|overtøj til børn|Softshell",
  },
  {
    slug: "regntoej",
    name: "Regntøj",
    regex: "Regntøj|Regnjakke|Regnbukser",
  },
  {
    slug: "sparkedragter",
    name: "Sparkedragter",
    regex: "Sparkedragt|Heldragt|Heldragter",
  },
  {
    slug: "stroemper-og-stroempebukser",
    name: "Strømper og strømpebukser",
    regex: "Strømpe|Strømpebukser|Sokker",
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
    slug: "toej-saet",
    name: "Tøjsæt",
    regex: "Baby & Toddler Outfits",
  },
  {
    slug: "underdele",
    name: "Underdele",
    regex:
      "Jeans|Overall|Leggings|Strikbuks|Pants|Bukser|Baby & Toddler Bottoms|Shorts|Uldbukser|Bloomers|Legging|Merino Legging|Merino Overalls",
  },
];

export const fodtoejCategories: Category[] = [
  {
    slug: "futter-og-hjemmesko",
    name: "Futter og hjemmesko",
    regex: "Futter|Hjemmesko|Booties|Sutsko",
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
    regex: "Vinterstøvler|Termostøvler|Bamsestøvlen",
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
    regex:
      "Hue|Solhat|Bøllehat|Stråhat|Kasket|Nissehue|Baby hue|Babyhue|Uld-Hue|Baby Hue - Fryd - Flintstone|Baby Hue - Fryd - Nougat|Baby Hue - Fryd - Play|Baby Hue - Fryd - Rainy Day|Baby Hue - Fryd - Wheat|Merino hue",
  },
  {
    slug: "haarspaender-og-elastikker",
    name: "Hårspænder -og elastikker",
    regex: "Hårspænde|Hårbånd|Hårelastik",
  },
  {
    slug: "navnemaerker",
    name: "Navnemærker",
    regex: "Colored name tags|Navnemærker",
  },
  {
    slug: "savlesmaek",
    name: "Savle- og hagesmække",
    regex:
      "Savlesmæk|Savl|TØJ & SKO > Hagesmække|Bandana Bib|Savlesmæk . Hagesmæk",
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
    slug: "belysning",
    name: "Belysning",
    regex: "Belysning|BØRNEVÆRELSET > Lys og lamper",
  },
  {
    slug: "vikler-og-baeresele",
    name: "Vikler og bæreseler",
    regex: "Bæresele|Strækvikle|Vikle|Ringslynge|Bærecover",
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
    slug: "dekorationer",
    name: "Dekorationer",
    regex: "Dekorationer|Plakat",
  },
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
    slug: "hoejdemaaler",
    name: "Højdemåler",
    regex: "Højdemåler",
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
    slug: "opbevaring",
    name: "Opbevaring",
    regex: "Opbevaring|Opbevaringskurv|Kurve",
  },
  {
    slug: "puslebord",
    name: "Puslebord",
    regex: "Puslebord|Puslemøbel",
  },
  {
    slug: "reol",
    name: "Reoler og kommoder",
    regex: "Reol|Kommode|Bogreoler|Bogreol|Børnereol",
  },
  // {
  //   slug: "tumlemoebler",
  //   name: "Tumlemøbler",
  //   regex: "Tumlemøbler",
  // },
  {
    slug: "vugger",
    name: "Vugger",
    regex: "Vugge|Slyngevugge|Vuggemotor|Tilbehør til slyngevugge",
  },
  {
    slug: "vaadliggerlagner",
    name: "Vådliggerlagner",
    regex: "Vådliggerlagner",
  },
  {
    slug: "lagner",
    name: "Lagner",
    regex: "lagner",
  },
  {
    slug: "madrasser",
    name: "Madrasser",
    regex: "Madras",
  },
  {
    slug: "sengerand",
    name: "Sengerand",
    regex: "For babies | for babies|Sengerand|Sengerandsslange",
  },
  {
    slug: "sengetoej",
    name: "Sengetøj",
    regex: "Babysengetøj|Juniorsengetøj",
  },
  {
    slug: "sengehimmel",
    name: "Sengehimmel",
    regex: "Sengehimmel",
  },
  {
    slug: "sengelomme",
    name: "Sengelomme",
    regex: "Sengelomme",
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
      "Dyne|Dyner|Dyner, puder mm.|Babydyne|Hovedpude|Juniordyne|barnedyne|børnedyne|boernedyne|dundyne|fjerdyne|sovedyne|sengedyne|Baby Bedding|babyhovedpude|Juniorhovedpude|Pude - Budda - Mauve|Pude - Budda - Stormy Sea",
  },
  {
    slug: "svoeb",
    name: "Svøb",
    regex: "Svøb|Muslin Swaddle",
  },
  {
    slug: "taepper",
    name: "Tæpper",
    regex: "Blanket|Babytæppe|Babytæppe - Stella - Birch",
  },
  {
    slug: "andet-moebler",
    name: "Andet møbler",
    regex: "boernemoebler|Tøjstativ",
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
    regex: "Bestik|Cutlery Set|Spoon Set",
  },
  {
    slug: "beholdere",
    name: "Beholdere",
    regex: "Grød",
  },
  {
    slug: "drikkedunke-og-madkasser",
    name: "Drikkedunke og madkasser",
    regex: "Drikkedunk|Madkasse",
  },
  {
    slug: "daekservietter",
    name: "Dækkeservietter",
    regex: "Dækkeserviet|Dækserviet|Place Mat",
  },
  {
    slug: "hagesmaekke",
    name: "Hagesmække",
    regex:
      "Dinner Bib|MÅLTIDET > Hagesmække|Service > Hagesmække|Spise & drikke  > Hagesmæk uden navn|Spise & drikke  > Hagesmække|Silikone hagesmæk",
  },
  {
    slug: "kopper",
    name: "Kopper",
    regex:
      "Kopper|Tudkop|Krus|Sugerør|Sugerørskoppen|Cup Set|Spise & drikke  > Drikkekop|Drikkekop",
  },
  {
    slug: "sutteflasker",
    name: "Sutteflasker",
    regex:
      "Sutteflaske|Sutteflasken|Flaskebarn|Baby Bottle|Baby Bottle Accessories|Baby Bottle Sleeve",
  },
  {
    slug: "tallerkner-og-skaale",
    name: "Tallerkner og skåle",
    regex: "Tallerken|Skål|Dinner Set",
  },
  {
    slug: "andet-service",
    name: "Andet Service",
    regex: "Service|Spise-service|Spise & drikke  > Spisesæt baby",
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
    regex: "Håndklæde|Badekåber|Hoodie Towel|Poncho|Badeslag",
  },
  {
    slug: "hudpleje-og-shampoo",
    name: "Hudpleje, og shampoo",
    regex: "Hudpleje|Shampoo",
  },
  {
    slug: "plejeartikler-til-baby",
    name: "Plejeartikler til baby",
    regex: "Plejeartikler|Babyserien >|K-serien > KRAES junior",
  },
  {
    slug: "plejeartikler-til-mor",
    name: "Plejeartikler til mor",
    regex: "Plejeartikler|K-serien",
  },
  {
    slug: "potter-toilet-skamler",
    name: "Potter, toiletsæder og skamler",
    regex: "Potter|Toilet|Skammel",
  },
  {
    slug: "solprodukter",
    name: "Solprodukter",
    regex: "Solprodukter|solcreme",
  },
  {
    slug: "stofbleer-og-skiftebleer",
    name: "Stofbleer og skiftebleer",
    regex: "Stofble|Muslin Cloth|Stofbleer|Bleer|Saga Bundle Stofbleer",
  },
  {
    slug: "sutteklude",
    name: "Sutteklude",
    regex: "Cuddle Cloth|Sutteklud|Nusseklud",
  },
  {
    slug: "suttebokse-og-snore",
    name: "Suttebokse -og snore",
    regex:
      "Pacifier Box|Pacifier Case|Sutteboks|Pacifier Clip|Suttesnore|Suttesnor|Bib & Clip Set|Suttetilbehør|Accessories Bundle",
  },
  {
    slug: "sutter",
    name: "Sutter",
    regex: "Sut|Sutter|Pacifier|Frigg Sut",
  },
  {
    slug: "andet-pleje",
    name: "Andet pleje",
    regex: "Kropspleje|Toilettaske",
  },
];

export const pusleCategories: Category[] = [
  {
    slug: "puslepuder-og-hynder",
    name: "Puslepuder- og hynder",
    regex: "Puslepude|Puslehynde|Pusleunderlag",
  },
  {
    slug: "vaskeklude",
    name: "Vaskeklude",
    regex: "Wash Cloth|Vaskeklude|Vaskeklude set",
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
    regex: "Badelegetøj|Badetid|Bath Toys|Badedyr",
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
    regex:
      "Bidering|Bidelegetøj|Bidedyr|Armbåndsbidering|Bidesmykker|Baby Bitie",
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
    regex: "Legetæppe|Gulv|Legetøjstæpper|Legemadras|Børnetæppe",
  },

  {
    slug: "telte",
    name: "Telte",
    regex: "Telt|Tipi|baby products > baby gear > play tents & shades|Uv-telt",
  },
  {
    slug: "rangler",
    name: "Rangler",
    regex: "Rangler|Rattle",
  },
  {
    slug: "ringe",
    name: "Ringe",
    regex: "Loops|Bibs Loops",
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
    slug: "sanselegetoej",
    name: "Sanselegetøj",
    regex: "Kastemus|Gås - Aron - Cream|Sanse legetøj|Sanselegetøj",
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
    regex:
      "Uro|Handmade baby mobiles|Uro Tilbehør|Spilledåse - Arthur - Bunny|Spilledåse - Ayla - Baby Blue|Spilledåse - Ayla - Fawn|Spilledåse - Luna - Måne",
  },
  {
    slug: "aktivitetslegetoej",
    name: "Aktivitetslegetøj",
    regex: "Wobbly Tower|Aktivitetslegetøj",
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
    regex: "Vandpistol|Legetøj til sand og vand|Børnepools|Vandlegetøj",
  },
];

export const legetoejCategories: Category[] = [
  ...legetoejIndendoersCategories,
  ...legetoejUdendoersCategories,
  {
    slug: "rygsaekke-og-tasker",
    name: "Rygsække og tasker",
    regex: "Taske",
  },
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
    regex: "Ammepude|Graviditetspude|Ammepudebetræk",
  },
  {
    slug: "ammebh",
    name: "Amme BH'er",
    regex: "BH|Amning",
  },
  {
    slug: "brystpumper",
    name: "Brystpumper",
    regex: "Brystpumpe|Mælkebeholder|O-ringe|Ventiler|Tilbehør til brystpumpe",
  },
];

export const foedselCategories: Category[] = [
  {
    slug: "foedsel",
    name: "Fødsel",
    regex: "Fødsel",
  },
];

export const barselOgVentetidCategories: Category[] = [
  ...barselCategories,
  ...amningCategories,
  ...foedselCategories,
];

export const gaverCategories: Category[] = [
  {
    slug: "foedselsdag-og-fejring",
    name: "Fødselsdag og fejring",
    regex: "Bannere og guirlander|Balloner|Duge",
  },
  {
    slug: "gaveposer",
    name: "Gaveposer",
    regex: "Giftbag",
  },
  {
    slug: "gaveaesker",
    name: "Gaveæsker",
    regex:
      "Gift Set|Gift Bundle|Babybox|Cuddle up box|Dress me up box|Snuggle up box|Swaddle up box|Sweet dream box",
  },
];

export const categories: Category[] = [
  ...paaTurCategories,
  ...toejOgSkoCategories,
  ...udstyrCategories,
  ...moeblerCategories,
  ...legetoejCategories,
  ...spisetidOgPlejeCategories,
  ...barselOgVentetidCategories,
  ...gaverCategories,

  {
    slug: "diverse",
    name: "Diverse",
    regex: "Top - Elva - Tan",
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
      slug: "rygsaekke-og-tasker",
      name: "Rygsække og tasker",
      regex: "Taske",
    },
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
  Fødsel: { ...foedselCategories },
};

export const gaverCategoriesSet: CategorySet = {
  "Gaver og fest": { ...gaverCategories },
};
