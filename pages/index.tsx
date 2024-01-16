import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import HighlightedCategories from "@/components/HighlightedCategories";
import HighlightedFeatures from "@/components/HighlightedFeatures";
import HighlightedProducts from "@/components/HighlightedProducts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Babyhaj - Find alt til dit barn, samlet på ét sted.</title>
        <meta
          name="description"
          content="Babyhaj tilbyder ét samlet sted hvor du kan finde alt til dit barn. Udforsk de mange produkter og gør dig baby-klar!"
        />
      </Head>
      <div className="flex flex-col items-center space-y-24 w-full">
        <Hero />
        <HighlightedProducts />
        <About />
        <HighlightedCategories />
        <HighlightedFeatures />
        <Blog />
      </div>
    </>
  );
}
