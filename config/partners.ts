import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

// Mangler:
// - Babysam (A)
// - Moonboon (A)
// - Buump (A)
// - Cuubis (A)
// - House of Kids (A)
// - Kids-world.dk ? (A)
// - Legekæden ? (A)
// - Lillekanin.dk (A)
// - Luksusbaby (A)
// - Mammashop.dk ? (A)
// - Sansegynge.dk (A)
// - Smartkidz (A)
// - That´s Mine (A)

export const partnerFeeds = [
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=102750&feedid=3055", // BIBS
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=58100&feedid=1059", // ByHappyMe
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=105813&feedid=3269", // Junama
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=91977&feedid=2415", // Kraes
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=76492&feedid=1748", // Kære børn
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=104520&feedid=3182", // Lillenordic
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=106557&feedid=3317", // Littleroom
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=45423&feedid=607", // MamMilla
  "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=73271&feedid=1604", // SagaCopenhagen
  // "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=88629&feedid=2219", // Babadut -> Trælse produkter og kategorier
  // "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=95113&feedid=2582", // LittleNap -> IKKE ANVENDT (Produkter virker ikke)
  // "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=97595&feedid=2716", // Zleepii -> Udgået!!!
  // "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=50033&bannerid=99931&feedid=2857", // Slyngevenner - Grimme billeder
];

export type Partner = {
  name: string;
  href: string | Url;
  description: string;
  image: string | ReactNode;
};

export const partners: Array<Partner> = [
  {
    name: "Babadut",
    description:
      "Børne- og familie webshop, med bl.a. kreative og personificerede produkter.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=88630",
    image: "/babadut.png",
  },
  {
    name: "BIBS",
    description:
      "På bibsworld.com giver vi dig vores komplette sortiment af farverige sutter af høj kvalitet og andre babyprodukter. BIBS er en dansk virksomhed etableret i 1978 med skandinaviske designværdier og æstetik.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=102895",
    image: "/bibs.png",
  },
  {
    name: "Byhappyme",
    description:
      "Byhappyme.com sælger navnemærker, navnesutter og bestik med navn. Det er sjove, brugbare produkter til babyer og børn som har høj kvalitet til en lav pris. Det fungerer enormt godt til mødre og bedstemødre.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=57445",
    image: "/byhappyme.png",
  },
  {
    name: "Junama",
    description:
      "Junama Scandinavia er et nyt barnevognsbrand, som har eksisteret i Danmark siden 2021. Junama sælger kombivogne (2in1), som er barnevogn & klapvogn i én. Det specielle ved Junama er design, funktionalitet og kvalitet. Skil dig ud af mængden med Junama.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=99593",
    image: "/junama.jpg",
  },
  {
    name: "Kraes",
    description:
      "Vi brænder for naturlig, økologisk og gennemført hudpleje til både baby og barn - 100% fri for skidt kemi.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=91980",
    image: "/kraes.png",
  },
  {
    name: "KÆRE BØRN",
    description:
      "I KÆRE BØRNS webshop finder du en lang række kendte mærker til børn og babyer. Vi har alt fra barnevogne til børnemøbler. Gratis levering til pakkeshop ved køb over 499,- og altid til en af vores mange butikker. Varer sendes til hele Danmark",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=76495",
    image: "/kaere_boern.png",
  },
  {
    name: "Lillenordic",
    description:
      "Elektrisk, hånd- og ledningsfri brystpumpe i stilrent design. Giver ammende mødre mere bevægelsesfrihed i hverdagen.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=104522",
    image: "lillenordic.png",
  },
  {
    name: "LittleNap",
    description:
      "LittleNap.dk forhandler en vægtede sovepose til børn i alderen 0-2år og er et revolutionerende produkt for forældre såvel som de små. Produktet simulere følelsen af en mors hånd, og er allerede elsket af 500+ mødre i landet.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=95124",
    image: "little_nap.png",
  },
  {
    name: "Littleroom",
    description:
      "Littleroom er nordisk design til børneværelset. Find mange gode ting til børn: Tipi telte, sengetøj, uroer, legetæppe og indretning m.v. Gode (og flotte) gaver til dåb, fødselsdag og babyshower. I nordiske farver som passer til moderne indretning.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=82975",
    image: "little_room.png",
  },
  {
    name: "MamaMilla",
    description:
      "MamaMilla.dk er en shop som sælger babyudstyr, graviditetstøj og andet man har brug for som gravid og med en nyfødt baby. Vi kører ofte gode kampagner og giver ofte kunderne en gave med, hvis de køber over et vist beløb. Vi har også vores eget brand.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=45425",
    image: "/mamamilla.png",
  },
  {
    name: "Saga Copenhagen",
    description:
      "Saga Copenhagen er et lækkert Dansk Baby brand der sælger 100% Økologiske og GOTS-certificeret tekstil produkter til Mor og barn. Hjælp os med at sprede vores brand ud til de Danske mødre og dermed øge vores salg i Danmark.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=73273",
    image: "/saga_copenhagen.png",
  },
  {
    name: "Slyngevenner",
    description:
      "Salg af bæreseler, vikler og slynger, samt diverse tilbehør. Du finder bl.a. slyngevugger, køreposer, bæreseler, sutter, suttesnore, bideringe, ammekæder, ravæder, moderne stofbleer, bærejakker, og meget andet.",
    href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=99941",
    image: "/slyngevenner.png",
  },
  //   {
  //     name: "Zleepii",
  //     description:
  //       "Zleepii hjælper spædbørn - og deres forældre - med at få en bedre søvn. Zleepii producerer og forhandler markedets kraftigste vuggemotor, 100% økologiske slyngevugger, tyngdesoveposer og meget andet, som hjælper spædbørn med at sove bedre.",
  //     href: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=97618",
  //   },
];

// export const partners: Record<string, string> = {
//   BIBS: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=102895", // BIBS
//   // "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=97618", // Zleepii -> Udgået!!!
//   "Kære børn":
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=76495", // Kære børn
//   Kraes:
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=91980", // Kraes
//   Junama:
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=99593", // Junama
//   MamaMilla:
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=45425", // MamMilla
//   "Saga Copenhagen":
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=73273", // SagaCopenhagen
//   Babdut:
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=88630", // Babadut
//   Littleroom:
//     "https://www.partner-ads.com/dk/klikbanner.php?partnerid=50033&bannerid=82975", // Littleroom
// };
