import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GetStartedTodaySection = () => {
  return (
    <div className="bg-neutral min-h-[60vh] md:min-h-[70vh] lg:h-[75vh] border-b border-primary text-white flex items-center justify-center py-12 md:py-16 lg:py-20 px-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] text-center">
        <div>
          <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] mb-6 md:mb-8 leading-tight">
            Get started today
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] px-4 sm:px-8 md:px-12 lg:px-20 leading-relaxed">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
        </div>
        <button className="flex text-white items-center justify-center gap-2 border px-6 sm:px-7 py-3 sm:py-3.5 mx-auto hover:bg-white hover:text-neutral cursor-pointer transition ease-linear duration-200 mt-8 md:mt-12 lg:mt-15 text-sm sm:text-base">
          <span className="font-medium">GET IN TOUCH</span> 
          <IoIosArrowRoundForward className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default GetStartedTodaySection;
