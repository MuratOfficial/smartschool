import Image from "next/image";
import React from "react";

function Results() {
  return (
    <div className="flex flex-col gap-y-6 lg:max-w-[1200px] items-center z-10 lg:w-[1200px] px-48 h-full bg-transparent py-8">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-4xl text-left font-bold text-blue-950">
          Результаты наших студентов
        </p>
        <Image
          width={140}
          height={140}
          alt="figure1"
          src="/6/,,.png"
          className=""
        />
      </div>
      <div className="w-full h-[370px]">EmptyCollageBlock</div>
    </div>
  );
}

export default Results;
