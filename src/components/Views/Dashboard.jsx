import React from "react";
import Chart from 'chart.js/auto';
import { Doughnut, Pie } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ['B+', 'O+', 'B-'],
    datasets: [
      {
        label: 'DONORS',
        data: [2, 1, 4],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  
  return (
    <div>
      <div className="dashboard-main-div">
        <div className="dashboard-block-div">
          <div className="block-main-div block1">
            <div className="block-icon-div ">
              <i class="ri-user-fill"></i>
            </div>
            <div className="block-info-div">
              <div className="block-num-div">4</div>
              <div className="block-name-div">Total Donor</div>
            </div>
          </div>
          <div className="block-main-div block2">
            <div className="block-icon-div">
              <i class="ri-file-check-fill"></i>
            </div>
            <div className="block-info-div">
              <div className="block-num-div">2</div>
              <div className="block-name-div">Total Requests</div>
            </div>
          </div>
          <div className="block-main-div block3">
            <div className="block-icon-div">
              <i class="ri-megaphone-fill"></i>
            </div>
            <div className="block-info-div">
              <div className="block-num-div">2</div>
              <div className="block-name-div">Announcements</div>
            </div>
          </div>
          <div className="block-main-div block4">
            <div className="block-icon-div">
              <i class="ri-mail-fill"></i>
            </div>
            <div className="block-info-div">
              <div className="block-num-div">0</div>
              <div className="block-name-div">Emails</div>
            </div>
          </div>
        </div>
        <div className="dashboard-chart-div">
          <div className="dashboard-doughnut-container"><Pie
          className="dashboard-chart-doughnut"
          
          data={data}
        
          /></div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
