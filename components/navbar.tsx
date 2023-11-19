"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
    <div className="flex flex-row lg:gap-x-20 sm:gap-x-4 sm:px-4 lg:px-48 sm:py-0 lg:py-4 sm:w-[360px] lg:w-[1200px] items-center justify-start z-50">
      <Image
        width={150}
        height={50}
        src="/1/logo-smart-school-03.png"
        alt="logo"
        className=""
      />
      <nav className="lg:visible sm:collapse">
        <ul className="flex flex-row gap-x-10 text-[#4e6f89] font-['Roboto']">
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
