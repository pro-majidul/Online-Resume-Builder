"use client";
import React from "react";
import { useTheme } from "./Context/ThemeContext";

const CreateMyResume = () => {
  const { theme } = useTheme(); // Get the theme from context

  // Conditional based on theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-100";
  const paragraphColor = theme === "light" ? "text-gray-600" : "text-gray-300";
  const tagBg = theme === "light" ? "bg-gray-300" : "bg-gray-700";
  const tagHoverBg = theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-600";

  const tags = [
    { id: 1, name: "AI Optimized" },
    { id: 3, name: "Modern Design" },
    { id: 4, name: "One-Click Export" },
    { id: 5, name: "Custom Templates" },
  ];

  return (
    <div className={`my-10 px-10 `}>
      <p className={`p-2 pb-5 text-sm font-medium tracking-wider text-center uppercase ${textColor}`}>
        Create Your Resume
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16">
        {/* Video Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-40 md:h-60 lg:min-h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full rounded-lg cursor-pointer"
              src="https://www.youtube.com/embed/edrrp4uNzuQ?si=qaC6Z-lDEmrg1Llx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className={`text-3xl lg:text-4xl font-bold ${textColor}`}>
            Create Your Perfect Resume in Minutes
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${paragraphColor}`}>
            Effortlessly craft a professional resume with AI-powered assistance.
            Customize templates, highlight your skills, and optimize your resume
            for recruiters—all in just a few clicks. Get real-time suggestions and
            a polished design to stand out from the competition.
          </p>

          {/* Resume Categories */}
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={`px-4 py-2 text-sm font-medium ${textColor} ${tagBg} ${tagHoverBg} rounded-full cursor-pointer transition duration-300`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMyResume;
