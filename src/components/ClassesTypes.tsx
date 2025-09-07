"use client";
import Link from "next/link";

import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Machine Learning",
    description:
      "Learn the fundamentals of Machine Learning with hands-on projects, covering supervised and unsupervised algorithms. Available in both online and offline modes.",
    slug: "machine-learning",
    isFeatured: true,
  },
  
  {
    title: "Power BI",
    description:
      "Analyze business data effectively with Power BI. Learn to build interactive dashboards, reports, and data models. Classes available in online and offline modes.",
    slug: "power-bi",
    isFeatured: true,
  },
  {
    title: "Full Stack Development",
    description:
      "Become job-ready by learning both frontend and backend development with JavaScript, React, Node.js, and databases. Available online & offline.",
    slug: "full-stack-development",
    isFeatured: true,
  },
  {
    title: "Python Programming",
    description:
      "Start coding with Python – the most versatile language for beginners and professionals. Learn from basics to advanced topics with projects.",
    slug: "python-programming",
    isFeatured: true,
  },
  {
    title: "Cloud Computing",
    description:
      "Understand cloud platforms like AWS, Azure, and Google Cloud. Learn cloud architecture, deployment, and monitoring with live practical sessions.",
    slug: "cloud-computing",
  },
  {
    title: "Cybersecurity",
    description:
      "Learn how to secure networks, prevent attacks, and protect sensitive data. Includes ethical hacking fundamentals. Online & offline classes available.",
    slug: "cybersecurity",
    isFeatured: true,
  },
];
function ClassesTypes() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED of Classes
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Claasses Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={projects.map(classes =>(
            {
                title: classes.title,
                description: classes.description,
                link: '/',
            }
          ))} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Classes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClassesTypes;
