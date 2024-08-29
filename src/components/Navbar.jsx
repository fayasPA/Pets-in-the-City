import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/Assets/Images/petsinthecity.png';  

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-4 md:pl-32">
          <div className="relative w-full">
            <input
              type="text"
              className="md:w-[80%] w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 
                         shadow-lg focus:shadow-md transition-shadow duration-300"
              placeholder="Search..."
            />
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500">
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
          </a>
          <a href="/location" className="text-gray-600 hover:text-blue-500">
            <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
