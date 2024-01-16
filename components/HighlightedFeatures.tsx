import {
  IconHeart,
  IconListCheck,
  IconMoodHappy,
  IconMoodTongue,
} from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  linkText: string;
  flipped?: boolean;
};

function FeatureDescription({
  description,
  icon,
  title,
  link,
  linkText,
  flipped = false,
}: Props) {
  return (
    <div className="lg:w-3/5 md:w-4/5 w-full">
      <div className="flex lg:flex-row lg:gap-x-20 lg:gap-y-0 gap-y-4 p-5 lg:p-0 justify-center items-center flex-col w-full">
        <div
          className={classNames(
            flipped ? "lg:order-last" : "order-first",
            "flex  flex-wrap flex-col lg:w-96"
          )}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center lg:text-start">
            {title}
          </h2>
          <span className="mb-4">{description}</span>
          <Link
            href={link}
            className="underline mb-6 lg:mb-0 underline-offset-4 font-semibold lg:hover:text-gray-600 active:text-gray-600 text-center lg:text-start"
          >
            {linkText}
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-40 h-40 rounded-full shadow-2xl -rotate-45 flex justify-center items-center">
            <span
              className={classNames(
                flipped ? "rotate-12" : "rotate-[57deg]",
                "stroke-slate-900"
              )}
            >
              {icon}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HighlightedFeatures() {
  return (
    <section className="relative bg-[#DFC9BE] flex flex-col lg:gap-y-32 gap-y-14 items-center justify-center py-24">
      <IconMoodHappy className="absolute hidden h-auto w-20 rotate-12 text-slate-700 opacity-40 right-24 bottom-12 lg:block" />
      <IconMoodTongue className="absolute hidden h-auto w-32 -rotate-12 text-slate-700 opacity-40 left-12 top-12 lg:block" />
      <FeatureDescription
        description="Hvis du finder et produkt du godt kan lide, kan du tilføje den til
              din favoritliste. Så kan du nemt finde det igen næste gang du
              besøger siden."
        icon={<IconHeart size={80} />}
        title="Gem dine favorit produkter"
        link="/favoritter"
        linkText="Se dine favoritter"
      />
      <FeatureDescription
        description="Har du brug for at få planlagt alle køb til din baby? Brug vores smarte tjekliste
                 funktion hvor du nemt kan organisere dine indkøb."
        icon={<IconListCheck size={80} />}
        title="Lav din egen tjekliste - Kommer snart!"
        link="/tjekliste"
        linkText="Se din tjekliste"
        flipped
      />
    </section>
  );
}
