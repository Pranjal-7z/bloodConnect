import React from 'react'
import "remixicon/fonts/remixicon.css";
import Butoon from './Butoon';

const Footer = () => {
    
  return (
    <div className="footer-main-div">
    <div>
        <div className="footer">
            <div className="mainbox">
                <div className="section1 section">
                    <h1>Connect <br /> With Us</h1>
                    <p><i class="ri-mail-line"></i>  bloodbond@gmail.com</p>
                    <p><i class="ri-phone-line"></i>  7030821605</p>
                    
                    <div className="media"> 
                        <div className="social"><i class="ri-twitter-x-line"></i></div>
                        <div className="social"><i class="ri-instagram-line"></i></div>
                        <div className="social"><i class="ri-discord-fill"></i></div>
                        <div className="social"><i class="ri-linkedin-fill"></i></div>
                         <div className="social"><i class="ri-telegram-2-fill"></i></div>
                    </div>
    
                </div>
                <div className="section2 section">
                    <h5>Quick Links</h5>
                    <div className="list">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>FAQs</li>
                    </div>
    
                </div>
                <div className="section3 section">
                    <h5>Resources</h5>
                    <div className="list">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Eligibility Guide</li>
                        <li>Donation Process</li>
                        <li>Health Benifits</li>
                        <li>Emergency Number</li>
                    </div>
                </div>
                <div className="section4 section">
                    <h5>community</h5>
                    <div className="list">
                        <li>Success Stories</li>
                        <li>Campaigns</li>
                    </div>
    
                </div>
                <div className="section5 section">
                    <h5>Join Us</h5>
                    <div className="list">
                    <Butoon name="Become a donor"/>
                        <Butoon name="Find donor"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer