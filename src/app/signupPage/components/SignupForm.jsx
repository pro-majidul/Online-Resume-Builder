'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/utils/api'
import { useTheme } from '@/components/Context/ThemeContext'

export default function SignupForm() {
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
    try {
      const result = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password
      })

      if (result?.error) {
        Swal.fire({
          title: "Signup Failed!",
          text: result.error.message || "Something went wrong",
          icon: "error",
        })
      } else {
        Swal.fire({
          title: "Successfully Registered!",
          icon: "success",
          timer: 2000
        })

        const loginResult = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false
        })
        console.log("loginResult", loginResult)
        if (loginResult?.ok) {
          router.push('/')
          reset()
        } else {
          Swal.fire({
            title: "Login Failed!",
            icon: "error"
          })
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Registration Failed!",
        icon: "error",
        text: error.message || "Please try again",
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
        <FaUser className="top-1/2 left-4 absolute text-[#F9F51A] -translate-y-1/2" />
        <motion.input
          type="text"
          {...register('username', { required: 'Username is required' })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-gray-300 rounded-xl ${textColor} placeholder-gray-500 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Username"
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
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
        <FaEnvelope className="top-1/2 left-4 absolute text-[#F9F51A] -translate-y-1/2" />
        <motion.input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format'
            }
          })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-gray-300 rounded-xl ${textColor} placeholder-gray-500 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Email"
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
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
        <FaLock className="top-1/2 left-4 absolute text-[#F9F51A] -translate-y-1/2" />
        <motion.input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          className={`w-full pl-12 pr-4 py-3 ${bgInput} border border-gray-300 rounded-xl ${textColor} placeholder-gray-500 focus:outline-none focus:border-[#F9F51A] transition-all duration-300`}
          placeholder="Enter Password"
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
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
        className={`w-full py-3 bg-[#F9F51A] text-black font-bold rounded-xl hover:bg-${theme === 'light' ? '[#F9F51A]' : '[#D2D7DF]'} transition-all duration-300`}
      >
        Sign Up Now
      </motion.button>
    </form>
  )
}
