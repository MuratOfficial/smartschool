import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    <div className="lg:h-[480px] flex flex-row lg:w-[480px] lg:max-w-[480px] z-10 relative">
      <Image
        src="/1/Scale.png"
        width={150}
        height={350}
        alt="scale"
        className="absolute inset-10 inset-y-20"
      />
      <Image
        src="/1/Ellipse.png"
        width={300}
        height={350}
        alt="ellipse"
        className="absolute inset-10 inset-y-20 inset-x-24"
      />
      <Image
        src="/1/Sloi19.png"
        width={200}
        height={200}
        alt="sloi19"
        className="absolute  inset-y-16 inset-x-80"
      />
      <Image
        src="/1/HeroImg.png"
        width={300}
        height={300}
        alt="ellipse"
        className="absolute inset-10 inset-y-20 inset-x-24 z-10"
      />
      <Image
        src="/1/Bulb.png"
        width={150}
        height={150}
        alt="ellipse"
        className="absolute  inset-y-32 inset-x-72 z-10"
      />
    </div>
  );
}

export default HeroImage;
