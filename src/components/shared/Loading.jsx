'use client'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-yellow-500 border-t-2 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  )
}