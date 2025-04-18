'use client'
import { FaLocationArrow, FaMobile, FaVoicemail } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'

export default function ProfessionalTemplate ({ data , isPreview=false}) {
  return (
    <div
      className={`flex flex-col md:flex-row mx-auto my-5 border-2 ${
        isPreview ? 'w-full max-w-4xl' : 'w-full md:w-10/12 lg:w-8/12'
      }`}
    >
      {/* Left Sidebar */}
      <aside
        className={`bg-[rgb(22,56,83)] text-white ${
          isPreview ? 'p-2' : 'p-4'
        } w-full md:w-4/12`}
      >
        {/* Profile Image */}
        <div className='flex justify-center'>
          <Image
            src='/resume/user.png'
            width={isPreview ? 80 : 150}
            height={isPreview ? 80 : 150}
            className={`border-2 border-white rounded-full ${
              isPreview ? 'w-20 h-20' : 'w-36 h-36'
            }`}
            alt='Profile picture'
          />
        </div>

        {/* Contact Section */}
        <div className={`${isPreview ? 'mt-2 mx-2' : 'mt-6 mx-4'}`}>
          <h1
            className={`py-1 border-b-2 font-bold ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            CONTACT
          </h1>
          <ul className={`${isPreview ? 'space-y-1 mt-1' : 'space-y-2 mt-2'}`}>
            <li className='flex items-center space-x-2'>
              <FaMobile className={isPreview ? 'text-xs' : 'text-sm'} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data.personalInfo.phone}
              </span>
            </li>
            <li className='flex items-center space-x-2'>
              <FaVoicemail className={isPreview ? 'text-xs' : 'text-sm'} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data.personalInfo.email}
              </span>
            </li>
            <li className='flex items-center space-x-2'>
              <FaLocationArrow className={isPreview ? 'text-xs' : 'text-sm'} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data.personalInfo.address}
              </span>
            </li>
            <li className='flex items-center space-x-2'>
              <FaEarthAfrica className={isPreview ? 'text-xs' : 'text-sm'} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data.personalInfo.website}
              </span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className={`${isPreview ? 'mt-2 mx-2' : 'mt-6 mx-4'}`}>
          <h1
            className={`py-1 border-b-2 font-bold ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            EDUCATION
          </h1>
          {data.education.map((edu, index) => (
            <div key={index} className={`${isPreview ? 'mt-1' : 'mt-3'}`}>
              <p className={isPreview ? 'text-xs' : 'text-sm'}>{edu.period}</p>
              <h2
                className={
                  isPreview
                    ? 'text-xs font-semibold'
                    : 'text-base font-semibold'
                }
              >
                {edu.institution}
              </h2>
              <ul className={`pl-3 ${isPreview ? 'text-xs' : 'text-sm'}`}>
                <li className='list-disc'>{edu.degree}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className={`${isPreview ? 'mt-2 mx-2' : 'mt-6 mx-4'}`}>
          <h1
            className={`py-1 border-b-2 font-bold uppercase ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            SKILLS
          </h1>
          <ul
            className={`${
              isPreview
                ? 'py-1 pl-2 space-y-1 text-xs'
                : 'py-3 pl-4 space-y-2 text-sm'
            } list-disc`}
          >
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className={`${isPreview ? 'mt-2 mx-2' : 'mt-6 mx-4'}`}>
          <h1
            className={`py-1 border-b-2 font-bold ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            LANGUAGES
          </h1>
          <ul
            className={`${
              isPreview
                ? 'py-1 pl-2 space-y-1 text-xs'
                : 'py-3 pl-4 space-y-2 text-sm'
            } list-disc`}
          >
            {data.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right Content Section */}
      <section className={`${isPreview ? 'p-2' : 'p-4'} w-full md:w-8/12`}>
        {/* Name and Title */}
        <div className={`${isPreview ? 'px-2 py-1' : 'px-16 py-8'}`}>
          <h1
            className={`font-extrabold text-gray-600 ${
              isPreview ? 'text-xl' : 'text-4xl'
            } uppercase`}
          >
            {data.personalInfo.firstName}{' '}
            <span className='text-black'>
              {data.personalInfo.lastName}
            </span>
          </h1>
          <h3
            className={`py-1 text-gray-700 ${
              isPreview ? 'text-sm' : 'text-xl'
            } uppercase`}
          >
            {data.personalInfo.title}
          </h3>
          <div className='border-[rgb(22,56,83)] border-t-2 w-12'></div>
        </div>

        {/* Profile Section */}
        <div className={`${isPreview ? 'mx-1 mb-2' : 'mx-6 mb-6'}`}>
          <h1
            className={`py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] uppercase ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            PROFILE
          </h1>
          <p
            className={`py-2 text-gray-700 ${
              isPreview ? 'text-xs' : 'text-sm'
            }`}
          >
            {data.personalInfo.profile}
          </p>
        </div>

        {/* Work Experience Section */}
        <div className={`${isPreview ? 'mx-1 mb-2' : 'mx-6 mb-6'}`}>
          <h1
            className={`py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] uppercase ${
              isPreview ? 'text-sm' : 'text-xl'
            }`}
          >
            WORK EXPERIENCE
          </h1>
          {data.experience.map((exp, index) => (
            <div key={index} className={`${isPreview ? 'py-1' : 'py-3'}`}>
              <h1
                className={`font-bold text-gray-700 ${
                  isPreview ? 'text-xs' : 'text-sm'
                }`}
              >
                {exp.company}
              </h1>
              <h3
                className={`text-gray-700 ${isPreview ? 'text-xs' : 'text-sm'}`}
              >
                {exp.position}
              </h3>
              <ul
                className={`${
                  isPreview ? 'py-0.5 pl-2 text-xs' : 'py-1 pl-4 text-sm'
                } text-gray-700 list-disc`}
              >
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* References Section */}
        {!isPreview && (
          <div className='mx-6 mb-6'>
            <h1 className='py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] text-xl uppercase'>
              REFERENCES
            </h1>
            {data.references.map((ref, index) => (
              <div key={index} className='mt-2'>
                <h4 className='font-semibold text-sm'>{ref.name}</h4>
                <h5 className='text-gray-700 text-sm'>
                  {ref.position} / {ref.company}
                </h5>
                <p className='text-sm'>{ref.phone}</p>
                <p className='text-sm'>{ref.email}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
