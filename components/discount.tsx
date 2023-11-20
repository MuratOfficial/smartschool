import Image from "next/image";
import React from "react";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "./animations";

function Discount() {
  return (
    <div className="flex flex-col gap-y-6 lg:max-w-[1200px] sm:max-w-[360px] items-center z-10 lg:w-[1200px] sm:px-4 lg:px-48 h-full bg-transparent my-16">
      <AnimateScrollDownHorizontal>
        <div className="sm:text-2xl lg:text-4xl text-[#202f59] text-center font-bold leading-snug">
          <p>*Только в Smart School</p>
        </div>
        <div className="sm:text-2xl lg:text-4xl font-bold text-center bg-gradient-to-t from-blue-950 to-blue-800 text-neutral-100 px-4 py-1 rounded-lg leading-snug">
          <strong className=" ">70 дополнительных занятий</strong>{" "}
        </div>
        <p className="sm:text-2xl lg:text-4xl text-[#202f59] text-center font-bold leading-snug">
          в <strong>IELTS Club</strong> в подарок!
        </p>
      </AnimateScrollDownHorizontal>

      <p className="font-['Roboto'] sm:text-md lg:text-lg text-neutral-100 text-center">
        <strong>IELTS Club</strong> - это закрытый клуб, дополнительные занятия
        для практики английского языка и навыков, необходимых при сдачи{" "}
        <strong>IELTS</strong> в неформальной обстановке
      </p>

      <AnimateScrollDownHorizontalLeft>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-4 sm:gap-12 font-['Roboto'] w-full">
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start ">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/1.png"
              className=""
            />
            <p className="font-bold text-xs">MockTest</p>
            <p className="text-xs">Ежедневные пробные тесты IELTS</p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/2.png"
              className=""
            />
            <p className="font-bold text-xs">IELTS Speaking simulation test</p>
            <p className="text-xs">
              Cимуляция настоящего разговорного экзамена
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/3.png"
              className=""
            />
            <p className="font-bold text-xs">Literature club</p>
            <p className="text-xs">
              Литературный клуб для улучшения словарного запаса и грамматики
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/4.png"
              className=""
            />
            <p className="font-bold text-xs">Debate club</p>
            <p className="text-xs">
              Помощь в генерировании идей на Writing Task 2
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/5.png"
              className=""
            />
            <p className="font-bold text-xs">IELTS Speaking</p>
            <p className="text-xs">
              Практика ответов на вопросы экзамена IELTS
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/6.png"
              className=""
            />
            <p className="font-bold text-xs">Cinema</p>
            <p className="text-xs">
              Развитие восприятия английского на слух и улучшение разговорной
              речи
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/7.png"
              className=""
            />
            <p className="font-bold text-xs">Extra-сurricular</p>
            <p className="text-xs">
              Внеклассные мероприятия: шоу Талантов, викторины и вылазки за
              пределы офисных стен
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-neutral-100 sm:items-center lg:items-start">
            <Image
              width={60}
              height={60}
              alt="figure1"
              src="/6/8.png"
              className=""
            />
            <p className="font-bold text-xs">Game Nights</p>
            <p className="text-xs">Игры разного формата на английском языке</p>
          </div>
        </div>
      </AnimateScrollDownHorizontalLeft>
    </div>
  );
}

export default Discount;
