import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Power3 } from 'gsap';
import logo from '../../../public/Assets/Images/petscity.png';  



const PageLoader = ({ setIsLoading }) => {
    const logoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: Power3.easeOut } });
        
        // Fade in the container
        tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
        
        // Scale and rotate the logo
        tl.fromTo(logoRef.current, { scale: 0, rotation: 0 }, { scale: 2, rotation: 360, duration: 2.5 });
        
        // Bounce effect on the logo
       /*  tl.to(logoRef.current, { y: -20, repeat: -1, yoyo: true, duration: 0.3 }); */
        
        // Fade out the container after 5 seconds, then hide the loader
        tl.to(containerRef.current, { opacity: 0, duration: 1, delay: 0, onComplete: () => {
            setIsLoading(false);  // Hide the loader
        }});

    }, [setIsLoading]);

    return (
        <div ref={containerRef} className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <img ref={logoRef} src={logo} alt="Pets in the City Logo" className="w-40 h-40" />
        </div>
    );
};

export default PageLoader;
