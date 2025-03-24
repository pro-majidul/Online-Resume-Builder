import React from 'react'
import Image from 'next/image'
import { FaLocationArrow, FaMobile, FaVoicemail } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'

export default function Resume1 () {
  return (
    <div className='flex mx-auto my-5 border-2 w-7/12'>
      <aside className='bg-[rgb(22,56,83)] w-4/12 text-white'>
        <div>
          {/* for img */}
          <Image
            src='/resume/user.png'
            width={170}
            height={170}
            className='mx-auto my-10 border-7 border-white rounded-full'
            alt='user img'
          />
        </div>

        <div className='mx-7'>
          {/* for contract */}
          <h1 className='py-1 border-b-2 font-bold text-xl'>CONTACT</h1>
          <ul>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span><FaMobile></FaMobile></span>
              <span>+123-456-7890</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span><FaVoicemail></FaVoicemail></span>
              <span>hello@reallygreatsite.com</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span><FaLocationArrow></FaLocationArrow></span>
              <span>123 Anywhere St., Any City</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span><FaEarthAfrica></FaEarthAfrica></span>
              <span>www.reallygreatsite.com</span>
            </li>
          </ul>
        </div>

        <div className='mx-7'>
          {/* for education */}
          <h1 className='py-2 border-b-2 font-bold text-xl'>EDUCATION</h1>
          <div className='mt-4'>
            <h1>2029 - 2030</h1>
            <h2 className='text-lg'>wardiere university</h2>
            <ul className='pl-4'>
              <li className='text-sm list-disc'>Master of Business Management</li>
            </ul>
          </div>

          <div className='my-4'>
            <h1>2029 - 2030</h1>
            <h2 className='text-lg'>wardiere university</h2>
            <ul className='pl-4'>
              <li className='text-sm list-disc'>Master of Business Management</li>
            </ul>
          </div>
        </div>

        <div className='mx-7'>
          {/* for skill */}
          <h1 className='py-2 border-b-2 font-bold text-xl uppercase'>skills</h1>
          <ul className='py-3 pl-4 text-sm list-disc'>
            <li>Project Management</li>
            <li>Public Relations</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
          </ul>
        </div>

        <div className='mx-7'>
          {/* for langauge */}
          <h1 className='pt-5 border-b-2 font-bold text-xl'>Languages</h1>
          <ul className='py-5 pl-4 text-sm list-disc'>
            <li>English(Fluent)</li>
            <li>Bangla(Fluent)</li>
            <li>Arabic(Fluent)</li>
          </ul>
        </div>
      </aside>

      {/* right side section */}
      <section>
        <div className='p-20'>
          {/* name and title */}
          <h1><span className='gap-2 font-extrabold text-gray-600 text-4xl uppercase'>Richard</span><span className='mx-1 text-4xl uppercase'>sanchez</span></h1>
          <h3 className='py-1.5 text-gray-700 text-xl uppercase'>Marketing Manager </h3>
          <div className='border-[rgb(22,56,83)] border-3 w-20'></div>
        </div>

        <div className='mr-4 ml-7'>
          {/* profile section */}
          <h1 className='py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] text-xl uppercase'>Profile</h1>
          <p className='py-3 text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.</p>
        </div>

        <div className='mr-4 ml-7'>
          {/* work exp */}
          <h1 className='py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] text-xl uppercase'>Work Experience</h1>
          
          <div className='py-1'>
            <h1 className='mt-2 font-bold text-gray-700 text-sm'>Borcelle Studio</h1>
            <h3 className='text-gray-700'>Marketing Manager & Specialist </h3>
            <ul className='py-1 pl-4 text-gray-700 text-sm list-disc'>
              <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
              <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.</li>
              <li>Monitor brand consistency across marketing channels and materials.</li>
            </ul>
          </div>

          <div className='py-1'>
            <h1 className='mt-2 font-bold text-gray-700 text-sm'>Borcelle Studio</h1>
            <h3 className='text-gray-700'>Marketing Manager & Specialist </h3>
            <ul className='py-1 pl-4 text-gray-700 text-sm list-disc'>
              <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
              <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.</li>
              <li>Monitor brand consistency across marketing channels and materials.</li>
            </ul>
          </div>

          <div className='py-1'>
            <h1 className='mt-2 font-bold text-gray-700 text-sm'>Borcelle Studio</h1>
            <h3 className='text-gray-700'>Marketing Manager & Specialist </h3>
            <ul className='py-1 pl-4 text-gray-700 text-sm list-disc'>
              <li>Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.</li>
              <li>Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.</li>
              <li>Monitor brand consistency across marketing channels and materials.</li>
            </ul>
          </div>
        </div>

        <div className='mr-4 ml-7'>
          {/* referance */}
          <h1 className='py-1 border-[rgb(38,84,121)] border-b-2 font-bold text-[rgb(22,56,83)] text-xl uppercase'>Reference</h1>
        <h4 className='mt-2 font-semibold text-sm'>Estelle Darcy</h4>
        <h5 className='text-gray-700'>Wardiere Inc. / CTO</h5>
        <p className='text-sm'>123-456-7890</p>
        <p className='text-sm'>hello@reallygreatsite.com</p>
        </div>
      </section>
    </div>
  )
}
