import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BuyPetFoodButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animation for hover effect
    const tl = gsap.timeline({ paused: true });

    tl.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: '#FBBF24', // Amber color
      duration: 0.3,
      ease: 'power3.out',
    });

    // Hover events
    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const button = buttonRef.current;
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg 
      transform transition-transform duration-300  "
    >
      Buy Pet Food
    </button>
  );
};

export default BuyPetFoodButton;
