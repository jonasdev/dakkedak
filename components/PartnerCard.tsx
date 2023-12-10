import { Partner } from "@/config/partners";
import React from "react";
import Button from "./Button";

type Props = {
  partner: Partner;
};

export default function PartnerCard({ partner }: Props) {
  if (!partner) return null;

  const { name, description, href, image } = partner;
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-lg min-w-full bg-white shadow-xl p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary to-primary-dark"></span>

      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
        </div>

        <div className="">
          <img alt={name} src={image} className="h-auto object-contain w-28" />
        </div>
      </div>

      <div className="">
        <p className="max-w-[40ch] text-sm text-gray-500 line-clamp-3 break-words">
          {description}
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-4 sm:gap-6">
        <Button href={href} text="Gå til forhandler" newTab />
      </div>
    </div>
  );
}