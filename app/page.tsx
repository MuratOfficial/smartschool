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
    <main className="flex  relative lg:max-w-[1920px] lg:max-h-[7070px] flex-col items-center min-h-screen justify-between px-48">
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/1/rect2.png"
        className="absolute top-0"
      />
      <Image
        src="/3/Group1671.png"
        width={1539}
        height={1086}
        alt="group1671"
        className="absolute top-[910px] px-28 pt-16"
      />
      <Image
        src="/3/rect3.png"
        width={1920}
        height={617}
        alt="rect3"
        className="absolute top-[1720px] z-10"
      />
      <Image
        src="/3/TI_2.png"
        width={290}
        height={290}
        alt="TI2"
        className="absolute top-[1270px] z-0 right-[385px]"
      />
      <Image
        src="/4/rect4.png"
        width={1372}
        height={771}
        alt="rect4"
        className="absolute top-[2460px] px-40"
      />
      <Image
        src="/footer/Rectangle322.png"
        width={1920}
        height={320}
        alt="rectfooter"
        className="absolute top-[5435px]"
      />
      <Image
        src="/5/rect5.png"
        width={1920}
        height={790}
        alt="rect5"
        className="absolute top-[3710px]"
      />
      <Image
        src="/6/1t.png"
        width={180}
        height={180}
        alt="rect5"
        className="absolute top-[3920px] right-36"
      />
      <Image
        src="/6/2t.png"
        width={200}
        height={200}
        alt="rect5"
        className="absolute top-[3980px] left-36"
      />
      <Image
        src="/footer/lastrect.png"
        width={1920}
        height={790}
        alt="lastrect"
        className="absolute top-[4900px]"
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
      <Navbar />
      <div className="flex flex-row px-48 lg:w-[1200px] lg:max-w-[1200px] items-center h-full py-8">
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
    </main>
  );
}
