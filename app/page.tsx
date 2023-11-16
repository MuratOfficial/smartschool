import AboutCourses from "@/components/about-courses";
import AboutImage from "@/components/about-image";
import AboutText from "@/components/about-text";
import Discount from "@/components/discount";
import Footer from "@/components/footer";
import Form from "@/components/form";
import HeroImage from "@/components/hero-image";
import HeroSecondaryImage from "@/components/hero-secondary-image";
import HeroSecondaryText from "@/components/hero-secondary-text";
import HeroText from "@/components/hero-text";
import Navbar from "@/components/navbar";
import Results from "@/components/results";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between px-24 py-8">
      <Navbar />
      <div className="flex flex-row">
        <HeroText />
        <HeroImage />
      </div>
      <div className="flex flex-col">
        <HeroSecondaryText />
        <HeroSecondaryImage />
      </div>
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
