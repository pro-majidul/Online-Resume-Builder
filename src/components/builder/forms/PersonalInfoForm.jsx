'use client'
import { useState } from 'react'

export default function PersonalInfoForm({ data, onChange }) {
  const [formData, setFormData] = useState(data || {
    firstName: '',
    lastName: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    profile: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...formData, [name]: value }
    setFormData(updated)
    onChange(updated)
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Personal Information</h2>
      
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <label className="block mb-1 font-medium text-sm">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="John"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium text-sm">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm">Professional Title*</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="px-3 py-2 border rounded-lg w-full"
          placeholder="Software Engineer"
          required
        />
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <label className="block mb-1 font-medium text-sm">Phone*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="+1234567890"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium text-sm">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 border rounded-lg w-full"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="px-3 py-2 border rounded-lg w-full"
          placeholder="123 Main St, City"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm">Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="px-3 py-2 border rounded-lg w-full"
          placeholder="www.example.com"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-sm">Professional Summary</label>
        <textarea
          name="profile"
          value={formData.profile}
          onChange={handleChange}
          className="px-3 py-2 border rounded-lg w-full"
          rows={4}
          placeholder="Briefly describe your professional background..."
        />
      </div>
    </div>
  )
}