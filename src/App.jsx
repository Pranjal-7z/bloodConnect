import React from 'react'
import Login from './components/Auth/Login'
import Navbar from "./components/Snipits/navbar";

import Homepage from "./components/Views/homepage"
import ScrollWrapper from './components/Snipits/ScrollWrapper';
import Footer from './components/Snipits/Footer';
import DonorDashboard from './components/Dashboard/DonorDashboard';





const App = () => {

  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <ScrollWrapper>
        <Homepage /> 
        {/* <DonorDashboard/> */}
        <Footer />
        
      </ScrollWrapper>
    </div>
  )
}

export default App