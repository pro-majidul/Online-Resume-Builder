'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginButton () {
  return (
    <div>
        <button onClick={() => signIn()} className='hover:bg-gray-300 px-6 py-2 border-2 rounded-3xl cursor-pointer' >Log In</button>
    </div>
  )
}
