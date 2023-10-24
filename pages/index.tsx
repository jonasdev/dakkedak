import About from "@/components/About";
import Hero from "@/components/Hero";
import HighlightedProducts from "@/components/HighlightedProducts";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightedProducts />
      <About />
    </>
  );
}
