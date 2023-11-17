import Image from "next/image";
import React from "react";

function AboutText() {
  return (
    <div className="flex flex-col lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full bg-transparent">
      <div className="flex flex-row gap-x-12 w-full relative">
        <div className="w-1/2 relative py-16">
          <p className="text-left font-bold text-[40px] text-[#2c3860] leading-tight pt-4 pb-10">
            О нашем центре
          </p>

          <p className="font-medium text-[#4e6f89] pt-4 text-[16px] ">
            {" "}
            <strong>Smart School</strong>- ведущий центр по подготовке к
            экзамену <strong>IELTS</strong> в Казахстане.
          </p>
          <p className="font-medium text-[#4e6f89] pt-4 text-[16px] ">
            Наш центр основан <strong>Тамарой Ильясовой</strong> — ведущим
            преподавателем в СНГ с <strong>25</strong>-летним стажем.
            Исключительно в нашем центре практикуется ее уникальная методология,{" "}
            которая помогла более <strong>26 000 </strong>
            студентам <br /> получить желаемый балл и осуществить свою мечту.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
