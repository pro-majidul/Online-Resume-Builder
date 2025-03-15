"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/picture/applicant.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = 1; // Change this to null to test logged-out state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/myResume" },
    { name: "Templates", path: "/resumeTemplates" },
    { name: "About Us", path: "/aboutPage" },
    { name: "Contact Us", path: "/contactPage" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 text-[#181A1B] shadow-md border-b-2 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3">

        {/* Logo (Left Side) */}
        <Link href={"/"}>
          <div className="flex items-center space-x-1">
            <Image src={logo} alt="Logo" width={30} height={30} />
            <span className="text-2xl font-bold">Resume Maker</span>
          </div>
        </Link>

        {/* lg Navigation */}
        <div className="hidden lg:flex justify-center items-center gap-5">
          {navLinks.map(({ name, path }) => (
            <Link key={path} href={path} className="btn w-fit text-xl hover:text-gray-600 whitespace-nowrap">
              {name}
            </Link>
          ))}
        </div>
        

        {/* Right Side: Sign-Up Button (Large Screens) & Hamburger Menu (Medium & Small) */}
        <div className="flex items-center gap-4 lg:justify-end">
          {/* Sign-Up Button (Large Screens) */}
          <div className="hidden lg:block">
            {!user ? (
              <button className="px-4 py-1 border-2 rounded-3xl border-rose-600">
                Sign up
              </button>
            ) : (
              <Link href="/signupPage" className="px-4 py-1 border-2 rounded-3xl border-black">
                Sign Up
              </Link>
            )}
          </div>

          {/* Medium Screens: Sign-up Button & Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="hidden md:block">
              {!user ? (
                <button className="px-4 py-1 border-2 rounded-3xl border-black">
                  Sign up
                </button>
              ) : (
                <Link href="/signupPage" className="px-4 py-1 border-2 rounded-3xl border-rose-600">
                  Sign Up
                </Link>
              )}
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
        <div className="absolute top-16 left-0 w-full bg-gray-200 shadow-md">
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
            {!user ? (
              <button className="px-4 py-1 border-2 rounded-3xl border-rose-600">
                Sign up
              </button>
            ) : (
              <Link href="/signupPage" className="px-4 py-1 border-2 rounded-3xl border-rose-600">
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
