"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from "next/image";
import logo from "../../public/picture/applicant.png";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";
import { useTheme } from "./Context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme(); // Global Theme Context for Dark/light Mode

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Templates", path: "/resumeTemplates" },
    { name: "About Us", path: "/aboutPage" },
    { name: "Contact Us", path: "/contactPage" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditional based on the theme
  const navBg = theme === "light" ? (scrolling ? "bg-white" : "bg-transparent") : (scrolling ? "bg-black" : "bg-transparent");
  const phoneNavBg = theme === "light" ? "bg-white" : "bg-black";
  

  return (
    <div className="h-16">
      <nav
        className={`fixed top-0 w-full z-50 py-4 px-8 transition-all duration-300 ${navBg}`}
      >
        <div className="container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-1">
              <Image src={logo} alt="Logo" width={30} height={30} />
              <span className="text-2xl font-bold italic">Resume Maker</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center gap-5">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className="btn w-fit text-lg hover:text-gray-600 whitespace-nowrap"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:justify-end">
            {/* Sign Up / Logout Button */}
            <div className="hidden lg:block">
              {status === "authenticated" ? (
                <LogoutButton />
              ) : (
                <Link
                  href="/signupPage"
                  className="bg-[#FEDBFF] px-4 py-2 rounded-full w-fit font-medium text-gray-800 text-sm"
                >
                  Sign Up
                </Link>
              )}
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--primary-color)] text-[var(--accent-color)]"
            >
              {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className={`absolute top-14 left-0 w-full ${phoneNavBg} shadow-md`}>
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-xl block px-6 py-2 hover:bg-gray-300 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Sign-up Button */}
            <div className="md:hidden flex justify-center pb-4">
              {status === "authenticated" ? <LogoutButton /> : <Link href="/signupPage">Sign Up</Link>}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
