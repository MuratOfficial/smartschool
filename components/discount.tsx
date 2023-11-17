import Image from "next/image";
import React from "react";

function Discount() {
  return (
    <div className="flex flex-col gap-y-6 lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full bg-transparent py-12">
      <p className="text-4xl text-[#202f59] text-center font-bold leading-snug">
        *Только в Smart School <br />{" "}
        <strong className=" bg-gradient-to-t from-blue-950 to-blue-800 text-neutral-100 px-4 py-1 rounded-lg">
          70 дополнительных занятий
        </strong>{" "}
        <br /> в <strong>IELTS Club</strong> в подарок!
      </p>
      <p className="font-['Roboto'] text-lg text-neutral-100 text-center">
        <strong>IELTS Club</strong> - это закрытый клуб, дополнительные занятия
        для практики английского языка и навыков, необходимых при сдачи{" "}
        <strong>IELTS</strong> в неформальной обстановке
      </p>
      <div className="grid grid-cols-4 gap-4 font-['Roboto'] w-full">
        <div className="flex flex-col gap-y-1 text-neutral-100">
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
        <div className="flex flex-col gap-y-1 text-neutral-100">
          <Image
            width={60}
            height={60}
            alt="figure1"
            src="/6/2.png"
            className=""
          />
          <p className="font-bold text-xs">IELTS Speaking simulation test</p>
          <p className="text-xs">Cимуляция настоящего разговорного экзамена</p>
        </div>
        <div className="flex flex-col gap-y-1 text-neutral-100">
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
        <div className="flex flex-col gap-y-1 text-neutral-100">
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
        <div className="flex flex-col gap-y-1 text-neutral-100">
          <Image
            width={60}
            height={60}
            alt="figure1"
            src="/6/5.png"
            className=""
          />
          <p className="font-bold text-xs">IELTS Speaking</p>
          <p className="text-xs">Практика ответов на вопросы экзамена IELTS</p>
        </div>
        <div className="flex flex-col gap-y-1 text-neutral-100">
          <Image
            width={60}
            height={60}
            alt="figure1"
            src="/6/6.png"
            className=""
          />
          <p className="font-bold text-xs">Cinema</p>
          <p className="text-xs">
            Развитие восприятия английского на слух и улучшение разговорной речи
          </p>
        </div>
        <div className="flex flex-col gap-y-1 text-neutral-100">
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
        <div className="flex flex-col gap-y-1 text-neutral-100">
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
    </div>
  );
}

export default Discount;
