import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Bannerimage from '../../../public/Assets/Images/dogcat.jpeg'; // Ensure this path is correct

const Home = () => {
  useEffect(() => {
    // GSAP Animation for text
    gsap.fromTo(
      ".animated-text",
      { opacity: 0, scale: 0.5, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className='w-full h-screen relative'>
      <img 
        src={Bannerimage} 
        alt="Banner" 
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center p-4'>
        <h1 className='animated-text text-white text-3xl md:text-5xl font-bold font-lora text-center text-shadow'>
          Welcome to Pets in the City
        </h1>
      </div>
    </div>
  );
}

export default Home;
