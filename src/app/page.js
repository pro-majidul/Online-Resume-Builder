import CreateMyResume from "@/components/CreateMyResume";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Testimonial from "@/components/Testimonial";
import AiPowerAssistant from "@/components/AiPowerAssistant";
import EidGreetingModal from "@/components/modals/EidGreetingModal";


export default async function Home() {
  
  return (
    <div className=" ">
      {/* Add the Eid Greeting Modal */}
      <EidGreetingModal />

      {/* Hero/Banner section */}
      <div className="container mx-auto ">
        <Hero></Hero>
      </div>

      {/* Create my resume */}
      <div className="container mx-auto">
        <CreateMyResume></CreateMyResume>
      </div>

      {/* Features section  */}
      <div className=" py-14 ">
        <Features />
      </div>

      {/* Templates Section  */}
      <div className="">
        <Templates />
      </div>
      {/* Ai Power Assistant Section */}

      <AiPowerAssistant></AiPowerAssistant>

      {/* Testimonial */}
      <div className="">
        <Testimonial />
      </div>
      {/* FAQ section  */}
      <FAQ></FAQ>
    </div>
  );
}
