import React from 'react';
import Card from './Card/Card';

const Specialities = () => {
  const datas = [
    {
      title:"Self-Esteem",
      text:"Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
    {
      title:"Relationships",
      text:"Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
    {
      title:"Burnout",
      text:"Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image:"/booyphoto.webp",
      alt:"standing boy picture"
    },
  ]
  return (
    <div className='py-[10vh] md:py-[28vh] px-4.5'>
      <h1 className='text-primary font-semibold text-center text-[28px] md:text-[3.5vw] mb-[50px] mx-[15px] '>My Specialities</h1>
     <div className='flex justify-center'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
          datas.map(data => <Card key={data.title} data={data}></Card>)
        }
      </div>
     </div>
    </div>
  );
};

export default Specialities;