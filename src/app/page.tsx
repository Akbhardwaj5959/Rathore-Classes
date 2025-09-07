import ClassesTypes from "@/components/ClassesTypes";
import FeaturedCourses from "@/components/FeaturedCourses";

import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import StudentDetails from "@/components/StudentDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import YouTubeEmbed from "@/components/YouTubeEmbed";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      
      <HeroSection />
      <FeaturedCourses />
      <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Introductory Video" />
      <WhyChooseUs />
      <StudentDetails />
      <ClassesTypes />
      <Instructors />
      

    </main>
  );
}
