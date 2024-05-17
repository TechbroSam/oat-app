// components/HorizonalMarquee.tsx

import React from 'react';

const HorizontalMarquee: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-[70%]">
      <div className="inline-block animate-marquee text-xs sm:text-sm md:text-lg lg:text-2xl font-semibold mt-5 md:mt-10 tracking-widest drop-shadow-lg px-20">
        WELCOME TO CRYPTO 2.0 <span className='text-[#F2C572]'>|</span> CRYPTO FOR THE USERS.</div>
    </div>
  ); 
};

export default HorizontalMarquee;
