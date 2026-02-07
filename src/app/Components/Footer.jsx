import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-secondary text-center h-[35vh] flex flex-col items-center justify-center px-5' >
      <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 '>
        <Link href={'/'} className='underline'>Privacy & Cookies Policy</Link>
        <Link href={'/'}  className='underline'>Good Faith Estimate</Link>
        <Link href={'/'}  className='underline'>Website Terms & Conditions</Link>
        <Link href={'/'}  className='underline'>Disclaimer</Link>
       
      </div>
      <div className='flex items-center justify-center gap-1 mt-4'>
        <p className='text-primary'>Website Template Credits:</p>
        <Link href={'/'}  className='underline underline-offset-4'>Go Bloom Creative</Link>
      </div>
      <p className='text-primary mt-15 font-normal'>All Rights Reserved © 2024 Your Business Name Here,LLC.</p>
    </div>
  );
};

export default Footer;