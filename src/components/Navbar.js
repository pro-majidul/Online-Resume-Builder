"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/picture/applicant.png";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const { data: session, status } = useSession();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Templates", path: "/resumeTemplates" },
    { name: "About Us", path: "/aboutPage" },
    { name: "Contact Us", path: "/contactPage" },
    // { name: "Register", path: "/signupPage" },
    // { name: "Products", path: "/products" },
    // { name: "Add Products", path: "/products/add" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="h-16">
      <nav
        className={`fixed top-0 w-full z-50 py-4 px-8 transition-all duration-300 ${scrolling ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3">
          {/* Logo (Left Side) */}
          <Link href={"/"}>
            <div className="flex items-center space-x-1">
              <Image src={logo} alt="Logo" width={30} height={30} />
              <span className="text-2xl font-bold italic  ">Resume Maker</span>
            </div>
          </Link>

          {/* lg Navigation */}
          <div className="hidden lg:flex justify-center items-center gap-5">
            {navLinks.map(({ name, path }) => (
              <Link key={path} href={path} className="btn w-fit text-lg hover:text-gray-600 whitespace-nowrap">
                {name}
              </Link>
            ))}
          </div>

          {/* Right Side: Sign-Up Button (Large Screens) & Hamburger Menu (Medium & Small) */}
          <div className="flex items-center gap-4 lg:justify-end">
            {/* User Profile or Sign-Up Button */}
            <div className="hidden lg:block">
              {status == "authenticated" ? (<LogoutButton />) : (<Link href="/signupPage" className=" space-x-2 bg-[#FEDBFF] px-4 py-2 rounded-full w-fit overflow-hidden font-medium text-gray-800 text-sm">Sign Up</Link>)}
            </div>

            {/* Medium Screens: Sign-up Button & Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <div className="hidden md:block">
                {status == "authenticated" ? (<LogoutButton />) : (<Link href="/signupPage">SignUp</Link>)}
              </div>

              {/* Mobile & Medium Menu Toggle */}
              <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Medium Navigation (Shows when menu is open) */}
        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-gray-200 shadow-md">
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

            {/* Sign-up Button in Mobile Menu (Hidden on Medium) */}
            <div className="md:hidden flex justify-center pb-4">
              {status == "authenticated" ? (<LogoutButton />) : (<Link href="/signupPage">SignUp</Link>)}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;