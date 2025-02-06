import React from 'react';
import Butoon from '../Snipits/Butoon'
import "remixicon/fonts/remixicon.css";


const Cards = () => {
  return (
    <div>
        <section id='cards'>
          <div className='use-main-div'>
            <div className='use-sub-div'>
              <div className='cards'> <div className="card-img"><img src="https://cdn.openart.ai/uploads/image_s_PuE39B_1736742928102_raw.jpg" alt="" /></div> <div className="card-txt">Compassion drives humanity to extend hope and kindness, fostering unity and empowering generosity.</div><Butoon name="Save Lifes" /></div>
              <div className='cards'> <div className="card-img"> <img src="src\assets\Images\download.png" alt="" /></div> <div className="card-txt">Locate nearby hospitals with ease using search and direction tools. Whether it's an emergency finding the closest care facilty. </div><Butoon name="Locate" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\hospital.png" alt="" /></div> <div className="card-txt">Find nearby hospitals for checkups. Access trusted medical facilities, ensuring timely care and routine health assessments.</div><Butoon name="Locate" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\apointment.png" alt="" /></div> <div className="card-txt">Book an appointment online from the comfort of your home.  schedule consultations manage your healthcare effortlessly. </div><Butoon name="Book Appointment" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\donate.png" alt="" /></div> <div className="card-txt">Support our mission to save lives—donate to us and help provide care,  Your generosity makes a difference!</div><Butoon name="Donate us" /></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Cards