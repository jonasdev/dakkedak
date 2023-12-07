import { useRef } from "react";

type Props = {
  brands: string[];
};

export default function BrandsList({ brands }: Props) {
  const brandsByLetter: { [key: string]: string[] } = brands.reduce(
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
    <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        Mærker
      </h1>
      <div className="flex relative h-full flex-row lg:flex-col">
        <div className="flex sticky right-0 top-5 justify-center order-last lg:order-first mr-2 lg:mr-0 h-fit">
          <div className="bg-primary text-white text-sm lg:text-lg p-2 rounded mb-10 w-fit">
            {/* Navbar to scroll to each letter section */}
            <ul
              className="list-none flex flex-col space-y-2 lg:space-y-0 items-center lg:flex-row p-0 lg:space-x-4"
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
        <div className="w-full p-10 space-y-8">
          {/* Render sections for each letter */}
          {Object.entries(brandsByLetter).map(([letter, brands]) => (
            <div key={`brandSection-${letter}`} id={`brandSection-${letter}`}>
              <h3 className="text-xl font-bold">{letter}</h3>
              <ul>
                {brands.map((brand, index) => (
                  <li key={index}>{brand}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
