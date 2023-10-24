import React from "react";
import Card from "./Card";
import {
  IconArrowBigRightLines,
  IconArrowBigRightLinesFilled,
  IconBabyBottle,
  IconBasket,
  IconHeartCheck,
  IconHeartHandshake,
  IconListSearch,
  IconMoodBoy,
  IconMoodKid,
  IconPrompt,
} from "@tabler/icons-react";
import Link from "next/link";
import Button from "./Button";

export default function About() {
  return (
    <section>
      <div className="relative mt-8 flex flex-col items-center bg-gradient-to-br from-primary-dark to-primary pb-24 pt-12 sm:pb-32 sm:pt-24 md:pb-48 lg:pb-56 xl:pb-64">
        <IconMoodBoy
          color="white"
          className="absolute right-2 top-2 h-auto w-20 rotate-12 text-white opacity-40 lg:right-12 lg:top-12"
        />
        <IconMoodKid className="absolute bottom-2 left-2 h-auto w-32 -rotate-12 text-white opacity-40 lg:bottom-12 lg:left-12" />
        <div className="mb-5 w-11/12 space-y-4 sm:mb-10 lg:w-5/6 flex flex-col items-center lg:space-y-10 text-white">
          <h1 className="text-2xl font-bold leading-tight text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Find alt du skal bruge til dit barn.
          </h1>
          <h3 className="text-xl font-bold opacity-60 leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Samlet ét sted.
          </h3>
        </div>
      </div>
      <div className="container mx-auto -mt-20 flex justify-center sm:-mt-40 md:-mt-56">
        <div className="relative grid w-10/12 grid-cols-1 gap-6 lg:w-5/6 lg:grid-cols-4">
          <Card
            icon={<IconBasket size={40} />}
            title="Bestil online"
            text="Bestil varer til dit barn igennem vores partnersider og få det leveret hjem til din dør."
          />
          <Card
            icon={<IconHeartHandshake size={40} />}
            title="Partnere"
            text="Vi samarbejder med et udvalg af populære forhandlere af baby- og børneartikler, som leverer produkter af højeste kvalitet."
          />
          <Card
            icon={<IconListSearch size={40} />}
            title="Bredt udvalg"
            text="På Babyhaj finder du et stort udvalg af produkter, samlet ét sted. Sådan kan du nemt kan finde det du mangler til dit barn."
          />
          <Card
            icon={<IconHeartCheck size={40} />}
            title="Favoritter"
            text="Gem dine favorit produkter, så du nemt kan finde dem igen. Dette gør du ved at trykke på hjerte-knappen på et produkt."
          />
        </div>
      </div>
    </section>
  );
}
