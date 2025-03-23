'use client'

import Image from 'next/image'

import SignupForm from './components/SignupForm'
import SocialLogin from '../loginPage/components/SocialLogin'
import { useTheme } from '@/components/Context/ThemeContext';

export default function Signup () {
  const { theme } = useTheme(); // Get the theme from context
  
    // Conditional colors based on theme
    const signUpBg = theme === "light" ? "bg-gray-100" : "bg-gray-800";
    const textColor = theme === "light" ? "text-[#181A1B]" : "text-white";
    const linkHoverColor = theme === "light" ? "hover:text-black" : "hover:text-gray-400";
    const buttonBg = theme === "light" ? "bg-[#F9F51A]" : "bg-[#333]";
    const buttonText = theme === "light" ? "text-[#181A1B]" : "text-white";
  

  return (
    <div className={`lg:flex justify-center ${signUpBg} ${textColor} items-center gap-x-52 bg-[#F4FAFB] p-20 py-10 min-h-screen`}>
      {/* left Section (Image) */}
      <div className='w-full max-w-md h-auto'>
        <Image
          src='/signup.jpg'
          alt='Signup Image'
          width={270} // Increased width
          height={270} // Increased height
          className='w-full h-auto object-cover'
          priority
        />
      </div>
      {/* Right Section (form) */}
      <div className='bg-[#CBBAD9] shadow-sm p-8 rounded-4xl w-full max-w-md'>
        <h2 className='font-bold text-[#18234E] text-3xl lg:text-4xl text-center'>
          SignUp To Your Account
        </h2>

        {/* Signup Form */}
       <SignupForm></SignupForm>

        <div className='my-4 text-gray-500 text-center'>OR</div>

        {/* Social Logins */}
        <SocialLogin></SocialLogin>

        <p className='mt-4 text-gray-600 text-center'>
          Already have an account?{' '}
          <a
            href="loginPage"
            className='font-semibold text-blue-600 hover:underline'
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
