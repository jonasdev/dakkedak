import { IconBabyBottle, IconFish, IconHeart } from "@tabler/icons-react";
import React from "react";
import AppLink from "./AppLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white rounded-t-3xl w-full">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image alt="hdr-logo" src="/logo.svg" height={125} width={250} />

          {/* <span className="flex items-center">
            Alt til dit barn{" "}
            <IconHeart className="ml-1 fill-primary stroke-primary" size={16} />
          </span> */}
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">Babyhaj</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <AppLink href="/" text="Om os" />
              </li>
              <li>
                <AppLink href="/" text="Om os" />
              </li>

              <li>
                <AppLink href="/" text="Om os" />
              </li>

              <li>
                <AppLink href="/" text="Om os" />
              </li>
              <li>
                <AppLink href="/" text="Om os" />
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Kategorier</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <AppLink href="/" text="Partner" />
              </li>

              <li>
                <AppLink href="/" text="Partner" />
              </li>

              <li>
                <AppLink href="/" text="Partner" />
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Hjælp</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <AppLink href="/" text="Kontakt" />
              </li>

              <li>
                <AppLink href="/" text="FAQs" />
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Partnere</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <AppLink href="/" text="Partner" />
              </li>

              <li>
                <AppLink href="/" text="Partner" />
              </li>

              <li>
                <AppLink href="/" text="Partner" />
              </li>

              <li>
                <AppLink href="/" text="Partner" />
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Vi samarbejder med en række firmaer, og henviser til disse gennem
          affiliate links.
        </p>
      </div>
    </footer>
  );
}
