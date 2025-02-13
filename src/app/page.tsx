import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instrutors";
import Footer from "@/components/Fotter";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased 
     bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      
    </main>
    
  );
}
