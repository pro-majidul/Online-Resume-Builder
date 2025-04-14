import React from "react";
import { useTheme } from "@/components/Context/ThemeContext";
import ResumePDFGenerator from "./ResumePDFGen";

const ResumeForm = ({ step, formData, setFormData, nextStep, prevStep }) => {
  const { theme } = useTheme();

  // Theme-based styling
  const cardBg = theme === "light" ? "bg-[#FEDBFF]" : "bg-[#1E2939]";
  const inputBg = theme === "light" ? "bg-gray-50" : "bg-gray-700";
  const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-600";
  const textColor = theme === "light" ? "text-[#181A1B]" : "text-[#E4E6E7]";
  const buttonBg = "bg-[#F9F51A] hover:bg-[#E8E41A]";
  const buttonText = "text-[#181A1B]";

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle dynamic field changes
  const addField = (field) => {
    let newEntry = "";
    if (field === "education") {
      newEntry = { institution: "", country: "", degree: "", fieldOfStudy: "", startYear: "", endYear: "" };
    } else if (field === "workHistory") {
      newEntry = { jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: "" };
    } else if (field === "projects") {
      newEntry = { title: "", description: "", technology: "", link: "" };
    } else if (field === "courses") {
      newEntry = { name: "", industry: "", session: "" };
    } else if (field === "languages") {
      newEntry = "";
    } else if (field === "social") {
      newEntry = { platform: "", url: "" };
    }
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], newEntry],
    }));
  };

  const updateField = (field, index, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = typeof value === "object" ? value : value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const removeField = (field, index) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  return (
    <form className="space-y-4">
      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Personal Information</h3>
          {["firstName", "lastName", "email", "phone", "country", "city"].map((field, index) => (
            <div key={index} className="mb-3">
              <label className={`block text-sm font-medium ${textColor}`}>
                {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                {["firstName", "email"].includes(field) && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`mt-1 w-full p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                placeholder={`Enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                required={["firstName", "email"].includes(field)}
              />
            </div>
          ))}
          <div className="mb-3">
            <h4 className={`text-sm font-medium ${textColor} mb-2`}>Social Links</h4>
            {formData.social.map((social, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-2 mb-2">
                <input
                  type="text"
                  value={social.platform}
                  onChange={(e) => updateField("social", index, { ...social, platform: e.target.value })}
                  className={`w-full md:w-1/3 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Platform (e.g., LinkedIn)"
                />
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) => updateField("social", index, { ...social, url: e.target.value })}
                  className={`w-full md:w-2/3 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="URL"
                />
                <button
                  type="button"
                  onClick={() => removeField("social", index)}
                  className="text-red-500 hover:text-red-600 self-start mt-2 md:mt-0"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("social")}
              className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md text-sm`}
            >
              + Add Social Link
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Education */}
      {step === 6 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateField("education", index, { ...edu, institution: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Institution"
                  required
                />
                <input
                  type="text"
                  value={edu.country}
                  onChange={(e) => updateField("education", index, { ...edu, country: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Country"
                />
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateField("education", index, { ...edu, degree: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => updateField("education", index, { ...edu, fieldOfStudy: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Field of Study"
                />
                <input
                  type="number"
                  value={edu.startYear}
                  onChange={(e) => updateField("education", index, { ...edu, startYear: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[# sequel to artifact b7d56a4b-0ac4-4f45-b9bf-40882dac43cd version f2a3c7b1-8d56-4e30-b8cf-54c93e45f2cc title ResumeForm.jsx contentType text/jsx
#F9F51A]`}
                  placeholder="Start Year"
                />
                <input
                  type="number"
                  value={edu.endYear}
                  onChange={(e) => updateField("education", index, { ...edu, endYear: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="End Year"
                />
              </div>
              <button
                type="button"
                onClick={() => removeField("education", index)}
                className="mt-2 text-red-500 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("education")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Education
          </button>
        </div>
      )}

      {/* Step 3: Work History */}
      {step === 5 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Work Experience</h3>
          {formData.workHistory.map((work, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={work.jobTitle}
                  onChange={(e) => updateField("workHistory", index, { ...work, jobTitle: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={work.company}
                  onChange={(e) => updateField("workHistory", index, { ...work, company: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Company"
                />
                <input
                  type="text"
                  value={work.location}
                  onChange={(e) => updateField("workHistory", index, { ...work, location: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Location"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={work.startDate}
                    onChange={(e) => updateField("workHistory", index, { ...work, startDate: e.target.value })}
                    className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                    placeholder="Start Date (MM/YYYY)"
                  />
                  <input
                    type="text"
                    value={work.endDate}
                    onChange={(e) => updateField("workHistory", index, { ...work, endDate: e.target.value })}
                    className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                    placeholder="End Date (MM/YYYY)"
                  />
                </div>
                <textarea
                  value={work.description}
                  onChange={(e) => updateField("workHistory", index, { ...work, description: e.target.value })}
                  className={`col-span-2 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Description"
                  rows="3"
                />
              </div>
              <button
                type="button"
                onClick={() => removeField("workHistory", index)}
                className="mt-2 text-red-500 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("workHistory")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Work Experience
          </button>
        </div>
      )}

      {/* Step 4: Career Objective */}
      {step === 2 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Career Objective</h3>
          <textarea
            name="careerObjective"
            value={formData.careerObjective}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
            placeholder="Describe your career goals"
            rows="4"
          />
        </div>
      )}

      {/* Step 5: Skills */}
      {step === 3 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => updateField("skills", index, e.target.value)}
                className={`w-full p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                placeholder="Enter a skill"
              />
              <button
                type="button"
                onClick={() => removeField("skills", index)}
                className="ml-2 text-red-500 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("skills")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Skill
          </button>
        </div>
      )}

      {/* Step 6: Courses & Certificates */}
      {step === 7 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Courses & Certificates</h3>
          {formData.courses.map((course, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => updateField("courses", index, { ...course, name: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Course/Certificate Name"
                />
                <input
                  type="text"
                  value={course.industry}
                  onChange={(e) => updateField("courses", index, { ...course, industry: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Industry"
                />
                <input
                  type="text"
                  value={course.session}
                  onChange={(e) => updateField("courses", index, { ...course, session: e.target.value })}
                  className={`col-span-2 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Session (e.g., 2023, Jan 2023 - Mar 2023)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeField("courses", index)}
                className="mt-2 text-red-500 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("courses")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Course/Certificate
          </button>
        </div>
      )}

      {/* Step 7: Projects */}
      {step === 4 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-3 p-3 border rounded-md bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateField("projects", index, { ...project, title: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Project Title"
                />
                <input
                  type="text"
                  value={project.technology}
                  onChange={(e) => updateField("projects", index, { ...project, technology: e.target.value })}
                  className={`p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Technologies Used"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => updateField("projects", index, { ...project, description: e.target.value })}
                  className={`col-span-2 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Project Description"
                  rows="3"
                />
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) => updateField("projects", index, { ...project, link: e.target.value })}
                  className={`col-span-2 p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                  placeholder="Project Link (optional)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeField("projects", index)}
                className="mt-2 text-red-500 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("projects")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Project
          </button>
        </div>
      )}

      {/* Step 8: Languages */}
      {step === 8 && (
        <div className={`p-4 md:p-6 rounded-lg ${cardBg} shadow-md`}>
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Languages</h3>
          {formData.languages.map((lang, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={lang}
                onChange={(e) => updateField("languages", index, e.target.value)}
                className={`w-full p-2 border rounded-md ${inputBg} ${inputBorder} ${textColor} focus:ring-[#F9F51A] focus:border-[#F9F51A]`}
                placeholder="Enter a language"
              />
              <button
                type="button"
                onClick={() => removeField("languages", index)}
                className="ml-2 text-red-500 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("languages")}
            className={`mt-2 ${buttonBg} ${buttonText} px-3 py-1.5 rounded-md`}
          >
            + Add Language
          </button>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className={`px-4 py-2 rounded-md ${step === 1 ? "bg-gray-300 text-gray-500" : "bg-gray-600 text-white hover:bg-gray-700"}`}
          disabled={step === 1}
        >
          Previous
        </button>
        {step < 8 && (
          <button
            type="button"
            onClick={nextStep}
            className={`${buttonBg} ${buttonText} px-4 py-2 rounded-md`}
          >
            Next
          </button>
        )}
        {step === 8 && <ResumePDFGenerator formData={formData} />}
      </div>
    </form>
  );
};

export default ResumeForm;