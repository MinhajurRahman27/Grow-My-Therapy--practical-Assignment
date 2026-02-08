import React from 'react';
import Card from './Card/Card';

const Specialities = () => {
  const datas = [
    {
      title:"Anxiety & Panic",
      text:"I work with adults experiencing constant worry, panic attacks, and the exhausting feeling of always being on edge. We'll address both the emotional and physiological sides of anxiety.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
    {
      title:"Trauma & EMDR",
      text:"I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
    {
      title:"Burnout & Perfectionism",
      text:"I frequently support entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
  ]
  return (
    <div className='py-[10vh] md:py-[28vh] px-4.5'>
      <h1 className='text-primary font-semibold text-center text-[28px] md:text-[3.5vw] mb-[50px] mx-[15px] '>My Specialities</h1>
     <div className='flex justify-center'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {
          datas.map(data => <Card key={data.title} data={data}></Card>)
        }
      </div>
     </div>
    </div>
  );
};

export default Specialities;