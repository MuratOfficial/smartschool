import Image from "next/image";
import React from "react";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "./animations";

function HeroSecondaryText() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] sm:w-[360px] sm:max-w-[480px] sm:px-0 lg:px-48 h-full pt-20">
      <div className="flex lg:flex-row sm:flex-col gap-x-12 lg:w-full sm:w-fit relative ">
        <Image
          src="/2/plane.svg"
          width={300}
          height={300}
          alt="plane"
          className="absolute z-20 sm:-inset-x-12 lg:inset-x-60 sm:inset-y-36 lg:inset-y-24 hover:scale-75 transition duration-1000 delay-300 hover:translate-x-12"
        />
        <Image
          src="/clouds/clouds2.png"
          width={160}
          height={160}
          alt="plane"
          className="absolute z-20 sm:inset-x-0 lg:inset-x-64 inset-y-60"
        />
        <Image
          src="/clouds/clouds4.png"
          width={170}
          height={170}
          alt="plane"
          className="absolute z-20 lg:visible sm:collapse right-0 inset-y-56"
        />
        <Image
          src="/2/statueoflibmin.svg"
          width={450}
          height={450}
          alt="statueoflibmin"
          className="absolute lg:top-8 sm:top-36 right-0"
        />
        <div className="lg:w-1/2 sm:w-full  relative">
          <AnimateScrollDownHorizontalLeft>
            <p className="lg:text-left sm:text-center font-bold sm:text-3xl lg:text-4xl leading-tight text-[#202e58]">
              Для чего нужен
            </p>
          </AnimateScrollDownHorizontalLeft>

          <div className="flex flex-row gap-x-4 lg:pl-0 sm:pl-12">
            <AnimateScrollDown>
              <span className="font-black  sm:text-4xl lg:text-7xl text-[#202e58]">
                IELTS
              </span>
            </AnimateScrollDown>

            <span className="lg:pt-4 sm:pt-0">
              <Image
                src="/2/znakVopr.png"
                width={100}
                height={100}
                alt="znakVopr"
                className="hover:-rotate-12 sm:w-[60px] lg:w-[100px] transition delay-100 duration-500 hover:scale-110 cursor-help"
              />
            </span>
          </div>
          <p className="font-medium lg:px-0 sm:px-4 lg:text-left sm:text-center text-neutral-100 lg:pt-4 sm:pt-2 sm:text-xs lg:text-sm sm:pr-0 lg:pr-8">
            Если вы мечтаете{" "}
            <strong>работать, учиться или жить за границей,</strong> тест{" "}
            <strong>IELTS </strong>
            позволит вашей мечте осуществиться.
          </p>
        </div>
      </div>
      <div className="w-full  lg:h-64 sm:h-full   z-10 py-8 relative ">
        <Image
          src="/2/rect1.png"
          width={1039}
          height={233}
          alt="rect1"
          className="absolute z-0 top-6 lg:visible sm:collapse"
        />
        <div className="lg:bg-transparent lg:rounded-none sm:bg-blue-900 sm:rounded-2xl lg:p-0 sm:p-2 lg:mt-0 sm:mt-40">
          <p className="lg:absolute sm:relative lg:inset-y-12 lg:inset-x-6 text-neutral-100 px-6 text-md z-20 text-center ">
            <strong>
              IELTS — International English Language Testing System — экзамен,
            </strong>{" "}
            проверяющий знание английского языка у иностранцев.
          </p>
          <p className="lg:absolute sm:relative lg:inset-y-28 lg:inset-x-6 text-neutral-100 px-6 text-md z-20 text-center ">
            <strong>IELTS</strong> требуется для поступления в университеты
            большинства стран Британского Содружества. Результаты экзамена нужны
            для получения рабочей визы, права на ПМЖ и гражданства некоторых
            англоязычных стран
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSecondaryText;
