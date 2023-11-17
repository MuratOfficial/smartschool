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
    <div className="flex flex-row gap-x-20 px-48 py-4 lg:w-[1200px] items-center justify-start z-50">
      <Image
        width={150}
        height={50}
        src="/1/logo-smart-school-03.png"
        alt="logo"
        className=""
      />
      <nav>
        <ul className="flex flex-row gap-x-10 text-[#4e6f89] font-['Roboto'] text-[16px]">
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
              className="flex flex-col cursor-pointer border-2 rounded-md py-1 px-2 border-transparent hover:border-violet-700 hover:text-violet-700 transition delay-150 items-center duration-400"
            >
              <p className="text-[16px] font-semibold text-center leading-5">
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
