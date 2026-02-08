import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const IntroductionSection = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-center lg:h-[130vh]   bg-secondary  py-[10vh] overflow-hidden ">
      <div className="md:w-[55vw] lg:w-[55vw]   flex flex-col justify-between lg:mt-10">
        <div className="flex-1 flex flex-col justify-center items-center ">
          <div className="py-8   md:py-0 md:pb-0 w-[85%]  lg:h-[235.27px] md:px-10 mb-9">
            <h1 className="text-primary text-[30px] sm:text-[5vw] md:text-[3.6vw] font-semibold mb-8 ">
              Hi, I’m Lilac.
            </h1>
            <p className=" text-[16.2784px] lg:text-[19.2784px] font-normal text-primary">
              I{"'"}m committed to providing a safe and supportive environment
              where we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we{"'"}ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>
          <button className="md:mt-7 border-primary text-primary border px-[28.72px] py-[14.32px] flex items-center justify-around hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300">
            LET{"'"}S CHAT <IoIosArrowRoundForward className="ml-1.25" />
          </button>
        </div>
      </div>
      <div className=" flex items-center   justify-center md:justify-start  relative md:pt-[4vh] ">
        <Image
          src={"/girlphoto2.webp"}
          width={513}
          height={771}
          alt="Girl holding flower image"
          sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 513px"
          className="rounded-t-[1000px]  w-[180px] md:h-[400px]   lg:h-[90vh]  md:w-[300px] lg:w-[350px]"
        ></Image>
        <div className=" w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[25vw] lg:w-[19vw] md:h-[25vw] lg:h-[19vw] rounded-full overflow-hidden absolute  bottom-0 md:-bottom-13 lg:-bottom-15  left-30 md:left-40 lg:left-55">
          <Image
            src={"/flowerphoto.webp"}
            alt={"flowerphoto"}
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
