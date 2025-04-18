'use client'
import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function EducationForm({ data = [], onChange }) {
  const [education, setEducation] = useState(data.length ? data : [
    { id: Date.now(), institution: '', degree: '', period: '' }
  ])

  const handleChange = (id, field, value) => {
    const updated = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    )
    setEducation(updated)
    onChange(updated)
  }

  const addEducation = () => {
    setEducation([...education, { 
      id: Date.now(),
      institution: '',
      degree: '',
      period: ''
    }])
  }

  const removeEducation = (id) => {
    const filtered = education.filter(edu => edu.id !== id)
    setEducation(filtered)
    onChange(filtered)
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Education</h2>
      
      {education.map((edu) => (
        <div key={edu.id} className="mb-6 pb-6 border-b last:border-b-0">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Institution*</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Harvard University"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-sm">Degree*</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Bachelor of Science"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-sm">Period*</label>
            <input
              type="text"
              value={edu.period}
              onChange={(e) => handleChange(edu.id, 'period', e.target.value)}
              className="px-3 py-2 border rounded-lg w-full"
              placeholder="2015 - 2019"
              required
            />
          </div>

          <button
            type="button"
            onClick={() => removeEducation(edu.id)}
            className="flex items-center text-red-500 text-sm"
          >
            <TrashIcon className="mr-1 w-4 h-4" />
            Remove Education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="flex items-center mt-4 text-blue-500"
      >
        <PlusIcon className="mr-1 w-5 h-5" />
        Add Another Education
      </button>
    </div>
  )
}