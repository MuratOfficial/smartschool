import Image from "next/image";
import React from "react";

function AboutCourses() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full bg-transparent">
      <div className="flex flex-row gap-x-12 w-full relative">
        <div className="w-1/2 relative py-16">
          <p className="text-left font-bold text-4xl leading-tight pb-12">
            О нашем центре
          </p>

          <p className="font-medium text-neutral-900 pt-4 text-sm pr-8">
            Если вы мечтаете{" "}
            <strong>работать, учиться или жить за границей,</strong> тест{" "}
            <strong>IELTS </strong>
            позволит вашей мечте осуществиться.
          </p>
          <p className="font-medium text-neutral-900 pt-4 text-sm pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            placeat nam voluptates quidem totam eius illum provident minima
            dolore? Impedit officia earum dignissimos adipisci veritatis, vero
            animi expedita ex saepe?
          </p>
        </div>
        <div className="w-1/2 w-full">IMG</div>
      </div>
    </div>
  );
}

export default AboutCourses;
