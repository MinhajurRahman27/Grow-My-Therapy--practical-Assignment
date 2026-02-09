import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SuggestionSection = () => {
  return (
    <div className="grid h-auto md:h-[783px]   md:grid-cols-12 mt-3   ">
      <div className="col-span-6 order-2   md:order-1 overflow-hidden">
        <Image
          src={"/girl.webp"}
          alt="girl photo"
          width={780}
          height={783}
          className="w-full h-full object-cover "
        ></Image>
      </div>
      <div className="col-span-6  flex flex-col justify-between order-2 md:order-1">
        <div className="flex-1 flex justify-center items-center pb-8 sm:pb-10 md:pb-30 lg:pb-60">
          <div className="py-8 pb-0  md:py-0 md:pb-0 w-[85%]  lg:h-[350.27px] ">
            <h1 className="text-primary text-[30px] sm:text-[5vw] md:text-[3.9vw] font-semibold  lg:mb-8 ">
              A warm, collaborative <br /> approach to{" "}
              <span className="italic">therapy</span>
            </h1>
            <p className="my-4 text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
              I take a grounded approach to therapy. Sessions are structured
              enough to feel supportive, while still leaving space for
              reflection and depth.
            </p>
            <p className="my-4 text-[19.2784px] lg:text-[19.2784px] font-normal text-primary">
              I integrate evidence-based methods such as:
            </p>
            <ul className="text-primary list-disc ml-8">
              <li>Cognitive-behavioral therapy (CBT)</li>
              <li>EMDR</li>
              <li>Mindfulness-based practices</li>
              <li>Body-oriented techniques</li>
            </ul>
            <p className="mt-4 text-[19.2784px] font-normal text-primary">
              My goal is not just symptom relief, but helping clients develop
              insight, resilience, and a stronger relationship with themselves
              over time.
            </p>
          </div>
        </div>
        <div className="px-[28.722px] border-t-primary text-primary border-t   hover:bg-primary hover:text-white cursor-pointer transition ease-linear duration-300 ">
          <button className="w-full h-[42.313px] lg:h-[62.313px] cursor-pointer flex items-center justify-center ">
            SCHEDULE A CONSULTATION{" "}
            <IoIosArrowRoundForward className="ml-0.75" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionSection;
