"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function WhyChooseUs() {
    const coursesContent = [
  {
  title: "Expert-Led IT Training",
  description:
    "Learn directly from industry professionals with years of experience in software development, cloud, and IT solutions.",
  content: (
    <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/courses/data-analysis.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
  ),
},
{
  title: "Hands-on Learning",
  description:
    "Gain practical knowledge with real-world projects and case studies to strengthen your problem-solving and coding skills.",
  content: (
    <div className="flex h-full w-full items-center justify-center bg-green-600 text-white text-lg font-semibold">
      Hands-on Learning
    </div>
  ),
},
{
  title: "Flexible Online Coaching",
  description:
    "Access recorded lectures, live sessions, and doubt-clearing classes anytime, anywhere to match your learning pace.",
  content: (
    <div className="flex h-full w-full items-center justify-center bg-purple-600 text-white text-lg font-semibold">
      Flexible Online Coaching
    </div>
  ),
},
{
  title: "Career-Focused IT Courses",
  description:
    "Courses designed to make you job-ready in Full Stack Development, Cloud Computing, Cybersecurity, and more.",
  content: (
    <div className="flex h-full w-full items-center justify-center bg-orange-600 text-white text-lg font-semibold">
      Career-Focused IT Courses
    </div>
  ),
},

];
  return (
    <div>
      <StickyScroll content={coursesContent} />
    </div>
  )
}

export default WhyChooseUs
