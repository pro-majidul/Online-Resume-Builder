'use client'
import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function ExperienceForm({ data = [], onChange }) {
  const [experiences, setExperiences] = useState(data.length ? data : [
    { id: Date.now(), company: '', position: '', startDate: '', endDate: '', bullets: [''] }
  ])

  const handleChange = (id, field, value) => {
    const updated = experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    )
    setExperiences(updated)
    onChange(updated)
  }

  const handleBulletChange = (expId, bulletIndex, value) => {
    const updated = experiences.map(exp => {
      if (exp.id === expId) {
        const newBullets = [...exp.bullets]
        newBullets[bulletIndex] = value
        return { ...exp, bullets: newBullets }
      }
      return exp
    })
    setExperiences(updated)
    onChange(updated)
  }

  const addExperience = () => {
    setExperiences([...experiences, { 
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      bullets: ['']
    }])
  }

  const addBullet = (expId) => {
    const updated = experiences.map(exp => {
      if (exp.id === expId) {
        return { ...exp, bullets: [...exp.bullets, ''] }
      }
      return exp
    })
    setExperiences(updated)
    onChange(updated)
  }

  const removeExperience = (id) => {
    const filtered = experiences.filter(exp => exp.id !== id)
    setExperiences(filtered)
    onChange(filtered)
  }

  const removeBullet = (expId, bulletIndex) => {
    const updated = experiences.map(exp => {
      if (exp.id === expId) {
        const newBullets = exp.bullets.filter((_, i) => i !== bulletIndex)
        return { ...exp, bullets: newBullets.length ? newBullets : [''] }
      }
      return exp
    })
    setExperiences(updated)
    onChange(updated)
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Work Experience</h2>
      
      {experiences.map((exp) => (
        <div key={exp.id} className="mb-6 pb-6 border-b last:border-b-0">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Company*</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Google"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-sm">Position*</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Senior Developer"
                required
              />
            </div>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <label className="block mb-1 font-medium text-sm">Start Date*</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium text-sm">End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                className="px-3 py-2 border rounded-lg w-full"
                placeholder="Present"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-sm">Responsibilities</label>
            {exp.bullets.map((bullet, i) => (
              <div key={i} className="flex items-center mb-2">
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) => handleBulletChange(exp.id, i, e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg"
                  placeholder="Describe your responsibilities..."
                />
                {exp.bullets.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBullet(exp.id, i)}
                    className="ml-2 p-2 text-red-500"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addBullet(exp.id)}
              className="flex items-center mt-1 text-blue-500 text-sm"
            >
              <PlusIcon className="mr-1 w-4 h-4" />
              Add Responsibility
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeExperience(exp.id)}
            className="flex items-center text-red-500 text-sm"
          >
            <TrashIcon className="mr-1 w-4 h-4" />
            Remove Experience
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="flex items-center mt-4 text-blue-500"
      >
        <PlusIcon className="mr-1 w-5 h-5" />
        Add Another Experience
      </button>
    </div>
  )
}