import React, { useState } from "react";
import Butoon from "../Snipits/Butoon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const login = ({LoginHandler}) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [logedUserData, setlogedUserData] = useState(null)
  const Authdata= useContext(AuthContext)
   



  function norelod(f) {
    f.preventDefault();
    setEmail("");
    setPassword("")
    if (Authdata&&Authdata.users.find((e)=>e.email==email&&e.password==password)) {
      const user=Authdata.users.find((e)=>e.email==email&&e.password==password)
      if (user){
        setlogedUserData(user)
        
      }
      localStorage.setItem("logeduser", JSON.stringify(user));
      navigate("/user", { state: user });  

    } 
    else if(Authdata&&Authdata.admin.find((e)=>e.email==email&&e.password==password)){
      navigate("/admin")
    }
    else {
      alert("Invalid Credentials");
    }
    
  }


  
  const navigate = useNavigate();
  

  return (
    <div className="login-main-div">
      <div className="login-sub-div">
      <form
        onSubmit={(f) => {
          norelod(f);
        }}
        className="login-div"
      >
        <h1>Welcome Back</h1>
        <input
        required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="details"
          type="email"
          placeholder=" &#xF256; enter your email"
        />
        <input
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
          className="details"
          type="password"
          placeholder="&#xEED0; enter your password"
        />
        <div className="loger">
        <Butoon name="Login"/>

       <Link to="/Signup"> <h4>don't have account</h4></Link>
        </div>
      </form>
     
      <div className="login-img-div">
       <img src="src\assets\Images\login.gif" alt="" />
      </div>
      </div>
    </div>
    
  );
};

export default login;
