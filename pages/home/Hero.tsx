import React from "react";
import Image from "next/image";
import { IconChartBubble, IconRipple } from "@tabler/icons-react";
import { IconFish } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative mb-10">
      <div className="mx-auto max-w-screen-xl px-3 py-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 lg:mt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-center w-full lg:order-last">
            <div className="relative flex justify-center items-center w-60 h-60 overflow-hidden rounded-full sm:h-[550px] sm:w-[550px] lg:w-full lg:h-full">
              <Image
                alt="hdr-logo"
                src="/sharkBigSmile.svg"
                width={0}
                height={0}
                sizes="100vw"
                className="z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="lg:py-24 text-center lg:text-start">
            <h1 className="text-3xl font-bold z-10 sm:text-6xl">
              Haj med dig!
            </h1>

            <p className="mt-6 z-10 text-gray-500 font-medium text-lg">
              Dyk ned og find det du skal bruge til dit barn og lad dig
              inspirere af de mange interessante produkter her på siden.
            </p>
          </div>
        </div>
      </div>
      <IconRipple className="absolute hidden lg:block w-12 h-auto left-[12%] top-24 opacity-10" />
      <IconRipple className="absolute hidden lg:block w-12 h-auto left-[12%] top-24 opacity-10" />
      <IconChartBubble className="absolute hidden lg:block w-20 h-auto left-40 opacity-10" />
      <IconChartBubble className="absolute hidden lg:block w-32 h-auto right-40 top-20 opacity-10 rotate-180" />
      <IconFish className="absolute hidden lg:block w-10 h-auto right-1/4 bottom-20 opacity-10" />
    </section>
  );
}
