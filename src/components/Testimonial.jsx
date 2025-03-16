import SectionHeading from "./shared/SectionHeading";
import ReviewSlider from "./silder/Reviewslider";

const Testimonial = () => {
    return (
        <div className="relative overflow-hidden w-full my-16">
            {/* Background with wave effect like Features section */}
            <div 
                className="absolute inset-0 bg-gradient-to-r from-[#F9F51A] to-[#FFD700]"
                style={{
                    clipPath: "path('M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,64C840,32,960,0,1080,0C1200,0,1320,32,1440,48L1440,320L0,320Z')",
                }}
            ></div>

            <section className="relative z-10 m-4 md:m-8 py-12">
                <SectionHeading 
                    title="Success Stories That Inspire" 
                    subtitle="Discover how our Resume Maker helped professionals land their dream jobs" 
                    section="Our Inspiration" 
                />
                <div className="py-5">
                    <ReviewSlider />
                </div>
            </section>

            {/* Bottom wave effect */}
            <div 
                className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-[#F9F51A] to-[#FFD700] dark:from-gray-800 dark:to-gray-900"
                style={{
                    clipPath: "path('M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,202.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z')",
                }}
            ></div>
        </div>
    );
};

export default Testimonial;
