import React from 'react';
import jsPDF from 'jspdf';

const ResumePDFGen = ({ formData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set fonts
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    
    // Header Section
    const headerColor = [99, 102, 241]; // indigo-500
    doc.setFillColor(...headerColor);
    doc.rect(0, 0, 210, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(`${formData.firstName} ${formData.lastName}`, 20, 25);

    // Contact Info
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let contactText = `${formData.email} | ${formData.phone} | ${formData.city}, ${formData.country}`;
    doc.text(contactText, 20, 35);
    if (formData.email) {
      doc.setTextColor(255, 255, 255);
      doc.textWithLink("", 20, 40, { url: `mailto:${formData.email}` });
    }

    // Social Links
    let socialX = 150;
    formData.social.forEach((social, index) => {
      if (index < 3 && social.url) {
        const platformName = social.platform.charAt(0).toUpperCase() + social.platform.slice(1);
        doc.setTextColor(255, 255, 255); 
        doc.textWithLink(platformName, socialX, 36, { url: social.url });
        socialX += doc.getTextWidth(platformName) + 10;
      }
    });

    let yPosition = 50;
    doc.setTextColor(17, 24, 39);

    // Career Objective
    if (formData.careerObjective) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Career Objective", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      let careerText = doc.splitTextToSize(formData.careerObjective, 170);
      doc.text(careerText, 20, yPosition);
      yPosition += careerText.length * 4 + 8;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    // Skills
    if (formData.skills.length > 0) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Skills", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      let skillsText = formData.skills.join(", ");
      let skillsLines = doc.splitTextToSize(skillsText, 170);
      doc.text(skillsLines, 20, yPosition);
      yPosition += skillsLines.length * 2 + 8;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    // Courses and Certificates
    if (formData.courses.length > 0) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Courses & Certificates", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      formData.courses.forEach((course) => {
        doc.setFont("helvetica", "bold");
        doc.text(course.name, 20, yPosition);
        yPosition += 6;
        doc.setFont("helvetica", "normal");
        doc.text(`Industry: ${course.industry}`, 25, yPosition);
        yPosition += 6;
        doc.text(`Session: ${course.session}`, 25, yPosition);
        yPosition += 8;
      });
      yPosition += 2;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    // Projects
    if (formData.projects.length > 0) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Projects", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      formData.projects.forEach((project) => {
        doc.setFont("helvetica", "bold");
        doc.text(project.title, 20, yPosition);
        yPosition += 6;
        doc.setFont("helvetica", "normal");
        let descText = doc.splitTextToSize(project.description, 165);
        doc.text(descText, 25, yPosition);
        yPosition += descText.length * 5;
        doc.text(`Tech: ${project.technology}`, 25, yPosition);
        yPosition += 6;
        if (project.link) {
          doc.setTextColor(99, 102, 241);
          doc.textWithLink("View Project", 25, yPosition, { url: project.link });
          doc.setTextColor(17, 24, 39);
          yPosition += 5;
        }
        yPosition += 2;
      });
      yPosition += 5;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    // Work History
    if (formData.workHistory.length > 0) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Work Experience", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      formData.workHistory.forEach((work) => {
        doc.setFont("helvetica", "bold");
        doc.text(`${work.jobTitle} at ${work.company}`, 20, yPosition);
        yPosition += 6;
        doc.setFont("helvetica", "normal");
        doc.text(`${work.location} | ${work.startDate} - ${work.endDate}`, 25, yPosition);
        yPosition += 6;
        let descText = doc.splitTextToSize(work.description, 165);
        doc.text(descText, 25, yPosition);
        yPosition += descText.length * 1 + 2;
      });
      yPosition += 10;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    // Education
    // Education
if (formData.education.length > 0) {
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Education", 20, yPosition);
  yPosition += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  formData.education.forEach((edu) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${edu.degree} in ${edu.fieldOfStudy}`, 20, yPosition);
    yPosition += 6;
    doc.setFont("helvetica", "normal");
    doc.text(`${edu.institution}, ${edu.country}`, 25, yPosition);
    yPosition += 6;
    doc.text(`${edu.startYear} - ${edu.endYear}`, 25, yPosition);
    yPosition += 8;
  });
  doc.setDrawColor(99, 102, 241);
  doc.line(20, yPosition - 4, 190, yPosition - 4);
}


    // Languages
    if (formData.languages.length > 0) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Languages", 20, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(formData.languages.join(", "), 20, yPosition);
      yPosition += 8;
      doc.setDrawColor(99, 102, 241);
      doc.line(20, yPosition - 4, 190, yPosition - 4);
    }

    doc.save("resume.pdf");
  };

  return (
    <button 
      onClick={generatePDF}
      className="bg-[#F9F51A] hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded"
    >
      Download PDF
    </button>
  );
};

export default ResumePDFGen;