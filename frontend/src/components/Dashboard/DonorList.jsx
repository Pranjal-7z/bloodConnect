import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const DonorList = () => {
  const donors = [
    { id: 1, name: 'shivam Thawkar', bloodGroup: 'O+', age: 28, gender: 'Male', mobileNo: '1234567890' },
    { id: 2, name: 'Amar pathade', bloodGroup: 'A-', age: 34, gender: 'Female', mobileNo: '0987654321' },
    { id: 3, name: 'kartik Wankhede', bloodGroup: 'B+', age: 22, gender: 'Male', mobileNo: '1122334455' },
    { id: 4, name: 'akshad NAgpure', bloodGroup: 'AB+', age: 26, gender: 'Female', mobileNo: '6677889900' },
    
  ];
  
  

  return (
    <div className="donor-list">
      <h1>Donor List</h1>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.age}</td>
              <td>{donor.gender}</td>
              <td>{donor.mobileNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;
