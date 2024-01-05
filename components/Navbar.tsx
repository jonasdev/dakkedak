import Link from "next/link";
import Image from "next/image";
import {
  IconBed,
  IconBriefcase2,
  IconClock,
  IconDots,
  IconHeart,
  IconHeartHandshake,
  IconHorseToy,
  IconMoodHeart,
  IconShirt,
  IconTag,
  IconTree,
} from "@tabler/icons-react";
import AppLink from "./AppLink";
import SideMenu from "./SideMenu";
import Searchbar from "./Searchbar";
import CategoryList from "./CategoryList";
import {
  CategorySet,
  barselOgVentetidCategoriesSet,
  boernevaerelsetCategorySet,
  legetoejCategorySet,
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
  ];

  return (
    <nav className="w-full px-6 py-5 transition-all delay-75 duration-500 ease-out bg-inherit bg-opacity-95 z-30 rounded-b-3xl lg:px-12 lg:py-8">
      <div className="flex w-full items-center justify-between mb-6">
        <Link href="/" className="hidden xl:block">
          <Image alt="hdr-logo" src="/logo.svg" height={100} width={250} />
        </Link>
        <Link href="/" className="xl:hidden block">
          <Image alt="hdr-logo" src="/logo.svg" height={100} width={200} />
        </Link>

        <div className="lg:flex items-center hidden">
          <Searchbar />
        </div>
        <div className="lg:flex items-center space-x-6 hidden">
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
            href="/brands"
            icon={
              <span className="relative inline-block">
                <IconTag />
              </span>
            }
            text="Mærker"
          />
          {/* <AppLink
            href="/tjekliste"
            icon={
              <span className="relative inline-block">
                <IconListCheck />
              </span>
            }
            text="Tjekliste"
          /> */}
          <AppLink
            href="/favoritter"
            icon={
              <span className="relative inline-block">
                <IconHeart />
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
