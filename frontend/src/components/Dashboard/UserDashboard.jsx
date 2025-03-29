import { Circle } from 'rc-progress'
import { useEffect, useState, useContext, useRef } from 'react';
import React from 'react'
import Button from '../Snipits/Butoon'
import Footer from '../Snipits/Footer'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios"

const UserDashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [announcements, setAnnouncements] = useState([]);
  const campaignRef = useRef(null);
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); 
  
        if (!token) {
          console.error("No token found");
          return;
        }
  
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        setUser(response.data); 
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  


  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/announcements`);
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const scrollRight = () => {
    if (campaignRef.current) {
      campaignRef.current.scrollLeft += 300; // Adjust scroll amount
    }
  };

  // Scroll Left
  const scrollLeft = () => {
    if (campaignRef.current) {
      campaignRef.current.scrollLeft -= 300; // Adjust scroll amount
    }
  };
  
  return (
    <div>
      <div className="db-main-div">
        <div className="db-sub-div">
          <div className="db-profile-info">
            <div className="profile-photo-div">
              <div className="profile-img-div"></div>
              <div className="profile-name-div"><h3>{user.fullname?.firstname} {user.fullname?.lastname}</h3> <p>{user.profession}</p></div>
            </div>
            <div className="profile-detail-div">
              <div className="detail-main-div">
                <h4>Phone</h4>
                <div className="detail-info-div"> <h5><i class="ri-phone-line"></i>  {user.mobileNo}</h5></div>
              </div>
              <div className="detail-main-div">
                <h4>Email</h4>
                <div className="detail-info-div">  <h5><i class="ri-mail-line"></i>  {user.email}</h5></div>
              </div>
              <div className="detail-main-div">
                <h4>Blood Group</h4>
                <div className="detail-info-div">  <h5><i class="ri-drop-line"></i>  {user.bloodGroup}</h5></div>
              </div>
            </div>
          </div>
          <div className="db-chart-info">
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Donated This Year</h3></div>
              <div className="chart-progress-div"><Circle className='circle1' percent={(user.totalDonation/(user.gender=="Male" ?4:3))*100} strokeWidth={8} trailWidth={8} strokeColor="#003290" /></div>
              <div className="chart-num-div">
                <div className="total-num-div"><h4>total: {(user.gender=="Male" ?4:3)}</h4></div>
                <div className="outoff-num-div"><h4>Donated: {user.totalDonation}</h4></div>
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Next Donation</h3></div>
              <div className="chart-progress-div"><Circle className='circle1' percent={((user.lastDonation)/(user.gender=="Male" ?90:120))*100} strokeWidth={8} trailWidth={8} strokeColor="#FF7700" /></div>
              <div className="chart-num-div">
                <div className="total-num-div"><h4>total: <br />{(user.gender=="Male" ?90:120)} days</h4></div>
                <div className="outoff-num-div"><h4>remaining : <br /> {(user.gender=="Male" ?90:120)-user.lastDonation} days</h4></div>
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Your Status</h3></div>
              <div className="chart-status-div" ><h1>{((user.gender=="Male" ?90:120)-user.lastDonation)<=0?"Available" :"Not Available"}</h1></div>
              <div className="chart-num-div">
                <Button name="refresh" />
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Save lives</h3></div>

              <div className="chart-map-div">
                <img src="src\assets\Images\blood-letting-blood-donation.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="db-campaign-info">
            <div className="campaign-sub-div">
              <div className="campaign-slide-div">
                <div className="campaign-ann-container">
                 
                {announcements.length > 0 ? (
                    announcements.map((announcement, index) => (
                      <div key={index} className="announcement-card">
                        <div className="ann-title"><h3>{announcement.title}</h3></div>
                        <div className="ann-desc"> <p>{announcement.description}</p></div>
                       
                        
                      </div>
                    ))
                  ) : (
                    <p>No announcements available.</p>
                  )}

                </div>
          </div>
          <div className="campaign-message-div">
            <div><h1>Blood Banks</h1></div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://justdoctors.in/logo/H2129-Logo.png" alt="" /></div>
              <div className="contact-name-div"><Link to='https://www.hedgewarbloodbanknagpur.org/index.php'><h3>Hedgewar B.B.</h3></Link></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77sUuZrg6WAf5H3MotR3AzagXMyNkTpeWYg&s" alt="" /></div>
              <div className="contact-name-div"><Link to='https://justdoctors.in/hospital/Jeevan-Jyoti-Blood-Bank/H2131'><h3>Jeevan Jyoti B.B.</h3></Link></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://content.jdmagicbox.com/comp/agra/q2/0562px562.x562.240219011109.h2q2/catalogue/aastha-charitable-blood-center-blood-bank-agra-blood-banks-112f06mhcr.jpg" alt="" /></div>
              <div className="contact-name-div"><Link to='https://www.medindia.net/submission/directory/contactdetails.asp?dirid=10&id=54735'><h3>Daga Hospital</h3></Link></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwft0jHfw9Viib8hGxAKUN2FzwnD6A9smeGw&s" alt="" /></div>
              <div className="contact-name-div"><Link to='https://lifebloodcouncil.org/product/lifeline-blood-bank-components-apherisis-centre-blood-bank/'><h3>Lifeline Blood Bank</h3></Link></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://justdoctors.in/logo/H2132_logo.jpg" alt="" /></div>
              <div className="contact-name-div"><Link to="https://lifebloodcouncil.org/product/ayush-blood-bank/"><h3>Ayush Blood Bank </h3></Link></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      </div >
      <Footer />
    </div >
  )
}

export default UserDashboard