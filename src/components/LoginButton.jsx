'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginButton () {
  return (
    <div>
        <button onClick={() => signIn()} title="Sign Up">Log in</button>
    </div>
  )
}
