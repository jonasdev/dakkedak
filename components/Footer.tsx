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
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-12">
          <div className="flex flex-col items-start">
            <p className="font-medium text-gray-900">Babyhaj</p>

            <div className="mt-6 space-y-3 flex flex-col text-sm text-start">
              <AppLink href="/" text="Om os" />
              <AppLink href="/partnere" text="Partnere" />
              <AppLink href="/maerker" text="Mærker" />
              <AppLink href="/cookies" text="Cookies" />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="font-medium text-gray-900">Hjælp</p>

            <div className="mt-6 space-y-3 flex flex-col text-sm text-start">
              <AppLink href="/partnere" text="Favoritter" />
              <AppLink href="/maerker" text="Tjekliste" />
              <AppLink href="/cookies" text="FAQs" />
              <AppLink href="/blog" text="Blog" />
            </div>
          </div>

          {/* <div className="flex flex-col items-start">
            <p className="font-medium text-gray-900">Hjælp</p>

            <div className="mt-6 space-y-3 flex flex-col text-sm text-start">
              <AppLink href="/partnere" text="Favoritter" />
              <AppLink href="/maerker" text="Tjekliste" />
              <AppLink href="/cookies" text="FAQs" />
              <AppLink href="/blog" text="Blog" />
            </div>
          </div> */}

          {/* <div className="flex flex-col items-start">
            <p className="font-medium text-gray-900">Partnere</p>

            <div className="mt-6 space-y-3 flex flex-col text-sm text-start">
              <AppLink href="/partnere" text="X" />
              <AppLink href="/maerker" text="X" />
              <AppLink href="/cookies" text="X" />
              <AppLink href="/blog" text="X" />
            </div>
          </div> */}
        </div>

        <p className="text-xs text-gray-500">
          Vi samarbejder med en række firmaer, og henviser til disse gennem
          affiliate links.
        </p>
      </div>
    </footer>
  );
}
