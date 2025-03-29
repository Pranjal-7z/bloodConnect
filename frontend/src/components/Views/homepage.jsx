import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css";
import Enquery from './Enquery'
import Home from './home'
import Cards from './Cards'
import Steps from './Steps'
import Footer from '../Snipits/Footer';
const Homepage = () => {


  return (
      <>
       <Home/>
       <Cards/>
       <Steps/>
       <Enquery/>
       <Footer/>
      </>
    
  )
}

export default Homepage