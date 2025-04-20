'use client'
import { useState } from 'react'

export default function PersonalInfoForm({ data, onChange }) {
  const [formData, setFormData] = useState(data)

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newData)
    onChange(newData)
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Personal Information</h2>
      
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-1 font-medium text-sm">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium text-sm">Professional Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="Software Engineer"
          />
        </div>
        
        {/* Add more fields... */}
      </div>
    </div>
  )
}