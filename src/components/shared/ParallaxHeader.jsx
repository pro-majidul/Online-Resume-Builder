"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHeader({ headline, title }) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "30%"]); // Smooth parallax effect

  return (
    <motion.header
      style={{ backgroundPositionY: bgY }}
      className='relative flex flex-col justify-center items-center bg-[url("/bgImg/bgtamplatepage.png")] bg-cover bg-center bg-fixed opacity-95 shadow-lg px-4 h-[350px] md:h-[400px] text-white text-center'
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-4 font-extrabold text-[#181A1B] text-5xl md:text-6xl leading-tight tracking-tight'
      >
        {headline}
      </motion.h1>
      <p className='opacity-90 mx-auto mb-8 max-w-2xl text-[#181A1B] text-lg'>
        {title}
      </p>
      <div className='flex justify-center mx-auto max-w-lg'>
        <input
          type='text'
          placeholder='Search resume templates...'
          className='bg-white shadow-md px-4 py-3 rounded-l-lg focus:outline-none w-full text-gray-800'
        />
        <button className='bg-white hover:bg-gray-200 shadow-md px-6 py-3 rounded-r-lg font-semibold text-blue-800 transition'>
          Search
        </button>
      </div>
    </motion.header>
  );
}
