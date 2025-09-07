import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

         <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">

        <h1 className="mt-20 md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Coding .
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          cupiditate repudiandae fugiat, dolorum tenetur ab recusandae omnis
          quas nihil in facere esse! Quae nobis nihil ad architecto, illo odio
          omnis hic quas. illo laborum 
          culpa alias deserunt magnam quo cumque neque atque sint quos expedita
          minima repudiandae veritatis voluptate doloremque incidunt!
        </p>
        <div className="mt-4">
            <Link href="/courses"><Button
        borderRadius="1.75rem"
        className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
