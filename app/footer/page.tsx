"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Next JS",
    designation: "Front-End Developer",
    image:
      "",
  },
  {
    id: 2,
    name: "Python",
    designation: "Back-End Developer",
    image:
      "https://www.cleanpng.com/png-python-programming-basics-for-absolute-beginners-p-6917617/preview.html",
  },
  {
    id: 3,
    name: "Java",
    designation: "Java Developer",
    image:
      "https://www.cleanpng.com/png-python-programming-basics-for-absolute-beginners-p-6917617/preview.html",
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
