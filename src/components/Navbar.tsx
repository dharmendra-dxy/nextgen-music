"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);


  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      
      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive} active={active} item="Home" />

        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/all-courses">All Courses</HoveredLink>
              <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
              <HoveredLink href="/composition">Advance Composition</HoveredLink>
              <HoveredLink href="/song-writing">Song writing</HoveredLink>
              <HoveredLink href="/music-production">Music Production</HoveredLink>
            </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us" />

      </Menu>

    </div>
  )
}

export default Navbar