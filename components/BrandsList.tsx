import { beautifyUrl } from "@/utils/beautifyUrl";
import Link from "next/link";
import { useRef } from "react";
import AppLink from "./AppLink";

type Props = {
  brands: string[];
};

export default function BrandsList({ brands }: Props) {
  const uniqueBrands: string[] = brands.reduce(
    (unique: string[], brand: string) => {
      if (brand !== undefined) {
        const lowercaseBrand = brand.toLowerCase();
        const isDuplicate = unique.some(
          (existingBrand) => existingBrand.toLowerCase() === lowercaseBrand
        );
        if (!isDuplicate) {
          unique.push(brand);
        }
      }
      return unique;
    },
    []
  );

  // Sort unique brands alphabetically
  const sortedBrands: string[] = uniqueBrands.sort((a: string, b: string) =>
    a.localeCompare(b)
  );

  const brandsByLetter: { [key: string]: string[] } = sortedBrands.reduce(
    (acc: { [key: string]: string[] }, brand: string) => {
      const firstLetter = brand.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(brand);
      return acc;
    },
    {}
  );

  const navRef = useRef<HTMLUListElement>(null);

  const scrollToLetter = (letter: string) => {
    const section = document.getElementById(`brandSection-${letter}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center lg:w-10/12 pt-10">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        Mærker
      </h1>
      <div className="flex text-start flex-col w-11/12 md:w-5/6 xl:w-1/2 space-y-4 mb-8">
        <p>
          Babyhaj tilbyder et nøje udvalgt udvalg af mærker og brands. Hvert
          brand, vi præsenterer, er en del af vores løfte om at sikre, at du som
          forælder har adgang til produkter af høj kvalitet, der kan ledsage dit
          barns vækst og udvikling på en positiv måde.
        </p>
        <p>
          Udforsk produkter fra et givent brand ved at klikke på en af
          valgmulighederne nedenfor.
        </p>
      </div>
      <div className="w-full p-14 relative">
        <div className="flex h-full flex-row lg:flex-col justify-between">
          <div className="flex absolute right-0 top-5 sm:static justify-center order-last lg:order-first mr-2 lg:mr-0 h-fit">
            <div className="bg-primary text-white text-sm lg:text-lg p-2 rounded mb-10 w-fit">
              {/* Navbar to scroll to each letter section */}
              <ul
                className="list-none flex flex-col px-4 space-y-2 lg:space-y-0 items-center lg:flex-row p-0 lg:space-x-4"
                ref={navRef}
              >
                {Object.keys(brandsByLetter).map((letter) => (
                  <li key={letter} className="inline">
                    <button onClick={() => scrollToLetter(letter)}>
                      {letter}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:p-10 space-y-8">
            {/* Render sections for each letter */}
            {Object.entries(brandsByLetter).map(([letter, brands]) => (
              <div key={`brandSection-${letter}`} id={`brandSection-${letter}`}>
                <h3 className="text-xl font-bold mb-4">{letter}</h3>
                <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-2">
                  {brands.map((brand, index) => {
                    const beautyfiedBrand = beautifyUrl(brand);
                    return (
                      <li key={index} className="mb-3">
                        {/* <Link
                        href={`/brands/${beautyfiedBrand}`}
                        className="underline underline-offset-4 decoration-dotted"
                      >
                        {brand}
                      </Link> */}
                        <AppLink
                          href={`/brands/${beautyfiedBrand}`}
                          text={brand}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
