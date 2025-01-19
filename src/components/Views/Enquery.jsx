import React, { useState } from 'react'
import Butoon from '../Snipits/Butoon'
import "remixicon/fonts/remixicon.css";

const Enquery = () => {
    
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [num, setNum] = useState("")
const [message, setMessage] = useState("")
const norelod=(e)=>{
  e.preventDefault()
  setName("")
  setEmail("")
  setNum("")
  setMessage("")
  console.log(name, email, num, message)
}

  return (
    <div> <section id='form'>
    <div className="form-main-div">
      <div className="form-sub-div">
        <div className="form-mob-img"><img src="src\assets\Images\mobile.jpg" alt="" /></div>
        <div className="form-container-div">
          <form onSubmit={(e)=>{norelod(e)}} action="">
            <h3>Get in touch</h3>
            <h1>Reach out for assistance or inquiries</h1>
            <h4>name</h4>
            <input value={name} onChange={(f)=>{setName(f.target.value)}} className='form-text-box' type="text" placeholder='enter your name' />
            <h4>Email</h4>
            <input value={email} onChange={(f)=>{setEmail(f.target.value)}} className='form-text-box' type="email" placeholder='enter your email' />
            <h4>Phone no.</h4>
            <input value={num} onChange={(f)=>{setNum(f.target.value)}} className='form-text-box' type="number" placeholder='enter your phone no.' />
            <h4>Messege</h4>
            <textarea value={message} onChange={(f)=>{setMessage(f.target.value)}} name="messege" className="form-text-area" rows="5" cols="30" placeholder="Type your message here..."></textarea>
            <div>
              <input type="checkbox" />
              <label htmlFor="">I allow this website to store my submission so they can respond to my inquiry. *
              </label></div>
            <Butoon name="submit" />
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Enquery