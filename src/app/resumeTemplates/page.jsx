'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ParallaxHeader from '@/components/shared/ParallaxHeader'
import CustomButton from '@/components/shared/CustomButton'

const ResumeTemplates = () => {
  const category = [
    { name: 'Modern', icon: '/icon/modern.png' },
    { name: 'Creative', icon: '/icon/creative.png' },
    { name: 'Minimalist', icon: '/icon/compact-layout.png' },
    { name: 'Professional', icon: '/icon/professional.png' }
  ]

  const templates = [
    '/picture/c7.jpg',
    '/picture/c3.jpg',
    '/picture/c4.jpg',
    '/picture/c5.jpg',
    '/picture/c6.jpg'
  ]
  return (
    <div className='bg-gray-50 min-h-screen font-sans'>
      {/* Hero Section */}
      <ParallaxHeader
        headline='Elevate Your Career with a Stunning Resume'
        title='Choose from expertly designed templates to make a lasting impression
          on employers.'
      ></ParallaxHeader>

      {/* Template Categories */}
      <section className='mx-auto px-6 py-16 container'>
        <h2 className='mb-10 font-extrabold text-gray-900 text-4xl text-center'>
          Explore Resume Categories
        </h2>
        <div className='gap-6 grid grid-cols-2 md:grid-cols-4'>
          {category.map(category => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className='bg-white shadow-lg hover:shadow-xl p-4 rounded-xl text-center transition-transform cursor-pointer'
            >
              <div className='flex justify-center items-center mb-4'>
                <img src={category.icon} alt={category.name} className='w-16' />
              </div>
              <h3 className='font-semibold text-gray-800 text-xl'>
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Templates */}
      <section className='mx-auto px-6 py-16 container'>
        <h2 className='mb-10 font-extrabold text-gray-900 text-4xl text-center'>
          Best-Selling Resume Templates
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
        >
          {templates.map((resume, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='group relative shadow-lg border border-gray-200 hover:border-yellow-400 rounded-xl overflow-hidden transition-all duration-300 ease-in-out'
            >
              {/* Resume Image */}
              <Image
                src={resume}
                alt='template'
                width={300}
                height={400}
                className='brightness-100 group-hover:brightness-50 rounded-xl w-full h-auto group-hover:scale-110 transition-all duration-500 ease-in-out transform'
              />

              {/* Overlay Content */}
              <div className='absolute inset-0 flex flex-col justify-center items-center bg-opacity-60 opacity-0 group-hover:opacity-100 p-6 rounded-xl transition-opacity duration-300'>
                <h3 className='font-bold text-white text-lg'>
                  Professional Resume
                </h3>
                <p className='mt-2 text-gray-300 text-sm'>
                  Stand out with a polished resume.
                </p>
                <div className='mt-4'>
                  <CustomButton title='Use Template' />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className='bg-gradient-to-r from-blue-800 to-purple-800 shadow-lg py-24 text-white text-center'>
        <h2 className='mb-4 font-extrabold text-4xl'>
          Craft Your Dream Resume Today
        </h2>
        <p className='opacity-90 mx-auto mb-8 max-w-2xl text-lg'>
          You can make your resume with your own idea.
        </p>
        <div className='space-x-4'>
          <button className='bg-white hover:bg-gray-200 shadow-lg px-8 py-3 rounded-lg font-semibold text-blue-800 transition'>
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default ResumeTemplates
