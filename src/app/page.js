import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetTeam";

export default function Home() {
  return (
    <div className="">
      
     {/* Hero/Banner section */}
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
      </div>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
