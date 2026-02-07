import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const IntroductionSection = () => {
  return (
    <div className="grid  h-[130vh]  md:grid-cols-12  bg-secondary  py-[10vh] ">
      <div className="col-span-7  flex flex-col justify-between order-2 md:order-1 ">
        <div className="flex-1 flex flex-col justify-center items-center ">
          <div className="py-8 pb-25  md:py-0 md:pb-0 w-[85%]  lg:h-[235.27px] px-10 mb-9">
            <h1 className="text-primary text-[30px] sm:text-[5vw] md:text-[3.6vw] font-semibold  lg:mb-8 ">
              Hi, I’m Lilac.
            </h1>
            <p className=" text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
             I{"'"}m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we{"'"}ll work together to navigate the challenges life throws your way.
            </p>
          
          </div>
          <button className="mt-7 border-primary text-primary border px-[28.72px] py-[14.32px] flex items-center justify-around hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300">
                      
                      LET{"'"}S CHAT <IoIosArrowRoundForward className="ml-1.25" />
                    </button>
        </div>
        
      </div>
      <div className="col-span-5 order-1 md:order-2 relative pt-[4vh]">
        <Image
          src={"/girlphoto2.webp"}
          width={513}
          height={771}
          alt="Girl holding flower image"
          sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 513px"
          className="rounded-t-[1000px] h-[97vh] w-[30vw]"
        ></Image>
        <div className=" w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] md:w-[19vw] md:h-[19vw] rounded-full overflow-hidden absolute bottom-5 left-50">
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
