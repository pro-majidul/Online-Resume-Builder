'use client'
import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function SkillsForm({ data = [], onChange }) {
  const [skills, setSkills] = useState(data.length ? data : [''])

  const handleChange = (index, value) => {
    const updated = [...skills]
    updated[index] = value
    setSkills(updated)
    onChange(updated)
  }

  const addSkill = () => {
    setSkills([...skills, ''])
  }

  const removeSkill = (index) => {
    const filtered = skills.filter((_, i) => i !== index)
    setSkills(filtered.length ? filtered : [''])
    onChange(filtered.length ? filtered : [''])
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Skills</h2>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
              placeholder="Enter a skill"
            />
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-2 p-2 text-red-500"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addSkill}
        className="flex items-center mt-4 text-blue-500"
      >
        <PlusIcon className="mr-1 w-5 h-5" />
        Add Another Skill
      </button>
    </div>
  )
}