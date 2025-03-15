'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import CustomButton from './shared/CustomButton'

export default function LoginButton () {
  return (
    <div>
        <CustomButton onClick={() => signIn()} title="Sign Up"></CustomButton>
    </div>
  )
}
