
import Butoon from '../Snipits/Butoon';
import React, { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../Context/AuthProvider"; 


const Register = () => {
  const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate(); 
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
    
      dob: '',
      gender: '',
      address: '',
      mobileNo: '',
      password: '',
      email: '',
      bloodGroup: '',
      lastDonation: '',
      totalDonation: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const newUser = {
          fullname: {
            firstname: formData.firstName,
            lastname: formData.lastName,
          },
          password: formData.password,
          email: formData.email,
          mobileNo: formData.mobileNo,
          gender: formData.gender,
          bloodGroup: formData.bloodGroup,
          lastDonation: formData.lastDonation,
          totalDonation: formData.totalDonation,
        };
  
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/signup`, newUser);
  
        if (response.status === 201) {
          setUser(response.data.user); 
         alert("donor added successfully") 
        }
      } catch (error) {
        console.error("Signup failed:", error);
      }
    };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="register-form">
          <h1>Register</h1>
          <div className='hello'>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="hello">
            <div className="form-group">
              <label>Days since donation</label>
              <input type="number" name="lastDonation" value={formData.lastDonation} onChange={handleChange} required />
            </div>
            <div className="form-data">
              <label>Blood Donated this year</label>
              <select name="totalDonation" value={formData.totalDonation} onChange={handleChange} required>
                <option value="">Select number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} pattern="^[0-9]{10}$" maxLength="10" required />
          </div>
          <div className='hello'>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Blood Group</label>
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                <option value="">Select Blood Group</option>
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
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
         <Butoon name="add"/>
        </form>
    </div>
  );
};

export default Register;
