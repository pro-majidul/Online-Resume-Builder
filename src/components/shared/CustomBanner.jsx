"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TbPointFilled } from "react-icons/tb";
import CustomButton from "./CustomButton";
import Link from "next/link";

const CustomBanner = ({ title, subtitle, imageSrc }) => {
    return (
        <div 
            className="relative  py-16  overflow-hidden border-b"
            // style={{
            //     background: "linear-gradient(135deg, rgba(254,219,255,0.6) 0%, rgba(255,255,255,0.3) 100%)",
            //     backdropFilter: "blur(10px)",
            //     opacity:10,
            //     borderRadius: "20px",
            //     padding: "40px 0px 90px 30px",
            //     clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
            // }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6 text-center md:text-left">
                <p className="flex items-center justify-start -mb-2 text-lg h-14">
                    <span className="text-3xl animate-pulse">
                        <TbPointFilled />
                    </span>
                    <Marquee speed={50} gradient={true} gradientWidth={100}>
                        <span>Free Resume Examples and Samples for Every Job for 2025</span>
                    </Marquee>
                </p>
                <motion.h1 
                    className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
                <motion.h2 
                    className="lg:text-2xl text-gray-500 mb-4" 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {subtitle}
                </motion.h2>
                
                <Link href={'/'}>
                    <CustomButton title={'Find Your Resume'}/>
                </Link>
            </div>
            <motion.div 
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Image src={imageSrc} alt="Banner Image" width={400} height={400} className="object-contain" />
            </motion.div>
            </div>
           
        </div>
    );
};

export default CustomBanner;
