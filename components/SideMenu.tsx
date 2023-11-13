import React, { useEffect, useState } from "react";
import SideMenuButton from "./SideMenuButton";
import classNames from "classnames";
import { ReactNode } from "react";
import AppLink, { NavLinkProps } from "./AppLink";
import { IconHeart } from "@tabler/icons-react";

type Props = {
  links: Array<NavLinkProps>;
};

export default function SideMenu({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        className={`bg-primary fixed right-0 top-0 z-40 h-screen w-4/5 transform shadow-md transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center z-40 space-y-12 text-3xl text-white">
          <AppLink href="/favoritter" icon={<IconHeart />} text="Favoritter" />
          {links.map((link) => (
            <span key={link.href}>
              <AppLink {...link} mode="light" onClickAction={toggleSidebar} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
