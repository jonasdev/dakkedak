import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Om os - Platformen for baby produkter - Babyhaj</title>
        <meta
          name="description"
          content={
            "Babyhaj fungerer som én samlet platform for babyartikler og produkter. I samarbejde med vores partenre gør vi det nemt for dig at fidne alt til dit barn!"
          }
        />
      </Head>
      <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10 mb-20 lg:max-w-2xl px-4">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-10">
          Om os
        </h1>
        {/* <div className="flex justify-center w-full my-10">
          <Image
            alt="hdr-logo"
            src="/sharkBigSmile.svg"
            height={200}
            width={300}
          />
        </div> */}

        <div className="flex flex-col place-items-center">
          <h2 className="font-semibold mb-2 text-xl">Velkommen til Babyhaj</h2>
          <div className="max-w-lg ">
            <p className="mb-3">
              Vi er stolte af at være din komplette kilde til alt, hvad du
              behøver til dit barn. Hos Babyhaj forenes de bedste babyprodukter
              fra anerkendte mærker og forhandlere på ét sted, hvilket gør det
              nemt og bekvemt for dig at finde alt, du har brug for til din
              baby.
            </p>
            <p className="mb-3">
              Vores platform er skabt med omtanke og omhu, idet vi håndplukker
              pålidelige on interessant partnere, for at sikre kvalitet,
              sikkerhed og pålidelighed. Uanset om du leder efter nuttet tøj, en
              ny barnevogn, legetøj i massevis eller produkter til forplejning,
              er vores udvalg skræddersyet til at opfylde dine behov og din
              babys krav.
            </p>
            <p className="mb-5">
              Vores mission er at gøre indkøbs- og klargørelsesoplevesen så
              overkommelig som muligt. Du kan eksempelvis gemme produkter som
              Favoritter, så du nemt kan finde dem igen. Du kan også danne din
              egen indkøbsliste med produkter fra siden, så du kan danne dig et
              overblik, og markere dine køb undervejs.
            </p>
            <p className="font-medium">
              Tak for at vælge os til at være en del af din rejse som forælder!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
