'use client'
import { useState, useRef, useEffect } from 'react'
import { 
  ArrowsPointingOutIcon, 
  DocumentArrowDownIcon, 
  EyeIcon,
  PrinterIcon,
  LinkIcon,
  ShareIcon,
  SwatchIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import ModernTemplate from "./templates/Modern"
import ProfessionalTemplate from "./templates/Professional"
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { toast } from 'react-hot-toast'

export default function ResumePreview({ template, data }) {
  const [selectedTemplate, setSelectedTemplate] = useState(template)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [scale, setScale] = useState(1)
  const [colorTheme, setColorTheme] = useState('default')
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareLink, setShareLink] = useState('')
  const previewRef = useRef(null)
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Responsive scaling
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        // Auto-scale for mobile
        if (window.innerWidth < 768) {
          setScale(Math.min(containerRef.current.offsetWidth / 210 * 0.95, 1))
        }
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const colorThemes = {
    default: 'bg-white text-gray-900',
    professional: 'bg-blue-50 text-blue-900',
    modern: 'bg-gray-50 text-gray-900',
    creative: 'bg-purple-50 text-purple-900'
  }

  // Handle template change
  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value)
    toast.success(`Switched to ${e.target.value} template`)
  }

  // Generate PDF
  const generatePDF = async () => {
    const toastId = toast.loading('Generating PDF...')
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        logging: true,
        useCORS: true,
      })
      
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${data?.personalInfo?.name || 'resume'}.pdf`)
      toast.success('PDF downloaded successfully!', { id: toastId })
    } catch (error) {
      toast.error('Failed to generate PDF', { id: toastId })
    }
  }

  // Print resume
  const handlePrint = () => {
    toast.loading('Preparing for print...')
    setTimeout(() => {
      window.print()
      toast.dismiss()
      toast.success('Sent to printer!')
    }, 1000)
  }

  // Generate shareable link
  const generateShareLink = () => {
    const dataString = JSON.stringify(data)
    const encoded = btoa(dataString)
    const link = `${window.location.origin}/share?data=${encoded}&template=${selectedTemplate}`
    setShareLink(link)
    setShowShareModal(true)
  }

  // Copy share link
  const copyShareLink = () => {
    navigator.clipboard.writeText(shareLink)
    toast.success('Link copied to clipboard!')
    setShowShareModal(false)
  }

  // Zoom controls
  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1.5))
    toast(`Zoom: ${Math.round((scale + 0.1) * 100)}%`)
  }

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.7))
    toast(`Zoom: ${Math.round((scale - 0.1) * 100)}%`)
  }

  // Template thumbnails
  const templateThumbnails = {
    professional: '/templates/professional-thumb.jpg',
    modern: '/templates/modern-thumb.jpg'
  }

  // Color themes
  const themeOptions = [
    { name: 'Default', value: 'default', bg: 'bg-white', text: 'text-gray-900' },
    { name: 'Professional', value: 'professional', bg: 'bg-blue-50', text: 'text-blue-900' },
    { name: 'Modern', value: 'modern', bg: 'bg-gray-50', text: 'text-gray-900' },
    { name: 'Creative', value: 'creative', bg: 'bg-purple-50', text: 'text-purple-900' }
  ]

  return (
    <div className="top-4 sticky space-y-4" ref={containerRef}>
      {/* Preview Container */}
      <div className={`relative ${colorThemes[colorTheme]} shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-colors duration-300`}>
        
        {/* Preview Header */}
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-3 p-4 border-b">
          <div className="flex items-center">
            <EyeIcon className="mr-2 w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800">Live Preview</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Template Selector */}
            <div className="group relative flex-1 sm:flex-none">
              <select 
                value={selectedTemplate}
                onChange={handleTemplateChange}
                className="bg-white py-2 pr-8 pl-3 border border-gray-300 focus:border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-40 text-sm appearance-none"
              >
                <option value="professional">Professional</option>
                <option value="modern">Modern</option>
              </select>
              <div className="right-0 absolute inset-y-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Zoom Controls */}
            <div className="flex items-center bg-white border border-gray-300 rounded-md divide-x divide-gray-300">
              <button 
                onClick={zoomOut}
                disabled={scale <= 0.7}
                className="hover:bg-gray-50 disabled:opacity-50 px-3 py-1.5 text-gray-600 transition-colors"
              >
                <MagnifyingGlassMinusIcon className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 w-12 text-gray-700 text-xs text-center">
                {Math.round(scale * 100)}%
              </span>
              <button 
                onClick={zoomIn}
                disabled={scale >= 1.5}
                className="hover:bg-gray-50 disabled:opacity-50 px-3 py-1.5 text-gray-600 transition-colors"
              >
                <MagnifyingGlassPlusIcon className="w-4 h-4" />
              </button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hover:bg-gray-100 p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                title="Fullscreen"
              >
                <ArrowsPointingOutIcon className="w-5 h-5" />
              </button>
              
              <button 
                onClick={generatePDF}
                className="hover:bg-gray-100 p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                title="Download PDF"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handlePrint}
                className="hover:bg-gray-100 p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                title="Print Resume"
              >
                <PrinterIcon className="w-5 h-5" />
              </button>
              
              <button 
                onClick={generateShareLink}
                className="hover:bg-gray-100 p-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
                title="Share Resume"
              >
                <ShareIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Preview Content */}
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white overflow-auto' : ''}`}>
          {isFullscreen && (
            <div className="top-0 z-10 sticky flex justify-between items-center bg-white px-6 py-3 border-b">
              <h3 className="font-medium text-gray-800">
                {data?.personalInfo?.name || 'My Resume'} - {selectedTemplate} Template
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="mr-2">Zoom:</span>
                  <button 
                    onClick={zoomOut}
                    disabled={scale <= 0.7}
                    className="disabled:opacity-50 p-1 text-gray-600 hover:text-gray-900"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="mx-2 w-12 text-center">{Math.round(scale * 100)}%</span>
                  <button 
                    onClick={zoomIn}
                    disabled={scale >= 1.5}
                    className="disabled:opacity-50 p-1 text-gray-600 hover:text-gray-900"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={() => setIsFullscreen(false)}
                  className="hover:bg-gray-100 p-1 rounded-full text-gray-600 hover:text-gray-900"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          
          <div className={`flex justify-center p-4 ${isFullscreen ? 'pt-6' : ''}`}>
            <div 
              ref={previewRef}
              className="bg-white shadow-lg transition-transform duration-200"
              style={{
                transform: `scale(${isFullscreen ? scale : Math.min(scale, containerWidth / 210)})`,
                transformOrigin: 'top center',
                width: '210mm',
                minHeight: '297mm',
                overflow: 'hidden'
              }}
            >
              {selectedTemplate === 'professional' && <ProfessionalTemplate data={data} />}
              {selectedTemplate === 'modern' && <ModernTemplate data={data} />}
            </div>
          </div>
        </div>
      </div>
      
      {/* Preview Tips */}
      <div className="bg-blue-50 p-4 border border-blue-200 rounded-lg">   
        <div className="flex items-center mb-2">
          <div className="bg-blue-100 mr-3 p-1.5 rounded-full">
            <EyeIcon className="w-4 h-4 text-blue-600" />
          </div>
          <h4 className="font-medium text-blue-800">Preview Tips</h4>
        </div>
        <ul className="space-y-2 text-blue-700 text-sm">
          <li className="flex items-start">
            <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 mt-0.5 mr-2 rounded-full w-5 h-5 text-blue-800">1</span>
            <span>Switch templates to see different designs</span>
          </li>
          <li className="flex items-start">
            <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 mt-0.5 mr-2 rounded-full w-5 h-5 text-blue-800">2</span>
            <span>Use zoom to check details before downloading</span>
          </li>
          <li className="flex items-start">
            <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 mt-0.5 mr-2 rounded-full w-5 h-5 text-blue-800">3</span>
            <span>Share your resume directly with employers</span>
          </li>
        </ul>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white shadow-xl rounded-lg w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="font-semibold text-gray-900 text-lg">Share Resume</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600 text-sm">
                Copy this link to share your resume with employers:
              </p>
              <div className="flex mb-6">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 text-sm"
                />
                <button
                  onClick={copyShareLink}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 border border-transparent rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-white text-sm"
                >
                  <LinkIcon className="mr-1.5 w-4 h-4" />
                  Copy
                </button>
              </div>
              <div className="text-gray-500 text-xs">
                <p>This link contains all your resume data and will expire in 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}