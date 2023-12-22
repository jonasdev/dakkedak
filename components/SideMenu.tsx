import React, { useEffect, useState } from "react";
import SideMenuButton from "./SideMenuButton";
import classNames from "classnames";
import { ReactNode } from "react";
import AppLink from "./AppLink";
import {
  IconHeart,
  IconHeartHandshake,
  IconListCheck,
  IconTag,
} from "@tabler/icons-react";
import { ICategoryList } from "./Navbar";
import CategoryAccordion from "./CategoryAccordion";

type Props = {
  categoryLists: Array<ICategoryList>;
};

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
        <div className="flex h-full max-h-[90%] overflow-y-scroll w-full flex-col items-start z-40 space-y-12 text-3xl text-white">
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
          </div>
          <div className="p-4">
            <AppLink
              href="/brands"
              icon={
                <span className="relative inline-block">
                  <IconTag />
                </span>
              }
              text="Mærker"
              onClickAction={toggleSidebar}
            />
            <AppLink
              href="/partnere"
              icon={
                <span className="relative inline-block">
                  <IconHeartHandshake />
                </span>
              }
              text="Partnere"
              onClickAction={toggleSidebar}
            />
            <AppLink
              href="/tjekliste"
              icon={
                <span className="relative inline-block">
                  <IconListCheck />
                </span>
              }
              text="Tjekliste"
              onClickAction={toggleSidebar}
            />
            <AppLink
              href="/favoritter"
              icon={<IconHeart />}
              text="Favoritter"
              mode="light"
              onClickAction={toggleSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
