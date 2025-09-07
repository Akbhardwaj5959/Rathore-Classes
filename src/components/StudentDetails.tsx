"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "The Full Stack Development course helped me land my first job as a Junior Developer. The hands-on projects made learning so much easier.",
    name: "Rahul Sharma",
    title: "Full Stack Development Student",
  },
  {
    quote:
      "I joined the Cloud Computing course and within 6 months I cleared my AWS certification. The mentors guided me at every step.",
    name: "Priya Mehta",
    title: "Cloud Computing Student",
  },
  {
    quote:
      "I always struggled with coding, but the way concepts were explained here, it built my confidence. Now I am preparing for top IT roles.",
    name: "Amit Verma",
    title: "JavaScript & React Student",
  },
  {
    quote:
      "The flexible online classes helped me continue learning along with my job. The doubt-solving sessions were a big plus.",
    name: "Sneha Gupta",
    title: "Data Science Enthusiast",
  },
  {
    quote:
      "From zero coding knowledge to building complete projects – this coaching transformed my career path.",
    name: "Arjun Patel",
    title: "Python & Django Student",
  },
];

function StudentDetails() {
  return (
    <div className="relative flex h-[25rem] w-full items-center justify-center bg-white dark:bg-black rounded">
       <div  className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}>
        <h2 className="text-3xl font-bold text-center mt-8 mb-8 z-10">Hear our Student Feedback</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
         </div>
     </div>
    </div>
  );
}

export default StudentDetails;
