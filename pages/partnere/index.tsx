import PartnerCard from "@/components/PartnerCard";
import { partners } from "@/config/partners";
import Head from "next/head";
import React from "react";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partnere</title>
        <meta
          name="description"
          content={`Vi samarbejder med en række samarbejdspartnere, som tilbyder et stort udvalg af produkter til dit barn`}
        />
      </Head>
      <section className="w-full h-full flex flex-col items-center p-6 mb-10">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
          Partnere
        </h1>
        <div className="flex text-start flex-col w-11/12 md:w-5/6 xl:w-1/2 2xl:w-2/6 space-y-4 mb-8">
          <p>
            Babyhaj samarbejder med en række partnere, som tilbyder et stort
            udvalg af produkter i høj kvalitet og hjælper og med at bringe de
            bedste babyartikler til dig og din lille.
          </p>
          <p>
            Udforsk deres hjemmesider ved at klikke på knappen for en given
            partner nedenfor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </section>
    </>
  );
}
