import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.footer-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.3 }
    );
  }, []);

  return (
    <footer className="bg-pink-500 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 footer-section">
        <div>
          <h2 className="text-xl font-bold mb-4">About PetShop</h2>
          <p className="text-sm">
            PetShop is your go-to store for all your pet needs. From premium pet food to stylish accessories, we have everything to keep your pet happy and healthy. Visit us today!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Consult a Vet</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">123 Pet Street, PetCity, PC 45678</p>
          <p className="text-sm mb-2">Email: info@petshop.com</p>
          <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 PetShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
