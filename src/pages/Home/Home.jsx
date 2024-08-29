import React from 'react';
import Bannerimage from '../../../public/Assets/Images/dogcat.jpeg'; // Ensure this path is correct

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <img 
        src={Bannerimage} 
        alt="Banner" 
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center p-4'>
        <h1 className='text-white text-3xl md:text-5xl font-bold font-lora text-center text-shadow '>
          Welcome to Pets in the city
        </h1>
      </div>
    </div>
  );
}

export default Home;
