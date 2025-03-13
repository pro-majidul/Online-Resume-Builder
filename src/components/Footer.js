import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
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
            <address className="text-xl my-2">
              WorkSimpli Software, LLC 1225
              <br></br> Ave Ponce de Leon, Suite 1001 <br></br> San Juan, PR,
              USA 00907
              <br></br>
              <a
                className="hover:text-purple-500"
                href="mailto:majidul123tub@gmail.com"
              >
                Email: majidul123tub@gmail.com
              </a>
            </address>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium underline underline-offset-8 decoration-2 hover:dark:text-violet-600">
              Quick Links
            </p>
            <ul className="space-y-1 mt-1">
              <li>
                <Link className="text-xl hover:dark:text-violet-600" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:dark:text-violet-600"
                  href="/myResume"
                >
                  My Resume
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:dark:text-violet-600"
                  href="/resumeTemplates"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:dark:text-violet-600"
                  href="/aboutPage"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:dark:text-violet-600"
                  href="/contactPage"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium hover:dark:text-violet-600">
              Subscribe to our newsletter
            </p>

            <div className="flex justify-center pt-4 space-x-4 lg:pt-0">
              <a
                rel="noopener noreferrer"
                href="mailto:majidul123tub@gmail.com"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <CgMail className="text-4xl" />
              </a>

              <a
                rel="noopener noreferrer"
                href="https://github.com/pro-majidul"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <p className="text-center">©2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
