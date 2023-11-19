import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    <div className="lg:h-[480px] sm:h-[360px] sm:w-[360px] flex flex-row lg:w-[480px] lg:max-w-[480px] z-10 relative">
      <Image
        src="/1/Scale.png"
        width={180}
        height={350}
        alt="scale"
        className="absolute inset-y-8"
      />
      <Image
        src="/1/Ellipse.png"
        width={400}
        height={450}
        alt="ellipse"
        className="absolute inset-y-4 sm:inset-x-12 lg:inset-x-20"
      />
      <Image
        src="/1/Sloi19.png"
        width={220}
        height={220}
        alt="sloi19"
        className="absolute sm:inset-x-28 lg:inset-x-72"
      />
      <Image
        src="/1/HeroImg.png"
        width={480}
        height={480}
        alt="ellipse"
        className="absolute sm:inset-x-6 lg:inset-x-16 z-10"
      />
      <Image
        src="/1/Bulb.png"
        width={180}
        height={180}
        alt="bulb"
        className="absolute sm:inset-x-12 inset-y-16 lg:inset-x-72 z-10 hover:-rotate-12 transition duration-700 delay-100 hover:brightness-125 cursor-alias"
      />
      <Image
        src="/clouds/clouds7.png"
        width={500}
        height={500}
        alt="clouds1"
        className="absolute  inset-y-80 sm:inset-x-4 lg:inset-x-40 z-10"
      />
      <Image
        src="/clouds/clouds5.png"
        width={500}
        height={500}
        alt="clouds2"
        className="absolute left-0 top-[340px] z-10"
      />
      <Image
        src="/clouds/clouds2.png"
        width={500}
        height={500}
        alt="clouds2"
        className="absolute left-0 top-[380px] z-10"
      />
    </div>
  );
}

export default HeroImage;
