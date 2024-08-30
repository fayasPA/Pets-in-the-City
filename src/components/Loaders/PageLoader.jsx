import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faFish, faBone, faPaw } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { FaPaw } from "react-icons/fa";

const PageLoader = ({ setIsLoading }) => {
    const containerRef = useRef(null);
    const iconRefs = useRef([]);
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initially scatter icons
        iconRefs.current.forEach((ref, index) => {
            const angle = Math.random() * 360;
            const distance = Math.random() * 400 + 100;
            const x = distance * Math.cos(angle);
            const y = distance * Math.sin(angle);
            tl.fromTo(ref, { x: 0, y: 0 }, { x, y, opacity: 1, duration: 2, delay: index * 0.02 }, 0);
        });

        // Converge icons around the logo and scale up the logo with a glowing effect
        tl.to(iconRefs.current, {
            x: 0, y: 0, scale: 1.2, opacity: 0.6, duration: 2, stagger: 0.02,
        }, "-=1.5");

        tl.fromTo(logoRef.current, { scale: 0 }, { scale: 3.3, duration: 2 }, "-=2");

        // Fade out the loader
        tl.to(containerRef.current, { opacity: 0, duration: 1, delay: 0, onComplete: () => {
            setIsLoading(false);
        }});
    }, [setIsLoading]);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 flex items-center justify-center 
            bg-gradient-to-r from-[#F089B4] via-pink-400 to-[#C7357C] z-50"
        >
            {Array.from({ length: 100 }).map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={[faDog, faCat, faFish, faBone, faPaw][index % 5]}
                    ref={el => iconRefs.current[index] = el}
                    className="text-3xl absolute"
                    style={{ opacity: 0 }}
                />
            ))}
            <div ref={logoRef} className="text-8xl text-black relative pb-2">
            <FaPaw  />
            </div>
        </div>
    );
};

export default PageLoader;
