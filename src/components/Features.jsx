'use client'
import Image from 'next/image'
import f1 from './../../public/picture/f1.png'
import f2 from './../../public/picture/f7.png'
import f6 from './../../public/picture/f8.png'
import f5 from './../../public/picture/brain.png'
import f4 from './../../public/picture/f2.png'
import f3 from './../../public/picture/cv.png'
import SectionHeading from './shared/SectionHeading'
import CustomButton from './shared/CustomButton'

const Features = () => {
  return (
    <div className='relative md:px-20 w-full overflow-hidden'>
      {/* Background with wave effect */}
      <div
        className='absolute inset-0 bg-gradient-to-r from-[#F9F51A] to-[#FFD700]'
        style={{
          clipPath:
            "path('M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,64C840,32,960,0,1080,0C1200,0,1320,32,1440,48L1440,320L0,320Z')"
        }}
      ></div>

      <section className='z-10 relative m-2 md:m-8 md:py-12'>
        <SectionHeading
          title='Smart Resume Boosts Hiring 45%'
          subtitle='Craft professional resumes effortlessly with powerful features designed to boost your job search success.'
          section='Our Main Features'
        />

        <div className='justify-center gap-7 grid lg:grid-cols-2 xl:grid-cols-3 mx-auto py-5 container'>
          {[
            {
              img: f1,
              title: 'Customizable Resume Templates',
              desc: 'Professionally designed for all industries and career levels...'
            },
            {
              img: f2,
              title: 'Drag-and-Drop Resume Sections',
              desc: 'Effortlessly customize your resume by rearranging sections...'
            },
            {
              img: f3,
              title: 'ATS-Optimized Resumes',
              desc: 'Get past resume filters with our ATS-friendly templates...'
            },
            {
              img: f4,
              title: 'Industry-Specific Resume Analytics',
              desc: 'Get insights tailored to your industry...'
            },
            {
              img: f5,
              title: 'AI-Driven Resume Suggestions',
              desc: 'Enhance your resume with smart AI-powered suggestions...'
            },
            {
              img: f6,
              title: 'Job-Specific Resume Optimization',
              desc: 'Tailor your resume for any job with precision...'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className='group bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl p-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-in-out'
            >
              <Image
                src={feature.img}
                width={60}
                height={60}
                alt={feature.title}
              />
              <h2 className='mt-4 mb-2 font-semibold text-lg sm:text-xl'>
                {feature.title}
              </h2>
              <p className='mb-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed'>
                {feature.desc}
              </p>
              <CustomButton title='Learn More' />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom wave
        <div 
            className="bottom-0 left-0 absolute bg-gradient-to-r from-[#F9F51A] dark:from-gray-800 to-[#FFD700] dark:to-gray-900 w-full h-20"
            style={{
                clipPath: "path('M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,202.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z')",
            }}
        ></div> */}
    </div>
  )
}

export default Features
