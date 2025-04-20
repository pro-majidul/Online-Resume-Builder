'use client'
import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function ReferencesForm({ data = [], onChange }) {
  const [references, setReferences] = useState(data.length ? data : [
    { id: Date.now(), name: '', position: '', company: '', phone: '', email: '' }
  ])

  const handleChange = (id, field, value) => {
    const updated = references.map(ref => 
      ref.id === id ? { ...ref, [field]: value } : ref
    )
    setReferences(updated)
    onChange(updated)
  }

  const addReference = () => {
    setReferences([...references, { 
      id: Date.now(),
      name: '',
      position: '',
      company: '',
      phone: '',
      email: ''
    }])
  }

  const removeReference = (id) => {
    const filtered = references.filter(ref => ref.id !== id)
    setReferences(filtered)
    onChange(filtered)
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">References</h2>
      
      {references.map((ref) => (
        <div key={ref.id} className="mb-6 pb-6 border-b last:border-b-0">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Name*</label>
              <input
                type="text"
                value={ref.name}
                onChange={(e) => handleChange(ref.id, 'name', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-sm">Position*</label>
              <input
                type="text"
                value={ref.position}
                onChange={(e) => handleChange(ref.id, 'position', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Senior Manager"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-sm">Company*</label>
            <input
              type="text"
              value={ref.company}
              onChange={(e) => handleChange(ref.id, 'company', e.target.value)}
              className="px-3 py-2 border rounded-lg w-full"
              placeholder="Google"
              required
            />
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Phone</label>
              <input
                type="tel"
                value={ref.phone}
                onChange={(e) => handleChange(ref.id, 'phone', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="+1234567890"
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                value={ref.email}
                onChange={(e) => handleChange(ref.id, 'email', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => removeReference(ref.id)}
            className="flex items-center text-red-500 text-sm"
          >
            <TrashIcon className="mr-1 w-4 h-4" />
            Remove Reference
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addReference}
        className="flex items-center mt-4 text-blue-500"
      >
        <PlusIcon className="mr-1 w-5 h-5" />
        Add Another Reference
      </button>
    </div>
  )
}