import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./page.css";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextGenerateEffectDemo } from "../homepage/TextGenDemo";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function HomePage() {
  const words = [
    {
      text: "Lets",
    },
    {
      text: "Get",
    },
    {
      text: "Started.....",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full z-10">
          <div className="flex flex-col items-center justify-center h-[10rem]">
            <TypewriterEffectSmooth words={words} />
          </div>
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white">
            Code With Me
          </h1>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full mt-4">
            <a href="/projects">
              <span>See My Work →</span>
            </a>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
      </div>
    </>
  );
}
