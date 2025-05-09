'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BuilderLayout from '@/components/builder/BuilderLayout'
import ResumePreview from '@/components/builder/ResumePreview'
import PersonalInfoForm from '@/components/builder/forms/PersonalInfoForm'
import ExperienceForm from '@/components/builder/forms/ExperienceForm'
import EducationForm from '@/components/builder/forms/EducationForm'
import SkillsForm from '@/components/builder/forms/SkillsForm'
import LanguagesForm from '@/components/builder/forms/LanguagesForm'
import ReferencesForm from '@/components/builder/forms/ReferencesForm'
import Loading from '@/components/shared/Loading' // Create a loading component

// Wrap the component that uses useSearchParams in a Suspense boundary
function BuilderPageContent() {
  const searchParams = useSearchParams()
  const template = searchParams.get('template') || 'professional'
  
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      title: '',
      phone: '',
      email: '',
      address: '',
      website: '',
      profile: ''
    },
    experiences: [],
    education: [],
    skills: [],
    languages: [],
    references: []
  })

  const steps = [
    { id: 'personal', title: 'Personal Info' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'languages', title: 'Languages' },
    { id: 'references', title: 'References' }
  ]

  const currentStep = searchParams.get('step') || 'personal'

  const handleDataChange = (section, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: value
    }))
  }

  return (
    <BuilderLayout 
      template={template}
      steps={steps}
      currentStep={currentStep}
    >
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 'personal' && (
            <PersonalInfoForm 
              data={resumeData.personalInfo}
              onChange={(data) => handleDataChange('personalInfo', data)}
            />
          )}
          
          {currentStep === 'experience' && (
            <ExperienceForm 
              data={resumeData.experiences}
              onChange={(data) => handleDataChange('experiences', data)}
            />
          )}
          
          {currentStep === 'education' && (
            <EducationForm 
              data={resumeData.education}
              onChange={(data) => handleDataChange('education', data)}
            />
          )}
          
          {currentStep === 'skills' && (
            <SkillsForm 
              data={resumeData.skills}
              onChange={(data) => handleDataChange('skills', data)}
            />
          )}
          
          {currentStep === 'languages' && (
            <LanguagesForm 
              data={resumeData.languages}
              onChange={(data) => handleDataChange('languages', data)}
            />
          )}
          
          {currentStep === 'references' && (
            <ReferencesForm 
              data={resumeData.references}
              onChange={(data) => handleDataChange('references', data)}
            />
          )}
        </div>
        
        <div className="lg:col-span-1">
          <ResumePreview 
            template={template}
            data={resumeData}
          />
        </div>
      </div>
    </BuilderLayout>
  )
}

// Main exported component with Suspense
export default function BuilderPage() {
  return (
    <Suspense fallback={<Loading />}>
      <BuilderPageContent />
    </Suspense>
  )
}