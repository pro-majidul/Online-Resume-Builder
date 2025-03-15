import Image from "next/image";
import f1 from './../../public/picture/f1.png'
// import f2 from './../../public/picture/f7.png'
// import f6 from './../../public/picture/f8.png'
// import f5 from './../../public/picture/brain.png'
// import f4 from './../../public/picture/f2.png'
// import f3 from './../../public/picture/cv.png'
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "./shared/SectionHeading";

const Features = () => {
	return (
		<div className="px-3">
			<section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
				<SectionHeading title={'Boost Your Hiring Chances by 45% with Our Smart Resume Maker!'} subtitle={'Craft professional resumes effortlessly with powerful features designed to boost your job search success.'} section={'Our Main Features'} />

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
				</div>
			</section>
		</div>
	);
};

export default Features;