import Image from "next/image";
import React from "react";

const AiPowerAssistant = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundImage: "url('/picture/heroBackground.5e72cc97.webp')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
         backgroundAttachment: "fixed"

      }}
    >
      <div className="container mx-auto md:flex items-center justify-between gap-5">
        <div className=" p-4 my-10 space-y-1 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            AI-Powered Support
          </span>
          <h2 className="pb-3 text-2xl lg:w-3xl mx-auto font-bold md:text-4xl text-white">
            Intelligent Solutions at Your Fingertips
          </h2>
          <p className="text-xs md:text-lg text-white">
            Get instant assistance with AI-powered tools that help you work
            smarter, faster, and more efficiently.
          </p>
          <div className="place-items-center">
            <Image
              src="/picture/left-side.svg"
              alt="right side image"
              height={1000}
              width={500}
            ></Image>
          </div>
        </div>
        <div>
          <Image
            src="/picture/right-side.svg"
            alt="right side image"
            height={1000}
            width={1000}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AiPowerAssistant;
