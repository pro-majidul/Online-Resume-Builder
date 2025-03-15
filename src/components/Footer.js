import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { GrLinkedin } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import footerlogo from "../../public/picture/applicant.png";
const Footer = () => {
  return (
    <footer
      className="pt-20 pb-6 relative bg-gray-100 text-[#181A1B] border border-t-2"
      style={{
        clipPath:
          "polygon(7% 0, 100% 0, 100% 18%, 100% 41%, 100% 100%, 20% 100%, 0 100%, 0 36%)",
      }}
    >
      <div className="container px-10 mx-auto z-50">
        <div className="grid grid-cols-12 space-y-5">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <div className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-8 md:w-10 md:h-10 h-8 rounded-full ">
                <Image
                  src={footerlogo}
                  alt="footer logo "
                  width={50}
                  height={30}
                ></Image>
              </div>
              <span className="self-center md:text-3xl text-2xl font-bold italic">
                Resume Maker
              </span>
            </div>
            <address className="my-2 text-gray-800 text-center md:text-start">
              WorkSimpli Software, LLC 1225
              <br></br> Ave Ponce de Leon, Suite 1001 <br></br> San Juan, PR,
              USA 00907
              <br></br>
              <a className=" text-black" href="mailto:majidul123tub@gmail.com">
                Email: support@resumebuilder.com
              </a>
            </address>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium underline underline-offset-8 decoration-2 hover:text-black">
              Quick Links
            </p>
            <ul className="space-y-1 mt-1">
              <li>
                <Link className="text-xl hover:text-black" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:text-black" href="/myResume">
                  My Resume
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:text-black"
                  href="/resumeTemplates"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:text-black" href="/aboutPage">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:text-black" href="/contactPage">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-full text-center md:text-left md:col-span-3">
            <p className="pb-1 text-2xl font-medium hover:text-black">
              Subscribe to our newsletter
            </p>
            <form>
              <div className="flex w-full max-w-sm items-center space-x-2 my-4">
                <Input type="email" className="bg-white" placeholder="Email" />
                <Button
                  className="bg-[#F9F51A] text-[#181A1B] 
                hover:bg-[#FEDBFF] px-4 py-2 rounded-md"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0">
              <a
                rel="noopener noreferrer"
                href="mailto:majidul123tub@gmail.com"
                title="Email"
                className="flex items-center justify-center"
              >
                <CgMail className="text-4xl" />
              </a>

              <a
                rel="noopener noreferrer"
                href="https://github.com/pro-majidul"
                title="GitHub"
                className="flex items-center justify-center"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/majidul-islam7/"
                title="LinkedIN"
                className="flex items-center justify-center text-blue-500"
              >
                <GrLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4"></hr>
        <div>
          <p className="text-center">
            ©2025 (Resume Maker) All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
