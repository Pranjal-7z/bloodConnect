import { Circle } from 'rc-progress'
import React from 'react'
import Button from '../Snipits/Butoon'


const UserDashboard = () => {
  return (
    <div>
      <div className="db-main-div">
        <div className="db-sub-div">
          <div className="db-profile-info">
            <div className="profile-photo-div">
              <div className="profile-img-div"></div>
              <div className="profile-name-div"><h3>Pranjal Jawalkar</h3> <p>student</p></div>
            </div>
            <div className="profile-detail-div">
              <div className="detail-main-div">
                <h4>Phone</h4>
                <div className="detail-info-div"> <h5><i class="ri-phone-line"></i>  7030821605</h5></div>
              </div>
              <div className="detail-main-div">
                <h4>Email</h4>
                <div className="detail-info-div">  <h5><i class="ri-mail-line"></i>  Pranjal@gmail.com</h5></div>
              </div>
              <div className="detail-main-div">
                <h4>Blood Group</h4>
                <div className="detail-info-div">  <h5><i class="ri-drop-line"></i>  B+</h5></div>
              </div>
            </div>
          </div>
          <div className="db-chart-info">
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Donated This Year</h3></div>
              <div className="chart-progress-div"><Circle className='circle1' percent={25} strokeWidth={8} trailWidth={8} strokeColor="#003290" /></div>
              <div className="chart-num-div">
                <div className="total-num-div"><h4>total:4</h4></div>
                <div className="outoff-num-div"><h4>Donated: 1</h4></div>
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Next Donation</h3></div>
              <div className="chart-progress-div"><Circle className='circle1' percent={83} strokeWidth={8} trailWidth={8} strokeColor="#FF7700" /></div>
              <div className="chart-num-div">
                <div className="total-num-div"><h4>total: <br /> 90 days</h4></div>
                <div className="outoff-num-div"><h4>remaining : <br /> 15 days</h4></div>
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Your Status</h3></div>
              <div className="chart-status-div"><h1>Not  Available</h1></div>
              <div className="chart-num-div">
                <Button name="refresh" />
              </div>
            </div>
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Nearby Hospitals</h3></div>

              <div className="chart-map-div">
                <img src="src\assets\Images\nearby.png" alt="" />
              </div>
            </div>
          </div>
          <div className="db-campaign-info">
            <div className="campaign-sub-div">
              <div className="campaign-slide-div">
                <div className="slide-left-button"><button><i class="ri-arrow-left-line"></i></button></div>
                <div className="slide-right-button"><button><i class="ri-arrow-right-line"></i></button></div>
                <div className="campaign-big-slide">
                  <img src="src\assets\Images\campaign.jpg" />
                  <img src="https://images.squarespace-cdn.com/content/v1/5d0dc22f70b70c00015d510a/1607685498057-5M01Z78GKLQL2ISIFCDA/coronavirus-organic-social-facebook-1200x630.jpg?format=1500w" />
                <img src="https://scontent.fnag1-4.fna.fbcdn.net/v/t1.6435-9/120456231_4096773113684125_872639428834088546_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rm9CiccVoLcQ7kNvgHkfJEv&_nc_zt=23&_nc_ht=scontent.fnag1-4.fna&_nc_gid=A3AIC8BJcwTM0oUPDDjXmFX&oh=00_AYAYtT6QDRmx0YgafBQUOANcmrkk2kCNR9Ksokwc5U1TTw&oe=67B9DBD3" />

            </div>
          </div>
          <div className="campaign-message-div">
            <div><h1>Contacts</h1></div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" alt="" /></div>
              <div className="contact-name-div"><h3>Puja Gautam</h3></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://media.licdn.com/dms/image/v2/D4D03AQFr_zAzCpfOSw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666289023944?e=2147483647&v=beta&t=qmcjSKBv2uAGL7cVFW6eFZUdLij3gZMA_ko_n_pO-RI" alt="" /></div>
              <div className="contact-name-div"><h3>Shivam Thawkar</h3></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUtv2VxIrqmzoEU1CCeo6QrPhCyVRLf3sfQ&s" alt="" /></div>
              <div className="contact-name-div"><h3>Amar Pathade</h3></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://www.bollywoodhungama.com/wp-content/uploads/2025/01/620x450-4509.jpg" alt="" /></div>
              <div className="contact-name-div"><h3>Kartik Wankhede</h3></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://media.licdn.com/dms/image/v2/C4E03AQEPpzg3Vh48pw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649242019971?e=2147483647&v=beta&t=Aot-i_BqgA8TBdougCNGxqbsF89-7GD-ftrKaHjLZnU" alt="" /></div>
              <div className="contact-name-div"><h3>Alok Raut</h3></div>
            </div>
            <div className="campaign-contact-div">
              <div className="contact-img-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJXSRjQDqoNLGG4kHCjPFHyEbApxvO3ehZA&s" alt="" /></div>
              <div className="contact-name-div"><h3>NIGGA Nagpure</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div >
    </div >
  )
}

export default UserDashboard