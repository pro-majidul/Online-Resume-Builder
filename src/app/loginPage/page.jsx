'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import LoginForm from './components/LoginForm'
import SocialLogin from './components/SocialLogin'
import { useTheme } from '@/components/Context/ThemeContext'
import Link from 'next/link'

export default function Login() {
  const { theme } = useTheme()

  // Theme-specific styles based on your colors
  const bgColor = theme === 'light' ? 'bg-[#FFFFFF]' : 'bg-[#000000]'
  const textColor = theme === 'light' ? 'text-[#181A1B]' : 'text-[#E4E6E7]'
  const secondaryColor = theme === 'light' ? 'bg-[#FEDBFF]' : 'bg-[#230024]'
  const accentColor = theme === 'light' ? 'text-[#20252D]' : 'text-[#D2D7DF]'

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${bgColor}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`relative max-w-4xl w-full flex flex-col lg:flex-row ${secondaryColor}/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-${accentColor}/20`}
      >
        {/* Left Section (Image) */}
        <div className='relative w-full lg:w-1/2 h-60 lg:h-auto'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='inset-0 flex justify-center items-center mt-10'
          >
            <h3
              className={`text-3xl font-extrabold ${textColor} drop-shadow-lg`}
            >
              Welcome Back
            </h3>
          </motion.div>
          <Image
            src='/login.jpg'
            alt='Login Image'
            width={500}
            height={500}
            className='opacity-80 w-full h-full object-cover'
            priority
          />
        </div>

        {/* Right Section (Form) */}
        <div className='p-8 lg:p-12 w-full lg:w-1/2'>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#F9F51A] to-${accentColor} bg-clip-text text-transparent`}
          >
            Log In
          </motion.h2>

          {/* Login Form */}
          <LoginForm />

          {/* <div className='flex py-2 space-x-1'>
            <p>Forget Your Password?</p>
            <Link href='/request-reset' className='hover:underline hover:text-red-600'>reset password</Link>
          </div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className={`my-6 text-center ${accentColor} relative`}
          >
            <span className={`${secondaryColor}/60 px-4`}>OR</span>
            <div
              className={`absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#F9F51A] to-transparent`}
            ></div>
          </motion.div>

          {/* Social Logins */}
          <SocialLogin />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className={`mt-6 text-center text-sm ${textColor}`}
          >
            Don’t have an account?{' '}
            <a
              href='/signupPage'
              className={`font-bold text-[#F9F51A] hover:text-${accentColor} transition-colors`}
            >
              Sign Up
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
