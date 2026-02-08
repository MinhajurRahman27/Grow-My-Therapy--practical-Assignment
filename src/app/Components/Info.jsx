import Link from 'next/link';
import React from 'react';

const Info = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-[300px] md:h-[340px] items-start justify-between py-8 sm:py-10 md:py-15 px-4 sm:px-6 md:px-10 lg:px-15 text-primary gap-8 md:gap-6'>
      <div className='w-full md:w-[60%]'>
        <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold mb-4 sm:mb-6 md:mb-8'>
          Lilac Template
        </h1>
        <div className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] mb-4 sm:mb-6 md:mb-8'> 
          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>
        </div>
        <div className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]'>
          <p>email@gmail.com</p>
          <p>555 555-5555</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-start justify-between w-full md:flex-1 gap-8 sm:gap-12 md:gap-6'>
        <div>
          <h1 className='text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold mb-4 sm:mb-6 md:mb-8'>
            Hours
          </h1>
          <div>
            <p className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]'>Monday - Friday</p>
            <p className='text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]'>10am - 6pm</p>
          </div>
        </div>
        <div>
          <h1 className='text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold mb-4 sm:mb-6 md:mb-8'>
            Find
          </h1>
          <div className='flex flex-col gap-1'>
            <Link href={"/"} className='underline text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] hover:opacity-70 transition-opacity'>
              Home
            </Link>
            <Link href={"/"} className='underline text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] hover:opacity-70 transition-opacity'>
              Contact
            </Link>
            <Link href={"/"} className='underline text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] hover:opacity-70 transition-opacity'>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;