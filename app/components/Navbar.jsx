"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import AnimatedLink from "./AnimatedLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Portfolio",
    path: "/#portfolio",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
  {
    title: "All Projects",
    path: "/projects",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setNavbarOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-softTwo bg-opacity-100  md:h-auto  md:bg-opacity-75">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 mx-auto">
        <Link
          href={"/"}
          className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purpleOne to-pinkOne md:text-5xl"
        >
          TUGBA
        </Link>
        <div className="block mobile-menu md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 text-darkBlueOne border border-darkBlueOne rounded hover:text-darkBlueTwo hover:border-darkBlueTwo"
          >
            {navbarOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul
            id="navLinks"
            className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8 "
          >
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <AnimatedLink
                  href={link.path}
                  title={link.title}
                  isLast={index + 1 === navLinks.length}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          closeMobileMenu={closeMobileMenu}
          menuOpen={menuOpen}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
