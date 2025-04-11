"use client"

import { useState, useEffect } from 'react'
import { X, Moon, Star } from 'lucide-react'
import { getSessionStorage, setSessionStorage } from '@/utils/storage';

export default function EidGreetingModal () {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasModalBeenShown = getSessionStorage('eidModalShown');
    
    if (!hasModalBeenShown) {
      // Show the modal after a short delay when the page loads
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that the modal has been shown
        setSessionStorage('eidModalShown', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className='z-50 fixed inset-0 flex justify-center items-center'>
      {/* Modal backdrop with blur effect */}
      <div
        className='fixed inset-0 bg-black/60 backdrop-blur-sm'
        onClick={closeModal}
      />

      {/* Modal content */}
      <div className='z-10 relative shadow-2xl mx-4 rounded-xl w-full max-w-md overflow-hidden animate-fadeIn'>
        {/* Background gradient pattern */}
        <div className='relative bg-gradient-to-br from-emerald-600 to-teal-800 p-6 overflow-hidden'>
          {/* Decorative elements */}
          <div className='top-4 left-4 absolute text-yellow-300 animate-pulse'>
            <Star size={24} fill='currentColor' />
          </div>
          <div
            className='top-12 right-12 absolute text-yellow-300 animate-pulse'
            style={{ animationDelay: '0.5s' }}
          >
            <Star size={16} fill='currentColor' />
          </div>
          <div
            className='bottom-12 left-16 absolute text-yellow-300 animate-pulse'
            style={{ animationDelay: '0.7s' }}
          >
            <Star size={20} fill='currentColor' />
          </div>
          <div
            className='top-24 left-32 absolute text-yellow-300 animate-pulse'
            style={{ animationDelay: '1s' }}
          >
            <Star size={12} fill='currentColor' />
          </div>

          {/* Moon icon */}
          <div className='-top-6 -right-6 absolute opacity-20 text-yellow-300'>
            <Moon size={72} fill='currentColor' />
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            className='top-2 right-2 absolute text-white/80 hover:text-white transition-colors'
          >
            <X size={24} />
          </button>

          {/* Main content */}
          <div className='py-6 text-center'>
            <div className='inline-block bg-yellow-500/20 mb-6 p-3 rounded-full'>
              <Moon size={48} className='text-yellow-300' fill='currentColor' />
            </div>

            <h2 className='mb-2 font-bold text-white text-3xl'>Eid Mubarak!</h2>
            <div className='bg-yellow-300 mx-auto mb-4 rounded-full w-16 h-1'></div>

            <p className='mb-6 text-white/90'>
              May the blessings of Allah fill your life with happiness, success,
              and prosperity.
            </p>

            <div className='bg-white/10 backdrop-blur-md mb-6 p-4 border border-white/20 rounded-lg'>
              <p className='text-white italic'>
                "Wishing you joy, peace, and blessings on this special occasion.
                May your prayers be answered and your celebrations be filled
                with love."
              </p>
            </div>

            <button
              onClick={closeModal}
              className='bg-yellow-500 hover:bg-yellow-400 shadow-lg px-6 py-2 rounded-full font-medium text-emerald-900 transition-colors'
            >
              Thank You
            </button>
          </div>

          {/* Decorative bottom pattern */}
          <div className='right-0 bottom-0 left-0 absolute bg-pattern-geometric opacity-10 h-8'></div>
        </div>
      </div>
    </div>
  )
}
