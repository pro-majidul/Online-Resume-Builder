'use client'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeftIcon, 
  DocumentArrowDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function BuilderLayout({ 
  children, 
  steps, 
  currentStep,
  template,
  isFormValid = true, // Pass this from parent component
  onSave = () => {}    // Callback to save data
}) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  
  // Get current step index
  const currentIndex = steps.findIndex(step => step.id === currentStep)
  
  useEffect(() => {
    setIsClient(true)
    // Auto-save when component mounts
    onSave()
  }, [])

  // Navigation handlers
  const goToNextStep = () => {
    onSave() // Save before navigating
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1]
      router.push(`/builder?template=${template}&step=${nextStep.id}`)
    } else {
      // Submit logic when all steps are complete
      router.push(`/builder/complete?template=${template}`)
    }
  }
  
  const goToPrevStep = () => {
    onSave() // Save before navigating
    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1]
      router.push(`/builder?template=${template}&step=${prevStep.id}`)
    }
  }

  // Calculate progress percentage
  const progressPercentage = ((currentIndex + 1) / steps.length) * 100

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center mx-auto px-4 py-4 max-w-7xl">
          <button 
            onClick={() => {
              onSave()
              router.push('/resumeTemplates')
            }}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="mr-2 w-5 h-5" />
            Back to Templates
          </button>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                onSave()
                // Trigger download logic here
              }}
              className="flex items-center bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <DocumentArrowDownIcon className="mr-2 w-5 h-5" />
              {isClient ? 'Download PDF' : 'Loading...'}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Indicators */}
      <div className="mx-auto px-4 pt-6 max-w-7xl">
        {/* Step Circles */}
        <div className="flex pb-2 overflow-x-auto">
          {steps.map((step, index) => ( 
            <div key={step.id} className="flex flex-col items-center mr-8">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${currentIndex === index ? 'bg-yellow-400 text-white' : 
                  index < currentIndex ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'}`}
              >
                {index < currentIndex ? (
                  <CheckCircleIcon className="w-6 h-6" />
                ) : (
                  index + 1
                )}
              </div>
              <span className={`mt-2 text-sm font-medium transition-colors
                ${currentIndex === index ? 'text-gray-900 font-semibold' : 
                  index < currentIndex ? 'text-green-600' : 'text-gray-500'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 mt-4 rounded-full w-full h-2.5">
          <div 
            className="bg-yellow-400 rounded-full h-2.5 transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 py-8 max-w-7xl">
        {children}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            onClick={goToPrevStep}
            disabled={currentIndex === 0}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              currentIndex === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronLeftIcon className="mr-1 w-5 h-5" />
            Previous
          </button>
          
          <button
            onClick={goToNextStep}
            disabled={!isFormValid && currentIndex !== steps.length - 1}
            className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
              currentIndex === steps.length - 1
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : !isFormValid
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
            }`}
          >
            {currentIndex === steps.length - 1 
              ? 'Complete Resume' 
              : 'Next Step'}
            {currentIndex < steps.length - 1 && (
              <ChevronRightIcon className="ml-1 w-5 h-5" />
            )}
          </button>
        </div>
      </main>
    </div>
  )
}