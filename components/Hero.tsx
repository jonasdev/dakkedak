import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex justify-center items-center w-64 h-64 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:order-last lg:w-full lg:h-full">
            <Image
              alt="hdr-logo"
              src="/shark3.svg"
              layout="fill"
              objectFit="contain"
              className="w-full h-full object-contain pl-10"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-6xl">
              Velkommen til <span className="text-primary">Babyhaj</span>.
            </h2>

            <p className="mt-4 text-gray-600">
              Find alt det du skal bruge til dit barn og lad inspirere af de
              mange interessante produkter her på siden.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button text="Se Produkter" type="primary" href="/products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
