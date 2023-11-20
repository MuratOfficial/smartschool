"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";
import {
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "./animations";

function AboutCourses() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] sm:max-w-[360px] items-center z-10 lg:w-[1200px] h-full bg-transparent sm:px-0 lg:px-48">
      <div className="mt-4 mb-4 w-full flex flex-row sm:px-4 lg:px-24 sm:gap-x-4 lg:gap-x-12 items-center font-['Roboto']">
        <div className="w-fit h-fit flex flex-col gap-y-8 sm:py-0 lg:py-12">
          <Image
            width={280}
            height={182}
            src="/3/color-vertical.png"
            alt="cv"
            className=""
          />
        </div>
        <div className="w-full sm:leading-5 lg:leading-7 h-fit sm:text-md lg:text-xl lg:text-left sm:text-right">
          <p className="text-[#4e6f89] pb-4">
            <strong>Smart School</strong> является Авторизованным{" "}
            <strong>British Council</strong> Регистрационным Центром для
            экзамена <strong>IELTS</strong>
          </p>
          <Link
            href="#"
            className="text-[#7594ad] underline underline-offset-2 hover:text-blue-400"
          >
            Посмотреть сертификат
          </Link>
        </div>
      </div>
      <div className="h-full w-full mb-12 relative lg:bg-transparent lg:rounded-none sm:rounded-2xl sm:bg-blue-900">
        <Image
          width={200}
          height={200}
          src="/clouds/clouds2.png"
          alt="clouds1"
          className="absolute right-0  top-8"
        />
        <p className="text-center font-bold sm:text-3xl lg:text-[40px] text-neutral-100 leading-tight pt-3 pb-5">
          Почему выбирают <strong>Smart School?</strong>
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 font-['Roboto'] lg:px-0 sm:px-4 pt-2 lg:pb-4 sm:pb-8">
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/1.png" alt="1" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              8 лет на рынке Казахстана
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Более <strong>26</strong> тысяч студентов, кто сдал{" "}
              <strong>IELTS</strong> и <strong>8500</strong> студентов, кто
              поступил заграницу
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/2.png" alt="2" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Средний балл студентов - 7.5
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Более <strong>26 000</strong> студентов{" "}
              <strong>Smart School</strong> получили желаемый балл по{" "}
              <strong>IELTS</strong> и учатся в лучших вузах мира
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/3.png" alt="1" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Членство в IELTS Club
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Более <strong>70</strong> онлайн и офлайн дополнительных занятий в
              месяц по поднятию уровня языка и навыков, необходимых для сдачи
              экзамена
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/4.png" alt="1" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Авторские учебные материалы
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Студенты <strong>Smart School</strong> обучаются по авторской
              методике <strong>Тамары Ильясовой</strong>
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/5.png" alt="2" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Ежедневные пробные IELTS - Mock Tests
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Регулярная практика тестирования поможет набить руку и
              подготовиться к настоящему экзамену как физически, так и морально
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image
              width={50}
              height={60}
              src="/4/66.png"
              alt="1"
              className=""
            />
            <p className="text-neutral-100 text-xs font-bold">
              Онлайн и Офлайн форматы обучения
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Возможность выбора удобного для Вас формата обучения
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/7.png" alt="1" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Преподаватели с зарубежным образованием и опытом работы
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Наши преподаватели проходят обучение по методике{" "}
              <strong>Тамары Ильясовой</strong>
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/8.png" alt="2" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Обучение с уровня Elementary
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Обучение можно пройти даже с <strong>начинающим</strong> уровнем
              английского языка
            </p>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-start sm:items-center">
            <Image width={50} height={60} src="/4/9.png" alt="1" className="" />
            <p className="text-neutral-100 text-xs font-bold">
              Удобные расположения центра
            </p>
            <p className="text-neutral-100 text-xs sm:text-center lg:text-left">
              Центры расположены в Самал возле ТРЦ{" "}
              <strong>&ldquo;Dostyk Plaza&rdquo;</strong>и возле ТРЦ{" "}
              <strong>&ldquo;Forum&rdquo;</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-y-16 lg:pb-0 sm:pb-6 py-4 lg:px-0 sm:px-4 relative">
        <div className="flex flex-col sm:mt-0 lg:mt-8 lg:text-left sm:text-center">
          <AnimateScrollDownHorizontalLeft>
            <Element name="education">
              <p className="sm:text-3xl lg:text-4xl font-bold text-blue-950">
                Запишись на{" "}
                <span className="font-black text-neutral-50 bg-gradient-to-t from-blue-950 to-blue-800 rounded-xl drop-shadow-lg p-1">
                  бесплатную{" "}
                </span>{" "}
              </p>
            </Element>

            <p className="text-4xl font-bold mb-4 text-blue-950">
              проверку своего уровня
            </p>
          </AnimateScrollDownHorizontalLeft>

          <p className=" mb-4 text-blue-950">
            Длительность курса зависит от уровня студента.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=77471027050&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C+%D0%BF%D1%80%D0%BE+%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D1%83+%D0%BA+IELTS&type=phone_number&app_absent=0"
            className=" w-fit text-sm hover:shadow-2xl hover:ring-2 hover:text-red-600 hover:ring-red-600 hover:bg-transparent transition delay-150 duration-500 text-white font-semibold text-center rounded-md p-2 bg-[#e30613]"
          >
            Пройти проверку
          </Link>
          <Image
            width={460}
            height={354}
            src="/5/kniga.png"
            alt="book"
            className="absolute lg:top-10 lg:pl-0 sm:pl-8  sm:top-64 right-0 z-10"
          />
        </div>
        <div className="flex flex-col mt-8">
          <AnimateScrollDownHorizontal>
            <p className="lg:text-4xl sm:text-3xl lg:text-left sm:text-center font-bold mb-6 text-blue-950">
              Программа курса
            </p>
          </AnimateScrollDownHorizontal>

          <div className="w-full h-fit rounded-t-lg shadow-4xl lg:text-left sm:text-center flex sm:flex-col lg:flex-row gap-x-8 font-['Roboto']">
            <div className="p-4 text-blue-950">
              <p className="font-bold text-xl mb-3 text-blue-950">Курс</p>
              <p className="font-bold text-md text-blue-950">12 занятий/мес.</p>
              <p className="text-md">3 раза в неделю по 90 минут</p>
            </div>
            <div className="lg:w-[1px] sm:h-[1px] sm:w-16 lg:h-16 bg-neutral-600 sm:mx-auto lg:mx-0 sm:my-0 lg:my-auto" />
            <div className="p-4 text-blue-950">
              <p className="font-bold text-xl mb-3">Содержание</p>
              <ul className="sm:list-none lg:list-disc text-md">
                <li>Vocabular approach/Grammar</li>
                <li>
                  Pre-preparation to <strong>IELTS</strong>{" "}
                </li>
                <li>
                  Tips, tricks and strategies for all 4 sections of{" "}
                  <strong>IELTS</strong>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded-b-lg bg-[#e30613] py-4 flex sm:flex-col lg:flex-row sm:gap-y-4 lg:gap-x-6 font-['Roboto'] relative items-center">
            <Image
              width={25}
              height={25}
              src="/5/bow.png"
              alt="book"
              className="absolute top-1 left-1"
            />
            <p className="text-2xl font-semibold text-neutral-50 pl-6">
              Бонусы
            </p>
            <div className=" bg-neutral-50 sm:mx-auto lg:mx-0 sm:my-0 lg:my-auto lg:w-[1px] sm:h-[1px] sm:w-16 lg:h-16" />
            <p className="text-md  text-neutral-50 px-3">
              Авторский учебник <br /> Тамары Ильясовой
            </p>
            <div className=" bg-neutral-50 sm:mx-auto lg:mx-0 sm:my-0 lg:my-auto lg:w-[1px] sm:h-[1px] sm:w-16 lg:h-16" />
            <p className="text-md  text-neutral-50 px-3">
              Регистрация <strong>IELTS</strong> <br /> в{" "}
              <span className="font-semibold uppercase">British Council</span>
            </p>
            <div className=" bg-neutral-50 sm:my-auto lg:mx-0 sm:my-0 lg:my-auto lg:w-[1px] sm:h-[1px] sm:w-16 lg:h-16" />
            <p className="text-md  text-neutral-50 px-3">
              Бесплатный доступ <br /> в{" "}
              <span className="font-semibold uppercase">IELTS Club</span> <br />
              (60 уроков в месяц) <span className="font-black text-2xl">*</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCourses;
