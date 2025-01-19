import React from "react";
import Butoon from "../Snipits/Butoon";

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
            <Butoon name="Use My Location" />
          </div>
          <div className="donor-map-div">
            <div className="donor-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889.991471742122!2d79.14158635244884!3d21.092708280439144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b8f5cd085f03%3A0xe93e897400a93aa6!2sSmt.%20Radhikatai%20Pandav%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1737298002375!5m2!1sen!2sin"
                width="400"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="donor-blood-div">
          <select name="Blood-Group" >
          <option >Select</option>
            <option >A+</option>
            <option >A-</option>
            <option >B+</option>
            <option >B-</option>
          </select>
          <Butoon name="Find"/>
        </div>
      </div>
      <div className="donor-result-div">
        <div className="result-main-div">
            <div className="donor-data-div">
                <div className="donor-data-name">Name</div>
                <div className="donor-data-number">Mobile No.</div>
                <div className="donor-data-blood">Blood Group</div>
                <div className="donor-data-contact">Contact</div>
            </div>
            <div className="donor-data-div">
                <div className="donor-data-name">Pranjal Jawalkar</div>
                <div className="donor-data-number">7030821605</div>
                <div className="donor-data-blood">B+</div>
                <div className="donor-data-contact"><Butoon name="Contact"/></div>
            </div>
            <div className="donor-data-div">
               
            </div>
            <div className="donor-data-div">
            
            </div>
            <div className="donor-data-div">
               
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
