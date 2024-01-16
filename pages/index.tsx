import About from "@/pages/home/About";
import Blog from "@/pages/home/Blog";
import Hero from "@/pages/home/Hero";
import HighlightedCategories from "@/pages/home/HighlightedCategories";
import HighlightedFeatures from "@/pages/home/HighlightedFeatures";
import HighlightedProducts from "@/pages/home/HighlightedProducts";
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
