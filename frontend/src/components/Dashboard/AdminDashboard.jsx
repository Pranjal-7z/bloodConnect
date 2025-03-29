import React from "react";
import Sidebar from "../Snipits/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-main-div" >
      
      <Sidebar />
      <Outlet />
      
    </div>
  );
};

export default AdminDashboard;
