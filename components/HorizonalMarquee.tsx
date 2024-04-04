// components/HorizonalMarquee.tsx

import React from 'react';

const HorizontalMarquee: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee text-2xl font-semibold mt-10 tracking-widest drop-shadow-lg">
        WELCOME TO CRYPTO 2.0 <span className='text-[#F2C572]'>|</span> CRYPTO FOR THE USERS.</div>
    </div>
  ); 
};

export default HorizontalMarquee;
