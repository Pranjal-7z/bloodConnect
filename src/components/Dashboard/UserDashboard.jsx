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
               <Button name="refresh"/>
              </div>
            </div> 
            <div className="chart-main-div">
              <div className="chart-name-div"><h3>Nearby Hospitals</h3></div>

              <div className="chart-map-div">
               <img src="src\assets\Images\nearby.png" alt="" />
              </div>
            </div>
          </div>
          <div className="db-campaign-info"></div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard