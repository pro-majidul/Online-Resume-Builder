"use client";

import { useTheme } from "@/components/Context/ThemeContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  FaFileAlt,    // For starting the resume
  FaUser,       // For personal info
  FaCheck,      // For review & save
  FaPlusCircle, // For adding new content
  FaBriefcase,  // For work-related content
  FaDownload    // For downloading
} from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState(0);

  // Theme-based styling with Tailwind classes
  const containerBg = theme === "light" ? "bg-[#FFFFFF]" : "bg-[#000000]";
  const textColor = theme === "light" ? "text-[#181A1B]" : "text-[#E4E6E7]";
  const buttonBg = theme === "light" ? "bg-[#F9F51A]" : "bg-[#F9F51A]";
  const buttonText = theme === "light" ? "text-[#181A1B]" : "text-[#230024]";
  const cardBg = theme === "light" ? "bg-[#FEDBFF]" : "bg-[#1E2939]";
  const accentColor = theme === "light" ? "text-[#20252D]" : "text-[#D2D7DF]";
  const dotActive = theme === "light" ? "bg-[#F9F51A]" : "bg-[#F9F51A]";
  const iconBg = theme === "light" ? "bg-[#F9F51A]" : "bg-[#000000]";

  const steps = [
    {
      icon: <FaFileAlt size={24} />,
      extraIcon: <FaPlusCircle size={40} />,
      title: "Begin Your Resume",
      description: "Start building your resume with personal details",
      info: "Kick off your resume creation by entering essential personal information like your name, email, and phone number. Choose a professional template and add details such as your country, city, and address to set the foundation for a standout resume.",
    },
    {
      icon: <FaUser size={24} />,
      extraIcon: <FaBriefcase size={40} />,
      title: "Add Experience & Skills",
      description: "Input your education, work history, and skills",
      info: "Enhance your resume with your academic background, professional experience, and key skills. Include details like degrees, job titles, companies, and technical or soft skills to showcase your qualifications effectively.",
    },
    {
      icon: <FaCheck size={24} />,
      extraIcon: <FaDownload size={40} />,
      title: "Finalize & Download",
      description: "Review your resume and download it as a PDF",
      info: "Polish your resume by adding a career objective and projects. Preview it to ensure accuracy, then download a sleek PDF version ready for job applications or share it directly with employers.",
    },
  ];

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={`container mx-auto px-10 py-8 flex flex-col items-center justify-center ${containerBg} ${textColor}    min-h-screen `}>

      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get Started on Your Dream Resume</h1>
      <p className="text-base md:text-lg text-center mb-8 max-w-2xl">
       Build your dream resume with ease. Add details, select skills, preview, and download a job-ready PDF in minutes using our intuitive Resume Builder. Start today!
       </p>  

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* Button Section */}
        <div className="flex-1 flex justify-center w-full md:w-auto">
          <button
            onClick={() => router.push("/CreateMyResume/resume-builder")}
            className={`${buttonBg} ${buttonText} px-6 py-3 cursor-pointer rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md w-full md:w-auto hover:bg-yellow-300`}
          >
            Create My Resume
          </button>
        </div>

        {/* Cards Section */}
        <div className="flex-1 w-full md:w-auto">
          <div className={`${cardBg} p-6 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 h-96 lg:h-80 lg:w-[700px] flex flex-col lg:flex-row gap-4 justify-between items-center `}>
            {/* Top Section: Icon, Title, Description */}
            <div className={`flex items-center gap-4 ${accentColor}`}>
              {steps[activeCard].icon}
              <div className="flex-1">
                <h3 className="text-xl font-semibold truncate">{steps[activeCard].title}</h3>
                <p className="mt-2 text-base">{steps[activeCard].description}</p>
              </div>
            </div>

            {/* Middle Section: Extra Icon */}
            <div className="flex justify-center my-4">
              <div className={`${iconBg} p-3 rounded-full shadow-md`}>
                {steps[activeCard].extraIcon}
              </div>
            </div>
            {/* Bottom Section: Detailed Info */}
            <div className={`${accentColor}`}>
              <p className="text-sm leading-relaxed">{steps[activeCard].info}</p>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeCard ? dotActive : "bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
          {/* <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos modi repellendus suscipit minima, totam deserunt assumenda vitae quod dolor natus itaque sequi.</h2> */}
    </div>
  );
};

export default Page;