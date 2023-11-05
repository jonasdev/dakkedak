import Link from "next/link";
import Image from "next/image";
import {
  IconAlarm,
  IconBabyBottle,
  IconBabyCarriage,
  IconCar,
  IconClock,
  IconDeviceMobile,
  IconDots,
  IconHeart,
  IconHorseToy,
  IconMedicineSyrup,
  IconPhone,
  IconSearch,
  IconShirt,
  IconSoup,
  IconZzz,
} from "@tabler/icons-react";
import AppLink from "./AppLink";
import SideMenu from "./SideMenu";
import { ReactNode } from "react";

export default function Navbar() {
  // const links: Array<ReactNode> = [
  //   <AppLink
  //     href="/slyngevugger"
  //     icon={<IconBabyCarriage />}
  //     text="Slyngevugger"
  //   />,
  //   <AppLink href="/hudpleje" icon={<IconBabyCarriage />} text="Hudpleje" />,
  //   <AppLink href="/autostole" icon={<IconBabyCarriage />} text="Autostole" />,
  //   <AppLink
  //     href="/barnevogne"
  //     icon={<IconBabyCarriage />}
  //     text="Barnevogne"
  //   />,
  // ];

  const links: Array<ReactNode> = [
    <AppLink href="/barnevogne" icon={<IconBabyCarriage />} text="På tur" />,
    <AppLink href="#" icon={<IconCar />} text="På farten" />,
    <AppLink href="#" icon={<IconSoup />} text="Spisetid" />,
    <AppLink href="#" icon={<IconZzz />} text="Sovetid" />,
    <AppLink href="#" icon={<IconShirt />} text="Tøj og sko" />,
    <AppLink href="#" icon={<IconBabyBottle />} text="Amning" />,
    <AppLink href="#" icon={<IconClock />} text="Ventetid og barsel" />,
    <AppLink href="#" icon={<IconHorseToy />} text="Legetøj" />,
    <AppLink href="#" icon={<IconDeviceMobile />} text="Grej" />,
    <AppLink href="#" icon={<IconMedicineSyrup />} text="Hudpleje" />,
    <AppLink href="#" icon={<IconDots />} text="Diverse" />,
  ];

  return (
    <nav className="w-full px-6 py-5 transition-all delay-75 duration-500 ease-out bg-inherit bg-opacity-95 z-30 rounded-b-3xl lg:px-12 lg:py-6">
      <div className="flex w-full items-center justify-between mb-4">
        <Link href="/">
          <Image alt="hdr-logo" src="/logo.svg" height={100} width={250} />
        </Link>
        <div className="flex justify-center">
          <div className="hidden lg:flex items-center space-x-12">
            {links.flat()}
          </div>
        </div>
        <div className="lg:flex items-center space-x-4 hidden">
          <AppLink href="/favoritter" icon={<IconHeart />} text="Favoritter" />
        </div>
        <SideMenu links={links} />
      </div>
    </nav>
  );
}
