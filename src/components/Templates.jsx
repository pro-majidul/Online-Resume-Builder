import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "./shared/SectionHeading";
import SwiperComponent from "./SwiperComponent";
import { Button } from "./ui/button";

const Templates = () => {
    return (
        <div className="container mx-auto my-16">
           <SectionHeading title="Choose from top-quality templates and create your perfect resume in just minutes!" subtitle="Stand out in the job market with beautifully designed resume templates that are easy to customize, visually appealing, and optimized for success." section="Templates"/>

           <SwiperComponent></SwiperComponent>
           <div className="flex justify-center my-5">
           <Button
                className="bg-[#e5e106] text-lg hover:bg-[#fedbff] hover:shadow-2xl text-[#181a1b] px-4 py-2 rounded-md"
                type="submit"
              >
                Explore All Templates <FaArrowRightLong/>
              </Button> 
           </div>
         
        </div>
    );
};

export default Templates;