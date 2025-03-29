import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Snipits/Butoon"; 

const DonorDashboard = () => {
  const [donors, setDonors] = useState([]); 
  const [filteredDonors, setFilteredDonors] = useState([]); 
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const [showResults, setShowResults] = useState(false); 


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/donor`)
      .then((response) => {
        setDonors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching donors:", error);
        setLoading(false);
      });
  }, []);
  

  const findDonor = () => {
    if (!donors.length) {
      console.warn("No donors available yet!");
      return;
    }

    const filtered = donors.filter(
      (donor) => donor.bloodGroup.trim().toUpperCase() === selectedBloodGroup.trim().toUpperCase()
    );

    setFilteredDonors(filtered);
    setShowResults(true); 
  };


  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  function getLocation() {
    setTimeout(() => {
      setCountry("India");
      setState("Maharashtra");
      setCity("Nagpur");
      setArea("Umred Road");
    }, 2000); 
  }

  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      <div className="donor-main-div">
        <div className="donor-input-div">
          <div className="donor-add-div">
            <h1>Enter Your Address</h1>
            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Enter your country" />
            <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="Enter your State" />
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter your City" />
            <input value={area} onChange={(e) => setArea(e.target.value)} type="text" placeholder="Enter your Area" />
            <button onClick={getLocation} className="hiii">USE MY LOCATION</button>
          </div>
          <div className="donor-map-div">
            <div className="donor-map">
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.860698249121!2d79.14950427525851!3d21.09728828056927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8f5cd085f03%3A0xe93e897400a93aa6!2sSmt.%20Radhikatai%20Pandav%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1739760703295!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <p>Loading map...</p>
              )}
            </div>
          </div>
        </div>

       
        <div className="donor-blood-div">
          <select 
            name="Blood-Group" 
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="Bombay Blood Group">Bombay Blood Group</option>
          </select>
          
          <button onClick={findDonor} className="hiii">FIND</button>
        </div>
      </div>


      <div className="donor-result-div">
        <div className="result-main-div">
          <div className="donor-data-div header">
            <div className="donor-data-name">Name</div>
            <div className="donor-data-number">Mobile No.</div>
            <div className="donor-data-blood">Blood Group</div>
            <div className="donor-data-contact">Contact</div>
          </div>

    
          {showResults ? (
            filteredDonors.length > 0 ? (
              filteredDonors.map((donor, index) => (
                <div key={index} className="donor-data-div">
                  <div className="donor-data-name">{donor.fullname.firstname} {donor.fullname.lastname}</div>
                  <div className="donor-data-number">{donor.mobileNo}</div>
                  <div className="donor-data-blood">{donor.bloodGroup}</div>
                  <div className="donor-data-contact">
                    <Button name="Contact" />
                  </div>
                </div>
              ))
            ) : (
              <p>No donors found for selected blood group.</p>
            )
          ) : null} 
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
