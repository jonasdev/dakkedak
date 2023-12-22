export type Category = { slug: string; name: string; regex: string };

export const tilBilenCategories: Category[] = [
  {
    slug: "tilbehoer-autostole",
    name: "Autostole - Tilbehør",
    regex:
      "Tilbehør til autostolen|autostol spejl|bagsæde spejl|bagsædespejl|Cover med spejl|AUTOSTOLE > Til bilturen|AUTOSTOLE > Tilbehør til autostol og bil|AUTOSTOLE > Tilbehør til autostol og bil > På farten > På farten - i bilen|Tilbehør til autostol og bil",
  },
  {
    slug: "koereposer",
    name: "Køreposer",
    regex:
      "Kørepose|Voksi|Sovepose|Tilbehør til kørepose|Sove-og køreposer|Web Only > PÅ TUR > Køreposer > Tilbehør til vogne",
  },
  {
    slug: "autostole",
    name: "Autostole",
    regex: "Autostole|Autostol",
  },
  {
    slug: "koeredragter",
    name: "Køredragter",
    regex: "Køredragt",
  },
];

export const vogneCategories: Category[] = [
  {
    slug: "Barnevognskaeder",
    name: "Barnevognskæder",
    regex: "Barnevognskæde|Barnevognsophæng",
  },
  {
    slug: "klapvogne",
    name: "Klapvogne",
    regex:
      "Klapvogn|PÅ TUR > Tilbehør til vogne > Babyzen Yoyo2|Asalvo|Bumbleride|Home page|Klap-og løbevogne|Tilbehør til Bumbleride vogne",
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
      "Lift|Carrier|Babynest|Liftmadras|Cover til babynest|Kantpude|lagen til babynest|lagen til juniornest|Liftcover|Tilbehør til babynest|PÅ TUR > Lifte > Tilbehør til vogne > Nordic Lux|PÅ TUR > Tilbehør til vogne > Joolz Hub+",
  },
  {
    slug: "tilbehoer-til-vogne",
    name: "Tilbehør til vogne",
    regex:
      "Tilbehør til vogne|Tilbehør vogne|Insektnet|Mygge|Regnslag|Solskærm|Kopholder|Tilbehør til barnevogn|Barnevognskæde|Barnevognsophæng|Web Only > PÅ TUR > Tilbehør til vogne|Barnevognspude",
  },
  {
    slug: "barnevogne",
    name: "Barnevogne",
    regex: "Barnevogn|Basic V2 Junama kollektion|Baby Strollers",
  },
];

export const paaTurCategories: Category[] = [
  ...tilBilenCategories,
  ...vogneCategories,
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
    regex: "Regntøj|Regnjakke|Regnbukser|regnsæt",
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
    regex:
      "Termotøj|Termo Regnbukser|Termosæt|Termo Regnjakke|Thermo Jacket|Thermotøj",
  },
  // {
  //   slug: "undertoej",
  //   name: "Undertøj",
  //   regex: "Undertøj|Underbuks|Undertrøje|Tanktop",
  // },
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
    slug: "vinter-og-termostoevler",
    name: "Vinter og Termostøvler",
    regex: "Vinterstøvler|Termostøvler|Bamsestøvlen|Støvle",
  },
  {
    slug: "andet-fodtoej",
    name: "Andet fodtøj",
    regex: "Sko",
  },
];
export const toejAccessoriesCategories: Category[] = [
  {
    slug: "huer-og-hatte",
    name: "Huer og hatte",
    regex:
      "Hue|Solhat|Bøllehat|Stråhat|Kasket|Nissehue|Baby hue|Babyhue|Uld-Hue|Baby Hue - Fryd - Flintstone|Baby Hue - Fryd - Nougat|Baby Hue - Fryd - Play|Baby Hue - Fryd - Rainy Day|Baby Hue - Fryd - Wheat|Merino hue",
  },
  {
    slug: "haarspaender-og-elastikker",
    name: "Hårspænder -og elastikker",
    regex: "Hårspænde|Hårbånd|Hårelastik|Brands  > Bow`s By Stær",
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
    slug: "vanter-og-luffer",
    name: "Vanter og luffer",
    regex: "Vanter|Luffer",
  },
  {
    slug: "andet-toej-og-sko",
    name: "Andet tøj og sko",
    regex: "TØJ & SKO > Børnetøj og sko|BØRNETØJ & -SKO",
  },
];

