'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ParallaxHeader from '@/components/shared/ParallaxHeader'

const ResumeTemplates = () => {
  const category = [
    { name: 'Modern', icon: '/icon/modern.png' },
    { name: 'Creative', icon: '/icon/creative.png' },
    { name: 'Minimalist', icon: '/icon/compact-layout.png' },
    { name: 'Professional', icon: '/icon/professional.png' },
  ]
  return (
    <div className='bg-gray-50 min-h-screen font-sans'>
      {/* Hero Section */}
      <ParallaxHeader
      headline="Elevate Your Career with a Stunning Resume"
      title="Choose from expertly designed templates to make a lasting impression
          on employers."
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
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
          {[1, 2, 3, 4, 5, 6].map(template => (
            <motion.div
              key={template}
              whileHover={{ scale: 1.03 }}
              className='bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-transform cursor-pointer'
            >
              <img
                src={`https://via.placeholder.com/400x500?text=Template+${template}`}
                alt={`Template ${template}`}
                className='rounded-t-xl w-full h-72 object-cover'
              />
              <div className='p-6'>
                <h3 className='mb-2 font-bold text-gray-800 text-xl'>
                  Template {template}
                </h3>
                <p className='mb-4 text-gray-600'>
                  Designed for professionals seeking a competitive edge.
                </p>
                <button className='bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg w-full font-semibold text-white transition'>
                  Choose Template
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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
