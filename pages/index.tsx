import Hero from "@/pages/home/Hero";
import HighlightedProducts from "./home/HighlightedProducts";
import About from "./home/About";
import Blog from "./home/Blog";
import Categories from "./home/Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightedProducts />
      <About />
      <Categories />
      <Blog />
    </>
  );
}
