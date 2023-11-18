import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CollageCardProps {
  url: String;
  vitrine: boolean;
}

function CollageCard({ url, vitrine }: CollageCardProps) {
  return (
    <div
      className={cn(
        "lg:w-[380px] lg:h-[220px]  rounded-lg transition-all duration-500 delay-100 z-20 bg-cover shadow-2xl",
        vitrine === true && "lg:w-[400px] lg:h-[260px]"
      )}
      // data.bigFrame === true &&
      //   "lg:w-[826px] lg:h-[640px] xs:w-[320px] xs:h-[340px]"

      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
}

export default CollageCard;
