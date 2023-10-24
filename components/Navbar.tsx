import Link from "next/link";
import Image from "next/image";
import { IconBabyCarriage, IconHeart } from "@tabler/icons-react";
import AppLink from "./AppLink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 rounded-b-3xl bg-opacity-95 z-30 flex w-full items-center justify-between bg-inherit px-6 py-5 transition-all delay-75 duration-500 ease-out lg:px-12 lg:py-6">
      <Link href="/" className="flex text-2xl font-semibold lg:text-3xl">
        <Image alt="hdr-logo" src="/logo.svg" height={175} width={325} />
      </Link>
      <div className="flex items-center space-x-10">
        <AppLink href="/" icon={<IconBabyCarriage />} text="Produkter" />
        <AppLink href="/" icon={<IconHeart />} text="Favoritter" />
      </div>
    </nav>
  );
}
