import React from 'react'
import Butoon from './Butoon'
import login from '../Auth/Login'
import { Link } from 'react-router-dom'
const navbar = () => {
  
 
  return (
    <div className='nav-div'>
        <div className='logo'><Link to='/'><img src="src\assets\Images\logo.png" alt="" /></Link></div>
        <div className="category">
           
            <Link to="/" className='link-nav'> <h4>Home</h4></Link> 
            <Link to="/about" ><h4>About</h4></Link>
            <Link to="/articles" className='link-nav' ><h4>Article</h4></Link>
           <Link to="/login" className='link-nav' ><h4>Log in</h4></Link> 
            
            <Link to="/donor"><Butoon   name='find donor'/></Link> 
            
        </div>
    </div>
  )
}

export default navbar