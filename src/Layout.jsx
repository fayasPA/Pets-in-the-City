import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/Loaders/PageLoader';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true); // Initial loader state
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Track navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar visibility based on scroll position
      if (window.scrollY > 20) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-col'>
      {isLoading ? (
        <PageLoader setIsLoading={setIsLoading} />
      ) : (
        <>
          <div className='relative'>
            <div
              className={`transition-opacity duration-500 ${isNavbarVisible ? 'opacity-100 sticky top-0 z-10' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            >
              <Navbar />
            </div>
            <div>
              <Outlet />
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
