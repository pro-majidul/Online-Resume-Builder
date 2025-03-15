import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { GrLinkedin } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 text-gray-900">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-12 space-y-5">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <div className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <Image
                  src="/logo.png"
                  alt="footer logo "
                  width={50}
                  height={30}
                ></Image>
              </div>
              <span className="self-center text-3xl font-bold text-purple-600">
                Resume Maker
              </span>
            </div>
            <address className="my-2 text-gray-800">
              WorkSimpli Software, LLC 1225
              <br></br> Ave Ponce de Leon, Suite 1001 <br></br> San Juan, PR,
              USA 00907
              <br></br>
              <a
                className="hover:text-purple-500 text-black"
                href="mailto:majidul123tub@gmail.com"
              >
                Email: support@resumebuilder.com
              </a>
            </address>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium underline underline-offset-8 decoration-2 hover:text-violet-600">
              Quick Links
            </p>
            <ul className="space-y-1 mt-1">
              <li>
                <Link className="text-xl hover:text-violet-600" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:text-violet-600"
                  href="/myResume"
                >
                  My Resume
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:text-violet-600"
                  href="/resumeTemplates"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:text-violet-600"
                  href="/aboutPage"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:text-violet-600"
                  href="/contactPage"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium hover:text-violet-600">
              Subscribe to our newsletter
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 my-4">
              <Input type="email" placeholder="Email" />
              <Button
                className="bg-orange-500 text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0">
              <a
                rel="noopener noreferrer"
                href="mailto:majidul123tub@gmail.com"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50"
              >
                <CgMail className="text-4xl" />
              </a>

              <a
                rel="noopener noreferrer"
                href="https://github.com/pro-majidul"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/majidul-islam7/"
                title="LinkedIN"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50"
              >
                <GrLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4"></hr>
        <div>
          <p className="text-center">©2025 (Resume Maker) All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
