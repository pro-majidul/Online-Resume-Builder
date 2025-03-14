import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetTeam";

export default function Home() {
  return (
    <div className="">
      
     {/* Hero/Banner section */}
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
      </div>
    {/* Features Section */}
    <div className="container mx-auto">
      <Features/>
    </div>
     
    </div>
  );
}
