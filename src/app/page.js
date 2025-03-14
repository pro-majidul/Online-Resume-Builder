import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetTeam";

export default function Home() {
  return (
    <div className="">
      
     {/* Hero/Banner section */}
      <div className="container mx-auto px-6">
        <Hero></Hero>
      </div>
      
      <main>
       <h1 className=" text-6xl font-bold">Virtual Resume Builder</h1>
       <h3>Please follow this rood</h3>
       <h3>
        Team Avengers
       </h3>
       <MeetTeam></MeetTeam>
      </main>
     
    </div>
  );
}
