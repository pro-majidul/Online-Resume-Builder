"use client"
import Image from "next/image";
import f1 from './../../public/picture/f1.png'
import f2 from './../../public/picture/f7.png'
import f6 from './../../public/picture/f8.png'
import f5 from './../../public/picture/brain.png'
import f4 from './../../public/picture/f2.png'
import f3 from './../../public/picture/cv.png'
import SectionHeading from "./shared/SectionHeading";
import CustomButton from "./shared/CustomButton";

const Features = () => {
    return (
        <div className="relative overflow-hidden w-full">
        {/* Background with wave effect */}
        <div 
            className="absolute inset-0 bg-gradient-to-r from-[#F9F51A] to-[#FFD700]"
            style={{
                clipPath: "path('M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,64C840,32,960,0,1080,0C1200,0,1320,32,1440,48L1440,320L0,320Z')",
            }}
        ></div>

        <section className="relative z-10 m-4 md:m-8 py-12">
            <SectionHeading 
                title="Boost Your Hiring Chances by 45% with Our Smart Resume Maker!" 
                subtitle="Craft professional resumes effortlessly with powerful features designed to boost your job search success." 
                section="Our Main Features"
            />

            <div className="container grid justify-center gap-7 py-5 mx-auto lg:grid-cols-2 xl:grid-cols-3">
                {[ 
                    { img: f1, title: "Customizable Resume Templates", desc: "Professionally designed for all industries and career levels..." },
                    { img: f2, title: "Drag-and-Drop Resume Sections", desc: "Effortlessly customize your resume by rearranging sections..." },
                    { img: f3, title: "ATS-Optimized Resumes", desc: "Get past resume filters with our ATS-friendly templates..." },
                    { img: f4, title: "Industry-Specific Resume Analytics", desc: "Get insights tailored to your industry..." },
                    { img: f5, title: "AI-Driven Resume Suggestions", desc: "Enhance your resume with smart AI-powered suggestions..." },
                    { img: f6, title: "Job-Specific Resume Optimization", desc: "Tailor your resume for any job with precision..." },
                ].map((feature, index) => (
                    <div key={index} className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
                        <Image src={feature.img} width={60} height={60} alt={feature.title} />
                        <h2 className="mt-4 mb-2 text-lg font-semibold sm:text-xl">{feature.title}</h2>
                        <p className="mb-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">{feature.desc}</p>
                        <CustomButton title="Learn More" />
                    </div>
                ))}
            </div>
        </section>
      
        {/* Bottom wave
        <div 
            className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-[#F9F51A] to-[#FFD700] dark:from-gray-800 dark:to-gray-900"
            style={{
                clipPath: "path('M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,202.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z')",
            }}
        ></div> */}
    </div>
    );
};

export default Features;