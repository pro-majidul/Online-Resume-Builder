'use client'

import Image from 'next/image'
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'

import SignupForm from './components/SignupForm'

export default function Signup () {
  

  return (
    <div className='lg:flex justify-center items-center gap-x-52 bg-[#F4FAFB] px-4 py-10 min-h-screen'>
      {/* left Section (Image) */}
      <div className='w-full max-w-md h-auto'>
        <Image
          src='/signup.jpg'
          alt='Signup Image'
          width={300} // Increased width
          height={300} // Increased height
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
        <div className='flex space-x-1 lg:space-x-4 mt-4'>
          <button className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'>
            <FaGoogle className='mr-0 lg:mr-2' /> Google
          </button>
          <button className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'>
            <FaLinkedin className='mr-0 lg:mr-2' /> Google
          </button>
          <button className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'>
            <FaGithub className='mr-0 lg:mr-2' /> GitHub
          </button>
        </div>

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
