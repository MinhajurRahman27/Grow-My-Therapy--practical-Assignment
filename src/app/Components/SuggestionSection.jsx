import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SuggestionSection = () => {
  return (
    <div className="grid h-auto md:h-[783px]   md:grid-cols-12 mt-3 bg-accent  ">
      <div className="col-span-6 order-2   md:order-1">
        <Image
          src={"/girlphoto.webp"}
          alt="girl photo"
          width={780}
          height={783}
          className="w-full h-full object-cover "
        ></Image>
      </div>
      <div className="col-span-6  flex flex-col justify-between order-2 md:order-1">
        <div className="flex-1 flex justify-center items-center">
          <div className="py-8 pb-25  md:py-0 md:pb-0 w-[85%]  lg:h-[350.27px] ">
            <h1 className="text-primary text-[30px] sm:text-[5vw] md:text-[3.9vw] font-semibold  lg:mb-8 ">
              You don’t have to do <br /> this all{" "}
              <span className="italic">alone</span>.
            </h1>
            <p className="my-4 text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
              If you are facing any of these, there{"’"}s hope:
            </p>
            <ul className="text-primary list-disc ml-8">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaing relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>
            <p className="mt-4 text-[19.2784px] font-normal text-primary">
              With empathy and guidance, we{"'"}ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>
        </div>
        <div className="px-[28.722px] border-t-primary text-primary border-t   hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300 ">
          <button className="w-full h-[42.313px] lg:h-[62.313px] cursor-pointer flex items-center justify-center ">
            GET IN TOUCH <IoIosArrowRoundForward className="ml-0.75" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionSection;
