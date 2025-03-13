import Image from "next/image";
import Link from "next/link";
// import navlogo from './navlogo.png'
import React from "react";
const Navbar = () => {
  return (
    <nav className="flex items-center my-5 justify-between w-full max-w-7xl mx-auto px-6">
      <div>
        <h3 className="md:text-3xl text-xl font-bold flex items-center">
          <Image src="/navlogo.png" alt="Logo" width={40} height={20}></Image>{" "}
          Resume Maker{" "}
        </h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link className="text-xl hover:text-gray-800" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl hover:text-gray-800" href="/my-resume">
              My Resume
            </Link>
          </li>
          <li>
            <Link className="text-xl hover:text-gray-800" href="/templates">
              Templates
            </Link>
          </li>
          <li>
            <Link className="text-xl hover:text-gray-800" href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-xl hover:text-gray-800" href="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-x-2">
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
        >
          Sign In
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
