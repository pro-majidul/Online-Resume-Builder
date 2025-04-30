'use client'
import React from 'react'

export default function Resume2 () {
  return (
    <div className='mx-auto my-5 px-12 py-6 border-2 w-7/12'>
      <section>
        <div className='mt-20 mr-4 ml-7'>
          {/* name and title */}
          <h1>
            <span className='gap-2 font-bold text-5xl'>Henrietta Mitchell</span>
          </h1>
          <p className='py-3 w-96 font-semibold text-sm latter-spacing-10'>
            +123-456-7890 · hello@reallygreatsite.com · @reallygreatsite 123
            Anywhere St., Any City, ST 12345
          </p>
          <div className='mt-3 border-[rgb(22,56,83)] border-1 w-full'></div>
        </div>

        <div className='mr-4 ml-7'>
          {/* profile section */}
          <h1 className='mt-7 font-bold text-md uppercase'>
            Business management & Analysis
          </h1>
          <p className='mt-4 text-sm'>
            Motivated and results-driven Business School graduate seeking a
            challenging position within a large organisation as a Business
            Analyst or Project Manager. Offering a strong foundation in business
            strategy, data analysis, and project management, with a proven
            ability to drive efficiency, deliver successful outcomes and
            collaborate within cross-functional teams.
          </p>
        </div>

        <div className='mt-7 mr-4 ml-7'>
          {/* Competencies */}
          <div className='border-[rgb(22,56,83)] border-1 w-full'></div>
          <h1 className='mt-4 font-bold text-[rgb(22,56,83)] text-md uppercase'>
            Key Competencies
          </h1>

          <div className='flex gap-7 mt-1'>
            <p className='py-1 text-gray-700 text-sm'>
              Process improvement Data-driven strategic planning Cost-benefit
              analysis
            </p>

            <p className='py-1 text-gray-700 text-sm'>
              Process improvement Data-driven strategic planning Cost-benefit
              analysis
            </p>

            <p className='py-1 text-gray-700 text-sm'>
              Process improvement Data-driven strategic planning Cost-benefit
              analysis
            </p>
          </div>
        </div>

        <div className='mt-7 mr-4 ml-7'>
          {/* Professional Experience */}
          <div className='border-[rgb(22,56,83)] border-1 w-full'></div>
          <h1 className='mt-4 font-bold text-[rgb(22,56,83)] text-md uppercase'>
            Professional Experience
          </h1>

          <div className='mt-1'>
            <div className='mt-4 text-sm'>
              <div className='flex justify-between font-bold text-sm'>
                <span>Arowwai Industries</span>
                <span>Oct 2023 - Present</span>
              </div>
              <h3 className='font-bold text-sm'>Business Analyst Intern</h3>
              <p>
                Developed and implemented a streamlined process for gathering
                business requirements, reducing project delivery time by 15%.
                Developed and implemented a standardised reporting framework,
                resulting in improved visibility of key performance metrics and
                enabling data-driven decision-making at all levels of the
                organisation.
              </p>
            </div>

            <div className='mt-5 text-sm'>
              <div className='flex justify-between font-bold text-sm'>
                <span>Arowwai Industries</span>
                <span>Oct 2023 - Present</span>
              </div>
              <h3 className='font-bold text-sm'>Business Analyst Intern</h3>
              <p>
                Developed and implemented a streamlined process for gathering
                business requirements, reducing project delivery time by 15%.
                Developed and implemented a standardised reporting framework,
                resulting in improved visibility of key performance metrics and
                enabling data-driven decision-making at all levels of the
                organisation.
              </p>
            </div>

            <div className='mt-5 text-sm'>
              <div className='flex justify-between font-bold text-sm'>
                <span>Arowwai Industries</span>
                <span>Oct 2023 - Present</span>
              </div>
              <h3 className='font-bold text-sm'>Business Analyst Intern</h3>
              <p>
                Developed and implemented a streamlined process for gathering
                business requirements, reducing project delivery time by 15%.
                Developed and implemented a standardised reporting framework,
                resulting in improved visibility of key performance metrics and
                enabling data-driven decision-making at all levels of the
                organisation.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-5 mr-4 ml-7 pb-10 border-t-1 border-black'>
          <div className='flex justify-between mt-3'>
            <div className='border-r-1 border-black w-6/12'>
              <h2 className='font-semibold text-md uppercase'>
                Extracurricular Activities
              </h2>

              <div>
                <h3 className='mt-1 font-bold text-md'>
                  Bachelor of Business Administration
                </h3>
                <p className='font-semibold text-xs'>
                  Majors: Analytics and Project Management
                </p>
                <p className='font-semibold text-xs'>
                  Ginyard International Co.
                </p>
              </div>

              <div className='mt-2'>
                <h3 className='mt-1 font-bold text-md'>
                  Graduate Project Management Certification
                </h3>
                <p className='font-semibold text-xs'>
                  Ginyard International Co.
                </p>
              </div>

              <div className='mt-2'>
                <h3 className='mt-1 font-bold text-md'>
                  Impact Evaluation Methods 3-Day Short Course
                </h3>
                <p className='font-semibold text-xs'>Liceria & Co.</p>
              </div>
            </div>

            <div className='pl-5 w-6/12'>
              <h4 className='font-semibold text-md uppercase'>
                Education & Certifications
              </h4>

              <div className='mt-2'>
                <h3 className='mt-1 font-bold text-md'>
                  President, Business Club
                </h3>
                <p className='font-semibold text-xs'>Liceria & Co.</p>
              </div>

              <div className='mt-2'>
                <h3 className='mt-1 font-bold text-md'>Community Volunteer</h3>
                <p className='font-semibold text-xs'>Liceria & Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
