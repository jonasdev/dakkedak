import PartnerCard from "@/components/PartnerCard";
import { partners } from "@/config/partners";
import Head from "next/head";
import React from "react";

export default function Partners() {
  return (
    <section className="w-full h-full flex flex-col items-center p-6 mb-10">
      <Head>
        <title>Partnere</title>
        <meta
          name="description"
          content={`Vi samarbejder med en række samarbejdspartnere, som tilbyder et stort udvalg af produkter til dit barn`}
        />
      </Head>
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        Partnere
      </h1>
      <p className="mb-8">
        Vi samarbejder med en række partnere, som tilbyder et stort udvalg af
        produkter til dit barn, så du er bedst muligt forberedt.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-8">
        {partners.map((partner) => (
          <PartnerCard partner={partner} />
        ))}
      </div>
    </section>
  );
}
