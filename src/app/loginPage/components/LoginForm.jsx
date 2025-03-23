'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { useTheme } from '@/components/Context/ThemeContext'

export default function LoginForm() {
  const { theme } = useTheme()
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const textColor = theme === 'light' ? 'text-[#181A1B]' : 'text-[#E4E6E7]'
  const secondaryColor = theme === 'light' ? 'bg-[#FEDBFF]' : 'bg-[#230024]'
  const accentColor = theme === 'light' ? '#20252D' : '#D2D7DF'
  const bgInput = theme === 'light' ? 'bg-[#FFFFFF]/50' : 'bg-[#000000]/50'

  const onSubmit = async data => {
    const { email, password } = data

    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
        redirect: false
      })

      if (result?.ok) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
          timer: 2000
        })
        router.push('/')
        reset()
      } else {
        Swal.fire({
          title: "Authentication Failed!",
          icon: "error",
          text: result?.error || "Please check your credentials"
        })
      }
    } catch (error) {
      Swal.fire({
        title: "Authentication Failed!",
        icon: "error",
        text: error.message || "Something went wrong"
      })
    }
  }

  const inputVariants = {
    hover: { scale: 1.02, boxShadow: '0 0 15px rgba(249, 245, 26, 0.5)' }, // #F9F51A glow
    focus: { borderColor: '#F9F51A', boxShadow: '0 0 20px rgba(249, 245, 26, 0.7)' }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Username */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="group relative"
      >
        <FaUser className={`absolute left-4 top-1/2 -translate-y-1/2 text-[#F9F51A] group-focus-within:text-${accentColor}`} />
        <input
          type="text"
          {...register('username', { required: 'Username is required' })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-${accentColor}/50 rounded-xl ${textColor} placeholder-${accentColor}/70 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Username"
          whileHover="hover"
          whileFocus="focus"
          variants={inputVariants}
        />
        {errors.username && (
          <p className="mt-1 text-red-500 text-xs">{errors.username?.message}</p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="group relative"
      >
        <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 text-[#F9F51A] group-focus-within:text-${accentColor}`} />
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format'
            }
          })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-${accentColor}/50 rounded-xl ${textColor} placeholder-${accentColor}/70 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Email"
          whileHover="hover"
          whileFocus="focus"
          variants={inputVariants}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-xs">{errors.email?.message}</p>
        )}
      </motion.div>

      {/* Password */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="group relative"
      >
        <FaLock className={`absolute left-4 top-1/2 -translate-y-1/2 text-[#F9F51A] group-focus-within:text-${accentColor}`} />
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-${accentColor}/50 rounded-xl ${textColor} placeholder-${accentColor}/70 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Password"
          whileHover="hover"
          whileFocus="focus"
          variants={inputVariants}
        />
        {errors.password && (
          <p className="mt-1 text-red-500 text-xs">{errors.password?.message}</p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249, 245, 26, 0.8)' }}
        className={`w-full py-3 bg-[#F9F51A] ${textColor} font-bold rounded-xl hover:bg-${accentColor} hover:text-[#8d8d7b] transition-all duration-300`}
      >
        Log In Now
      </motion.button>
    </form>
  )
}