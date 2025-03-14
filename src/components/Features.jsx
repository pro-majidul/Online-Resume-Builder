import Image from "next/image";
import f1 from './../../public/picture/f1.png'
import f2 from './../../public/picture/f7.png'
import f6 from './../../public/picture/f8.png'
import f5 from './../../public/picture/brain.png'
import f4 from './../../public/picture/f2.png'
import f3 from './../../public/picture/cv.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
    return (
        <div className="px-3">
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-4 mx-auto my-6 space-y-1 text-center">
		<span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">Our Main Features</span>
		<h2 className="pb-3 text-2xl lg:w-3xl mx-auto font-bold md:text-4xl">Boost Your Hiring Chances by 45% with Our Smart Resume Maker!</h2>
		<p className="text-xs md:text-lg">Craft professional resumes effortlessly with powerful features designed to boost your job search success.</p>
	</div>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/components">
				<span>Learn More</span>
				<FaArrowRightLong />
			</a>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/sections">
				<span>Learn More</span>
				<FaArrowRightLong/>
			</a>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/templates">
				<span>Learn More</span>
				<FaArrowRightLong/>
			</a>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/docs">
				<span>Learn More</span>
				<FaArrowRightLong/>
			</a>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/docs">
				<span>Learn More</span>
				<FaArrowRightLong/>
			</a>
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
			<a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/docs">
				<span>Learn More</span>
				<FaArrowRightLong/>
			</a>
		</div>
	</div>
</section>
        </div>
    );
};

export default Features;