import React from 'react'
import Butoon from './Butoon'
const navbar = () => {
  return (
    <div className='nav-div'>
        <div className='logo'><img src="src\assets\Images\logo.png" alt="" /></div>
        <div className="category">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Article</h4>
            <h4>Register</h4>
            <Butoon name='find donor'/>
        </div>
    </div>
  )
}

export default navbar