import React, { ReactNode } from "react";
import AppLink from "./AppLink";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
import {
  IconAddressBook,
  IconChecklist,
  IconCookie,
  IconHeart,
  IconHeartHandshake,
  IconListCheck,
  IconMapCode,
  IconMessage2,
  IconPrismOff,
  IconTag,
  IconTextCaption,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";

type FooterLink = {
  href: string;
  text: string;
  icon?: JSX.Element;
};

type FooterLinkProps = {
  links: FooterLink[];
  title: string;
};

function FooterList({ links, title }: FooterLinkProps) {
  return (
    <div className="flex flex-col items-start">
      <p className="font-medium text-gray-900">{title}</p>

      <div className="mt-6 space-y-3 flex flex-col text-sm text-start">
        {links.map(({ href, text, icon }) => (
          <AppLink href={href} text={text} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white rounded-t-3xl w-full">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 sm:py-16 py-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex justify-center sm:just items-center">
          <Image alt="hdr-logo" src="/logo.svg" height={125} width={250} />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-x-10 lg:gap-x-40 border-t border-gray-100 pt-8 lg:pt-12">
            <FooterList
              title="Babyhaj"
              links={[
                {
                  href: "/om",
                  text: "Om os",
                  icon: <IconUserCircle size={16} />,
                },
                {
                  href: "/partnere",
                  text: "Partnere",
                  icon: <IconHeartHandshake size={16} />,
                },
                {
                  href: "/maerker",
                  text: "Mærker",
                  icon: <IconTag size={16} />,
                },
              ]}
            />

            <FooterList
              title="Hjælp"
              links={[
                {
                  href: "/favoritter",
                  text: "Favoritter",
                  icon: <IconHeart size={16} />,
                },
                {
                  href: "/tjekliste",
                  text: "Tjekliste",
                  icon: <IconListCheck size={16} />,
                },
                {
                  href: "/blog",
                  text: "Blog",
                  icon: <IconTextCaption size={16} />,
                },
                {
                  href: `mailto:${["bvoelund", "@", "hotmail.com"].join("")}`,
                  text: "Kontakt",
                  icon: <IconAddressBook size={16} />,
                },
              ]}
            />
            <FooterList
              title="Teknisk"
              links={[
                {
                  href: "/cookies",
                  text: "Cookies",
                  icon: <IconCookie size={16} />,
                },
                {
                  href: "/sitemap.xml",
                  text: "Sitemap",
                  icon: <IconMapCode size={16} />,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="px-4 pb-3 flex justify-center">
        <p className="text-xs text-gray-500">
          Vi samarbejder med en række firmaer, og henviser til disse gennem
          affiliate links.
        </p>
      </div>
    </footer>
  );
}
