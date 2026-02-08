import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SecondSection = () => {
  return (
    <div className="grid h-auto md:h-[90vh]  lg:min-h-screen  md:grid-cols-12 mt-3 bg-secondary  ">
      <div className="col-span-6  flex flex-col justify-between order-2 md:order-1">
        <div className="flex-1 flex justify-center items-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-10 md:pb-14 lg:pb-16">
          <div className="py-8 pb-0  md:py-0 md:pb-0 w-[85%]  lg:h-[235.27px] ">
            <h1 className="text-primary text-[26px] sm:text-[4vw] md:text-[3.2vw] font-semibold  lg:mb-8 ">
              Feeling overwhelmed by anxiety or stress?
            </h1>
            <p className="my-4 text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
              Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p className="mt-4 text-[19.2784px] font-normal text-primary">
              Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they{"'"}re always bracing for something to go wrong.
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
