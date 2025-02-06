import React, { useState } from "react";
import Butoon from "../Snipits/Butoon";
import { Link } from "react-router-dom";

const login = ({LoginHandler}) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  function norelod(f) {
    f.preventDefault();
    LoginHandler(email,password)
    setEmail("");
    setPassword("")
    
  }
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
        
        <Butoon name="Login"/>
        
      </form>
      <div className="login-img-div">
        <img src="https://res.cloudinary.com/ddtk9h9bc/image/upload/v1737304186/d9sf6weshgod3ssb9plz.jpg" alt="" />
      </div>
      </div>
    </div>
  );
};

export default login;
