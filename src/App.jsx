import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Navbar from "./components/Snipits/navbar";

import Homepage from "./components/Views/homepage"
import ScrollWrapper from './components/Snipits/ScrollWrapper';
import Footer from './components/Snipits/Footer';
import DonorDashboard from './components/Dashboard/DonorDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import { getLocolStorage, setLocolStorage } from './Utils/LocalStorage';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Slidebar from './components/Snipits/Sidebar'

const App = () => {
  // useEffect(() => {
  //   setLocolStorage()
  //   getLocolStorage()

  // },)
  const [user, setUser] = useState("")
  const LoginHandler = (email, password) => {
    if (email == "p@G.c" && password == "123") {
      setUser("person")
      console.log("user logedin")
    }
    else {
      alert("invalid credential")
      setUser("noperson")
    }
  }

  const Loguser = () => {
    console.log("hello")
  }

  return (
    <div>
      
      <Navbar/>
      {/* <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login />}/>
       
        <Route path='/User' element={<UserDashboard/>}/>
        <Route path='/donor' element={<DonorDashboard />}/>
     </Routes>
    */}
    <Slidebar/>
    <AdminDashboard/>
      
      {/* {user=="page" ? <Login LoginHandler={LoginHandler} /> : ""}

      {user == "person" ? <div> <Navbar /><ScrollWrapper>  <UserDashboard /><Footer /></ScrollWrapper> </div> : ""}
      {user == "noperson" ? <div> <Navbar /><ScrollWrapper> <Homepage /><Footer /></ScrollWrapper> </div> : ""} */}
      {/* <Login/>  */}
      {/* <Navbar /> */}
      {/* <ScrollWrapper>  */}
      {/* <Homepage />  */}
      {/* <DonorDashboard/> */}
      {/* <Footer />  */}
      {/* {/* <UserDashboard/> */}
      {/* </ScrollWrapper> */}
    </div>
  )
}

export default App