export const toejOgSkoCategories: Category[] = [
  ...babyOgBoerneToejCategories,
  ...toejAccessoriesCategories,
  ...fodtoejCategories,
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
    regex: "Belysning|BØRNEVÆRELSET > Lys og lamper|Lampe|Lys &|Lys og",
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
    slug: "rygsaekke-og-tasker",
    name: "Rygsække og tasker",
    regex: "Taske|Rygsæk|Rygsække & Tasker",
  },
  {
    slug: "sikkerhedsgitre",
    name: "Sikkerhedsgitre og kravlegårde",
    regex: "Gitre og låger|Gitre|Kravlegård",
  },
  {
    slug: "sikkerhed-i-hjemmet",
    name: "Sikkerhed i hjemmet",
    regex: "Sikkerhed i hjemmet|Sovesele|Sikkerhed|Høreværn",
  },
];

export const moeblerCategories: Category[] = [
  {
    slug: "skraastol",
    name: "Skråstole",
    regex: "Skråstol|skraastol|skråstol|Bouncer|Vippestol",
  },
  {
    slug: "havemoebler-og-udstyr",
    name: "Havemøbler og udstyr",
    regex: "Havemøbler|Haveudstyr og redskaber",
  },
  {
    slug: "hoejstole",
    name: "Højstole og tilbehør",
    regex:
      "Hoejstole|Tripp|Højstole|Stokke Steps|Stokke Tripp Trapp|Stokke Clikk|Højstole og tilbehør",
  },
  {
    slug: "puslemoebler",
    name: "Puslemøbler",
    regex: "Puslebord|Puslemøbel|Kommode",
  },
  {
    slug: "reol-skabe-hylder",
    name: "Reoler, skabe og hylder",
    regex:
      "Reol|Bogreoler|Bogreol|Børnereol|Klædeskabe|Reoler, hylder og knager|Bogreoler|Børnereol",
  },
  {
    slug: "skamler",
    name: "Skamler",
    regex: "Povl Kjer|Skammel|Skamler",
  },
  {
    slug: "stole-og-borde",
    name: "Stole og borde",
    regex: "Stole, borde og skriveborde|Stol|Bord",
  },
  {
    slug: "tumlemoebler",
    name: "Tumlemøbler",
    regex: "Tumlemøbel|Tumlemøbler|Babytrold|Tumle",
  },
  {
    slug: "andet-moebler",
    name: "Andet møbler",
    regex: "boernemoebler|Tøjstativ|Børnemøbler|Møbelpakker|Højdemåler",
  },
];

export const indretningCategories: Category[] = [
  {
    slug: "dekorationer",
    name: "Dekorationer",
    regex: "Dekorationer|Plakat|Spejle",
  },
  {
    slug: "bogstaver-og-navnetog",
    name: "Bogstaver og navnetog",
    regex: "Navnetog og bogstaver",
  },
  {
    slug: "opbevaring-og-kurve",
    name: "Opbevaring og kurve",
    regex: "Opbevaring|Opbevaringskurv|Kurve|Vasketøjskurve",
  },
  // {
  //   slug: "andet-boernevaerelset",
  //   name: "Børneværelset diverse",
  //   regex: "BØRNEVÆRELSET",
  // },
];

