import Head from "next/head";
import React from "react";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookies & Privatlivspolitik - Babyhaj</title>
        <meta
          name="description"
          content={`Læs mere om brugen af Cookies & Privatlivspolitik her på sitet. Hvis du har spørgsmål, så kontakt os endelig`}
        />
      </Head>

      <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10 mb-20 lg:max-w-4xl px-4">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
          Cookies & politik
        </h1>
        <h2 className="font-semibold mb-2 text-xl">Introduktion</h2>
        <p className="mb-3">
          Når du besøger vores website indsamles der oplysninger om dig, som
          bruges til at tilpasse og forbedre vores indhold og til at øge værdien
          af de annoncer, der vises på siden. Hvis du ikke ønsker, at der
          indsamles oplysninger, bør du slette dine cookies (se vejledning) og
          undlade videre brug af websitet. Nedenfor har vi uddybet, hvilke
          informationer der indsamles, deres formål og hvilke tredjeparter, der
          har adgang til dem.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Cookies</h2>
        <p className="mb-3">
          Websitet anvender ”cookies”, der er en tekstfil, som gemmes på din
          computer, mobil el. tilsvarende med det formål at genkende den, huske
          indstillinger, udføre statistik og målrette annoncer. Cookies kan ikke
          indeholde skadelig kode som f.eks. virus. Det er muligt at slette
          eller blokere for cookies (se vejledning). Hvis du sletter eller
          blokerer cookies vil annoncer kunne blive mindre relevante for dig og
          optræde hyppigere. Du kan desuden risikere at websitet ikke fungerer
          optimalt samt at der er indhold, du ikke kan få adgang til. Websitet
          indeholder cookies fra tredjeparter, der i varierende omfang kan
          omfatte: Partner ads.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Generelt</h2>
        <p className="mb-3">
          Personoplysninger er alle slags informationer, der i et eller andet
          omfang kan henføres til dig. Når du benytter vores website indsamler
          og behandler vi en række sådanne informationer. Det sker f.eks. ved
          alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev,
          deltager i konkurrencer eller undersøgelser, registrerer dig som
          bruger eller abonnent, øvrig brug af services eller foretager køb via
          websitet. Vi indsamler og behandler typisk følgende typer af
          oplysninger: Et unikt ID og tekniske oplysninger om din computer,
          tablet eller mobiltelefon, dit IP-nummer, geografisk placering, samt
          hvilke sider du klikker på (interesser). I det omfang du selv giver
          eksplicit samtykke hertil og selv indtaster informationerne behandles
          desuden: Navn, telefonnummer, e-mail, adresse og betalingsoplysninger.
          Det vil typisk være i forbindelse med oprettelse af login eller ved
          køb.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Sikkerhed</h2>{" "}
        <p className="mb-3">
          Vi har truffet tekniske og organisatoriske foranstaltninger mod, at
          dine oplysninger hændeligt eller ulovligt bliver slettet,
          offentliggjort, fortabt, forringet eller kommer til uvedkommendes
          kendskab, misbruges eller i øvrigt behandles i strid med lovgivningen.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Formål</h2>
        <p className="mb-3">
          Oplysningerne bruges til at identificere dig som bruger og vise dig de
          annoncer, som vil have størst sandsynlighed for at være relevante for
          dig, at registrere dine køb og betalinger, samt at kunne levere de
          services, du har efterspurgt, som f.eks. at fremsende et nyhedsbrev.
          Herudover anvender vi oplysningerne til at optimere vores services og
          indhold.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Periode For Opbevaring</h2>
        <p className="mb-3">
          Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til
          lovgivningen, og vi sletter dem, når de ikke længere er nødvendige.
          Perioden afhænger af karakteren af oplysningen og baggrunden for
          opbevaring. Det er derfor ikke muligt at angive en generel tidsramme
          for, hvornår informationer slettes.
        </p>
        <h2 className="font-semibold mb-2 text-xl">
          Videregivelse af oplysninger
        </h2>{" "}
        <p className="mb-3">
          Data om din brug af websitet, hvilke annoncer, du modtager og evt.
          klikker på, geografisk placering, køn og alderssegment m.v.
          videregives til tredjeparter i det omfang disse oplysninger er kendt.
          Du kan se hvilke tredjeparter, der er tale om, i afsnittet om
          ”Cookies” ovenfor. Oplysningerne anvendes til målretning af
          annoncering. Vi benytter herudover en række tredjeparter til
          opbevaring og behandling af data. Disse behandler udelukkende
          oplysninger på vores vegne og må ikke anvende dem til egne formål.
          Videregivelse af personoplysninger som navn og e-mail m.v. vil kun
          ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i
          EU eller i lande, der kan give dine oplysninger en tilstrækkelig
          beskyttelse.
        </p>
        <h2 className="font-semibold mb-2 text-xl">Indsigt og klager</h2>{" "}
        <p className="mb-3">
          Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om
          dig. Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger
          anvendes. Du kan også tilbagekalde dit samtykke til, at der bliver
          behandlet oplysninger om dig. Hvis de oplysninger, der behandles om
          dig, er forkerte har du ret til at de bliver rettet eller slettet.
          Henvendelse herom kan ske til{" "}
          {`${["bvoelund", ".dev", "@", "gmail.com"].join("")}`}. Hvis du vil
          klage over vores behandling af dine personoplysninger, har du også
          mulighed for at tage kontakt til Datatilsynet.
        </p>
      </section>
    </>
  );
}
