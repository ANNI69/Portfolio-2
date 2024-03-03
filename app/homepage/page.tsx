import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

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
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { NavbarDemo } from "../navbar/navbar";
export default function HomePage() {
  const words = [
    {
      text: "Code ",
    },
    {
      text: "With ",
    },
    {
      text: "Anii.....",
    },
  ];

  return (
    <>
      <div className="min-h-screen h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <div id="nav">
          <NavbarDemo />
        </div>
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
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full mt-4">
            <a href="/projects">
              <span>See My Work →</span>
            </a>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
        <div className="flex flex-row justify-center items-center h-full z-10">
          <a href="/web-dev">
          <Button  className="m-4 " variant="outline" size="icon">
            <svg
              width="50"
              height="30"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Button>
          </a>
          <a href="/app-dev">
          <div className=""></div>
          <Button className=" m-4" variant="outline" size="icon">
            <svg
              width="50"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="android"
            >
              <path d="M3.5006104,9H3.5C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896V14.5C3,14.776123,3.223877,15,3.5,15S4,14.776123,4,14.5v-5C4.0001831,9.223999,3.7765503,9.0001831,3.5006104,9z M15.8436279,4.3982544l1.0733643-1.6218872c0.1526489-0.2302856,0.0896606-0.5407104-0.140625-0.6933594s-0.5407104-0.0896606-0.6933594,0.140625l-1.0602417,1.6019897c-1.8648682-1.1008301-4.1807251-1.1008301-6.0455322,0L7.9169922,2.2236328c-0.1526489-0.2302856-0.4630737-0.2932739-0.6933594-0.140625s-0.2932739,0.4630737-0.140625,0.6933594l1.0733643,1.6218872C6.7900391,5.5359497,6,7.2220459,6,9v8.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5H9.5v3.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V18h3v3.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5V18h3c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V9C18,7.2220459,17.2099609,5.5359497,15.8436279,4.3982544z M17,17H7v-7h10V17z M7,9c0-2.7614136,2.2385864-5,5-5s5,2.2385864,5,5H7z M20.5006104,9H20.5c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896V14.5c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5v-5C21.0001831,9.223999,20.7765503,9.0001831,20.5006104,9z"></path>
            </svg>
          </Button>
          </a>
        </div>
      </div>
    </>
  );
}
