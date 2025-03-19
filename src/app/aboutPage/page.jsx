// import PageHelmet from "../../components/PageHelmet";
// import Heading from "../../components/shared/Heading";
import Image from "next/image";
import AboutImg from "../../../public/picture/about.jpg"
import AboutImg1 from '../../../public/picture/about2.jpg'

const AboutPage = () => {
    return (
        <div>
             <div className='px-3 my-10 container mx-auto' >
           {/* <PageHelmet title={"About"}/> */}
        {/* <div className="py-5 ">
         <Heading title={'About Us'} subtitle={''}/>
         </div> */}
       <div className=" ">
        {/* about */}
           <div className="flex flex-col gap-5 items-center  justify-between lg:flex-row">
           <div className="w-full lg:w-1/2" >
           <Image src={AboutImg}  width={600}
          
          alt="About Resume Maker"
          className="rounded-lg shadow-lg"/>
           </div>


               <div className=' space-y-3 w-full lg:w-1/2'>
                   <h1 className="text-4xl  font-bold text-center lg:text-start">About Us</h1>
                   <p className=" space-y-5 text-start ">
                   Welcome to <span className="text-[#20252D] italic font-semibold">Resume Maker</span>  ,your ultimate platform for crafting professional and visually stunning resumes effortlessly. We believe that a well-structured resume is the key to unlocking career opportunities, and our mission is to simplify the resume-building process with AI-powered features, customization options, and seamless export functionalities.
                   </p>
                 
               </div>
           </div>
       </div>
      <div className=''>
        {/* Vision */}
      <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'>Our Vision</h2>
           <p className='my-5  text-start' >
          At <span className="text-[#20252D] italic font-semibold">Resume Maker</span>  we aim to empower job seekers by providing them with a user-friendly and dynamic platform to create, edit, and customize resumes that stand out in the competitive job market. We envision a world where everyone has access to tools that help them present their skills and experiences in the best possible way, regardless of their technical expertise.
           </p>
       </div>
       {/* mission */}
       <div className='my-10 text-center 0 lg:text-start'>
      <div>
      <h2 className=' text-4xl font-bold text-center lg:text-start'>Our Mission</h2>
           <p className='mt-5  text-start' >
           Our mission is to revolutionize the resume-building experience by leveraging cutting-edge technology and intuitive design. We strive to provide an all-in-one solution that caters to job seekers of all levels, ensuring they can showcase their talents effectively and land their dream jobs.
           </p>
      </div>
       </div>
       <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
      {/* Offer Section */}
      <div className="w-full lg:w-1/2">
        <div className="text-center lg:text-start">
          <h2 className="text-4xl font-bold mb-5">What We Offer</h2>
          <ul className="list-disc space-y-4 pl-5  text-start text-lg">
            <li>
              <span className="text-[#20252D] font-semibold">
                AI-Powered Resume Suggestions:
              </span>{" "}
              Get real-time recommendations to enhance your resume content, ensuring it aligns with industry standards. Our AI analyzes your skills and experience, providing optimized suggestions to make your resume stand out.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Customization & Templates:
              </span>{" "}
              Choose from a variety of professionally designed templates tailored for different industries, whether corporate, creative, or technical. Personalize colors, fonts, and layouts to match your career aspirations.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Version Control:
              </span>{" "}
              Save multiple versions of your resume and update them as needed. Easily switch between different formats for various job applications without starting from scratch.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Multi-Format Export:
              </span>{" "}
              Download your resume in PDF, DOCX, or other formats without hassle. Ensure compatibility across job portals, email submissions, and printed applications.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Seamless Integration:
              </span>{" "}
              Connect your resume with LinkedIn and other job portals. Automatically update your profile and sync your career achievements without manual effort.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Collaboration Features:
              </span>{" "}
              Share your resume with mentors, career coaches, or friends for feedback. Get real-time suggestions and improve your resume with expert insights.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Cloud Storage:
              </span>{" "}
              Securely store your resumes online and access them anytime, anywhere. Never lose important files and keep your career documents organized.
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="my-10 text-center lg:text-start">
          <h2 className="text-4xl font-bold mb-5">Why Choose Resume Maker?</h2>
          <ul className="list-disc  text-start space-y-4 pl-5 text-lg">
            <li>
              <span className="text-[#20252D] font-semibold">
                User-Friendly Interface:
              </span>{" "}
              Our intuitive and responsive design ensures a smooth resume-building experience for all users, regardless of technical expertise.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Time-Efficient:
              </span>{" "}
              Save hours of manual formatting—create a professional, well-structured resume in just minutes.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Security & Privacy:
              </span>{" "}
              We prioritize your data security with industry-standard encryption. Your personal information remains safe and confidential.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Continuous Innovation:
              </span>{" "}
              Our platform constantly evolves with the latest industry trends, ensuring you always have access to cutting-edge resume-building features.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Accessibility:
              </span>{" "}
              Whether you're a fresh graduate, an experienced professional, or someone transitioning careers, our platform caters to all job seekers.
            </li>
            <li>
              <span className="text-[#20252D] font-semibold">
                Expert Guidance:
              </span>{" "}
              Gain access to expert resume-writing tips, interview preparation guides, and job market insights to improve your job search strategy.
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={AboutImg1}
          width={600}
          
          alt="About Resume Maker"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'>Join Our Community </h2>
           <p className='my-5  text-start' >
           At
           <span className="text-[#20252D]  italic font-semibold"> Resume Maker</span> is more than just a tool; it's a community of ambitious professionals, job seekers, and career coaches who believe in the power of a well-crafted resume. Join thousands of users who have successfully enhanced their job search with Resume Maker. Start building your perfect resume today and take the next step towards your dream career!

</p>
   </div>
      </div>
   </div>
        </div>
    );
};

export default AboutPage;