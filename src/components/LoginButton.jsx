'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginButton () {
  return (
    <div>
        <button onClick={() => signIn()}
         className='cursor-pointer border-2 px-6 py-2 rounded-3xl hover:bg-gray-300' >Sign in</button>
    </div>
  )
}
