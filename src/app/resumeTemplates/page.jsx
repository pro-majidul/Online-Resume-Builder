'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ParallaxHeader from '@/components/shared/ParallaxHeader'
import CustomButton from '@/components/shared/CustomButton'
import { useTheme } from '@/components/Context/ThemeContext'

const ResumeTemplates = () => {
  const { theme } = useTheme()

  // Theme-specific styles
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900'
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-gray-100'
  const secondaryColor = theme === 'light' ? 'bg-purple-100' : 'bg-purple-900/30'
  const accentColor = theme === 'light' ? 'text-gray-700' : 'text-gray-300'
  const primaryColor = 'bg-yellow-400'
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-gray-800'
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700'
  const hoverBorderColor = theme === 'light' ? 'hover:border-yellow-400' : 'hover:border-yellow-300'

  const categories = [
    { name: 'Modern', icon: '/icon/modern.png', description: 'Sleek designs with contemporary layouts' },
    { name: 'Creative', icon: '/icon/creative.png', description: 'Unique styles for standout applications' },
    { name: 'Minimalist', icon: '/icon/compact-layout.png', description: 'Clean, focused, and distraction-free' },
    { name: 'Professional', icon: '/icon/professional.png', description: 'Timeless formats for corporate roles' }
  ]

  const templates = [
    { 
      image: '/picture/c7.jpg', 
      category: 'Modern', 
      name: 'Neo Executive',
      features: ['ATS optimized', '2-page layout', 'Skills visualization']
    },
    { 
      image: '/picture/c8.jpg', 
      category: 'Creative', 
      name: 'Portfolio Hybrid',
      features: ['Project showcase', 'Visual elements', 'Personal branding']
    },
    { 
      image: '/picture/c4.jpg', 
      category: 'Professional', 
      name: 'Corporate Classic',
      features: ['Traditional format', 'Section hierarchy', 'Conservative styling']
    },
    { 
      image: '/picture/c5.jpg', 
      category: 'Minimalist', 
      name: 'Essential',
      features: ['Single page', 'Clean typography', 'Content-focused']
    },
    { 
      image: '/picture/c6.jpg', 
      category: 'Modern', 
      name: 'Tech Pro',
      features: ['Technical skills section', 'Project highlights', 'Modern typography']
    }
  ]

  const cardVariants = {
    hover: { 
      y: -8, 
      boxShadow: theme === 'light' 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
        : '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={`min-h-screen font-sans ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Hero Section */}
      <ParallaxHeader
        headline="Craft Your Professional Story"
        title="Impress recruiters with designer-quality resumes that highlight your unique value"
        className={`py-28 ${theme === 'light' ? 'bg-gradient-to-br from-purple-50 to-white' : 'bg-gradient-to-br from-gray-800 to-gray-900'}`}
        textColor={textColor}
      />

      {/* Template Categories */}
      <section className="mx-auto px-4 sm:px-6 py-20 max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-4 font-bold text-4xl md:text-5xl"
          >
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent">
              Resume Categories
            </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mx-auto max-w-2xl text-xl ${accentColor}`}
          >
            Select the perfect style that aligns with your industry and personality
          </motion.p>
        </div>
        
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover="hover"
              // variants={cardVariants}
              className={`${cardBg} ${borderColor} ${hoverBorderColor} p-6 rounded-xl shadow-sm border-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full`}
            >
              <div className={`w-16 h-16 rounded-full ${secondaryColor} flex items-center justify-center mb-4`}>
                <img src={category.icon} alt={category.name} className="w-10 h-10" />
              </div>
              <h3 className={`font-bold text-xl mb-2 ${textColor}`}>
                {category.name}
              </h3>
              <p className={`text-sm ${accentColor} mb-4`}>
                {category.description}
              </p>
              <div className="mt-auto">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${theme === 'light' ? 'bg-purple-100 text-purple-800' : 'bg-purple-900/50 text-purple-200'}`}>
                  {index + 1}2+ Templates
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Templates */}
      <section className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'}`}>
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-4 font-bold text-4xl md:text-5xl"
            >
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent">
                Featured Templates
              </span>
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`mx-auto max-w-2xl text-xl ${accentColor}`}
            >
              Professionally designed templates optimized for applicant tracking systems
            </motion.p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover="hover"
                // variants={cardVariants}
                className={`group relative rounded-xl overflow-hidden shadow-lg ${borderColor} ${hoverBorderColor} border-2 transition-all duration-300`}
              >
                {/* Resume Image */}
                <div className="relative w-full aspect-[1/1.414]"> {/* Standard paper ratio */}
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="group-hover:brightness-90 object-cover transition-all duration-500"
                  />
                </div>

                {/* Overlay Content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${theme === 'light' ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-400 text-gray-900'}`}>
                      {template.category}
                    </span>
                  </div>
                  <h3 className={`font-bold text-xl text-white mb-1`}>
                    {template.name}
                  </h3>
                  <ul className="mb-4">
                    {template.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-1 text-gray-300 text-sm">
                        <svg className="mr-2 w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2"
                  >
                    <CustomButton
                      title="Use This Template"
                      className={`w-full ${primaryColor} text-gray-900 hover:bg-yellow-500 px-5 py-3 rounded-md font-semibold shadow-md transition-all duration-300 flex items-center justify-center`}
                      icon={
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      }
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <CustomButton
                title="View All Templates"
                className={`${theme === 'light' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-100'} px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 inline-flex items-center`}
                icon={
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto px-4 sm:px-6 py-20 max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-4 font-bold text-4xl md:text-5xl"
          >
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mx-auto max-w-2xl text-xl ${accentColor}`}
          >
            Professionals who landed their dream jobs with our templates
          </motion.p>
        </div>
        
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {[
            {
              quote: "The modern template helped me stand out in a competitive tech market. I received 3 interview requests within a week!",
              name: "Sarah Johnson",
              role: "Senior UX Designer at Google",
              avatar: "/icon/Avter.png"
            },
            {
              quote: "As a recent graduate, the professional template gave me credibility. I landed my first job at a Fortune 500 company.",
              name: "Michael Chen",
              role: "Financial Analyst at JPMorgan",
              avatar: "/icon/Avter.png"
            },
            {
              quote: "The creative template perfectly showcased my portfolio. I doubled my freelance client base in two months.",
              name: "Emily Rodriguez",
              role: "Creative Director, Self-Employed",
              avatar: "/icon/Avter.png"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`${cardBg} ${borderColor} p-8 rounded-xl shadow-sm`}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className={`text-lg italic mb-6 ${textColor}`}>"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="rounded-full w-12 h-12 overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className={`font-bold ${textColor}`}>{testimonial.name}</h4>
                  <p className={`text-sm ${accentColor}`}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`py-24 ${theme === 'light' ? 'bg-gradient-to-r from-purple-50 to-yellow-50' : 'bg-gradient-to-r from-gray-800 to-gray-900'}`}>
        <div className="mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-6 font-bold text-4xl md:text-5xl"
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mx-auto mb-10 text-xl ${accentColor}`}
          >
            Create a resume that gets you noticed and hired faster
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <CustomButton
              title="Build Your Resume Now"
              className={`${primaryColor} text-gray-900 hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 text-lg inline-flex items-center`}
              icon={
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`mt-6 text-sm ${accentColor}`}
          >
            No credit card required · 7-day free trial
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default ResumeTemplates