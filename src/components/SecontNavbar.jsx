import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const SecontNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Enhanced GSAP Animation for Navbar links
    gsap.fromTo(".nav-link", 
      { opacity: 0, y: -20, scale: 0.8, rotation: -10 }, 
      { opacity: 1, y: 0, scale: 1, rotation: 0, stagger: 0.2, duration: 1, ease: "bounce.out" }
    );
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 border-t border-zinc-900 py-4 shadow-md ">
      <div className="container md:mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl font-bold font-lora pl-2 md:pl-0">Mega Pet Accessories Sale</div>
        <div className="hidden md:flex space-x-8">
          <a href="#dogs" className="opacity-0 nav-link font-lora text-white hover:text-black  transition duration-300">Dogs</a>
          <a href="#cats" className="opacity-0 nav-link font-lora text-white hover:text-black  transition duration-300">Cats</a>
          <a href="#shop-by-breed" className="opacity-0 nav-link font-lora text-white hover:text-black  transition duration-300">Shop By Breed</a>
          <a href="#consult-a-vet" className="opacity-0 nav-link font-lora text-white hover:text-black  transition duration-300">Consult a Vet</a>
        </div>
        <div className="md:hidden flex items-center pr-4 md:pr-0">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden z-10 absolute top-44 right-0 bg-[#F78B9D] w-3/4 shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#dogs" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Dogs</a>
        <a href="#cats" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Cats</a>
        <a href="#shop-by-breed" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Shop By Breed</a>
        <a href="#consult-a-vet" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Consult a Vet</a>
      </div>
    </nav>
  );
};

export default SecontNavbar;
