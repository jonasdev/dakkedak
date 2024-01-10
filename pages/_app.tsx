import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { getAllProducts } from "@/utils/getAllProducts";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  // useEffect(() => {
  //   if (!window.products) {
  //     window.products = getAllProducts();
  //   }
  // });

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-between w-full bg-secondary text-slate-900">
        <Navbar />
        <Component {...pageProps} />
        <Cookies />
        <Footer />
      </div>
    </>
  );
}
