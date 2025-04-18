"use client";
import React, { useState } from "react";
import { useTheme } from "@/components/Context/ThemeContext";
import ResumeForm from "./ResumeInputForm";
import ResumePreview from "./ResumePreview";
import ResumePDFGenerator from "./ResumePDFGen";
// import AiFeedbackScore from "./ReumeAiSugg/AiFeedbackScore";
import ReumeFeedBack from "./ReumeFeedBack/ReumeFeedBack";
import AiAgent from "./AiGenForResume/AiAgent";

const ResumeBuilder = () => {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    social: [],
    careerObjective: "",
    education: [],
    workHistory: [],
    skills: [],
    courses: [],
    projects: [],
    languages: [],
  });

  // Theme-based styling
  const containerBg = theme === "light" ? "bg-[#FFFFFF]" : "bg-[#000000]";
  const textColor = theme === "light" ? "text-[#181A1B]" : "text-[#E4E6E7]";
  const dotActive = theme === "light" ? "bg-[#F9F51A]" : "bg-[#F9F51A]";

  // Step navigation
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className={`p-4 md:p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 ${containerBg}`}>

     


      <div className="w-full md:w-[65%]">
      <div className="flex gap-4 mb-4">
        <ReumeFeedBack formData={formData} ></ReumeFeedBack>
        <AiAgent formData={formData}></AiAgent>
      </div>

        <h2 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>Build Your Resume</h2>
        <div className="mb-6 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full ${step === s ? dotActive : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
        <ResumeForm
          step={step}
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        
      </div>
      <div className="w-full md:w-[35%]">
        <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Resume Preview</h3>
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
};

export default ResumeBuilder;