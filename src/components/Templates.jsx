import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "./shared/SectionHeading";
import SwiperComponent from "./silder/SwiperComponent";
import { Button } from "./ui/button";
import CustomButton from "./shared/CustomButton";

const Templates = () => {
    return (
        <div className="container mx-auto my-16">
           <SectionHeading title="Choose from top-quality templates and create your perfect resume in just minutes!" subtitle="Stand out in the job market with beautifully designed resume templates that are easy to customize, visually appealing, and optimized for success." section="Templates"/>

           <SwiperComponent></SwiperComponent>
           <div className="flex justify-center my-5">
           <CustomButton title={'Explore All Templates'}/>
           </div>
         
        </div>
    );
};

export default Templates;