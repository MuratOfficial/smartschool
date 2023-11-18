import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-3  font-['Roboto'] gap-20 px-48 z-10 lg:w-[1200px] lg:max-w-[1200px]  h-full ">
      <div className="flex flex-col">
        <Image
          width={150}
          height={50}
          src="/footer/logo-smart-school-03.png"
          alt="logo"
          className=""
        />
        <p className="text-xs py-4 leading-relaxed text-[#9dafbd]">
          ТОО «SMARTSCHOOL» <br /> Образовательная деятельность. <br /> Центр по
          подготовке к международному экзамену IELTS.
        </p>

        <div className="flex flex-row gap-x-8 pt-4 items-center">
          <Link href="mailto:amina_b87@mail.ru">
            <Image
              width={20}
              height={20}
              src="/email.png"
              alt="logo"
              className="hover:scale-110"
            />
          </Link>
          <Link href="https://www.instagram.com/tamarailyassova">
            <Image
              width={20}
              height={20}
              src="/footer/Instagram.png"
              alt="logo"
              className="hover:scale-110"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UC5Bwx1x5v5giOX8v-h6Anlw">
            <Image
              width={20}
              height={20}
              src="/footer/youtube.png"
              alt="logo"
              className="hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="text-sm text-neutral-100 py-2">Контакты</p>
        <p className="text-xs py-4 leading-relaxed text-[#9dafbd]">
          +7 747 094 75 68 <br /> Улица Минусинская, 13Б; 4 этаж ​Улица
          Жолдасбекова, 9а ​320 офис; 3 этаж
        </p>
      </div>
      <div className="flex flex-col ">
        <p className="text-sm text-neutral-100 py-2">Время работы</p>
        <p className="text-sm pt-4 leading-relaxed text-[#9dafbd]">
          Пн. 09:00–21:00 <br /> Вт. 09:00–21:00 <br /> Ср. 09:00–21:00 <br />{" "}
          Чт. 09:00–21:00 <br /> Пт. 09:00–21:00 <br /> Сб. 09:00–21:00 <br />{" "}
          Вс. Выходной
        </p>
      </div>
    </div>
  );
}

export default Footer;
