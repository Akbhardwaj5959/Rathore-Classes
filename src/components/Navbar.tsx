'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
     className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    <Menu setActive={setActive} >
      <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home" >
        
        </MenuItem>
        
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our Courses" >
        <div className="flex flex-col space-y-4 text-sm md:text-base md:p-6 hover:color-white">
           <HoveredLink href="/courses">All Courses</HoveredLink>
           <HoveredLink href="/courses/webdevelopment">Web Development</HoveredLink>
           <HoveredLink href="/courses/ml">ML Course</HoveredLink>
           <HoveredLink href="/courses/data-science">Data Science Course</HoveredLink>
           <HoveredLink href="/courses/devops">DevOps</HoveredLink>
        </div>
        </MenuItem>

        <Link href={"/about"}>
        <MenuItem setActive={setActive} active={active} item="About" >

        </MenuItem>
        
      </Link>

      <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us" >

        </MenuItem>
        
      </Link>

    </Menu>
      
    </div>
  );
}

export default Navbar;

