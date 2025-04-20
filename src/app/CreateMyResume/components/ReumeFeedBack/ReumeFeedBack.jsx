import React, { useState } from "react";
import { useTheme } from "@/components/Context/ThemeContext";

const ReumeFeedBack = ({ formData }) => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Theme-based styling
  const containerBg = theme === "light" ? "bg-[#FFFFFF]" : "bg-[#000000]";
  const cardBg = theme === "light" ? "bg-[#FEDBFF]" : "bg-[#1E2939]";
  const textColor = theme === "light" ? "text-[#181A1B]" : "text-[#E4E6E7]";
  const buttonBg = "bg-[#F9F51A] hover:bg-[#E8E41A]";
  const buttonText = "text-[#181A1B]";
  const accentColor = theme === "light" ? "text-[#20252D]" : "text-[#D2D7DF]";

  // Calculate completion percentage
  const calculateCompletion = () => {
    const fields = [
      { key: "firstName", weight: 10 },
      { key: "lastName", weight: 5 },
      { key: "email", weight: 10 },
      { key: "phone", weight: 5 },
      { key: "country", weight: 5 },
      { key: "city", weight: 5 },
      { key: "careerObjective", weight: 10 },
      { key: "social", weight: 5, isArray: true },
      { key: "education", weight: 15, isArray: true },
      { key: "workHistory", weight: 15, isArray: true },
      { key: "skills", weight: 10, isArray: true },
      { key: "courses", weight: 5, isArray: true },
      { key: "projects", weight: 10, isArray: true },
      { key: "languages", weight: 5, isArray: true },
    ];

    let totalScore = 0;
    const maxScore = fields.reduce((sum, field) => sum + field.weight, 0);

    fields.forEach(({ key, weight, isArray }) => {
      if (isArray) {
        if (formData[key]?.length > 0) {
          totalScore += weight;
        }
      } else {
        if (formData[key]?.trim()) {
          totalScore += weight;
        }
      }
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const score = calculateCompletion();

  // Generate AI-driven feedback
  const generateFeedback = () => {
    const strengths = [];
    const improvements = [];

    // Check filled fields for strengths
    if (formData.firstName && formData.email)
      strengths.push("Provided essential contact information");
    if (formData.careerObjective?.trim())
      strengths.push("Clear career objective defined");
    if (formData.education?.length > 0)
      strengths.push("Included educational background");
    if (formData.workHistory?.length > 0)
      strengths.push("Highlighted relevant work experience");
    if (formData.skills?.length > 0) strengths.push("Listed key skills");

    // Suggest improvements based on missing or sparse fields
    if (!formData.firstName || !formData.email)
      improvements.push("Add first name and email for contact details");
    if (!formData.careerObjective?.trim())
      improvements.push("Write a career objective to outline your goals");
    if (!formData.education?.length)
      improvements.push("Include your educational background");
    if (!formData.workHistory?.length)
      improvements.push("Add work experience to showcase your career");
    if (!formData.skills?.length)
      improvements.push("List skills to highlight your expertise");
    if (!formData.projects?.length)
      improvements.push("Add projects to demonstrate practical experience");
    if (formData.skills?.length < 3)
      improvements.push("Expand technical skills section with more entries");
    if (
      formData.workHistory?.length > 0 &&
      formData.workHistory.some(
        (job) =>
          !job.description?.includes("achieved") &&
          !job.description?.includes("increased") &&
          !job.description?.includes("reduced")
      )
    ) {
      improvements.push(
        "Add quantifiable achievements in work experience (e.g., 'increased sales by 20%')"
      );
    }

    return { strengths, improvements };
  };

  const feedback = generateFeedback();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Small Feedback Button */}
      <button
        onClick={toggleDrawer}
        className={`px-3 py-2 ${buttonBg} ${buttonText} rounded-full text-sm font-medium flex items-center gap-2 transition`}
        title="View Resume Feedback"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Suggestion
      </button>

      {/* Right-Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 ${cardBg} ${textColor} shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl font-bold ${textColor}`}>
              Resume Suggestion
            </h1>
          </div>

          {/* Score Circle */}
          <div className="flex items-center mb-6">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={theme === "light" ? "#e5e7eb" : "#4b5563"}
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray={`${score}, 100`}
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className={`text-2xl font-bold ${textColor}`}>
                  {score}%
                </span>
              </div>
            </div>
          </div>

          {/* Feedback Details */}
          <div>
            <div className="mb-6">
              <h3 className={`text-lg font-medium ${textColor}`}>Strengths</h3>
              {feedback.strengths.length > 0 ? (
                <ul className="list-disc pl-5 mt-2">
                  {feedback.strengths.map((item, index) => (
                    <li key={index} className={accentColor}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`mt-2 ${accentColor}`}>
                  No strengths identified yet. Fill in more fields to improve
                  your score!
                </p>
              )}
            </div>
            <div>
              <h3 className={`text-lg font-medium ${textColor}`}>
                Areas for Improvement
              </h3>
              {feedback.improvements.length > 0 ? (
                <ul className="list-disc pl-5 mt-2">
                  {feedback.improvements.map((item, index) => (
                    <li key={index} className={accentColor}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`mt-2 ${accentColor}`}>
                  Great job! Your resume is complete.
                </p>
              )}
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-6">
            <button
              onClick={toggleDrawer}
              className={`w-full px-4 py-2 ${buttonBg} ${buttonText} rounded-md font-medium transition`}
              title="Close Feedback Drawer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"></div>
      )}
    </div>
  );
};

export default ReumeFeedBack;