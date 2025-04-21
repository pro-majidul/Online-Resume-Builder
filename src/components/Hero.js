"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { TbPointFilled } from "react-icons/tb";
import CustomButton from "./shared/CustomButton";

const newsItems = [
  "350 resumes created today",
  "Use more than 5 unique resume templates",
  "Import your existing resume easily",
  "Optimize your resume with AI suggestions",
  "Get feedback on your resume instantly",
];

const companyLogos = [
  "/banner/banner-1.png",
  "/banner/banner-2.png",
  "/banner/banner-3.png",
  "/banner/banner-4.png",
];

const Hero = () => {
  const [currentNews, setCurrentNews] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const text = newsItems[currentNews];

    if (charIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else {
      const changeNewsTimeout = setTimeout(() => {
        setCurrentNews((prev) => (prev + 1) % newsItems.length);
        setDisplayText("");
        setCharIndex(0);
      }, 2000);

      return () => clearTimeout(changeNewsTimeout);
    }
  }, [charIndex, currentNews]);

  return (
    <div className="container my-5 px-10 flex flex-col-reverse md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-2">
        <p className="flex items-center justify-start -mb-2 text-lg h-14">
          <span className="text-3xl animate-pulse">
            <TbPointFilled />
          </span>
          <span className="ml-2">{displayText}</span>
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Your Next Job Starts with a Great Resume
        </h2>
        <p>
          Don’t let a bad resume hold you back. Create a perfect, job-ready resume in minutes and boost your career!
        </p>

        <div className="flex items-center gap-2">
          <Link href="/CreateMyResume">
            <CustomButton title="Create your Resume" />
          </Link>

          <Link href="/">
            <CustomButton title="Import your Resume" />
          </Link>
        </div>

        {/* Scrolling Company Logos */}
        <div className="mt-5 w-full">
          <h2 className="text-lg font-semibold mb-2">Hired by Leading Companies:</h2>
          <Marquee speed={50} gradient={true} gradientWidth={100}>
            {companyLogos.map((logo, index) => (
              <div key={index} className="mx-4">
                <Image src={logo} alt="Company Logo" width={100} height={100} className="object-contain h-20" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-auto">
          <Image
            src="/picture/banner-cv.png"
            alt="Resume Hero Image"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
