import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { pageList } from "../helpers/index";

export default function Header() {
  return (
    <div className="flex flex-row justify-between h-24">
      <div className="md:hidden my-auto">
        <MobileMenu />
      </div>
      <div className="flex flex-row ">
        <Image src="/logo.svg" height={25} width={43.33} className="ml-5" />
        <Link href="/" className="my-auto mx-2 font-black">
          HAPPY GALERİ
        </Link>
      </div>

      <div className="hidden md:flex flex-row justify-around my-auto">
        {pageList.map((page) => (
          <Link
            className="text-xs tracking-widest leading-6 mx-2  xl:mx-4 2xl:mx-5 text-gray-700 hover:text-gray-400 hover:border-b border-gray-400"
            href={page.path}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
