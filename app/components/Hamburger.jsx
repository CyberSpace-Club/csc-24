"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import insta from "@/assets/insta.png";

const Hamburger = ({ isOpen, toggleMenu }) => {
  const menuVariants = {
    open: {
      right: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    closed: {
      right: "-100%",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const container = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/previousevent", label: "Events" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/team", label: "Team" },
  ];

  return (
    <>
      <button
        className="hidden max-md:block z-50 fixed right-6 top-6"
        onClick={toggleMenu}
      >
        <div
          className={`w-[30px] h-[30px] transform transition-all duration-300 ${
            isOpen ? "rotate-[360deg]" : ""
          }`}
        >
          <div className="relative">
            <span
              className={`absolute h-0.5 w-7 transform transition-all duration-300 ${
                isOpen
                  ? "rotate-45 delay-200 bg-[#fe8d32]"
                  : "-translate-y-2.5 bg-[#fe8d32]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-7 transform transition-all duration-300 ${
                isOpen ? "opacity-0 delay-200" : "bg-[#fe8d32]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-7 transform transition-all duration-300 ${
                isOpen
                  ? "-rotate-45 delay-200 bg-[#fe8d32]"
                  : "translate-y-2.5 bg-[#fe8d32]"
              }`}
            />
          </div>
        </div>
      </button>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-black/95 z-40 flex flex-col justify-center items-center"
      >
        <motion.div
          variants={container}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col gap-8 text-center"
        >
          {menuItems.map((item) => (
            <motion.div key={item.href} variants={menuItemVariants}>
              <Link
                href={item.href}
                className="text-2xl font-medium tracking-wider hover:text-[#fe8d32] transition-colors duration-300 relative group"
                onClick={toggleMenu}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#fe8d32] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div variants={menuItemVariants}>
            <a
              href="https://www.instagram.com/csc_muj/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center mt-4 hover:scale-110 transition-transform duration-300"
              onClick={toggleMenu}
            >
              <Image
                src={insta}
                height={32}
                width={32}
                alt="Instagram"
                className="hover:opacity-80"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hamburger;
