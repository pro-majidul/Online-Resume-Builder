import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TbPointFilled } from "react-icons/tb";
import CustomButton from "./shared/CustomButton";

const Hero = () => {
  return (
    <div className="container my-5 px-10 flex flex-col-reverse md:flex-row justify-between items-center ">
      
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-2">
         <p className="flex items-center justify-start -mb-2"> 
          <div className="text-3xl animate-pulse"><TbPointFilled /></div>
          350 resumes created today</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Your Next Job Starts with a Great Resume
        </h2>
        <p>
        Don’t let a bad resume hold you back. Create a perfect, job-ready resume in minutes and boost your career!
        </p>

        <div className="flex items-center gap-2">
          <Link href={"/"}><CustomButton title={"Create your Resume"}></CustomButton></Link>

          <Link href={"/"}><CustomButton title={"Import your Resume"}></CustomButton></Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-auto">
          <Image
            // src="/resume-hero.svg"
            src="/picture/banner-cv.png"
            alt="Resume Hero Image"
            width={500} // Increased width
            height={300} // Increased height
            className="w-full h-auto object-cover "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
