import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetTeam";

export default function Home() {
  return (
    <div className=" ">
      
     {/* Hero/Banner section */}
      <div className="container mx-auto px-6">
        <Hero></Hero>
      </div>
      {/* Features section  */}
      <div className="container mx-auto ">
        <Features/>
      </div>
      {/* Meat our team section  */}
      <div>
       <MeetTeam></MeetTeam>
      </div>
     
    </div>
  );
}
