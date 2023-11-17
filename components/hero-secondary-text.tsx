import Image from "next/image";
import React from "react";

function HeroSecondaryText() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full pt-20">
      <div className="flex flex-row gap-x-12 w-full relative">
        <Image
          src="/2/Plane.png"
          width={300}
          height={300}
          alt="plane"
          className="absolute z-20 inset-x-60 inset-y-24"
        />
        <Image
          src="/2/statueoflibmin.svg"
          width={450}
          height={450}
          alt="statueoflibmin"
          className="absolute top-8 right-0"
        />
        <div className="w-1/2 relative">
          <p className="text-left font-bold text-4xl leading-tight text-[#202e58]">
            Для чего нужен
          </p>
          <div className="flex flex-row gap-x-4">
            <span className="font-black text-7xl text-[#202e58]">IELTS</span>
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
      </div>
      <div className="w-full  h-64  z-10 py-8 relative">
        <Image
          src="/2/rect1.png"
          width={1039}
          height={233}
          alt="rect1"
          className="absolute z-0 top-6"
        />
        <p className="absolute inset-y-12 inset-x-6 text-neutral-100 px-6 text-md z-20 text-center">
          <strong>
            IELTS — International English Language Testing System — экзамен,
          </strong>{" "}
          проверяющий знание английского языка у иностранцев.
        </p>
        <p className="absolute inset-y-28 inset-x-6 text-neutral-100 px-6 text-md z-20 text-center">
          <strong>IELTS</strong> требуется для поступления в университеты
          большинства стран Британского Содружества. Результаты экзамена нужны
          для получения рабочей визы, права на ПМЖ и гражданства некоторых
          англоязычных стран
        </p>
      </div>
    </div>
  );
}

export default HeroSecondaryText;
