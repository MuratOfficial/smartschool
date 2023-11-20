"use client";
import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "./animations";

function AboutText() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] sm:max-w-[360px] sm:px-0 lg:px-48 h-full bg-transparent">
      <div className="flex lg:flex-row sm:flex-col gap-x-12 w-full relative">
        <div className="lg:w-1/2 sm:w-full relative sm:py-0 lg:py-16 lg:text-left sm:text-center lg:px-0 sm:px-3">
          <Element name="about">
            <AnimateScrollDownHorizontalLeft>
              <p className=" font-bold sm:text-3xl lg:text-[40px] text-[#2c3860] leading-tight sm:pt-14 lg:pt-4 sm:pb-2 lg:pb-10">
                О нашем центре
              </p>
            </AnimateScrollDownHorizontalLeft>
          </Element>
          <AnimateScrollDown>
            <p className="font-medium text-[#4e6f89] sm:pt-0 lg:pt-4 text-[16px] ">
              {" "}
              <strong>Smart School</strong>- ведущий центр по подготовке к
              экзамену <strong>IELTS</strong> в Казахстане.
            </p>
            <p className="font-medium text-[#4e6f89] pt-4 text-[16px] ">
              Наш центр основан <strong>Тамарой Ильясовой</strong> — ведущим
              преподавателем в СНГ с <strong>25</strong>-летним стажем.
              Исключительно в нашем центре практикуется ее уникальная
              методология, которая помогла более <strong>26 000 </strong>
              студентам <br /> получить желаемый балл и осуществить свою мечту.
            </p>
          </AnimateScrollDown>
        </div>
        <div className="sm:h-[360px] lg:h-0"></div>
      </div>
    </div>
  );
}

export default AboutText;
