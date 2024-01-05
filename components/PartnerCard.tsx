import { Partner } from "@/config/partners";
import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {
  partner: Partner;
};

export default function PartnerCard({ partner }: Props) {
  if (!partner) return null;

  const { name, description, href, image } = partner;
  return (
    <div className="relative grid grid-rows-3 grid-cols-1 overflow-hidden rounded-lg min-w-full bg-white shadow-xl p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary to-primary-dark"></span>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
        </div>

        <div className="">
          <Image alt={name} src={image} className="h-14 object-contain w-28" />
        </div>
      </div>

      <div className="">
        <p className="max-w-[40ch] text-sm text-gray-500 line-clamp-3 break-words">
          {description}
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-4 sm:gap-6">
        <Button href={href} text="Besøg forhandler" newTab />
      </div>
    </div>
  );
}
