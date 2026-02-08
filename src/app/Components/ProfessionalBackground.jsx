"use client";
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { LuMinus } from 'react-icons/lu';

const ProfessionalBackground = () => {
   const [openIndex, setOpenIndex] = useState(null);
  
    const faqs = [
      {
        question: "Education",
        answer: "Doctor of Psychology (PsyD) in Clinical Psychology from an APA-accredited program, with specialized training in trauma-focused therapies and cognitive-behavioral interventions."
      },
      {
        question: "Licensure",
        answer: "Licensed Clinical Psychologist in the state of California. Licensed to provide both in-person and telehealth therapy services to adults throughout California."
      },
      {
        question: "Certifications",
        answer: "Certified in EMDR (Eye Movement Desensitization and Reprocessing) therapy. Advanced training in cognitive-behavioral therapy (CBT), mindfulness-based interventions, and body-oriented therapeutic techniques."
      }
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='bg-secondary py-10 md:py-[50px] lg:py-[90px]'>
      <div className='w-full md:w-[50%] mx-auto px-4 sm:px-6 md:px-8'>
        <h1 className='text-center text-primary font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-8 md:mb-12'>
          My Professional Background
        </h1>

        <div className="w-full">
          <div className="text-primary">
            <hr className="mb-6 md:mb-8 border-primary" />
            
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-primary pb-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-[18px] sm:text-[22px] md:text-[22px] lg:text-[25px] font-medium text-left flex-1 leading-tight">
                      {faq.question}
                    </h2>
                    <div className="flex-shrink-0 transition-transform duration-300 ml-4">
                      {openIndex === index ? (
                        <LuMinus className="text-[20px] sm:text-[24px] md:text-[28px] transition-all duration-300 transform rotate-0" />
                      ) : (
                        <GoPlus className="text-[20px] sm:text-[24px] md:text-[28px] transition-all duration-300 transform rotate-0 group-hover:rotate-90" />
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-[500px] opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]  leading-relaxed px-10 sm:px-8 md:px-20">
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

export default ProfessionalBackground;