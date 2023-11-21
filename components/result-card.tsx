import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface ResultProps {
  avatar: String;
  name: String;
  point: String;
  desc: String;
}

function ResultCard({ avatar, name, point, desc }: ResultProps) {
  return (
    <div
      className={cn(
        "lg:w-[400px] lg:h-[500px] font-roboto transition-all  duration-700 delay-150 z-20 py-6 pl-4 pr-8 bg-cover rounded-xl flex flex-col gap-y-2"
      )}
      style={{ backgroundImage: `url(/6/newRes.png)` }}
    >
      <div className="h-28 flex flex-row gap-x-4 w-full">
        <div
          className="w-40 h-[112px]  rounded-full  bg-cover"
          style={{ backgroundImage: `url(${avatar})` }}
        />
        <div className="flex flex-col justify-center w-full text-left text-blue-950">
          <p>{name}</p>
          <p className="uppercase underline underline-offset-2 font-bold">
            {point}
          </p>
        </div>
      </div>
      <div className="h-fit ">
        <p className=" lg:text-base sm:text-xs text-blue-950">{desc}</p>
      </div>
    </div>
  );
}

export default ResultCard;
