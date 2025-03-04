import React, { useEffect, useState } from "react";
import Homepage from "./components/Views/homepage";
import Navbar from "./components/Snipits/navbar";
import Footer from "./components/Snipits/Footer";
import Login from "./components/Auth/Login";
import DonorDashboard from "./components/Dashboard/DonorDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import ScrollWrapper from "./components/Snipits/ScrollWrapper";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Dashboard/Register";
import DonorList from "./components/Dashboard/DonorList";
import Dashboard from "./components/Views/Dashboard";
import DeleteDonor from "./components/Dashboard/DeleteDonor"
import Announcement from "./components/Dashboard/Announcement"
import AboutUs from "./components/Views/About";
import Signup from "./components/Auth/Signup";
import { setLocolStorage } from "./Utils/LocalStorage";

const App = () => {
  
  
  useEffect(() => {
  setLocolStorage()
  
  }, )
  

  
  return (
    <>
      <Navbar />
      <ScrollWrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/donor" element={<DonorDashboard />} />
          

         
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="add" element={<Register />} /> 
            <Route path="list" element={<DonorList />} />
            <Route path="delete" element={<DeleteDonor />} /> 
            <Route path="announcement" element={<Announcement />} /> 
          </Route>
        </Routes>
        
      </ScrollWrapper>
      
    </>
  );
};

export default App;
