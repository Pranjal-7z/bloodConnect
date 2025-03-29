import React from "react";
import Button from "../Snipits/Butoon"; 

const donors = [
  { name: "Pranjal Jawalkar", phone: "7030821605", bloodGroup: "B+" },
  { name: "John Doe", phone: "9876543210", bloodGroup: "O+" },
  { name: "Jane Smith", phone: "9234567890", bloodGroup: "A-" },
];

const DonorDashboard = () => {
  return (
    <div>
      <div className="donor-main-div">
        <div className="donor-input-div">
          <div className="donor-add-div">
            <h1>Enter Your Address</h1>
            <input type="text" placeholder="Enter your country" />
            <input type="text" placeholder="Enter your State" />
            <input type="text" placeholder="Enter your District" />
            <input type="text" placeholder="Enter your City" />
            <Button name="Use My Location" />
          </div>
          <div className="donor-map-div">
            <div className="donor-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.860698249121!2d79.14950427525851!3d21.09728828056927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8f5cd085f03%3A0xe93e897400a93aa6!2sSmt.%20Radhikatai%20Pandav%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1739760703295!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="donor-blood-div">
          <select name="Blood-Group">
            <option>Select</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>Bombay Blood Group</option>
          </select>
          <Button name="Find" />
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
          {donors.map((donor, index) => (
            <div className="donor-data-div" key={index}>
              <div className="donor-data-name">{donor.name}</div>
              <div className="donor-data-number">{donor.phone}</div>
              <div className="donor-data-blood">{donor.bloodGroup}</div>
              <div className="donor-data-contact">
                <Button name="Contact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;

