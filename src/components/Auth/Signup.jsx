import React, { useState } from 'react';
import Butoon from '../Snipits/Butoon';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    gender: '',
    address: '',
    mobileNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    
    <div className="signup-page">
      <div className='signup-main-div'>
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <div className='hello'>
        <div className="form-group">
          
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input 
            type="text" 
            name="middleName" 
            value={formData.middleName} 
            onChange={handleChange} 
          />
        </div>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input 
            type="text" 
            name="mobileNo" 
            value={formData.mobileNo} 
            onChange={handleChange} 
            pattern="^[0-9]{10}$" 
            maxLength="10" 
            placeholder="Enter 10-digit mobile number"
            required 
          />
        </div>
        <div className='hello'>
        <div className="form-group">
          <label>Gender</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required 
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Blood Group</label>
          <select 
            name="blood Group" 
            value={formData.blood} 
            onChange={handleChange} 
            required 
          >
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
          <label>Address</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
       
        <div className="loger">
        <Butoon name="Register"/>

       <Link to="/Login"> <h4>already have account</h4></Link>
        </div>
      </form>
      </div>
      <div className="signup-img-div"><img src="src\assets\Images\signup.gif" alt="" /></div>
    </div>

  );
};

export default Signup;
