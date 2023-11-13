import Link from "next/link";
import Image from "next/image";
import {
  IconBabyBottle,
  IconBabyCarriage,
  IconCar,
  IconClock,
  IconDeviceMobile,
  IconDots,
  IconHeart,
  IconHorseToy,
  IconMedicineSyrup,
  IconShirt,
  IconSoup,
  IconZzz,
} from "@tabler/icons-react";
import AppLink, { NavLinkProps } from "./AppLink";
import SideMenu from "./SideMenu";
import { FavoriteItem } from "./FavoriteButton";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searchbar2 from "./Searchbar2";

export default function Navbar() {
  const links: Array<NavLinkProps> = [
    { href: "/barnevogne", text: "På tur", icon: <IconBabyCarriage /> },
    { href: "#", text: "På farten", icon: <IconCar /> },
    { href: "#", text: "Spisetid", icon: <IconSoup /> },
    { href: "#", text: "Sovetid", icon: <IconZzz /> },
    { href: "/toej-og-sko", text: "Tøj og sko", icon: <IconShirt /> },
    { href: "#", text: "Amning", icon: <IconBabyBottle /> },
    { href: "#", text: "Ventetid og barsel", icon: <IconClock /> },
    { href: "#", text: "Legetøj", icon: <IconHorseToy /> },
    { href: "#", text: "Grej", icon: <IconDeviceMobile /> },
    { href: "#", text: "Pleje", icon: <IconMedicineSyrup /> },
    { href: "#", text: "Diverse", icon: <IconDots /> },
  ];

  const [favoriteItemsCount, setFavoriteItemsCount] = useState(0);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log("Called");

      if (e.key === "favorites") {
        const updatedFavorites = JSON.parse(
          e.newValue || "[]"
        ) as FavoriteItem[];
        setFavoriteItemsCount(updatedFavorites.length);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="w-full px-6 py-5 transition-all delay-75 duration-500 ease-out bg-inherit bg-opacity-95 z-30 rounded-b-3xl lg:px-12 lg:py-8">
      <div className="flex w-full items-center justify-between mb-6">
        <Link href="/">
          <Image alt="hdr-logo" src="/logo.svg" height={100} width={250} />
        </Link>
        <div className="lg:flex items-center hidden">
          <Searchbar />
        </div>
        <div className="lg:flex items-center space-x-4 hidden">
          <AppLink
            href="/favoritter"
            icon={
              <span className="relative inline-block">
                <IconHeart />
                {favoriteItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-dark rounded-full">
                    {favoriteItemsCount}
                  </span>
                )}
              </span>
            }
            text="Favoritter"
          />
        </div>
        <SideMenu links={links} />
      </div>
      <div className="flex justify-center border-t-2 border-gray-300">
        <div className="hidden lg:block">
          <div className="flex flex-wrap space-y-2 justify-center items-center space-x-12 mt-4">
            {links.map((link) => (
              <span key={`${link.href}+${link.text}`}>
                <AppLink {...link} />{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
