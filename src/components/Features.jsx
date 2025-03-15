import Image from "next/image";
import f1 from './../../public/picture/f1.png'
import f2 from './../../public/picture/f7.png'
import f6 from './../../public/picture/f8.png'
import f5 from './../../public/picture/brain.png'
import f4 from './../../public/picture/f2.png'
import f3 from './../../public/picture/cv.png'
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "./shared/SectionHeading";
import CustomButton from "./shared/CustomButton";

const Features = () => {
    return (
        <div className="px-3">
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
				<SectionHeading title={'Boost Your Hiring Chances by 45% with Our Smart Resume Maker!'} subtitle={'Craft professional resumes effortlessly with powerful features designed to boost your job search success.'} section={'Our Main Features'}/>
	
	<div className="container grid justify-center gap-7 mx-auto lg:grid-cols-2 xl:grid-cols-3">
		{/* feature 1  */}
		<div className="flex flex-col px-8 py-6 border-r border-b">
            <Image 
            src={f1}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Customizable Resume Templates</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Professionally designed for all industries and career levels, our templates let you easily customize layouts, fonts, and colors to match your style and expertise.</p>
			<CustomButton title={'Learn More'}/>
		</div>
		{/* feature 2  */}
		<div className="flex flex-col px-8 py-6  border-r border-b ">
        <Image 
            src={f2}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Drag-and-Drop Resume Sections </h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Effortlessly customize your resume by rearranging sections with a simple drag-and-drop. Organize your content exactly how you want for a polished, professional look</p>
			<CustomButton title={'Learn More'}/>
		</div>
		{/* feature 3  */}
		<div className="flex flex-col px-8 py-6 border-r border-b">
        <Image 
            src={f3}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">ATS-Optimized Resumes</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Get past resume filters with our ATS-friendly templates! Designed for better visibility and recruiter screening.</p>
			<CustomButton title={'Learn More'}/>
		</div>
		{/* feature 4  */}
		<div className="flex flex-col px-8 py-6 border-r border-b">
        <Image 
            src={f4}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Industry-Specific Resume Analytics
			</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Get insights tailored to your industry! Our resume analytics feature evaluates your resume based on industry standards, helping you optimize it for better job opportunities.</p>
			<CustomButton title={'Learn More'}/>
		</div>
		{/* feature 5 */}
		<div className="flex flex-col px-8 py-6 border-r border-b">
        <Image 
            src={f5}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">AI-Driven Resume Suggestions </h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Enhance your resume with smart AI-powered suggestions! Our system analyzes your resume and provides tailored recommendations to improve content, structure, and ATS compatibility.</p>
			<CustomButton title={'Learn More'}/>
		</div>
		{/* feature 6  */}
		<div className="flex flex-col px-8 py-6 border-r border-b">
        <Image 
            src={f6}
            width={60}
            height={60}
            alt="customizable "
             />
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Job-Specific Resume Optimization</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Tailor your resume for any job with precision! Our optimization tool analyzes job descriptions and helps you align your resume with the right keywords, skills, and formatting.</p>
			<CustomButton title={'Learn More'}/>
		</div>
	</div>
</section>
        </div>
    );
};

export default Features;