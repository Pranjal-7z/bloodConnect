import React, { useRef } from 'react';
import bgVideo from '../../assets/Images/abc.mp4'; 

const About = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); 
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div className="about-container">
     
      <div className="ab-home">
        <div className="ab-home-heading">
          <h1>What Is Blood Bond ?</h1>
          <h3>
            <i className="ri-corner-down-right-line"></i> Blood Bond is a 
            bridge that connects donors with recipients.
          </h3>
        </div>
      </div>

      
      <div className="ab-home-content">
        <div className="ab-content-video">
          <video
            ref={videoRef}
            src={bgVideo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
