"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

function Navbar() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const [nav, setNav] = useState(false);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const routes = [
    {
      name: "О нас",
      href: "about",
    },
    {
      name: "Обучение",
      href: "education",
    },
    {
      name: "Отзывы",
      href: "testimonials",
    },
  ];
  return (
    <div className="flex flex-row lg:gap-x-20 sm:gap-x-4 sm:px-4  lg:px-48 sm:py-0 lg:py-4 sm:w-[360px] lg:w-[1200px]  items-center justify-start z-50">
      <Image
        width={150}
        height={50}
        src="/1/logo.svg"
        alt="logo"
        className={cn(
          "lg:w-[150px] sm:w-1/2 sm:pt-4 lg:pt-0",
          nav === true &&
            "sm:collapse sm:w-0 delay-150 duration-500 transition-all opacity-0"
        )}
      />
      <Image
        width={150}
        height={100}
        src="/1/navbarmob.png"
        alt="logo"
        onClick={() => setNav(true)}
        className={cn(
          "lg:collapse sm:visible lg:w-0 lg:ml-0 opacity-100 cursor-pointer sm:ml-24 sm:w-[30px] sm:pt-4 lg:pt-0",
          nav === true &&
            "sm:collapse sm:w-0 transition-all sm:ml-0 delay-150 duration-500 opacity-0"
        )}
      />

      <nav
        className={cn(
          "lg:visible sm:collapse lg:w-fit lg:opacity-100 sm:opacity-0 sm:w-0",
          nav === true &&
            "sm:visible sm:w-full transition-all  pt-4 delay-150 duration-700 sm:opacity-100"
        )}
      >
        <ul className="flex flex-row lg:normal-case sm:lowercase sm:gap-x-6 lg:gap-x-10 text-[#4e6f89] font-roboto ">
          {routes.map((el, index) => (
            <ScrollLink
              key={index}
              // activeClass="active"
              to={el.href}
              spy={true}
              smooth={true}
              offset={-100}
              delay={150}
              duration={1000}
              onSetActive={handleSetActive}
              className="flex flex-col cursor-pointer border-2 rounded-md py-1 px-2 border-transparent  hover:text-blue-950 transition delay-150 items-center duration-400"
            >
              <p className="text-md font-semibold text-center leading-5">
                {el.name}
              </p>
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
