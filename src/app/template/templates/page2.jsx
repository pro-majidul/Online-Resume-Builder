'use client'
import React from 'react'
import Image from 'next/image'
import { FaLocationArrow, FaMobile, FaVoicemail } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'

export default function Resume2 () {
  return (
    <div className='mx-auto my-5 pb-5 border-2 w-7/12'>
      <div className="h-16 w-full bg-[#f0cfc3]">

      </div>
      <div className="flex ">
      {/* left side section */}
      <aside className=' w-4/12 pl-7'>
        <div>
          {/* for img */}
          <Image
            src='/resume/user.png'
            width={170}
            height={170}
            className='mx-auto my-10 border-7 border-white rounded-full'
            alt='user img'
          />
        </div>

        <div className='mx-7'>
          {/* for contract */}
          <ul>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>+123-456-7890</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              </span>
              <span>hello@reallygreatsite.com</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                </svg>
              </span>
              <span>www.reallygreatsite.com</span>
            </li>
            <li className='flex items-center space-x-3 py-2 text-sm'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              </span>
              <span>123 Anywhere St., Any City</span>
            </li>
          </ul>
        </div>

        <div className='mx-7'>
          {/* for education */}
          <h1 className='mt-5 font-bold text-xl '>EDUCATION</h1>
          <div className='mt-4'>
            <h2 className='text-lg'>Bachelor of Design</h2>
              <p className='text-md'>Wardiere University</p>
              <p className='text-md'>2029 - 2030</p>
          </div>

          <div className='mt-4'>
            <h2 className='text-lg'>Bachelor of Design</h2>
              <p className='text-md'>Wardiere University</p>
              <p className='text-md'>2029 - 2030</p>
          </div>
        </div>

        <div className='mx-7'>
          {/* for skill */}
          <h1 className='mt-8 font-bold text-xl uppercase'>Expertise</h1>
          <ul className='mt-3 text-md'>
            <li className='mb-3'>Web Design</li>
            <li className='mb-3'>Branding</li>
            <li className='mb-3'>Graphic Design</li>
            <li className='mb-3'>SEO</li>
            <li className='mb-3'>Marketing</li>
          </ul>
        </div>

        <div className='mx-7'>
          {/* for langauge */}
          <h1 className='mt-5 uppercase font-bold text-xl'>Languages</h1>
          <ul className='py-3 text-md'>
            <li className='mb-3'>English</li>
            <li className='mb-3'>French</li>
          </ul>
        </div>
      </aside>

      {/* right side section */}
      <section className=' w-8/12 pr-7'>
        <div className='mr-4 mt-20 ml-7'>
          {/* name and title */}
          <h1><span className='gap-2 text-gray-600 text-5xl uppercase'>juliana silva</span></h1>
          <h3 className='py-3 text-gray-500 latter-spacing-10 text-xl'>Art Director</h3>
          <div className='border-[rgb(22,56,83)] border-1 w-full'></div>
        </div>

        <div className='mr-4 ml-7'>
          {/* profile section */}
          <h1 className=' font-bold mt-10 text-[rgb(22,56,83)] text-xl uppercase'>About Me</h1>
          <p className='mt-4 text-gray-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.</p>
        </div>

        <div className='mr-4 ml-7'>
          {/* work exp */}
          <h1 className='mt-6 font-bold text-[rgb(22,56,83)] text-xl uppercase'>Work Experience</h1>
          
          <div className='mt-1'>
            <h3 className='text-gray-700'>Jan 2022- Present</h3>
            <h3 className='text-gray-700'>Company Name l 123 Anywhere St., Any City</h3>
            <h1 className='text-gray-700 text-xl'>Digital Marketing Manager</h1>
            <p className='py-1 text-gray-700 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat.
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='text-gray-700'>2017 - 2019</h3>
            <h3 className='text-gray-700'>Company Name l 123 Anywhere St., Any City</h3>
            <h1 className='text-gray-700 text-xl'>Social Media Manager</h1>
            <p className='text-gray-700 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat.
            </p>
          </div>

          <div className='mt-6'>
            <h3 className='text-gray-700'>2017 - 2019</h3>
            <h3 className='text-gray-700'>Company Name l 123 Anywhere St., Any City</h3>
            <h1 className='text-gray-700 text-xl'>Social Media Manager</h1>
            <p className='text-gray-700 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat.
            </p>
          </div>

        </div>

        <div className='mr-4 ml-7'>
          {/* referance */}
            <h1 className='mt-2 font-bold text-[rgb(22,56,83)] text-xl uppercase'>Reference</h1>
            <div className='flex gap-20'>
                <div>
                    <h4 className='mt-2 text-xl'>Estelle Darcy</h4>
                    <h5 className='text-gray-700'>Wardiere Inc. / CTO</h5>
                    <p className='text-xs mt-1 flex'>
                        <span>Phone :</span>
                        <span>+123-456-7890</span>   
                    </p>
                    <p className='text-xs flex'>
                        <span>Email :</span>
                        <span>hello@reallygreatsite.com</span>
                    </p>
                </div>

                <div>
                    <h4 className='mt-2 text-xl'>Estelle Darcy</h4>
                    <h5 className='text-gray-700'>Wardiere Inc. / CTO</h5>
                    <p className='text-xs mt-1 flex'>
                        <span>Phone :</span>
                        <span>+123-456-7890</span>   
                    </p>
                    <p className='text-xs flex'>
                        <span>Email :</span>
                        <span>hello@reallygreatsite.com</span>
                    </p>
                </div>
            </div>
        </div>
      </section>
      </div>
    </div>
  )
}
