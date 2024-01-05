import Button from "@/components/Button";
import { IconMoodSmile } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Custom404Page() {
  return (
    <>
      <Head>
        <title>Siden kunne desværre ikke findes - Babyhaj</title>
        <meta
          name="description"
          content={`Siden kunne desværre ikke findes. Du kan stadig navigere tilbage på siden og browse vores mange produkter!`}
        />
      </Head>
      <section className="flex flex-col items-center justify-center space-y-8">
        <Image alt="hdr-logo" src="/sadShark.svg" height={200} width={300} />
        <span className="font-semibold text-8xl mt-4">404</span>
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mt-14 mb-8">
          Hovsa!
        </h1>
        <div className="text-center text-lg">
          <p>Det ligner at du fandt en side som ikke eksisterer. Skørt!</p>
          <p className="flex mb-4">
            Du kan finde tilbage til forsiden ved at trykke på knappen nedenfor{" "}
            <IconMoodSmile className="ml-2" />
          </p>
        </div>
        <Button href="/" text="Gå til forsiden" />
      </section>
    </>
  );
}
