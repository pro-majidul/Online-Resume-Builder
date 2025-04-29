"use client";

import React from "react";
import SectionHeading from "./shared/SectionHeading";
import { useTheme } from "./Context/ThemeContext"; // Import the useTheme hook

const FAQ = () => {
  const { theme } = useTheme(); // Get the theme from context
  // Conditional colors based on theme
  const textColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const titletextColor = theme === "light" ? "text-gray-800" : "text-white";


  return (
    <section className={`${titletextColor} w-full relative`}>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
        {/* <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2> */}
        <SectionHeading
          section=" How it works"
          subtitle=" Explore the most common queries and find your answers."
          title="Frequently Asked Questions"
        ></SectionHeading>
        <div className="space-y-4 md:px-10 mt-10">
          <details className={`w-full border rounded-lg hover:bg-yellow-100 transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              Why should I use a resume Maker?
            </summary>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word?
            </p>
            <p className={`px-4 py-6 text-lg pt-0 ml-4 -mt-4   ${textColor}`}>
              The whole process is a huge pain you make a TINY change to your
              resume, and the entire resume layout gets completely messed up.
            </p>
            <p className={`px-4 py-6 text-lg pt-0 ml-4 -mt-4   ${textColor}`}>
              With a resume builder, you don’t have to worry about the nitty
              gritty of resume creation, like font selection, layout,
              formatting, etc.
            </p>
            <p className={`px-4 py-6 text-lg pt-0 ml-4 -mt-4   ${textColor}`}>
              All you have to do is pick a resume template, fill it in, and then
              you’re ready to start applying for jobs!
            </p>
          </details>
          <details className={`w-full border rounded-lg hover:bg-yellow-100 transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              What is the best resume builder?
            </summary>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              Over the past 7 years, we’ve been working hard to make Novorésumé
              the best resume builder out there.
            </p>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              And we’d say we succeeded! Here’s what sets us apart from the rest
              of the competition:
            </p>
            <ul className="list-disc md:ml-20 px-4 py-6 pt-0 ml-4 -mt-4 text-base">
              <li>
                <span className={`font-medium ${titletextColor}`}>Easy to Use</span> -
                Our builder is very easy to use, even if you are not too
                tech-friendly.
              </li>
              <li>
                <span className={`font-medium ${titletextColor}`}>
                  Get Started in under 5 Minutes
                </span>
                - Just pick one of our resume templates, and you are good to go!
              </li>
              <li>
                <span className={`font-medium ${titletextColor}`}>
                  It is 100% free
                </span>
                - Some resume builders out there pretend to be free… and then
                they hit you with a paywall once you’re done writing your
                resume! We don’t do that. Our builder will instantly notify you
                if you’re using any of our premium features.
              </li>
              <li>
                <span className={`font-medium ${titletextColor}`}>
                  Cover Letter Builder
                </span>
                - If you’re using Novorésumé Premium, you gain access to our
                cover letter builder for free (including matching cover letter
                templates).
              </li>
              <li>
                <span className={`font-medium ${titletextColor}`}>
                  Tons of Customization and Design Options
                </span>
                - Our builder offers a ton of customization. You can make
                changes to the layout, color schemes, and much more.
              </li>
              <li>
                <span className={`font-medium ${titletextColor}`}>
                  ATS-Friendly Resume Templates
                </span>
                - Our resume templates are built on top of some of the most
                popular applicant tracking systems out there. Meaning, your
                resume would not automatically get rejected by any ATS.
              </li>
            </ul>
          </details>
          <details className={`w-full border rounded-lg hover:bg-yellow-100 transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              Is this a completely free resume builder?
            </summary>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              Yes, Novorésumé is a 100% free resume builder.
            </p>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              If you’re on a budget, you can use it to create your resume
              completely free of charge. And no, unlike some other resume
              builders out there, we don’t hit you with a paywall once you’ve
              completed your resume.
            </p>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              If you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You are in
              control!
            </p>
          </details>
          <details className={`w-full border rounded-lg hover:bg-yellow-100 transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              What is a resume?
            </summary>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </p>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              It usually includes information about the following:
            </p>
            <ul className="list-disc md:ml-20 px-4 py-6 pt-0 ml-4 -mt-4 text-base">
              <li>Your work history</li>
              <li>Educational background</li>
              <li>Achievements</li>
              <li>Contact information</li>
              <li>Resume summary or resume objective</li>
            </ul>
          </details>
          <details className={`w-full border rounded-lg hover:bg-yellow-100  transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              What is the difference between a CV and a resume?
            </summary>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              In the EU, the words CV and resume are used interchangeably
            </p>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              In the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics.
            </p>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              Want to learn more? Check out our article on the differences
              between CVs and resumes.
            </p>
          </details>
          <details className={`w-full border rounded-lg hover:bg-yellow-100 transition-all ease-in ${
          theme === 'light'
            ? 'bg-gradient-to-r from-purple-50 to-yellow-50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900'
        } hover:border-yellow-200`}>
            <summary className={`px-4 py-6 focus:outline-none focus-visible:ring-violet-600 text-lg font-bold ${titletextColor}`}>
              What should a resume include?
            </summary>
            <p className={`px-4 py-6 pt-0 ml-4 text-lg -mt-4  ${textColor}`}>
              The must-have contents in your resume include the following
              sections:
            </p>
            <ul className="list-disc text-base md:ml-20 px-4 py-6 pt-0 ml-4 -mt-4">
              <li>Work Experience</li>
              <li>Educational Background</li>
              <li>Contact Information</li>
              <li>Resume summary or Resume Objective</li>
            </ul>
            <p className={`px-4 py-6 pt-0 text-lg ml-4 -mt-4 ${textColor}`}>
              The optional ones are:
            </p>
            <ul className="list-disc text-base md:ml-20 px-4 py-6 pt-0 ml-4 -mt-4">
              <li>Hobbies & Interests</li>
              <li>Skills</li>
              <li>Volunteering Experience</li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
