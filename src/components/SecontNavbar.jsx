import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const SecontNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // GSAP Animation for Navbar
    gsap.fromTo(".nav-link", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1 });
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F78B9D] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Mega Pet Accessories Sale</div>
        <div className="hidden md:flex space-x-8">
          <a href="#dogs" className="nav-link text-white hover:text-pink-200 transition duration-300">Dogs</a>
          <a href="#cats" className="nav-link text-white hover:text-pink-200 transition duration-300">Cats</a>
          <a href="#shop-by-breed" className="nav-link text-white hover:text-pink-200 transition duration-300">Shop By Breed</a>
          <a href="#consult-a-vet" className="nav-link text-white hover:text-pink-200 transition duration-300">Consult a Vet</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden z-10 absolute top-36 right-0 bg-[#F78B9D] w-3/4 shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#dogs" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Dogs</a>
        <a href="#cats" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Cats</a>
        <a href="#shop-by-breed" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Shop By Breed</a>
        <a href="#consult-a-vet" className="block text-white py-2 px-4 hover:bg-pink-400 transition duration-300">Consult a Vet</a>
      </div>
    </nav>
  );
};

export default SecontNavbar;
