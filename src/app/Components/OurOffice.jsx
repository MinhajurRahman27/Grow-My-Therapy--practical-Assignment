import Image from "next/image";
import React from "react";

const OurOffice = () => {
  return (
    <div className="py-10 md:py-[50px] lg:py-[90px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-15">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-primary font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4 md:mb-6">
            A Calm Space for Healing
          </h2>
          <p className="text-primary text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] max-w-[800px] mx-auto leading-relaxed px-4">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/office1.webp"
              alt="Therapy office interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/office2.webp"
              alt="Comfortable counseling space"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          <div className="bg-secondary p-6 md:p-8 rounded-lg">
            <h3 className="text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] mb-3">
              Santa Monica Location
            </h3>
            <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              Conveniently located in Santa Monica, California, with easy access and parking available.
            </p>
          </div>
          
          <div className="bg-secondary p-6 md:p-8 rounded-lg">
            <h3 className="text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] mb-3">
              In-Person & Telehealth
            </h3>
            <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              I offer both in-person sessions at my office and secure telehealth options for clients throughout California.
            </p>
          </div>
          
          <div className="bg-secondary p-6 md:p-8 rounded-lg">
            <h3 className="text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] mb-3">
              Privacy & Comfort
            </h3>
            <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              A safe, confidential environment where you can feel comfortable exploring your thoughts and feelings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
