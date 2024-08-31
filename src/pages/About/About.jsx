import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.3 }
    );
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4 about-section">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At PetShop, our mission is to provide high-quality pet products that keep your furry friends happy and healthy. We believe in offering a wide range of products that cater to every pet's needs, from nutritious food to fun toys and stylish accessories.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg">
              Founded in 2020, PetShop started as a small family-owned business with a passion for animals. Over the years, we've grown into a trusted name in the pet industry, known for our exceptional customer service and dedication to pet wellness.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>High-quality products from trusted brands</li>
            <li>Competitive prices and regular promotions</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer service and support</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <img src="./Assets/Images/abt.jpeg" alt="Pet Shop" className="mx-auto rounded-lg shadow-md object-cover w-full h-96"  />
        </div>
      </div>
    </div>
  );
};

export default About;
