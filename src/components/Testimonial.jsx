import SectionHeading from "./shared/SectionHeading";
import ReviewSlider from "./silder/Reviewslider";

const Testimonial = () => {
    return (
        <div className="my-16">
            <SectionHeading title={'Success Stories That Inspire'} subtitle={'Discover how our Resume Maker helped professionals land their dream jobs'} section={'Our Inspiration'}/>

            <ReviewSlider/>
        </div>
    );
};

export default Testimonial;