export const sovetidCategories: Category[] = [
  {
    slug: "vaadliggerlagner",
    name: "Vådliggerlagner",
    regex: "Vådliggerlagner|Vådliggerlagen|Vådligge",
  },
  {
    slug: "lagner",
    name: "Lagner",
    regex: "Lagner|Stræklagen|Stræklagner",
  },
  {
    slug: "madrasser",
    name: "Madrasser",
    regex: "Madras|Pinolino",
  },
  {
    slug: "vugger",
    name: "Vugger",
    regex: "Vugge|Slyngevugge|Vuggemotor|Tilbehør til slyngevugge",
  },
  {
    slug: "sengerand",
    name: "Sengerand",
    regex:
      "For babies | for babies|Sengerand|Sengerandsslange|Stokke Sleepi|Sengerende",
  },
  {
    slug: "sengetoej",
    name: "Sengetøj",
    regex:
      "Babysengetøj|Juniorsengetøj|Dynebetræk|Sengetøj|Sengesæt|Sengesæt og lagner",
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
      "Kombi-og junior senge|Babyseng|Babysenge|Leander Babysenge|Barneseng|Børneseng|Juniorseng|Boerneseng|Tremmeseng|Voksenseng|Rejsesenge|Sengeudstyr",
  },
  {
    slug: "dyner-og-puder",
    name: "Dyner og Puder",
    regex:
      "Dyne|Dyner|Dyner, puder & tæpper|Dyner og puder|Dyner, puder mm.|Babydyne|Hovedpude|Juniordyne|barnedyne|børnedyne|boernedyne|dundyne|fjerdyne|sovedyne|sengedyne|Baby Bedding|babyhovedpude|Juniorhovedpude|Pude - Budda - Mauve|Pude - Budda - Stormy Sea",
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
];

export const boernevaerelsetCategories: Category[] = [
  ...sovetidCategories,
  ...moeblerCategories,
  ...indretningCategories,
];

export const spisetidServiceCategories: Category[] = [
  {
    slug: "bestik",
    name: "Bestik",
    regex: "Bestik|Cutlery Set|Spoon Set",
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
      "Hagesmække|Dinner Bib|MÅLTIDET > Hagesmække|Service > Hagesmække|Spise & drikke  > Hagesmæk uden navn|Spise & drikke  > Hagesmække|Silikone hagesmæk|Hagesmæk",
  },
  {
    slug: "kopper",
    name: "Kopper",
    regex:
      "Kopper|Tudkop|Krus|Sugerør|Sugerørskoppen|Cup Set|Spise & drikke  > Drikkekop|Drikkekop|Sugerørskoppen",
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
    slug: "drikkedunke-og-madkasser",
    name: "Drikkedunke og madkasser",
    regex: "Drikkedunk|Madkasse",
  },
  {
    slug: "andet-service",
    name: "Andet service",
    regex:
      "Service|Spise-service|Spise & drikke  > Spisesæt baby|Bibs Dinner|Grød|Alt til måltidet|Spise & drikke",
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
    regex:
      "Håndklæde|Badekåber|Hoodie Towel|Poncho|Badeslag|Morgenkåbe|Håndklæder",
  },
  {
    slug: "plejeartikler-til-barn",
    name: "Plejeartikler til barn",
    regex:
      "Babyserien >|K-serien > KRAES junior|Plejemidler|Babyserien|KRAES junior",
  },
  {
    slug: "plejeartikler-til-mor",
    name: "Plejeartikler til mor",
    regex: "Plejeartikler|K-serien",
  },
  {
    slug: "potter-toilet",
    name: "Potter og toiletsæder",
    regex: "Potter|Toilettrænere|Toiletsæde",
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
      "Pacifier Box|Pacifier Case|Sutteboks|Pacifier Clip|Suttesnore|Suttesnor|Bib & Clip Set|Suttetilbehør|Accessories Bundle|Suttetilbehør",
  },
  {
    slug: "sutter",
    name: "Sutter",
    regex: "Sutter|Pacifier|Frigg Sut",
  },
  {
    slug: "tandboerster",
    name: "Tandbørster",
    regex: "Tandbørste",
  },
  {
    slug: "termometer",
    name: "Termometer",
    regex: "Termometer",
  },
  {
    slug: "andet-pleje",
    name: "Andet pleje",
    regex: "Kropspleje|Toilettaske|Cocoon pleje|Personlig pleje",
  },
];

export const pusleCategories: Category[] = [
  {
    slug: "blespande",
    name: "Blespande",
    regex: "Blespand",
  },
  {
    slug: "puslepuder-og-hynder",
    name: "Puslepuder- og hynder",
    regex:
      "Puslepude|Puslehynde|Pusleunderlag|Leander Matty|Puslepuder og betræk",
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
    regex: "Badelegetøj|Badetid|Bath Toys|Badedyr|Gummiand",
  },
  {
    slug: "dukker",
    name: "Dukker",
    regex:
      "Dukke|Barbie|Dukketøj|Bamser, dukker og udstyr|Dukkehuse og tilbehør",
  },
  {
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
    slug: "biler-fly-tog",
    name: "Biler, fly og tog",
    regex:
      " Biler|Legetøjsbil|Flyvemaskine|Tog|Biler, transport og anlæg|Togbaner og tilbehør",
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
    regex: "Bøger|Bøger i stof og træ",
  },
  {
    slug: "figure",
    name: "Figure",
    regex: "Avengers tema|Figur|Actionman|Søde & vilde dyr",
  },
  {
    slug: "gaavogne-ruller-vipper",
    name: "Gåvogne, vipper og rullebræt",
    regex: "Gåbil|Gåvogn|Gå-vogn|Modu|Vippe|Gå og skubbe vogne",
  },
  {
    slug: "kaepheste-og-gyngeheste",
    name: "Kæp- og gyngeheste",
    regex: "Kæp-og gyngeheste",
  },
  {
    slug: "kostumer",
    name: "Kostumer",
    regex: "Kostume|Udklædning|Rollespil og udklædning",
  },
  {
    slug: "kreativ-leg",
    name: "Kreativ leg",
    regex:
      "Kreativ|Modellervoks|Farvelæg|Mosaik|Malebog|Vandfarver|Skrabeark|Maling|Papirsaks|Tavle|Blyanter|Viskelædder|Stempler|Farvekridt|Tusser|Perler og håndarbejde",
  },
  {
    slug: "kuglebane",
    name: "Kuglebaner",
    regex: "Kuglebaner",
  },
  {
    slug: "koekken-og-butik",
    name: "Køkken og butik",
    regex:
      "Køkken|Kitchen|Frugt|Kaffemaskine|Småkage|Legetøjsmad|Bagesæt|Butik|Legekøkken og mad",
  },
  {
    slug: "legetaepper-og-gulve",
    name: "Legetæpper og gulve",
    regex:
      "Legetæppe|Gulv|Legetøjstæpper|Legemadras|Børnetæppe|Legegulv|Aktivitetstæpper",
  },
  {
    slug: "uroer",
    name: "Uroer",
    regex:
      "Uro|Uroer|Handmade baby mobiles|Uro Tilbehør|Spilledåse - Arthur - Bunny|Spilledåse - Ayla - Baby Blue|Spilledåse - Ayla - Fawn|Spilledåse - Luna - Måne",
  },
  {
    slug: "musik",
    name: "Musik",
    regex: "Musik",
  },
  {
    slug: "rangler",
    name: "Rangler",
    regex: "Rangler|Rattle|Rangler & bideringe|Rangle",
  },
  {
    slug: "ringe",
    name: "Ringe",
    regex: "Loops|Bibs Loops",
  },
  {
    slug: "braetspil-og-puslespil",
    name: "Bræt- og puslespil",
    regex: "Brætspil|Puslespil|Puslespil og spil",
  },
  {
    slug: "sanselegetoej",
    name: "Sanselegetøj",
    regex: "Kastemus|Gås - Aron - Cream|Sanse legetøj|Sanselegetøj",
  },
  {
    slug: "traelegetoej",
    name: "Trælegetøj",
    regex: "Trælegetøj|Træmad|Værktøj til børn",
  },

  {
    slug: "aktivitetslegetoej",
    name: "Aktivitetslegetøj",
    regex: "Wobbly Tower|Aktivitetslegetøj",
  },
];

export const legetoejUdendoersCategories: Category[] = [
  {
    slug: "loebecykler-loebehjul",
    name: "Løbehjul, løbecykler",
    regex:
      "Løbehjul|Løbecykel|Cykel|Scooter|Motorcykel|Traktor|Cross|Trailer|Børnecykler|Cykelhjelme|Knæbeskyttere|Løbehjul, cykler og boards",
  },
  {
    slug: "rutsjebane",
    name: "Rutsjebane",
    regex: "Rutsjebane|Rutsjebaner",
  },
  {
    slug: "sand-og-vand",
    name: "Sand og vand",
    regex:
      "Vandpistol|Legetøj til sand og vand|Børnepools|Vandlegetøj|Badebassin|Sandkasser og tilbehør",
  },
  {
    slug: "telte|legehuse",
    name: "Telte og legehuse",
    regex:
      "Telt|Tipi|baby products > baby gear > play tents & shades|Uv-telt|Legehus, telt & Tipi",
  },
  {
    slug: "traekvogne",
    name: "Trækvogne",
    regex: "Trækvogne",
  },
  {
    slug: "andet-udeleg",
    name: "Andet udeleg",
    regex: "Udeleg|Udendørsleg",
  },
];

export const legetoejAndetCategories: Category[] = [
  {
    slug: "andet-legetoej",
    name: "Andet legetøj",
    regex: "Legetøj|Øvrigt legetøj|Small foot|Regne & måle|Hoppedyr|Gynge",
  },
];

export const legetoejCategories: Category[] = [
  ...legetoejUdendoersCategories,
  ...legetoejIndendoersCategories,
  ...legetoejAndetCategories,
];

export const barselOgAmningCategories: Category[] = [
  {
    slug: "graviditets-og-ventetoej",
    name: "Graviditets- og ventetøj",
    regex: "Graviditetstøj|På barsel|Graviditetsundertøj|Ventetøj",
  },
  {
    slug: "baerejakker",
    name: "Bærejakker",
    regex: "Bærejakke",
  },
  {
    slug: "ammeindlaeg",
    name: "Ammeindlæg",
    regex: "Ammeindlæg|Brystskjold",
  },
  {
    slug: "ammebh",
    name: "Amme BH'er",
    regex: "BH|Amning|Amme-BH",
  },
  {
    slug: "ammetoej",
    name: "Ammetøj",
    regex: "Ammetøj|Amme T-shirts|Ammekjoler|Ammetoppe|Ammetrøjer",
  },
  {
    slug: "ammepuder",
    name: "Ammepuder",
    regex: "Ammepude|Graviditetspude|Ammepudebetræk",
  },
  {
    slug: "brystpumper",
    name: "Brystpumper",
    regex: "Brystpumpe|Mælkebeholder|O-ringe|Ventiler|Tilbehør til brystpumpe",
  },
];

export const gaverCategories: Category[] = [
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
  {
    slug: "ravsmykker",
    name: "Ravsmykker",
    regex: "Barselsgaver|Rav",
  },
];

export const categories: Category[] = [
  ...paaTurCategories,
  ...barselOgAmningCategories,
  ...boernevaerelsetCategories,
  ...spisetidOgPlejeCategories,
  ...toejOgSkoCategories,
  ...udstyrCategories,
  ...legetoejCategories,
  ...gaverCategories,

  {
    slug: "diverse",
    name: "Diverse",
    regex: "diverse",
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

export const boernevaerelsetCategorySet: CategorySet = {
  Møbler: { ...moeblerCategories },
  Sovetid: { ...sovetidCategories },
  Indretning: { ...indretningCategories },
};

export const udstyrCategoriesSet: CategorySet = {
  Udstyr: { ...udstyrCategories },
};

export const spisetidOgPlejeCategoriesSet: CategorySet = {
  Spisetid: { ...spisetidServiceCategories },
  Pleje: { ...plejeCategories },
  Pusle: { ...pusleCategories },
};

export const legetoejCategorySet: CategorySet = {
  Indendørs: { ...legetoejIndendoersCategories },
  Udendørs: { ...legetoejUdendoersCategories },
  Andet: { ...legetoejAndetCategories },
};

export const barselOgVentetidCategoriesSet: CategorySet = {
  "Barsel og amning": { ...barselOgAmningCategories },
};

export const gaverCategoriesSet: CategorySet = {
  Gaver: { ...gaverCategories },
};
