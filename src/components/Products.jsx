import React from 'react';
import Button2 from './Buttons/Button2';
import BuyPetFoodButton from './BuyPetFoodButton';

const Products = () => {
  return (
    <>
    {/* first */}
    <div className='flex flex-col md:flex-row justify-between items-center w-full h-[80vh] p-4 md:p-8 bg-white'>
      <div className='w-full md:w-[50%] flex flex-col justify-center items-start text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-3xl md:text-5xl font-semibold font-lora leading-tight'>
          Premium <span className='text-amber-600'>Pet Food</span> Manufacturer
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta possimus minus rerum! Alias illum ut distinctio.
        </p>
        <div className='mt-6 mx-auto'>
          <Button2 />
        </div>
      </div>
      <div className='w-full md:w-[50%] flex justify-center md:justify-end'>
        <img src="/Assets/Images/petfood11.png" alt="Pet Food" className='w-[80%] md:w-[90%] object-cover rounded-full '/>
      </div>
    </div>
    {/* Dog */}
    <div className='my-20 md:my-0 flex flex-col md:flex-row justify-between gap-5 items-center w-full h-[80vh] p-4 md:p-8 bg-white'>
    <div className="w-full md:w-[50%] flex justify-center md:justify-end">
        <video
          src="/Assets/Images/ddawg.mp4"
          autoPlay
          muted
          loop
          className="w-[80%] md:w-[90%] object-cover rounded-full"
        />
      </div>
      <div className='w-full md:w-[50%] flex flex-col justify-center items-start text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-3xl md:text-5xl font-semibold font-lora leading-tight'>
          Premium <span className='text-amber-600'>Dog Food</span> Provider
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta possimus minus rerum! Alias illum ut distinctio.
        </p>
        <div className='mt-6 mx-auto'>
          <Button2 />
        </div>
      </div>

    </div>
    {/* cat */}
    <div className='my-20 md:my-0 flex flex-col md:flex-row justify-between gap-5 items-center w-full h-[80vh] p-4 md:p-8 bg-white'>

      <div className='w-full md:w-[50%] flex flex-col justify-center items-start text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-3xl md:text-5xl font-semibold font-lora leading-tight'>
          Premium <span className='text-amber-600'>Cat Food</span> Provider
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta possimus minus rerum! Alias illum ut distinctio.
        </p>
        <div className='mt-6 mx-auto'>
          <Button2 />
        </div>
      </div>
      
      <div className="w-full md:w-[50%] flex justify-center md:justify-end">
        <video
          src="/Assets/Images/catt.mp4"
          autoPlay
          muted
          loop
          className="w-[80%] md:w-[90%] object-cover rounded-full"
        />
      </div>
    </div>
    </>
  );
}

export default Products;
