import React from 'react'
import Image from "next/image";
import Rebutels from '@/components/Rebutels';

function page() {
  return (
    <>
    
    <section className="bg-black text-white py-16 pt-36 px-6 md:px-20 lg:px-32 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/courses/student.jpeg" // apni image ko /public folder me daalein
            alt="Education"
            width={600}
            height={400}
            className="rounded-lg object-cover transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            At Enack, we are redefining education with a blend of advanced
            technology and expert knowledge. As an innovative EdTech leader, we
            specialize in offering high-quality, personalized learning
            experiences that adapt to each individual’s needs, pace, and goals.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Our AI-powered platform ensures that every learner, whether
            advancing their career, acquiring new skills, or pursuing personal
            growth, can unlock their full potential through dynamic, engaging
            learning content.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you’re looking to boost your career or deepen your
            knowledge, Enack is here to provide you with the tools, resources,
            and expertise you need to succeed in today’s rapidly evolving world.
          </p>
        </div>
      </div>
    </section>
    <Rebutels />
    </>
 
  )
}

export default page
