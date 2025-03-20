'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'lucide-react'
import { registerUser } from '@/app/actions/auth/registerUser'
import Swal from 'sweetalert2'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignupForm () {
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    try {
      const result = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password
      })

      if (result?.error) {
        console.error('Signup Error:', result.error)
      } else {
        console.log('User Registered:', result)

        Swal.fire({
          title: 'Successfully Registered!',
          icon: 'success',
          draggable: true
        })

        // **Automatically log in the user after registration**
        const loginResult = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false
        })

        if (loginResult.ok) {
          router.push('/')
          reset()
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Registration Failed!",
        icon: "error",
        draggable: true
      });
    }
  }

  return (
    <div>
      {' '}
      {/* Signup Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block ml-3 text-[#17224d]'>Username :</label>
          <input
            type='text'
            {...register('username', { required: 'Full Name is required' })}
            className='bg-white mt-2 px-4 py-2 focus:border-blue-400 rounded-3xl focus:outline-none focus:ring w-full'
          />
          {errors.name && (
            <p className='text-red-500 text-sm'>{errors.username?.message}</p>
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
    </div>
  )
}
