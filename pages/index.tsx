import Hero from "@/pages/home/Hero";
import HighlightedProducts from "./home/HighlightedProducts";
import About from "./home/About";
import Blog from "./home/Blog";
import Categories from "./home/Categories";
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
      <Hero />
      <HighlightedProducts />
      <About />
      <Categories />
      <Blog />
    </>
  );
}
