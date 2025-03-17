'use client'
import { Link } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import { registerUser } from '../actions/auth/registerUser'

export default function Signup () {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async(data) => {
    const payload = data;
    const result = await registerUser(payload);
    console.log(result);
    reset()
  }

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
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block ml-3 text-[#17224d]'>Username :</label>
            <input
              type='text'
              {...register('name', { required: 'Full Name is required' })}
              className='bg-white mt-2 px-4 py-2 focus:border-blue-400 rounded-3xl focus:outline-none focus:ring w-full'
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name?.message}</p>
            )}
          </div>

          <div>
            <label className='block ml-3 text-[#17224d]'>Email Address :</label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format'
                }
              })}
              className='bg-white mt-2 px-4 py-2 border focus:border-blue-400 rounded-3xl focus:outline-none focus:ring w-full'
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email?.message}</p>
            )}
          </div>

          <div>
            <label className='block ml-3 text-[#17224d]'>Password</label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              className='bg-white mt-2 px-4 py-2 border focus:border-blue-400 rounded-3xl focus:outline-none focus:ring w-full'
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password?.message}</p>
            )}
          </div>

          <button
            type='submit'
            className='bg-[#28DEC0] hover:bg-blue-700 mt-2 py-2 rounded-3xl w-full font-bold text-white transition'
          >
            Sign Up
          </button>
        </form>

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
