import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";

export default function Home() {
  return (
    <div className=" ">
      {/* Hero/Banner section */}
      <div className="container mx-auto px-6">
        <Hero></Hero>
      </div>
      {/* Features section  */}
      <div className="container mx-auto ">
        <Features />
      </div>

      {/* Templates Section  */}
      <div className="container mx-auto">
        <Templates />
      </div>
      {/* FAQ section  */}
      <FAQ></FAQ>
    </div>
  );
}
