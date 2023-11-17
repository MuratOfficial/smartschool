import Image from "next/image";
import React from "react";

function HeroSecondaryText() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full">
      <div className="flex flex-row gap-x-12 w-full relative">
        <Image
          src="/2/Plane.png"
          width={300}
          height={300}
          alt="plane"
          className="absolute z-20 inset-x-60 inset-y-24"
        />
        <div className="w-1/2 relative">
          <p className="text-left font-bold text-4xl leading-tight">
            Для чего нужен
          </p>
          <div className="flex flex-row gap-x-4">
            <span className="font-black text-7xl">IELTS</span>
            <span className="pt-4">
              <Image
                src="/2/znakVopr.png"
                width={100}
                height={100}
                alt="znakVopr"
                className=""
              />
            </span>
          </div>
          <p className="font-medium text-neutral-100 pt-4 text-sm pr-8">
            Если вы мечтаете{" "}
            <strong>работать, учиться или жить за границей,</strong> тест{" "}
            <strong>IELTS </strong>
            позволит вашей мечте осуществиться.
          </p>
        </div>
        <div className="w-1/2 w-full">img</div>
      </div>
      <div className="w-full bg-black h-64 w-full z-10 py-8">
        <p className="">asdasd</p>
      </div>
    </div>
  );
}

export default HeroSecondaryText;
