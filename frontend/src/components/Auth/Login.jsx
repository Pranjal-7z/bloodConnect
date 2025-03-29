import React, { useState, useContext } from "react";
import Butoon from "../Snipits/Butoon";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import axios from 'axios'

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const userData={
      email:email,
      password:password
    }
    if (email=="pranjal@gmail.com"&&password=="pass123"){
      navigate('/admin')
    }
    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,userData)
     if (response.status==200){
      const data=response.data
      
      setUser(data.user)
      localStorage.setItem('token',data.token)
      
      navigate('/user')
    }
   
    setEmail("")
    setPassword("")

    

  };

  return (
    <div className="login-main-div">
      <div className="login-sub-div">
        <form onSubmit={handleLogin} className="login-div">
          <h1>Welcome Back</h1>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="details"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="details"
            type="password"
            placeholder="Enter your password"
          />
          <div className="loger">
            <Butoon name="Login" />
            <Link to="/Signup">
              <h4>Don't have an account?</h4>
            </Link>
          </div>
        </form>

        <div className="login-img-div">
          <img src="src/assets/Images/login.gif" alt="Login Animation" />
        </div>
      </div>
    </div>
  );
};

export default Login;
