import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductsProvider } from "@/context/ProductsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsProvider>
        <div className="flex flex-col items-center justify-between w-full bg-secondary text-slate-900">
          <Navbar />
          <Component {...pageProps} />
          <Cookies />
          <Footer />
        </div>
      </ProductsProvider>
    </>
  );
}
