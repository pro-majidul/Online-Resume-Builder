"use client";
import React, { useState } from "react";
import { jsPDF } from "jspdf";

const Page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
    careerObjective: "",
    education: [],
    workHistory: [],
    skills: [],
    certifications: [],
    languages: [],
    projects: [],
    references: [],
    recentJob: {
      title: "",
      employer: "",
      location: "",
      workType: "",
      startDate: "",
      endDate: "",
    },
  });

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
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const updateField = (field, index, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const removeField = (field, index) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Step navigation
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
  
    // Set starting position for the first section
    let yPosition = 10;
  
    // Name Section
    doc.text(`${formData.firstName} ${formData.lastName}`, 10, yPosition);
    yPosition += 10; // Adjust line height for the next line
  
    // Contact Info Section
    doc.setFont("helvetica", "normal");
    doc.text(`Email: ${formData.email}`, 10, yPosition);
    yPosition += 8; // Adjust line height
    doc.text(`Phone: ${formData.phone}`, 10, yPosition);
    yPosition += 8;
    doc.text(`Location: ${formData.city}, ${formData.country}`, 10, yPosition);
    yPosition += 12; // Additional space before Career Objective
  
    // Career Objective Section
    if (formData.careerObjective) {
      doc.setFont("helvetica", "bold");
      doc.text("Career Objective:", 10, yPosition);
      yPosition += 8; // Line height
      doc.setFont("helvetica", "normal");
      doc.text(formData.careerObjective, 10, yPosition, { maxWidth: 180 });
      yPosition += 20; // Space after Career Objective section
    }
  
    // Add gap before Education
    yPosition += 10; // This will add a 10-unit gap between Career Objective and Education
  
    // Education Section
    if (formData.education.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Education:", 10, yPosition);
      yPosition += 8; // Line height
      doc.setFont("helvetica", "normal");
      formData.education.forEach((edu, index) => {
        doc.text(`${index + 1}. ${edu}`, 10, yPosition);
        yPosition += 8; // Adjust line height for next item
      });
      yPosition += 10; // Space after Education section
    }
  
    // Work History Section
    if (formData.workHistory.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Work History:", 10, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      formData.workHistory.forEach((work, index) => {
        doc.text(`${index + 1}. ${work}`, 10, yPosition);
        yPosition += 8; // Adjust line height for next item
      });
      yPosition += 10; // Space after Work History section
    }
  
    // Skills Section
    if (formData.skills.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Skills:", 10, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      formData.skills.forEach((skill, index) => {
        doc.text(`${index + 1}. ${skill}`, 10, yPosition);
        yPosition += 8; // Adjust line height for next item
      });
      yPosition += 10; // Space after Skills section
    }
  
    // Save the generated PDF
    doc.save("resume.pdf");
  };
  
  

  // Full Resume Preview
  const renderPreview = () => {
    return (
      <div className="space-y-6">
        <div className="text-lg font-semibold">{formData.firstName} {formData.lastName}</div>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Location: {formData.city}, {formData.country}</p>
        
        {formData.careerObjective && (
          <div>
            <h3 className="text-lg font-semibold">Career Objective</h3>
            <p>{formData.careerObjective}</p>
          </div>
        )}

        {formData.education.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            {formData.education.map((edu, index) => (
              <p key={index}>{edu}</p>
            ))}
          </div>
        )}

        {formData.workHistory.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Work History</h3>
            {formData.workHistory.map((work, index) => (
              <p key={index}>{work}</p>
            ))}
          </div>
        )}

        {formData.skills.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            {formData.skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 min-w-5xl mx-auto bg-white shadow-md rounded-lg flex gap-6">
      <div className="w-full md:w-[70%]">
        <h2 className="text-2xl font-bold mb-4 text-center">Create My Resume</h2>
        <form>
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <>
              {["firstName", "lastName", "email", "phone", "country", "city"].map((field, index) => (
                <div key={index} className="mb-3">
                  <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}
            </>
          )}

          {/* Step 2: Education */}
          {step === 2 && (
            <>
              <h3 className="text-lg font-semibold">Education</h3>
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-3 flex gap-2">
                  <input
                    type="text"
                    value={edu}
                    onChange={(e) => updateField("education", index, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter education details"
                  />
                  <button type="button" onClick={() => removeField("education", index)} className="bg-gray-600 text-white px-3 rounded">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addField("education")} className="mb-3 bg-black text-white px-4 py-2 rounded">
                + Add Education
              </button>
            </>
          )}

          {/* Step 3: Work History */}
          {step === 3 && (
            <>
              <h3 className="text-lg font-semibold">Work History</h3>
              {formData.workHistory.map((work, index) => (
                <div key={index} className="mb-3 flex gap-2">
                  <input
                    type="text"
                    value={work}
                    onChange={(e) => updateField("workHistory", index, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter work history"
                  />
                  <button type="button" onClick={() => removeField("workHistory", index)} className="bg-gray-600 text-white px-3 rounded">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addField("workHistory")} className="mb-3 bg-black text-white px-4 py-2 rounded">
                + Add Work History
              </button>
            </>
          )}

          {/* Step 4: Career Objective */}
          {step === 4 && (
            <>
              <h3 className="text-lg font-semibold">Career Objective</h3>
              <div className="mb-3">
                <textarea
                  name="careerObjective"
                  value={formData.careerObjective}
                  onChange={handleChange}
                  className="w-full h-40 p-2 border rounded"
                  placeholder="Enter your career objective"
                />
              </div>
            </>
          )}

          {/* Step 5: Skills */}
          {step === 5 && (
            <>
              <h3 className="text-lg font-semibold">Skills</h3>
              {formData.skills.map((skill, index) => (
                <div key={index} className="mb-3 flex gap-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateField("skills", index, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter skill"
                  />
                  <button type="button" onClick={() => removeField("skills", index)} className="bg-gray-600 text-white px-3 rounded">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addField("skills")} className="mb-3 bg-black text-white px-4 py-2 rounded">
                + Add Skill
              </button>
            </>
          )}

          <div className="flex justify-between mt-4">
            <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded" disabled={step === 1}>
              Previous
            </button>
            <button type="button" onClick={nextStep} className="bg-yellow-300 text-black px-4 py-2 rounded" disabled={step === 6}>
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Resume Preview */}
      <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-bold mb-4">Resume Preview</h3>
        {renderPreview()}
        <button
          type="button"
          onClick={generatePDF}
          className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
