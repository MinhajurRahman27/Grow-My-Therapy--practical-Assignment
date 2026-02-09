import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroSection = () => {
  return (
    <div className="px-15 md:px-6 lg:px-15 pt-14 flex flex-col md:flex-row items-center md:items-center gap-20 md:gap-10 lg:gap-20 justify-between ">

      <div className="">

        <Image
          src={"/bannerimage.webp"}
          width={513}
          height={771}
          alt="Girl holding flower image"
           sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 513px"
  className="rounded-t-[1000px] w-[250px] md:w-[35vw] lg:w-[40vw]"
        ></Image>
      </div>
      <div className="flex-1  mb-45 md:mr-6 lg:mr-12 text-center  -mt-18 sm:mt-0">
        
        <div className=" flex items-center flex-col md:mt-[8vw] lg:mt-0">
          
          <h1 className="text-primary font-semibold   text-[36px] sm:text-[60px]  md:text-[4.5vw] leading-tight sm:leading-tight md:leading-tight lg:leading-tight sm:mb-5">
        
            Therapy for anxiety, <br />
            <span className="ml-3">trauma, and burnout</span>
          </h1>
          <p className="mt-4 text-[19.2784px] text-primary">
            
            Licensed Clinical Psychologist in Santa Monica, CA
          </p>
          <button className="mt-7 border-primary text-primary border px-[28.72px] py-[14.32px] flex items-center justify-around hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300">
            
            SCHEDULE A CONSULTATION <IoIosArrowRoundForward className="ml-1.25" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
