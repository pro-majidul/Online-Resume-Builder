"use client"
import { useState } from "react";
import Image from "next/image";
import r1 from "../../../../public/picture/c3.jpg";
import r2 from "../../../../public/picture/c4.jpg";
import r3 from "../../../../public/picture/c5.jpg";
import r4 from "../../../../public/picture/c6.jpg";
import r5 from "../../../../public/picture/c7.jpg";
import r6 from "../../../../public/picture/c8.jpg";
import CustomButton from "@/components/shared/CustomButton";

const resumeTemplates = [
  { id: 1, category: "Engineer", title: "Junior Software Engineer", image: r1 },
  { id: 2, category: "Engineer", title: "Senior Software Engineer", image: r2 },
  { id: 3, category: "Engineer", title: "Software Architect", image: r3 },
  { id: 4, category: "Marketing Specialist", title: "Digital Marketing Expert", image: r4 },
  { id: 5, category: "Marketing Specialist", title: "SEO Specialist", image: r5 },
  { id: 6, category: "Marketing Specialist", title: "Social Media Manager", image: r6 },
  { id: 7, category: "Graphic Designer", title: "UI/UX Designer", image: r3 },
  { id: 8, category: "Graphic Designer", title: "Brand Identity Designer", image: r4 },
  { id: 9, category: "Data Analyst", title: "Business Intelligence Analyst", image: r5 },
  { id: 10, category: "Data Analyst", title: "Machine Learning Engineer", image: r6 },
  { id: 11, category: "Project Manager", title: "Agile Project Manager", image: r1 },
  { id: 12, category: "Project Manager", title: "Scrum Master", image: r2 },
];

// Unique Categories
const categories = ["All", ...new Set(resumeTemplates.map((item) => item.category))];

const ResumeTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered Templates
  const filteredTemplates =
    selectedCategory === "All"
      ? resumeTemplates
      : resumeTemplates.filter((template) => template.category === selectedCategory);

  return (
    <div className="container mx-auto my-10 p-6 grid lg:grid-cols-12 gap-4">
      {/* Left Sidebar - Fixed Category Filter */}
      <div className="lg:col-span-2">
        <div className="sticky top-20 flex flex-col gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#F9F51A] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
          <div className="border mt-4"></div>
          <p className="text-center">OR</p>
          <div className="flex justify-center my-5">
            <CustomButton title={"Create My Resume"} />
          </div>
        </div>
      </div>

      {/* Right Side - Scrollable Templates */}
      <div className="lg:col-span-10  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-4   rounded-md">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="relative group overflow-hidden shadow-xl border 
                       transition-all duration-300 ease-in-out transform 
                       hover:scale-105 hover:shadow-[#F9F51A] hover:border-[#F9F51A] hover:shadow-2xl"
            >
              {/* Resume Image */}
              <Image
                src={template.image}
                alt={template.title}
                width={400}
                height={400}
                className="transition-all duration-500 ease-in-out w-full h-auto 
                           brightness-100 group-hover:brightness-50"
              />

              {/* Card Details */}
              <div className="p-4 text-center">
                <h3 className=" text-xs md:text-lg font-semibold text-gray-800">{template.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{template.category}</p>
              </div>

              {/* Hover Effect - Use Template Button */}
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                <div className="flex justify-center my-5">
                  <CustomButton title={"Use Template"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
