import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimateScrollDownHorizontalLeft } from "./animations";

function Form() {
  return (
    <div className="flex flex-col gap-y-6 lg:max-w-[1200px] sm:max-w-[360px] items-center z-10 lg:w-[1200px] sm:px-4 lg:px-48 h-full bg-transparent sm:pt-12 lg:pt-16 pb-6 relative">
      <Image
        src="/5/lastHeroImg.png"
        width={320}
        height={450}
        alt="rect5"
        className="absolute lg:visible sm:collapse right-48 z-0"
      />
      <div className="flex flex-col w-full sm:text-center lg:text-left z-10">
        <AnimateScrollDownHorizontalLeft>
          <p className="sm:text-3xl lg:text-4xl font-bold text-blue-950">
            Запись на{" "}
            <span className="font-black text-neutral-50 bg-gradient-to-t from-blue-950 to-blue-800 rounded-xl drop-shadow-lg p-1">
              бесплатный{" "}
            </span>{" "}
          </p>
          <p className="sm:text-3xl lg:text-4xl font-bold text-blue-950">
            пробный урок
          </p>
        </AnimateScrollDownHorizontalLeft>

        <input
          type="text"
          placeholder="Ваше имя"
          className="text-sm mt-8 h-12 w-fit text-left shadow-3xl rin border-neutral-100 border-2 bg-neutral-100 py-3 px-3 rounded-md font-roboto"
        />
        <div className=" flex flex-row mt-4">
          <input
            type="text"
            placeholder="+7 (777) 777 77 77"
            className="text-sm h-12 text-left shadow-3xl rin border-neutral-100 border-2 bg-neutral-100 py-3 px-3 rounded-s-md font-roboto"
          />
          <button className="h-12 text-sm hover:bg-red-700  text-white font-semibold text-center rounded-e-md p-3 bg-[#e30613]">
            Консультация
          </button>
        </div>
        <p className="text-sm mt-4 font-roboto text-neutral-50">
          Нажимая, Вы принимаете <br />{" "}
          <Link
            href="https://docs.google.com/document/d/11sgv_B--KWkjlPLvr1igfrecfCkmSi3-"
            target="_blank"
            className="underline underline-offset-2"
          >
            политику конфиденциальности
          </Link>
        </p>
        <div className="font-roboto text-blue-950 rounded-3xl h-fit py-3 px-6 sm:mx-0 lg:mx-auto my-8 text-center sm:w-2/3 bg-neutral-100 lg:w-1/2">
          <p className=" lg:text-base sm:text-xs">
            Мы не только разработали <strong>эффективную программу</strong> ,
            основанную на <strong>25</strong>-летним опыте преподавания языка,
            но и создали дружелюбную атмосферу, где каждый ученик получает{" "}
            <strong>максимальный</strong> результат.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
