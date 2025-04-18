'use client'

export default function ProfessionalTemplate({ data }) {
    return (
      <div className="p-8 font-sans" style={{ minHeight: '1123px' }}>
        <header className="mb-8 pb-6 border-b">
          <h1 className="font-bold text-3xl">{data.personalInfo.name || 'Your Name'}</h1>
          <p className="text-gray-600">{data.personalInfo.title || 'Professional Title'}</p>
        </header>
        
        <section className="mb-8">
          <h2 className="mb-4 pb-2 border-b font-bold text-xl">Experience</h2>
          {data.experiences?.map((exp, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p> 
            </div>
          ))}
        </section>
      </div>
    )
  }