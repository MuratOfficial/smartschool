"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ResultCard, { ResultProps } from "./result-card";
import { Element } from "react-scroll";
import { AnimateScrollDownHorizontal } from "./animations";

function Results() {
  const [ind, setInd] = useState(1);

  const results = [
    {
      name: "Эрджан",
      avatar: "/avatars/1.png",
      point: "IELTS - 7",
      desc: "Всем привет! Я сдавал IELTS для поступления в университет в Америке на специальность актёра. Мне очень понравилось, потому что тут очень дружный коллектив, очень добрые учителя и мне в особенности очень нравится IELTS Club из-за того что там много тем на которые можно разговаривать, очень классные люди с которыми можно подружиться, пообщаться. Программа в Smart School была очень полезной, потому что я получил много нужной информации для того чтобы слать IELTS, в частности как написать эссе. Thank you for teaching me, bye!",
    },
    {
      name: "Алдияр 17 лет",
      avatar: "/avatars/2.png",
      point: "IELTS - 8.0",
      desc: "Всем привет! Мне нужен был IELTS для поступления зарубеж. Я обучался в Smart School 2 месяца. Изначально я учился в другом заведении, но мне не понравилась там методика обучения т по рекомендации друга я в тот же день пришел в Smart School и записался на курсы. В первое время когда я сдавал пробники, я набирал 6.5. Но, мне понравилась методика школы потому что каждый раз я усваивал новый материал, а также каждый урок был очень интересным. Я считаю, что каждый человек может набрать высокий балл, главное это усердно заниматься. ",
    },
    {
      name: "Карина",
      avatar: "/avatars/3.png",
      point: "IELTS - 7.0",
      desc: "Всем привет! Я сдавала IELTS для поступления на бакалавриат и сейчас я поступила в Америку. Но, он сейчас нужен везде, даже в современных казахстанских вузах его требуют как обязательный экзамен, поэтому всем советую его сдать сейчас. Я узнала о Smart School через друзей и они сказали что там всё супер, поэтому я записалась сюда. Самое главное что мне нравится в смарт скул, это то что спикинг клаю проходит на абсолютно разные темы, это может быть кино, дебаты и так далее. ",
    },
    {
      name: "Томирис",
      avatar: "/avatars/4.png",
      point: "IELTS - 8.5",
      desc: "Здравствуйте! Я заканчиваю PhD докторантуру в КазНУ и мой балл айлтс всегда был 8.0, но у меня был слабый writing и иногда мне попадались сложные вопросы в speaking. Я проходила индивидуальные занятия в смарт скул, мне очень всё понравилось, я очень благодарна преподавателю за качественные, структурированные и понятные  задания, всегда всё подробно объясняла и благодаря ей я подняла свой балл в writing с 6.5 до 7.5.  ",
    },
    {
      name: "Гульсезим",
      avatar: "/avatars/5.png",
      point: "IELTS - 8.0",
      desc: "Здравствуйте! Я сдавала айлтс для поступления на магистратуру в Англию. Основной упор делала на writing и speaking, так как с остальным проблем не было. Я выбрала смарт скул, потому что у вас хорошая реклама в инстраграме и во вторых, удобное место расположение рядом с работой. Советую всем учить языки и слова, потому что это очень сильно прокачивает навыки коммуникации и мозги. ",
    },
    {
      name: "Томирис",
      avatar: "/avatars/6.png",
      point: "IELTS - 7.0",
      desc: "Всем привет! Я сдавала айлтс для поступления на бакалавриат и сейчас являюсь студенткой университета James Cook в Сингапуре. К поиску учебного центра я отнеслась очень ответственно. Когда я пришла в смарт скул мне понравились атмосфера, интерьер и преподаватели. Я поняла, что готова следовать за такими и готова здесь учиться. И я думаю то, что мой выбор оказался правильным.  ",
    },
    {
      name: "Айым",
      avatar: "/avatars/7.png",
      point: "IELTS - 7.5",
      desc: "Всем привет! Я узнала об смарт скул через инстаграм, а также мой преподаватель из университета также окончил ваши курсы, поэтому я доверилась его выбору и решила тоже прийти к вам. Мне нравится в смарт скул, то что вы четко фокусируетесь на сдаче ielts и то, что вы делаете свою работу от души и очень качественно. Авторская методика фокусируется  на нужных моментах, считаю её очень точной и удобной. ",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 lg:max-w-[1920px] items-center z-10 lg:w-[1200px] px-48 h-full bg-transparent py-8 ">
      <div className="flex flex-row items-center justify-between w-full">
        <Element name="testimonials">
          <AnimateScrollDownHorizontal>
            <p className="text-4xl text-left font-bold text-blue-950">
              Результаты наших студентов
            </p>
          </AnimateScrollDownHorizontal>
        </Element>

        <Image
          width={140}
          height={140}
          alt="figure1"
          src="/6/,,.png"
          className=""
        />
      </div>
      <div className="w-full h-[500px] relative">
        <div className="w-full h-full flex flex-row  justify-between">
          <ResultCard
            avatar={results[ind - 1].avatar}
            name={results[ind - 1].name}
            point={results[ind - 1].point}
            desc={results[ind - 1].desc}
          />
          <ResultCard
            avatar={results[ind].avatar}
            name={results[ind].name}
            point={results[ind].point}
            desc={results[ind].desc}
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center pt-4">
          <div className="flex flex-row bg-neutral-100 bg-opacity-70 px-4 rounded-2xl p-2 w-fit gap-x-4  z-30 ">
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 1 && "bg-neutral-950"
              )}
              onClick={() => setInd(1)}
            />
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 2 && "bg-neutral-950"
              )}
              onClick={() => setInd(2)}
            />
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 3 && "bg-neutral-950"
              )}
              onClick={() => setInd(3)}
            />
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 4 && "bg-neutral-950"
              )}
              onClick={() => setInd(4)}
            />
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 5 && "bg-neutral-950"
              )}
              onClick={() => setInd(5)}
            />
            <button
              className={cn(
                "w-2 h-2 rounded-full bg-neutral-600 hover:bg-neutral-800",
                ind === 6 && "bg-neutral-950"
              )}
              onClick={() => setInd(6)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
