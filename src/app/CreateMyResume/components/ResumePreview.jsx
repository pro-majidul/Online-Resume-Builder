import React from "react";

const ResumePreview = ({ formData }) => {
  const textColor = "text-gray-900";
  const previewBg = "bg-white";

  return (
    <div className={`p-6 rounded-xl shadow-lg ${previewBg} ${textColor} max-w-4xl mx-auto`}>
      {/* Header */}
      <div className="bg-indigo-600 text-white p-6 rounded-t-xl">
        <h1 className="text-5xl font-bold tracking-tight">{formData.firstName} {formData.lastName}</h1>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {formData.email && (
            <a
              href={`mailto:${formData.email}`}
              className="hover:text-yellow-400 transition-colors"
            >
              {formData.email}
            </a>
          )}
          {formData.phone && <span>| {formData.phone}</span>}
          {formData.city && formData.country && <span>| {formData.city}, {formData.country}</span>}
        </div>
        {formData.social.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {formData.social.slice(0, 3).map((social, index) => (
              social.url && (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 w-7 h-7 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-white transition-colors"
                  title={social.platform}
                >
                  {social.platform.slice(0, 1).toUpperCase()}
                </a>
              )
            ))}
          </div>
        )}
      </div>

      {/* Content (Single Column) */}
      <div className="flex flex-col gap-6 p-6">
        {formData.careerObjective && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Career Objective</h3>
            <p className="mt-3 text-sm leading-relaxed">{formData.careerObjective}</p>
          </div>
        )}
        {formData.skills.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Skills</h3>
            <p className="mt-3 text-sm">{formData.skills.join(", ")}</p>
          </div>
        )}
        {formData.courses.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Courses & Certificates</h3>
            {formData.courses.map((course, index) => (
              <div key={index} className="mt-3">
                <h4 className="font-medium text-lg">{course.name}</h4>
                <p className="text-sm text-gray-600">Industry: {course.industry}</p>
                <p className="text-sm text-gray-600">Session: {course.session}</p>
              </div>
            ))}
          </div>
        )}
        {formData.languages.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Languages</h3>
            <p className="mt-3 text-sm">{formData.languages.join(", ")}</p>
          </div>
        )}
        {formData.projects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="mt-3">
                <h4 className="font-medium text-lg">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm mt-1"><strong>Tech:</strong> {project.technology}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-yellow-400 text-sm"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
        {formData.workHistory.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Work Experience</h3>
            {formData.workHistory.map((work, index) => (
              <div key={index} className="mt-3">
                <h4 className="font-medium text-lg">{work.jobTitle}</h4>
                <p className="text-sm">{work.company}, {work.location}</p>
                <p className="text-sm text-gray-600">
                  {work.startDate} - {work.endDate}
                </p>
                <p className="text-sm mt-1">{work.description}</p>
              </div>
            ))}
          </div>
        )}
        {formData.education.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-indigo-600 pb-2">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="mt-3">
                <h4 className="font-medium text-lg">{edu.degree} in {edu.fieldOfStudy}</h4>
                <p className="text-sm">{edu.institution}, {edu.country}</p>
                <p className="text-sm text-gray-600">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;