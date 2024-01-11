import Hero from "@/pages/home/Hero";
import HighlightedProducts from "./home/HighlightedProducts";
import About from "./home/About";
import Blog from "./home/Blog";
import HighlightedCategories from "./home/HighlightedCategories";
import Head from "next/head";
import FeatureHighlight from "./home/HighlightedFeatures";

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
        <FeatureHighlight />
        <Blog />
      </div>
    </>
  );
}
