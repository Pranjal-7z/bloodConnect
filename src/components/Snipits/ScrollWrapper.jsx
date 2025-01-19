// src/components/ScrollWrapper.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);  // Create a reference for the scroll container

  useEffect(() => {
    // Initialize Locomotive Scroll with the container element
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,  // Target the scroll container
      smooth: true,           // Enable smooth scrolling
    });

    // Cleanup Locomotive Scroll on unmount
    return () => {
      scroll.destroy();
    };
  }, []);  // Only run once when the component mounts

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}  {/* Wrap and render any children inside this container */}
    </div>
  );
};

export default ScrollWrapper;
