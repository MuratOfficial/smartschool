import AboutCourses from "@/components/about-courses";
import AboutCollage from "@/components/about-collage";
import AboutText from "@/components/about-text";
import Discount from "@/components/discount";
import Footer from "@/components/footer";
import Form from "@/components/form";
import HeroImage from "@/components/hero-image";
import HeroSecondaryText from "@/components/hero-secondary-text";
import HeroText from "@/components/hero-text";
import Navbar from "@/components/navbar";
import Results from "@/components/results";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  relative lg:max-w-[1920px] lg:max-h-[7070px]  flex-col items-center min-h-screen justify-between sm:px-0 xl:px-72 lg:px-48">
      {/**Bg Images block */}
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rect2.png"
        className="absolute   lg:visible sm:collapse lg:top-0 xl:-top-40"
      />
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rectsm1.png"
        className="absolute w-full h-[1260px]  lg:collapse sm:visible top-[240px] "
      />
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rectsm2.png"
        className="absolute  lg:collapse sm:visible top-[1750px] z-0"
      />
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rectsm3.png"
        className="absolute h-[300px]  lg:collapse sm:visible top-[2300px] z-0"
      />
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rectsm4.png"
        className="absolute  max-h-[1550px] lg:collapse sm:visible top-[5390px] z-0"
      />
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rectsm5.png"
        className="absolute  lg:collapse sm:visible top-[7950px] z-0"
      />
      <Image
        src="/3/Group1671.png"
        width={1539}
        height={1086}
        alt="group1671"
        className="absolute lg:top-[910px] sm:top-[1800px] lg:visible sm:collapse lg:px-28 lg:pt-16"
      />
      <Image
        src="/3/rect3.png"
        width={1920}
        height={617}
        alt="rect3"
        className="absolute xl:top-[1660px] lg:top-[1720px] lg:visible sm:collapse z-10"
      />
      <Image
        src="/3/TI_2.png"
        width={290}
        height={290}
        alt="TI2"
        className="absolute lg:top-[1270px] lg:visible sm:collapse z-0 lg:right-[385px]"
      />
      <Image
        src="/4/rect4.png"
        width={1372}
        height={771}
        alt="rect4"
        className="absolute top-[2460px] lg:visible sm:collapse px-40"
      />
      <Image
        src="/footer/Rectangle322.png"
        width={1920}
        height={290}
        alt="rectfooter"
        className="absolute lg:visible sm:collapse xl:top-[5560px] lg:top-[5536px]"
      />
      <Image
        src="/5/rect5.png"
        width={1920}
        height={790}
        alt="rect5"
        className="absolute lg:visible sm:collapse xl:top-[3670px] lg:top-[3710px] z-10"
      />
      <Image
        src="/1/rectlastlg.png"
        width={1920}
        height={1078}
        alt="rect5"
        className="absolute lg:visible sm:collapse top-[4310px] z-0"
      />
      <Image
        src="/6/1t.png"
        width={180}
        height={180}
        alt="rect5"
        className="absolute lg:visible sm:collapse top-[3920px] right-36 z-10"
      />
      <Image
        src="/6/2t.png"
        width={200}
        height={200}
        alt="rect5"
        className="absolute lg:visible sm:collapse top-[3980px] left-36 z-10"
      />
      <Image
        src="/footer/lastrect.png"
        width={1920}
        height={790}
        alt="lastrect"
        className="absolute lg:visible sm:collapse xl:top-[4980px] lg:top-[5025px]"
      />
      <Image
        src="/clouds/clouds1.png"
        width={1000}
        height={720}
        alt="clouds1"
        className="absolute top-[400px] left-0"
      />
      <Image
        src="/clouds/clouds2.png"
        width={1000}
        height={720}
        alt="clouds1"
        className="absolute top-[400px] "
      />
      <Image
        src="/clouds/clouds3.png"
        width={500}
        height={720}
        alt="clouds1"
        className="absolute top-[500px] left-0"
      />
      <Image
        src="/clouds/clouds4.png"
        width={500}
        height={720}
        alt="clouds1"
        className="absolute top-[500px] right-0"
      />

      {/**Bg Images block */}

      <Navbar />

      <div className="flex lg:flex-row sm:flex-col sm:px-0 lg:px-48 lg:w-[1200px]   lg:max-w-[1200px] justify-between sm:max-w-[480px] items-center h-full py-8">
        <HeroText />
        <HeroImage />
      </div>
      <HeroSecondaryText />

      <AboutText />
      <AboutCollage />

      <AboutCourses />
      <Discount />
      <Results />
      <Form />
      <Footer />
      {/* <WhatsAppWidget /> */}
    </main>
  );
}
