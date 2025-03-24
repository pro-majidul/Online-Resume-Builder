import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import Swal from 'sweetalert2'
export default function SocialLogin () {
  const router = useRouter()

  const handleSocialLogin = async providerName => {
    const result = await signIn(providerName, {
      redirect: false
    })

    if (result.ok) {
      Swal.fire({
        title: 'Successfully Loged in!',
        icon: 'success',
        draggable: true
      })
      router.push('/')
    } else {
      Swal.fire({
        title: 'Something went wrong!',
        icon: 'error',
        draggable: true
      })
    }
  }
  return (
    <div>
      <div className='flex space-x-1 lg:space-x-4 mt-4'>
        <button
          onClick={() => handleSocialLogin('google')}
          className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'
        >
          <FaGoogle className='mr-0 lg:mr-2' /> Google
        </button>
        <button
          onClick={() => handleSocialLogin('linkdin')}
          className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'
        >
          <FaLinkedin className='mr-0 lg:mr-2' /> Linkedin
        </button>
        <button
          onClick={() => handleSocialLogin('github')}
          className='flex justify-center items-center hover:bg-gray-100 px-1 lg:px-4 py-2 border rounded-lg w-1/2 transition'
        >
          <FaGithub className='mr-0 lg:mr-2' /> GitHub
        </button>
      </div>
    </div>
  )
}
