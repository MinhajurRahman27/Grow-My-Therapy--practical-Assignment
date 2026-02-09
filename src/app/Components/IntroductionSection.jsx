import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center min-h-screen md:h-[140vh] lg:h-[130vh] bg-secondary py-40 sm:py-12 md:py-[10vh] overflow-hidden">
      <div className="w-full md:w-[55vw] lg:w-[55vw] flex flex-col justify-center md:justify-between lg:mt-10 px-4 sm:px-6 md:px-0">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="py-8 md:py-0 md:pb-0 w-full sm:w-[90%] md:w-[85%] md:px-6 lg:px-10 mb-6 md:mb-9">
            <h1 className="text-primary text-[28px] sm:text-[32px] md:text-[3.6vw] lg:text-[3.6vw] font-semibold mb-4 sm:mb-6 md:mb-8">
              Hi, I'm Dr. Maya Reynolds
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[16.2784px] lg:text-[19.2784px] font-normal text-primary leading-relaxed">
              I{"'"}m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences. I
              take a warm, collaborative, and grounded approach to
              therapy—combining practical tools with depth-oriented work for
              clients living and working in a fast-paced environment.
            </p>
          </div>
          <button className="md:mt-7 border-primary text-primary border px-6 sm:px-7 md:px-[28.72px] py-3 sm:py-3.5 md:py-[14.32px] flex items-center justify-center gap-2 hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300 text-sm sm:text-base">
            SCHEDULE A CONSULTATION{" "}
            <IoIosArrowRoundForward className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-[45vw] flex items-center justify-center md:justify-start relative md:pt-[4vh] mb-8 md:mb-0">
        <Image
          src={"/jei-lee-yRXuXvy4sQ4-unsplash.jpg"}
          width={513}
          height={771}
          alt="Girl holding flower image"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
          className="rounded-t-[1000px] w-[200px] sm:w-[220px] md:w-[280px] md:h-[400px] lg:w-[350px] lg:h-[90vh] object-cover"
        />
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[20vw] md:h-[20vw] lg:w-[19vw] lg:h-[19vw] rounded-full overflow-hidden absolute bottom-0 md:-bottom-13 lg:-bottom-15 left-[270px] sm:left-[400px] md:left-40 lg:left-55">
          <Image
            src={"/annie-spratt-vs6a4EHj_Ro-unsplash.jpg"}
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
