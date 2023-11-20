import Image from "next/image";
import React from "react";

function HeroText() {
  return (
    <div className="h-full flex flex-col justify-center px-0 lg:text-left sm:text-center lg:max-w-[480px] z-10 relative">
      <h1 className="font-bold lg:text-[46px] sm:text-3xl sm:break-normal lg:break-all sm:leading-none lg:leading-tight text-[#2b3860]">
        Набери желаемый балл на <span className=" font-black">IELTS</span>
      </h1>

      <p className="font-['Roboto'] pt-4 text-[#4e6f89]">
        Оставляй заявку и получи <strong>IELTS Workbook</strong> бесплатно
      </p>

      <div className="mt-4 flex flex-row">
        <input
          type="text"
          placeholder="+7 (777) 777 77 77"
          className="text-sm h-12 text-center shadow-3xl rin border-transparent border-2 bg-transparent py-3 px-3 rounded-s-md font-['Roboto']"
        />
        <button className="h-12 text-sm text-white hover:bg-red-700 font-semibold text-center rounded-e-md p-3 bg-[#e30613]">
          Консультация
        </button>
      </div>
      <Image
        width={185}
        height={64}
        src="/1/kaspired.svg"
        alt="kaspi"
        className="ml-8 mt-8"
      />
    </div>
  );
}

export default HeroText;
