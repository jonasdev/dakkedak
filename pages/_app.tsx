import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-between w-full bg-secondary">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
