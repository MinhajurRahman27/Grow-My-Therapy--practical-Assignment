import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SecondSection = () => {
  return (
    <div className="grid h-auto md:h-[90vh]  lg:min-h-screen  md:grid-cols-12 mt-3 bg-secondary  ">
      <div className="col-span-6  flex flex-col justify-between order-2 md:order-1">
        <div className="flex-1 flex justify-center items-center">
          <div className="py-8 pb-25  md:py-0 md:pb-0 w-[85%]  lg:h-[235.27px] ">
            <h1 className="text-primary text-[30px] sm:text-[5vw] md:text-[3.9vw] font-semibold  lg:mb-8 ">
              Live a fulfilling life.
            </h1>
            <p className="my-4 text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
              Life can be challenging—especially when you{"'"}re trying to
              balance your personal and professional life.
            </p>
            <p className="mt-4 text-[19.2784px] font-normal text-primary">
              It{"'"}s easy to feel like you{"'"}re alone in facing these
              challenges, but I want you to know that I{"'"}m here to help.
            </p>
          </div>
        </div>
        <div className="px-[28.722px] border-t-primary text-primary border-t   hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300 ">
          <button className="w-full h-[42.313px] lg:h-[62.313px] cursor-pointer flex items-center justify-center ">
            GET IN TOUCH <IoIosArrowRoundForward className="ml-0.75" />
          </button>
        </div>
      </div>
      <div className="col-span-6 order-1 md:order-2">
        <Image
          src="/secondsectionpic.webp"
          alt="tshirt,book picture"
          width={675}
          height={650}
          className="h-[45vh] md:h-[90vh] lg:min-h-screen  w-[100vw] object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default SecondSection;
