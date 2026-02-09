"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do You Accept Insurance?",
      answer: "Please contact me directly to discuss insurance options and verify if your specific plan is accepted for therapy services in California."
    },
    {
      question: "Do You Offer Telehealth Sessions?",
      answer: "Yes, I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California."
    },
    {
      question: "What Is Your Approach to Trauma Therapy?",
      answer: "My approach to trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns using EMDR and other evidence-based methods."
    },
    {
      question: "Who Do You Typically Work With?",
      answer: "I frequently work with high-achieving adults, entrepreneurs, creatives, and professionals dealing with anxiety, panic, trauma, burnout, and perfectionism. Many clients feel 'functional' on the outside while quietly struggling with constant worry, tension, or exhaustion."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden py-10 md:py-[50px] lg:py-[90px]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-15 pt-8 md:pt-14 pb-8 md:pb-12 flex flex-col md:flex-row items-center  md:items-center gap-8 md:gap-12 lg:gap-20 justify-center max-w-[1400px] mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/paul-green-5lRxNLHfZOY-unsplash.jpg"}
            width={513}
            height={771}
            alt="Girl holding flower image"
            sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 513px"
            className="rounded-t-[1000px] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[28vw] max-w-[513px] h-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2 px-4 sm:px-0 ">
          <div className="text-primary">
            <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[34px] lg:text-[44px] mb-4  md:text-left">
              FAQs
            </h1>
            <hr className="mb-6 md:mb-8" />
            
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-primary pb-4">
                  <div 
                    className="flex items-start gap-3 md:gap-4 cursor-pointer group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? (
                        <LuMinus className="text-[20px] sm:text-[24px] md:text-[28px] transition-all duration-300 transform rotate-0" />
                      ) : (
                        <GoPlus className="text-[20px] sm:text-[24px] md:text-[28px] transition-all duration-300 transform rotate-0 group-hover:rotate-90" />
                      )}
                    </div>
                    <h2 className="text-[18px] sm:text-[22px] md:text-[22px] lg:text-[30px] font-medium text-left flex-1 leading-tight">
                      {faq.question}
                    </h2>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-[500px] opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]  text-left leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
