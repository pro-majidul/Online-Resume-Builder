'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
export default function LoginForm () {
    const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    const { email, password } = data

    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/' ,// Redirect after login
        redirect: false
      })

     
      if(result.ok) {
        Swal.fire({
            title: "Successfully Loged in!",
            icon: "success",
            draggable: true
          });
        router.push('/')
        reset()
      }else {
        alert('')
        Swal.fire({
            title: "Authentication in faild!",
            icon: "error",
            draggable: true
          });
      }
    } catch (error) {
        Swal.fire({
            title: "Authentication in faild!",
            icon: "error",
            draggable: true
          });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block ml-3 text-[#17224d]'>Username :</label>
          <input
            type='text'
            {...register('username', { required: 'Full Name is required' })}
            className='bg-white mt-2 px-4 py-2 border focus:border-blue-400 rounded-3xl focus:outline-none focus:ring w-full'
          />
          {errors.username && (
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
          className='bg-blue-700 hover:bg-blue-700 mt-2 py-2 rounded-3xl w-full font-bold text-white transition'
        >
          Log In
        </button>
      </form>
    </div>
  )
}
