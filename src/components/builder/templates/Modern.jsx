'use client'
import { FaLocationArrow, FaMobile, FaVoicemail } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'
import Image from 'next/image'

export default function ProfessionalTemplate({ data, isPreview=false }) {
  return (
    <div
      className={`flex flex-col md:flex-row mx-auto my-5 shadow-lg rounded-lg overflow-hidden ${
        isPreview ? 'w-full max-w-4xl' : 'w-full md:w-10/12 lg:w-8/12'
      }`}
    >
      {/* Left Sidebar - Blue Section */}
      <aside
        className={`bg-[#163853] text-white ${
          isPreview ? 'p-3' : 'p-6'
        } w-full md:w-4/12 space-y-6`}
      >
        {/* Profile Image */}
        <div className='flex justify-center'>
          <div className={`relative ${isPreview ? 'w-24 h-24' : 'w-36 h-36'}`}>
            <Image
              src={data?.personalInfo.photo || '/resume/user.png'}
              fill
              className='border-4 border-white rounded-full object-cover'
              alt='Profile picture'
            />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className={`font-bold mb-3 ${isPreview ? 'text-base' : 'text-xl'} flex items-center`}>
            <span className='bg-white mr-2 w-6 h-1'></span>
            CONTACT
          </h2>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <FaMobile className={`mt-1 mr-3 ${isPreview ? 'text-sm' : 'text-base'}`} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data?.personalInfo.phone}
              </span>
            </li>
            <li className='flex items-start'>
              <FaVoicemail className={`mt-1 mr-3 ${isPreview ? 'text-sm' : 'text-base'}`} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data?.personalInfo.email}
              </span>
            </li>
            <li className='flex items-start'>
              <FaLocationArrow className={`mt-1 mr-3 ${isPreview ? 'text-sm' : 'text-base'}`} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data?.personalInfo.address}
              </span>
            </li>
            <li className='flex items-start'>
              <FaEarthAfrica className={`mt-1 mr-3 ${isPreview ? 'text-sm' : 'text-base'}`} />
              <span className={isPreview ? 'text-xs' : 'text-sm'}>
                {data.personalInfo.website}
              </span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div>
          <h2 className={`font-bold mb-3 ${isPreview ? 'text-base' : 'text-xl'} flex items-center`}>
            <span className='bg-white mr-2 w-6 h-1'></span>
            EDUCATION
          </h2>
          <div className='space-y-4'>
            {data?.education.map((edu, index) => (
              <div key={index}>
                <p className={`text-[#a3c3e6] ${isPreview ? 'text-xs' : 'text-sm'}`}>
                  {edu.period}
                </p>
                <h3 className={`font-semibold ${isPreview ? 'text-sm' : 'text-base'}`}>
                  {edu.institution}
                </h3>
                <p className={isPreview ? 'text-xs' : 'text-sm'}>{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className={`font-bold mb-3 ${isPreview ? 'text-base' : 'text-xl'} flex items-center`}>
            <span className='bg-white mr-2 w-6 h-1'></span>
            SKILLS
          </h2>
          <div className='flex flex-wrap gap-2'>
            {data.skills.map((skill, index) => (
              <span 
                key={index} 
                className={`bg-white/20 rounded-full px-3 py-1 ${isPreview ? 'text-xs' : 'text-sm'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h2 className={`font-bold mb-3 ${isPreview ? 'text-base' : 'text-xl'} flex items-center`}>
            <span className='bg-white mr-2 w-6 h-1'></span>
            LANGUAGES
          </h2>
          <ul className='space-y-2'>
            {data?.languages.map((language, index) => (
              <li key={index} className='flex items-center'>
                <span className={`mr-2 ${isPreview ? 'text-xs' : 'text-sm'}`}>•</span>
                <span className={isPreview ? 'text-xs' : 'text-sm'}>{language}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right Content Section - White Section */}
      <section className={`bg-white ${isPreview ? 'p-4' : 'p-8'} w-full md:w-8/12 space-y-6`}>
        {/* Name and Title */}
        <div>
          <h1 className={`font-bold text-gray-800 ${isPreview ? 'text-2xl' : 'text-4xl'} mb-1`}>
            {data?.personalInfo.firstName}{' '}
            <span className='text-[#163853]'>{data.personalInfo.lastName}</span>
          </h1>
          <h2 className={`text-[#163853] ${isPreview ? 'text-base' : 'text-xl'} font-semibold mb-3`}>
            {data?.personalInfo.title}
          </h2>
          <div className='bg-[#163853] w-16 h-1'></div>
        </div>

        {/* Profile Section */}
        <div>
          <h2 className={`text-[#163853] font-bold ${isPreview ? 'text-base' : 'text-xl'} mb-2 flex items-center`}>
            <span className='bg-[#163853] mr-2 w-6 h-1'></span>
            PROFILE
          </h2>
          <p className={`text-gray-700 ${isPreview ? 'text-xs' : 'text-sm'} leading-relaxed`}>
            {data?.personalInfo.profile}
          </p>
        </div>

        {/* Work Experience Section */}
        <div>
          <h2 className={`text-[#163853] font-bold ${isPreview ? 'text-base' : 'text-xl'} mb-3 flex items-center`}>
            <span className='bg-[#163853] mr-2 w-6 h-1'></span>
            WORK EXPERIENCE
          </h2>
          <div className='space-y-4'>
            {data?.experience.map((exp, index) => (
              <div key={index}>
                <div className='flex justify-between items-start'>
                  <h3 className={`font-semibold text-gray-800 ${isPreview ? 'text-sm' : 'text-base'}`}>
                    {exp.position}
                  </h3>
                  <span className={`text-gray-500 ${isPreview ? 'text-xs' : 'text-sm'}`}>
                    {exp.period}
                  </span>
                </div>
                <h4 className={`text-[#163853] ${isPreview ? 'text-xs' : 'text-sm'} mb-2`}>
                  {exp.company}
                </h4>
                <ul className='space-y-1'>
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex} 
                      className={`flex items-start ${isPreview ? 'text-xs' : 'text-sm'} text-gray-700`}
                    >
                      <span className='mr-2'>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* References Section - Only shown in full view */}
        {!isPreview && data.references.length > 0 && (
          <div>
            <h2 className={`text-[#163853] font-bold ${isPreview ? 'text-base' : 'text-xl'} mb-3 flex items-center`}>
              <span className='bg-[#163853] mr-2 w-6 h-1'></span>
              REFERENCES
            </h2>
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
              {data.references.map((ref, index) => (
                <div key={index} className='bg-gray-50 p-3 rounded'>
                  <h4 className='font-semibold text-sm'>{ref.name}</h4>
                  <p className='text-gray-600 text-xs'>{ref.position} / {ref.company}</p>
                  <p className='mt-1 text-gray-500 text-xs'>{ref.phone}</p>
                  <p className='text-gray-500 text-xs'>{ref.email}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}