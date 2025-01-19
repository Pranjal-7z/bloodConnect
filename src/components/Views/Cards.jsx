import React from 'react';
import Butoon from '../Snipits/Butoon'
import "remixicon/fonts/remixicon.css";


const Cards = () => {
  return (
    <div>
        <section id='cards'>
          <div className='use-main-div'>
            <div className='use-sub-div'>
              <div className='cards'> <div className="card-img"><img src="https://cdn.openart.ai/uploads/image_s_PuE39B_1736742928102_raw.jpg" alt="" /></div> <div className="card-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error dicta unde, nesciunt dolore tempore.</div><Butoon name="register" /></div>
              <div className='cards'> <div className="card-img"> <img src="src\assets\Images\download.png" alt="" /></div> <div className="card-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error dicta unde, nesciunt dolore tempore.</div><Butoon name="register" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\hospital.png" alt="" /></div> <div className="card-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error dicta unde, nesciunt dolore tempore.</div><Butoon name="register" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\apointment.png" alt="" /></div> <div className="card-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error dicta unde, nesciunt dolore tempore.</div><Butoon name="register" /></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\donate.png" alt="" /></div> <div className="card-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error dicta unde, nesciunt dolore tempore.</div><Butoon name="register" /></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Cards