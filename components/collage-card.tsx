import Link from "next/link";
import React from "react";

export interface CardItem {
  url: string;
}

function CollageCard(data: CardItem) {
  return (
    <div
      className="card lg:w-[400px] lg:h-[410px] xs:w-[320px] xs:h-[340px] bg-white rounded-lg group/item flex flex-col justify-end hover:brightness-90 transition duration-150 delay-75"
      // data.bigFrame === true &&
      //   "lg:w-[826px] lg:h-[640px] xs:w-[320px] xs:h-[340px]"

      style={{ backgroundImage: `url(${data?.url})` }}
    >
      <div className=" lg:p-6 xs:p-4  flex flex-col bg-neutral-900 bg-opacity-90 rounded-b-md w-full xs:h-24 lg:h-32">
        {" "}
      </div>
    </div>
  );
}

export default CollageCard;
