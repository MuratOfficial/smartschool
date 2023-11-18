"use client";
import React, { useState } from "react";
import CollageCard from "./collage-card";
import { cn } from "@/lib/utils";

function AboutCollage() {
  const [ind, setInd] = useState(1);
  const imageUrl = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
    "/photos/5.jpg",
    "/photos/6.jpg",
    "/photos/7.jpg",
  ];

  return (
    <div className="z-20 mt-16 py-12 lg:max-w-[1920px] items-center lg:w-full h-full relative">
      <div className="w-full h-[370px] flex flex-row items-center gap-x-3 justify-center">
        <CollageCard url={imageUrl[ind - 1]} vitrine={false} />
        <CollageCard url={imageUrl[ind]} vitrine={true} />
        <CollageCard url={imageUrl[ind + 1]} vitrine={false} />
      </div>
      <div className="flex flex-row bg-neutral-100 bg-opacity-70 px-4 rounded-2xl p-2 w-fit gap-x-4 absolute top-[330px] z-30 left-[530px]">
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
      </div>
    </div>
  );
}

export default AboutCollage;
