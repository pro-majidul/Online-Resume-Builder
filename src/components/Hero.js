import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:gap-6 px-6 py-2 md:py-5">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Your Next Job Starts with a Great Resume
        </h2>
        <p>
        Don’t let a bad resume hold you back. Create a perfect, job-ready resume in minutes and boost your career!
        </p>

        <div>
          <Link href={"/"}><button className="bg-blue-400 hover:bg-blue-500
           px-4 py-2 rounded-3xl cursor-pointer">Create your Resume</button></Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md h-auto">
          <Image
            src="/resume-hero.svg"
            alt="Resume Hero Image"
            width={600} // Increased width
            height={400} // Increased height
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
