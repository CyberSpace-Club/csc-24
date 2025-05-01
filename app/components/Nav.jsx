"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import insta from "@/assets/insta.png";
import LinkedIn from "@/assets/linkedin.png";
import Hamburger from "@/app/components/Hamburger.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="grid grid-flow-col grid-cols-2 md:grid-cols-4 fixed justify-center  px-6 py-3 border-b-[1px] border-[#f9672d3c] text-white w-[100vw] nav z-50">
      <div className="col-span-1">
        <Link href="/">
          <Image width={210} height={210} src="./nav_logo.svg" alt="logo" />
        </Link>
      </div>
      <ul className="hidden md:flex col-span-3 justify-self-end justify-center items-center lg:py-2  navList self-end">
        <li className="px-[12px] hover:text-[#fe8d32] rounded-xs" key={`home`}>
          <Link href="/">
            Home
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] hover:text-[#fe8d32] rounded-xs"
          key={`events`}
        >
          <Link href="/event">
            Events
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] hover:text-[#fe8d32] rounded-xs"
          key={`newsletter`}
        >
          <Link href="/newsletter">
            Newsletter
            <div />
          </Link>
        </li>
        <li
          className="px-[12px] mr-3 hover:text-[#fe8d32] rounded-xs"
          key={`events`}
        >
          <a href="/team">
            Team
            <div />
          </a>
        </li>
        <div key={`insta`}>
          <a
            href="https://www.instagram.com/csc_muj/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={insta} height={24} width={24} />
          </a>
        </div>
        <div key={`LinkedIn`} className="pl-4">
          <a
            href="https://www.linkedin.com/company/cyber-space-club/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={LinkedIn} height={30} width={30} />
          </a>
        </div>
      </ul>
      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
