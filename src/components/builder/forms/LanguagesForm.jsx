'use client'
import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function LanguagesForm({ data = [], onChange }) {
  const [languages, setLanguages] = useState(data.length ? data : [''])

  const handleChange = (index, value) => {
    const updated = [...languages]
    updated[index] = value
    setLanguages(updated)
    onChange(updated)
  }

  const addLanguage = () => {
    setLanguages([...languages, ''])
  }

  const removeLanguage = (index) => {
    const filtered = languages.filter((_, i) => i !== index)
    setLanguages(filtered.length ? filtered : [''])
    onChange(filtered.length ? filtered : [''])
  }

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-6 font-bold text-xl">Languages</h2>
      
      <div className="space-y-3">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              value={language}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
              placeholder="English (Fluent)"
            />
            {languages.length > 1 && (
              <button
                type="button"
                onClick={() => removeLanguage(index)}
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
        onClick={addLanguage}
        className="flex items-center mt-4 text-blue-500"
      >
        <PlusIcon className="mr-1 w-5 h-5" />
        Add Another Language
      </button>
    </div>
  )
}