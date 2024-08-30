import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/Assets/Images/petscity.png';  
import Button from './Buttons/Button';
import SearchBar from './Buttons/SearchBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className={`fixed top-0 w-full transition-transform duration-500 ease-in-out 
                ${isSticky ? 'bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 shadow-lg z-10 p-2' 
                           : 'bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 shadow-lg z-10'}`}
    style={{ transform: isSticky ? 'translateY(0)' : 'translateY(-100%)' }}
  >
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 md:h-12 rounded-full shadow-md" />
      </div>
  
      {/* Search Bar */}
      <div className="flex items-center w-full md:w-auto mt-4 md:mt-0 md:pl-32 flex-1">
        <div className="relative w-full pb-4 ml-2 md:ml-0 md:pb-0">
          <SearchBar />
        </div>
      </div>
  
      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>
  
      {/* Full Navbar on Large Screens */}
      <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
        {/* Phone Icon */}
        <a href="tel:+1234567890" className="text-white hover:text-black hover:scale-125 transition duration-300">
          <FontAwesomeIcon icon={faPhone} className="text-2xl" />
        </a>
        
        {/* Location Icon */}
        <a href="/location" className="text-white hover:text-black hover:scale-125 transition duration-300">
          <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
        </a>
        
        {/* Shopping Cart Icon */}
        <a href="/cart" className="text-white hover:text-black hover:scale-125 transition duration-300">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
        </a>
  
        {/* User Profile Dropdown */}
        <div className="relative group">
          <button className="text-white hover:text-black hover:scale-125 transition duration-300">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </button>
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg hidden group-hover:block">
            <a href="/profile" className="block px-4 py-2 hover:bg-pink-100">Profile</a>
            <a href="/orders" className="block px-4 py-2 hover:bg-pink-100">Orders</a>
            <a href="/settings" className="block px-4 py-2 hover:bg-pink-100">Settings</a>
            <a href="/logout" className="block px-4 py-2 hover:bg-pink-100">Logout</a>
          </div>
        </div>
  
        {/* Promotions/Offers Link */}
        <Button />
      </div>
    </div>
  
    {/* Mobile Menu - Displayed when Hamburger Icon is Clicked */}
    {menuOpen && (
      <div className="md:hidden bg-pink-500 text-white p-4 space-y-4">
        <a href="tel:+1234567890" className="block hover:text-black transition duration-300">Call Us</a>
        <a href="/location" className="block hover:text-black transition duration-300">Our Location</a>
        <a href="/cart" className="block hover:text-black transition duration-300">Shopping Cart</a>
        <div className="relative">
          <button className="block w-full text-left hover:text-black transition duration-300">
            User Profile
          </button>
          <div className="mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg">
            <a href="/profile" className="block px-4 py-2 hover:bg-pink-100">Profile</a>
            <a href="/orders" className="block px-4 py-2 hover:bg-pink-100">Orders</a>
            <a href="/settings" className="block px-4 py-2 hover:bg-pink-100">Settings</a>
            <a href="/logout" className="block px-4 py-2 hover:bg-pink-100">Logout</a>
          </div>
        </div>
        <Button />
      </div>
    )}
  </header>
  );
};

export default Navbar;
