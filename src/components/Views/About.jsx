import React from "react";


const About = () => {
  return (
    <div className="about-us-container">
      <div className="content-wrapper">
        <h1 className="title">About Blood Connect</h1>
        <p className="description">
          Saving lives, one drop at a time. Blood Connect is a platform that bridges the gap between blood donors and those in need, ensuring that help reaches on time.
        </p>
      </div>
      
      <div className="section">
        <div className="text">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            We aim to create a seamless connection between blood donors and recipients, making blood donation accessible, efficient, and life-saving for everyone.
          </p>
        </div>
        <img src="https://freepngimg.com/thumb/mission/1-2-mission-png-thumb.png" alt="Our Mission" className="image" />
      </div>
      
      <div className="section reverse">
        <img src="https://freepngimg.com/save/35986-work/930x504" alt="How It Works" className="image" />
        <div className="text">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            1. Sign up as a donor or recipient.<br />
            2. Find nearby donors with our smart location-based tracking.<br />
            3. Connect, communicate, and save lives in just a few clicks!
          </p>
        </div>
      </div>
      
      <div className="cta">
        <h2 className="cta-title">Join Us in Saving Lives</h2>
        <p className="cta-description">
          Be a hero today! Sign up, donate, and make a difference in someone's life.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default About;
