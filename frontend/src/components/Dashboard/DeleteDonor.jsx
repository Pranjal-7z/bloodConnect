import React, { useState } from 'react';


const DeleteDonor = () => {
  const [donors, setDonors] = useState([
    
      { id: 1, name: 'shivam Thawkar', bloodGroup: 'O+', age: 28, gender: 'Male', mobileNo: '1234567890' },
      { id: 2, name: 'Amar pathade', bloodGroup: 'A-', age: 34, gender: 'Female', mobileNo: '0987654321' },
      { id: 3, name: 'kartik Wankhede', bloodGroup: 'B+', age: 22, gender: 'Male', mobileNo: '1122334455' },
      { id: 4, name: 'akshad NAgpure', bloodGroup: 'AB+', age: 26, gender: 'Female', mobileNo: '6677889900' },
      
    
  ]);

  const handleDelete = (id) => {
    const updatedDonors = donors.filter((donor) => donor.id !== id);
    setDonors(updatedDonors);
  };

  return (
    <div className="delete-donor">
      <h1>Delete Donor</h1>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile No</th>
            <th>Actions</th>
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
              <td>
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(donor.id)}
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDonor;
