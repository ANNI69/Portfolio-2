"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-[Hexa]", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/app-dev">App Development</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="E-Commerce App" 
              href="https://github.com/ANNI69/e-commerce.git"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Platform for Clothing shopping"
            />
            <ProductItem
              title="Visualizer-One"
              href="https://github.com/ANNI69/WeatherApp.git"
              src="https://i.ibb.co/CVB2fdG/Vector.png"
              description="Data Structure Visualizer"
            />
            <ProductItem
              title="Sync-Beat"
              href="https://gomoonbeam.com"
              src="https://i.ibb.co/gF2wnjZ/Icon.png"
              description="Music Player - Let The Beat Sync With Your Friends"
            />
            <ProductItem
              title="Fabric-One"
              href="https://fabric-one.vercel.app/"
              src="https://i.ibb.co/Z8wSTcm/fabric.png"
              description="Platform for Online Clothing shopping"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Academics">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="academics/diploma">Diploma</HoveredLink>
            <HoveredLink href="academics/btech">B.Tech</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
