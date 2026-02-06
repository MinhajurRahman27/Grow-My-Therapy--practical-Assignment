import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  const { title, text, image, alt } = data;
  return (
    <div className="border border-primary p-5 bg-secondary md:w-[30vw] flex flex-col">
      <div className="flex flex-col flex-1 justify-between">
        <div className="space-y-4 lg:space-y-8 min-h-[150px] sm:min-h-[140px] ">
          <h1 className="text-primary text-[18px] font-semibold">{title}</h1>
          <p className="text-primary font-normal text-[15px]">{text}</p>
        </div>
        <div className=" flex items-center justify-center mt-5">
          <div className="relative w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] md:w-[19vw] md:h-[19vw] rounded-full overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
