import SectionHeading from "./shared/SectionHeading";
import SwiperComponent from "./silder/SwiperComponent";
import CustomButton from "./shared/CustomButton";
import Link from "next/link";

const Templates = () => {
    return (
        <div className="relative w-full overflow-hidden">
        {/* Background with wave effect from right */}
        <div 
            className="absolute inset-0 bg-gradient-to-r from-[#F9F51A] to-[#FFD700]"
            style={{
                clipPath: "path('M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,64C840,32,960,0,1080,0C1200,0,1320,32,1440,48L1440,320L0,320Z')",
                transform: "scaleX(-1)", // Flip horizontally to start from the right
            }}
        ></div>
    
        <section className="z-10 relative my-16">
            <SectionHeading 
                title="Instant Professional Resume Templates Here!" 
                subtitle="Stand out in the job market with beautifully designed resume templates." 
                section="Templates"
            />
            <div className="mx-auto container">
                <div className="py-5">
                    <SwiperComponent />
                </div>
    
                <div className="flex justify-center my-5">
                   <Link href={'/resumeTemplates'} >
                    <CustomButton title={'Explore All Templates'} />
                   </Link>
                </div>
            </div>
        </section>
    
        {/* Bottom wave from right */}
        <div 
            className="bottom-0 left-0 absolute bg-gradient-to-r from-[#F9F51A] dark:from-gray-800 to-[#FFD700] dark:to-gray-900 w-full h-20"
            style={{
                clipPath: "path('M1440,224L1380,208C1320,192,1200,160,1080,160C960,160,840,192,720,202.7C600,213,480,203,360,181.3C240,160,120,128,60,112L0,96L0,320L1440,320Z')",
                transform: "scaleX(-1)", // Flip horizontally to start from the right
            }}
        ></div>
    </div>
    
    
    );
};

export default Templates;
