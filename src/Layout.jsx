import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/Loaders/PageLoader';
import SecontNavbar from './components/SecontNavbar';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true); // Set to true to show loader initially

  useEffect(() => {
    // Simulate a loading process, e.g., fetching data, and set isLoading to false after a delay
    // For now, this will be handled by the PageLoader component itself via the animation timeline.
  }, []);

  return (
    <div className='flex flex-col'>
      {isLoading ? (
        <PageLoader setIsLoading={setIsLoading} /> // Pass setIsLoading directly to PageLoader
      ) : (
        <>
        <div className='overflow-hidden'>
          <Navbar />
          <SecontNavbar />
        </div>
          <div>
            <Outlet />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
