"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const user = 1;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Resume", path: "/my-resume" },
    { name: "Templates", path: "/resumeTemplates" },
    { name: "About Us", path: "/aboutPage", hidden: "lg:block" },
    { name: "Contact Us", path: "/contactPage" },
  ];

  return (
    <nav className="bg-black text-white py-4">
      <div className="flex justify-between items-center gap-3 w-11/12 mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-xl font-bold">
              Resume<span className="font-extrabold">Builder</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ name, path, hidden }) => (
              <li key={path} className={hidden}>
                <Link
                  href={path}
                  className={`text-xl px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === path ? "bg-white/20 text-white" : "text-gray-300 hover:text-rose-800"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sign up/in Button */}
        <div>
          {!user ? (
            <button className="px-4 py-1 border-2 rounded-3xl border-rose-600">Sign out</button>
          ) : (
            <button className="px-4 py-1 border-2 rounded-3xl border-rose-600">Sign up</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
