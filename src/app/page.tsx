import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Instruments from "@/components/Instruments";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection/>
      <FeaturedCourses/>
      <Instruments/>


    </main>  
  );
}
