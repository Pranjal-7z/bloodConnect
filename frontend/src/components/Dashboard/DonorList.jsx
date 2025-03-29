import React, { useEffect, useState } from 'react';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/donors`)
      .then((response) => response.json())
      .then((data) => setDonors(data))
      .catch((error) => console.error("Error fetching donors:", error));
  }, []);
 
  


  return (
    <div className="donor-list">
      <h1>Donor List</h1>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id}>
              <td>{donor.fullname.firstname} {donor.fullname.lastname}</td>

              <td>{donor.bloodGroup}</td>
              <td>{donor.email}</td>
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
