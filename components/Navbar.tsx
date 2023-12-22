import Link from "next/link";
import Image from "next/image";
import {
  IconBabyBottle,
  IconBed,
  IconBriefcase,
  IconBriefcase2,
  IconClock,
  IconDeviceMobile,
  IconDots,
  IconGift,
  IconHeart,
  IconHeartHandshake,
  IconHorseToy,
  IconListCheck,
  IconLuggage,
  IconMoodHeart,
  IconShirt,
  IconSoup,
  IconTag,
  IconTree,
  IconZzz,
} from "@tabler/icons-react";
import AppLink, { AppLinkProps } from "./AppLink";
import SideMenu from "./SideMenu";
import { FavoriteItem } from "./FavoriteButton";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import CategoryList from "./CategoryList";
import {
  Category,
  CategorySet,
  barselOgVentetidCategoriesSet,
  boernevaerelsetCategorySet,
  gaverCategoriesSet,
  legetoejCategorySet,
  moeblerCategorySet,
  paaTurCategorySet,
  spisetidOgPlejeCategoriesSet,
  toejOgSkoCategorySet,
  udstyrCategoriesSet,
} from "@/config/categories";

export interface ICategoryList {
  title: string;
  categorySet: CategorySet;
  icon?: JSX.Element;
}

export default function Navbar() {
  // const links: Array<AppLinkProps> = [
  //   { href: "#", text: "På farten", icon: <IconCar /> },
  //   { href: "#", text: "Spisetid", icon: <IconSoup /> },
  //   { href: "#", text: "Sovetid", icon: <IconZzz /> },
  //   { href: "/toej-og-sko", text: "Tøj og sko", icon: <IconShirt /> },
  //   { href: "#", text: "Amning", icon: <IconBabyBottle /> },
  //   { href: "#", text: "Ventetid og barsel", icon: <IconClock /> },
  //   { href: "#", text: "Legetøj", icon: <IconHorseToy /> },
  //   { href: "#", text: "Grej", icon: <IconDeviceMobile /> },
  //   { href: "#", text: "Pleje", icon: <IconMedicineSyrup /> },
  //   { href: "/diverse", text: "Diverse", icon: <IconDots /> },
  // ];

  const categoryLists: Array<ICategoryList> = [
    {
      categorySet: paaTurCategorySet,
      title: "På tur",
      icon: <IconTree />,
    },
    {
      categorySet: toejOgSkoCategorySet,
      title: "Tøj og sko",
      icon: <IconShirt />,
    },
    {
      categorySet: boernevaerelsetCategorySet,
      title: "Børneværelset",
      icon: <IconBed />,
    },
    {
      categorySet: udstyrCategoriesSet,
      title: "Udstyr",
      icon: <IconBriefcase2 />,
    },
    {
      categorySet: spisetidOgPlejeCategoriesSet,
      title: "Spisetid og pleje",
      icon: <IconMoodHeart />,
    },
    {
      categorySet: legetoejCategorySet,
      title: "Legetid",
      icon: <IconHorseToy />,
    },
    {
      categorySet: barselOgVentetidCategoriesSet,
      title: "Barsel og amning",
      icon: <IconClock />,
    },
    {
      categorySet: gaverCategoriesSet,
      title: "Gaver",
      icon: <IconGift />,
    },

    // { href: "#", text: "På farten", icon: <IconCar /> },
    // { href: "#", text: "Spisetid", icon: <IconSoup /> },
    // { href: "#", text: "Sovetid", icon: <IconZzz /> },
    // { href: "/toej-og-sko", text: "Tøj og sko", icon: <IconShirt /> },
    // { href: "#", text: "Amning", icon: <IconBabyBottle /> },
    // { href: "#", text: "Ventetid og barsel", icon: <IconClock /> },
    // { href: "#", text: "Legetøj", icon: <IconHorseToy /> },
    // { href: "#", text: "Grej", icon: <IconDeviceMobile /> },
    // { href: "#", text: "Pleje", icon: <IconMedicineSyrup /> },
    // { href: "/diverse", text: "Diverse", icon: <IconDots /> },
  ];

  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);
  const [favoriteItemsCnt, setFavoriteItemsCnt] = useState(0);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteItemsArray = JSON.parse(favorites) as FavoriteItem[];
      setFavoriteItems(favoriteItemsArray);
    }
  }, []);

  useEffect(() => {
    setFavoriteItemsCnt(favoriteItems.length);
  }, [favoriteItems]);

  return (
    <nav className="w-full px-6 py-5 transition-all delay-75 duration-500 ease-out bg-inherit bg-opacity-95 z-30 rounded-b-3xl lg:px-12 lg:py-8">
      <div className="flex w-full items-center justify-between mb-6">
        <Link href="/">
          <Image alt="hdr-logo" src="/logo.svg" height={100} width={250} />
        </Link>

        <div className="lg:flex items-center hidden">
          <Searchbar />
        </div>
        <div className="lg:flex items-center space-x-6 hidden">
          <AppLink
            href="/brands"
            icon={
              <span className="relative inline-block">
                <IconTag />
              </span>
            }
            text="Mærker"
          />
          <AppLink
            href="/partnere"
            icon={
              <span className="relative inline-block">
                <IconHeartHandshake />
              </span>
            }
            text="Partnere"
          />
          <AppLink
            href="/tjekliste"
            icon={
              <span className="relative inline-block">
                <IconListCheck />
              </span>
            }
            text="Tjekliste"
          />
          <AppLink
            href="/favoritter"
            icon={
              <span className="relative inline-block">
                <IconHeart />
                {/* {favoriteItemsCnt > 0 && (
                  <span className="absolute not-italic -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-dark rounded-full">
                    {favoriteItemsCnt}
                  </span>
                )} */}
              </span>
            }
            text="Favoritter"
          />
        </div>
        <SideMenu categoryLists={categoryLists} />
      </div>
      <div className="flex justify-center border-t-2 border-gray-300">
        <div className="hidden lg:block">
          <div className="flex flex-wrap justify-center items-center space-x-6 mt-4">
            {categoryLists.map((list, key) => (
              <CategoryList
                categoryList={list}
                key={list.title}
                navbarIdnex={key}
              />
            ))}
            <AppLink href="/diverse" icon={<IconDots />} text="Diverse" />
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
