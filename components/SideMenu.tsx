import React, { useEffect, useState } from "react";
import SideMenuButton from "./SideMenuButton";
import classNames from "classnames";
import { ReactNode } from "react";
import AppLink from "./AppLink";
import {
  IconDots,
  IconHeart,
  IconHeartHandshake,
  IconListCheck,
  IconTag,
} from "@tabler/icons-react";
import { ICategoryList } from "./Navbar";
import CategoryAccordion from "./CategoryAccordion";
import Link from "next/link";

type Props = {
  categoryLists: Array<ICategoryList>;
};

function SideMenuAppLink() {
  return;
}

export default function SideMenu({ categoryLists }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <div className="relative lg:hidden">
      <div className="flex items-center space-x-4">
        <SideMenuButton toggled={isOpen} setToggled={toggleSidebar} />
      </div>

      <div
        className={classNames(
          isOpen ? "opacity-40" : "opacity-0",
          "pointer-events-none fixed inset-0 z-40 bg-black duration-700 ease-in-out"
        )}
        onClick={toggleSidebar}
      />
      <div
        className={`bg-primary flex items-end min-h-full fixed right-0 top-0 z-40 h-screen w-4/5 transform shadow-md transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full overflow-y-scroll sm:overflow-hidden pt-16 pb-40 w-full flex-col items-start z-40 space-y-12 text-3xl text-white">
          <div className="w-full space-y-2">
            {categoryLists.map((list) => (
              <CategoryAccordion
                categoryList={list}
                isActive={activeCategory === list.title}
                setIsActive={setActiveCategory}
                onPageChange={toggleSidebar}
                key={list.title}
              />
            ))}
            <Link
              href="/diverse"
              className="text-lg flex items-center px-4 mb-4"
              onClick={toggleSidebar}
            >
              <IconDots className="mr-2" />
              Diverse
            </Link>
            <div className="px-4">
              <div className="space-y-6 border-t pt-6">
                <Link
                  href="/favoritter"
                  className="text-lg flex items-center"
                  onClick={toggleSidebar}
                >
                  <IconHeart className="mr-2" />
                  Favoritter
                </Link>
                <Link
                  href="/brands"
                  className="text-lg flex items-center"
                  onClick={toggleSidebar}
                >
                  <IconTag className="mr-2" />
                  Mærker
                </Link>
                <Link
                  href="/partnere"
                  className="text-lg flex items-center"
                  onClick={toggleSidebar}
                >
                  <IconHeartHandshake className="mr-2" />
                  Partnere
                </Link>
                <Link
                  href="/tjekliste"
                  className="text-lg flex items-center"
                  onClick={toggleSidebar}
                >
                  <IconListCheck className="mr-2" />
                  Tjekliste
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
