import React from 'react';
import Butoon from '../Snipits/Butoon'
import "remixicon/fonts/remixicon.css";
import { Link } from 'react-router-dom';


const Cards = () => {
  return (
    <div>
        <section id='cards'>
          <div className='use-main-div'>
            <div className='use-sub-div'>
              <div className='cards'> <div className="card-img"><img src="https://files.oaiusercontent.com/file-E1UfNktRvgifALPcX4i1Sm?se=2025-02-18T03%3A05%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7d1b030c-5bfe-4977-b1c4-ca4f3bfd83ee.webp&sig=PvEHrHeu89EoRtEIlac%2BavY4sypAJEOh5BtCAoqITXw%3D" alt="" /></div> <div className="card-txt">India faces a blood shortage due to high demand, low donor turnout, and logistical challenges in medical emergencies.</div><Link to='https://www.livemint.com/news/india/india-requires-14-6-million-blood-units-every-year-health-ministry-11686739891661.html'><Butoon name="Learn more" /></Link></div>
              <div className='cards'> <div className="card-img"> <img src="https://cdn.prod.website-files.com/65f42c2793a888fb9f626810/65f454a0fcfa3b80fe4efd27_Asset%2013Graphic%20.svg" alt="" /></div> <div className="card-txt"> Knowing blood group compatibility helps ensure safe transfusions and supports timely donations for those in need.</div><Link to='https://www.tuasaude.com/en/blood-types/'><Butoon name="Learn More" /></Link></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\card3.png" alt="" /></div> <div className="card-txt">Donating blood saves lives, supports surgeries, treats chronic conditions, and ensures a steady supply for emergencies.</div><Link to='https://www.redcrossblood.org/local-homepage/news/article/blood-donation-importance.html'><Butoon name="Learn More" /></Link></div>
              <div className='cards'> <div className="card-img"><img src="https://static.vecteezy.com/system/resources/previews/007/813/465/non_2x/medical-blood-test-flat-concept-chemical-laboratory-analysis-medical-office-or-laboratory-vector.jpg" alt="" /></div> <div className="card-txt">Blood donations are used in surgeries, cancer treatment, childbirth complications, and managing blood disorders. </div><Link to='http://www.blooddonors.gov.in/bimport.php'><Butoon name="Learn More" /></Link></div>
              <div className='cards'> <div className="card-img"><img src="src\assets\Images\Handshake_red.jpg" alt="" /></div> <div className="card-txt">Blood bonds create a deep connection between donors and recipients, symbolizing life-saving support and selflessness.</div><Link to='/about'><Butoon name="Learn More" /></Link></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Cards