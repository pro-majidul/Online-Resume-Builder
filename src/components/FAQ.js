import React from "react";

const FAQ = () => {
  return (
      <section className="bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Why should I use a resume Maker?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Using a resume builder makes the process of creating a resume
                significantly faster and easier. Ever tried building your resume
                with Word?
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                The whole process is a huge pain – you make a TINY change to
                your resume, and the entire resume layout gets completely messed
                up.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                With a resume builder, you don’t have to worry about the nitty
                gritty of resume creation, like font selection, layout,
                formatting, etc.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Over the past 7 years, we’ve been working hard to make
                Novorésumé the best resume builder out there.
              </p>
              <ul>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  And we’d say we succeeded! Here’s what sets us apart from the
                  rest of the competition:
                </p>
                <li>
                  <span>Easy to Use</span> - Our builder is very easy to use,
                  even if you're not too tech-friendly.
                </li>
                <li>
                  <span>Get Started in under 5 Minutes</span> - Just pick one of
                  our resume templates, and you're good to go!
                </li>
                <li>
                  <span>It's 100% free</span> - Some resume builders out there
                  pretend to be free… and then they hit you with a paywall once
                  you’re done writing your resume! We don’t do that. Our builder
                  will instantly notify you if you’re using any of our premium
                  features.
                </li>
                <li>
                  <span>Cover Letter Builder</span> - If you’re using Novorésumé
                  Premium, you gain access to our cover letter builder for free
                  (including matching cover letter templates).
                </li>
                <li>
                  <span>Tons of Customization and Design Options </span> - Our
                  builder offers a ton of customization. You can make changes to
                  the layout, color schemes, and much more.
                </li>
                <li>
                  <span>ATS-Friendly Resume Templates</span> - Our resume
                  templates are built on top of some of the most popular
                  applicant tracking systems out there. Meaning, your resume
                  won't automatically get rejected by any ATS.
                </li>
              </ul>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Is this a completely free resume builder?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Yes, Novorésumé is a 100% free resume builder.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                If you’re on a budget, you can use it to create your resume
                completely free of charge. And no, unlike some other resume
                builders out there, we don’t hit you with a paywall once you’ve
                completed your resume.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                If you use any of our premium features, the software will let
                you know about it. It will then ask if you did it accidentally,
                or if you would like to upgrade to Novorésumé Premium. You're in
                control!
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What is a resume?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                A resume (also known as a CV, or curriculum vitae) is a 1-2 page
                document that summarizes your work experience and career
                history.
              </p>
              <ul>
                <p>It usually includes information about the following:</p>
                <li>Your work history</li>
                <li>Educational background</li>
                <li>Achievements</li>
                <li>Contact information</li>
                <li>Resume summary or resume objective</li>
              </ul>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What's the difference between a CV and a resume?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                In the EU, the words "CV" and "resume" are used interchangeably
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                In the United States, however, a resume is a document you use to
                apply for jobs, while a CV is mainly used by academics.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Want to learn more? Check out our article on the differences
                between CVs and resumes.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What should a resume include?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                The must-have contents in your resume include the following
                sections:
              </p>
              <ul>
                <li>Work Experience</li>
                <li>Educational Background</li>
                <li>Contact Information</li>
                <li>Resume summary or Resume Objective</li>
              </ul>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">The optional ones are:</p>
              <ul>
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
