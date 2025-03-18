import CustomBanner from '@/components/shared/CustomBanner';
import b1 from '../../../public/picture/banner.gif'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ResumeTemplates from './Components/ResumeTamplate';

const MyResume = () => {
    return (
        <div className='min-h-screen'>
         <CustomBanner title={"50+ Free Resume Examples by industry (+Writing Guides)"}
    subtitle="Check out our free resume samples for inspiration. Use the expert guides and our resume builder to create a beautiful resume in minutes. We also provide a library of resume templates."
    ctaText="Get Started"
    imageSrc={b1}/>
    <div>
    <div className="flex w-full max-w-2xl mx-auto items-center  my-10">
                <Input type="email" className="bg-white rounded-l-full" placeholder="Type your job title" />
                <Button
                  className="bg-[#FEDBFF] text-[#181A1B] 
                hover:bg-[#F9F51A] px-4 py-2 rounded-r-full"
                  type="submit"
                >
                  Search
                </Button>
              </div>
    </div>
    <ResumeTemplates/>


        </div>

    );
};

export default MyResume;