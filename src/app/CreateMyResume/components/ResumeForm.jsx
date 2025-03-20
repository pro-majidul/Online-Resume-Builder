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
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

 // Generate PDF
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
    let careerText = doc.splitTextToSize(formData.careerObjective, 180);
    doc.text(careerText, 10, yPosition);
    yPosition += careerText.length * 8 ; // Space after Career Objective section
  }

  // Add extra space before Skills
  // yPosition += 1;

  // Skills Section (After Career Objective)
  if (formData.skills.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("Skills:", 10, yPosition);
    yPosition += 8;

    doc.setFont("helvetica", "normal");
    let skillText = formData.skills.join(", "); // Join skills with commas
    let maxWidth = 180; // Adjust this value based on PDF width

    let wrappedText = doc.splitTextToSize(skillText, maxWidth);
    doc.text(wrappedText, 10, yPosition);

    yPosition += wrappedText.length * 8 + 5; // Extra space after Skills
  }

  // Projects Section (After Skills)
   // Projects Section (After Skills)
if (formData.projects.length > 0) {
  doc.setFont("helvetica", "bold");
  doc.text("Projects:", 10, yPosition);
  yPosition += 10;

  doc.setFont("helvetica", "normal");
  formData.projects.forEach((project) => {
    // Project Title
    doc.setFont("helvetica", "bold");
    doc.text(project.title, 10, yPosition);
    yPosition += 8;

    // Description
    doc.text("Description:", 10, yPosition);
    doc.setFont("helvetica", "normal");
    let descriptionText = doc.splitTextToSize(project.description, 180);
    doc.text(descriptionText, 15, yPosition + 8);
    yPosition += descriptionText.length * 8 + 8;

    // Tech Stack
    doc.setFont("helvetica", "bold");
    doc.text("Tech Stack:", 10, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(project.technology, 15, yPosition + 8);
    yPosition += 16;

    // Project Link (Clickable)
    if (project.link) {
      doc.setFont("helvetica", "bold");
      doc.text("Link:", 10, yPosition);
      doc.setTextColor(0, 0, 255); // Set text color to blue
      doc.textWithLink(project.title, 25, yPosition, { url: project.link });
      doc.setTextColor(0, 0, 0); // Reset text color to black
      yPosition += 10;
    }

    yPosition += 12; // Extra space before the next project
  });
}




  // Work History Section
if (formData.workHistory.length > 0) {
  doc.setFont("helvetica", "bold");
  doc.text("Work History:", 10, yPosition);
  yPosition += 8; // Line height

  doc.setFont("helvetica", "normal");

  formData.workHistory.forEach((work, index) => {
    // Job information
    doc.text(`${work.company}, ${work.location}`, 10, yPosition);
    yPosition += 8; // Adjust line height

    // Job title
    doc.text(work.jobTitle, 10, yPosition);
    yPosition += 8;

    // Start and End Date
    doc.text(`${work.startDate} - ${work.endDate}`, 10, yPosition);
    yPosition += 8;

    // Job description
    doc.text(work.description, 10, yPosition, { maxWidth: 180 });
    yPosition += 8; // Extra space after each work entry
  });

  yPosition += 8 + 8; // Space after Work History section
}

  // Education Section (At the End, Without Serial Numbers)
  if (formData.education.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("Education:", 10, yPosition);
    yPosition += 8; // Line height

    doc.setFont("helvetica", "normal");
    formData.education.forEach((edu) => {
      doc.text(`${edu.institution}, ${edu.country}`, 10, yPosition);
      yPosition += 8;
      doc.text(`${edu.degree} in ${edu.fieldOfStudy} (${edu.startYear} - ${edu.endYear})`, 15, yPosition);
      yPosition += 10; // Space after each entry
    });
  }

  // Save the generated PDF
  doc.save("resume.pdf");
};


  

  // Full Resume Preview
  const renderPreview = () => {
    return (
      <div className="space-y-6">
        <div className="text-lg text-center font-semibold">{formData.firstName} {formData.lastName}</div>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Location: {formData.city} {formData.country}</p>
        
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
            <div key={index} className="mb-3 p-2 border rounded">
              <p><strong>{edu.institution}, {edu.country}</strong></p>
              <p className="flex gap-2">{edu.degree} in {edu.fieldOfStudy}  <p className="flex">(<p>{edu.startYear}</p>-<p>{edu.endYear}</p></p>)</p>
            </div>
          ))}
        </div>
        )}

    {formData.projects.length > 0 && (
      <div>
    <h3 className="text-lg font-semibold">Projects</h3>
    {formData.projects.map((project, index) => (
      <div key={index} className="mb-3 p-3 border rounded">
        <p className="text-lg"><strong>{project.title}</strong></p>
        <p className="text-gray-700"><strong>Description:s</strong> {project.description}</p>
        <p><strong>Tech Stack:</strong> {project.technology}</p>
        {project.link && (
          <p>
            <strong>Link:</strong> 
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              {project.title}
            </a>
          </p>
        )}
      </div>
        ))}
      </div>
      )}



        {formData.workHistory.length > 0 && (
          <div>
          <h3 className="text-lg font-semibold">Work History</h3>
          {formData.workHistory.map((work, index) => (
            <div key={index} className="mb-3 p-2 border rounded">
              <p><strong>{work.company}, {work.location}</strong> </p>
              <p>{work.jobTitle}</p>
              <p className="text-sm">
                {work.startDate} - {work.endDate}
              </p>
              <p className="text-gray-700">{work.description}</p>
            </div>
          ))}
        </div>
        
        )}

        {formData.skills.length > 0 && (
          <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index !== formData.skills.length - 1 && ","}
              </span>
            ))}
          </div>
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
              <div key={index} className="mb-3 flex flex-wrap gap-2">
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateField("education", index, { ...edu, institution: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Institution *"
                  required
                />
                <input
                  type="text"
                  value={edu.country}
                  onChange={(e) => updateField("education", index, { ...edu, country: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Country Name"
                />
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateField("education", index, { ...edu, degree: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => updateField("education", index, { ...edu, fieldOfStudy: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Field of Study"
                />
                <input
                  type="number"
                  value={edu.startYear}
                  onChange={(e) => updateField("education", index, { ...edu, startYear: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Start Year"
                />
                <input
                  type="number"
                  value={edu.endYear}
                  onChange={(e) => updateField("education", index, { ...edu, endYear: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="End Year"
                />
                <button 
                  type="button" 
                  onClick={() => removeField("education", index)} 
                  className="bg-gray-600 text-white px-3 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => addField("education", { institution: "", country: "", degree: "", fieldOfStudy: "", startYear: "", endYear: "" })} 
              className="mb-3 bg-black text-white px-4 py-2 rounded"
            >
              + Add Education
            </button>
          </>
          
          )}

          {/* Step 3: Work History */}
          {step === 3 && (
            <>
            <h3 className="text-lg font-semibold">Work Experience</h3>
            {formData.workHistory.map((work, index) => (
              <div key={index} className="mb-3 p-3 border rounded">
                <input
                  type="text"
                  value={work.jobTitle}
                  onChange={(e) => updateField("workHistory", index, { ...work, jobTitle: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={work.company}
                  onChange={(e) => updateField("workHistory", index, { ...work, company: e.target.value })}
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  value={work.location}
                  onChange={(e) => updateField("workHistory", index, { ...work, location: e.target.value })}
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Location (City, Country)"
                />
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    value={work.startDate}
                    onChange={(e) => updateField("workHistory", index, { ...work, startDate: e.target.value })}
                    className="w-1/2 p-2 border rounded"
                    placeholder="Start Date (MM/YYYY)"
                  />
                  <input
                    type="text"
                    value={work.endDate}
                    onChange={(e) => updateField("workHistory", index, { ...work, endDate: e.target.value })}
                    className="w-1/2 p-2 border rounded"
                    placeholder="End Date (MM/YYYY) or Present"
                  />
                </div>
                <textarea
                  value={work.description}
                  onChange={(e) => updateField("workHistory", index, { ...work, description: e.target.value })}
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Job Responsibilities/Description"
                  rows="3"
                />
                <button
                  type="button"
                  onClick={() => removeField("workHistory", index)}
                  className="bg-gray-600 text-white px-3 rounded mt-2"
                >
                  ✕ Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField("workHistory")} className="mb-3 bg-black text-white px-4 py-2 rounded">
              + Add Work Experience
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

          {/* Step 6: Project */}
         {step === 6 && (
       <>
         <h3 className="text-lg font-semibold">Projects</h3>
         {formData.projects.map((project, index) => (
           <div key={index} className="mb-3 p-3 border rounded">
        <input
          type="text"
          value={project.title}
          onChange={(e) => updateField("projects", index, { ...project, title: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Enter Project Title"
        />
        <textarea
          value={project.description}
          onChange={(e) => updateField("projects", index, { ...project, description: e.target.value })}
          className="w-full p-2 border rounded mt-2"
          placeholder="Enter Project Description"
        />
        <input
          type="text"
          value={project.technology}
          onChange={(e) => updateField("projects", index, { ...project, technology: e.target.value })}
          className="w-full p-2 border rounded mt-2"
          placeholder="Enter Technology Stack (e.g., React, Node.js)"
        />
        <input
          type="text"
          value={project.link}
          onChange={(e) => updateField("projects", index, { ...project, link: e.target.value })}
          className="w-full p-2 border rounded mt-2"
          placeholder="Enter Project Link"
        />
        <button 
          type="button" 
          onClick={() => removeField("projects", index)} 
          className="bg-gray-600 text-white px-3 rounded mt-2"
        >
          ✕
        </button>
      </div>
    ))}
    <button 
      type="button" 
      onClick={() => addField("projects")} 
      className="mb-3 bg-black text-white px-4 py-2 rounded"
    >
      + Add Project
    </button>
  </>
)}


          <div className="flex justify-between mt-4">
            <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded" disabled={step === 1}>
              Previous
            </button>

            <button type="button" onClick={nextStep} className="bg-yellow-300 text-black px-4 py-2 rounded" disabled={step === 6} hidden={step ===6}
            >
              Next
            </button>
            {
              step === 6
              &&  <button
              type="button"
              onClick={generatePDF}
              className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded cursor-pointer"
            >
              Download PDF
            </button>
            }
          </div>
        </form>
      </div>

      {/* Resume Preview */}
      <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-bold mb-4">Resume Preview</h3>
        {renderPreview()}
        {/* <button
          type="button"
          onClick={generatePDF}
          className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded"
        >
          Download PDF
        </button> */}
      </div>
    </div>
  );
};

export default Page;
