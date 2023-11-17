import AboutCourses from "@/components/about-courses";
import AboutImage from "@/components/about-image";
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
    <main className="flex  relative lg:max-w-[1920px] lg:max-h-[7070px] flex-col items-center min-h-screen justify-between px-36 ">
      <Image
        width={1920}
        height={1530}
        alt="rect2"
        src="/rect2.png"
        className="absolute top-0"
      />
      <Image
        src="/3/Group1671.png"
        width={1539}
        height={1086}
        alt="plane"
        className="absolute top-[860px]"
      />
      <Navbar />
      <div className="flex flex-row px-48 lg:w-[1200px] lg:max-w-[1200px] items-center h-full py-8">
        <HeroText />
        <HeroImage />
      </div>
      <HeroSecondaryText />

      <div className="flex flex-row">
        <AboutText />
        <AboutImage />
      </div>
      <AboutCourses />
      <Discount />
      <Results />
      <Form />
      <Footer />
    </main>
  );
}
