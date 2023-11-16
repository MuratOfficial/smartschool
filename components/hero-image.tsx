import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    <div className="h-screen justify-start flex flex-row justify-center text-left max-w-[480px] z-10">
      <Image
        src="/Scale.png"
        width={150}
        height={350}
        alt="scale"
        className="absolute right-[500px] top-[150px]"
      />
      <Image
        src="/Ellipse.png"
        width={300}
        height={350}
        alt="ellipse"
        className="absolute right-[250px] top-[150px]"
      />
      <Image
        src="/Sloi19.png"
        width={200}
        height={200}
        alt="ellipse"
        className="absolute right-[150px] top-[150px]"
      />
      <Image
        src="/HeroImg.png"
        width={300}
        height={300}
        alt="ellipse"
        className="absolute right-[280px] top-[150px] z-10"
      />
    </div>
  );
}

export default HeroImage;
