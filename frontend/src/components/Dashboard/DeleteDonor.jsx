import React, { useEffect, useState } from "react";

const DeleteDonor = () => {
  const [donors, setDonors] = useState([]);

  // Fetch donors from backend
  useEffect(() => {
    fetch("http://localhost:4000/donors")
      .then((response) => response.json())
      .then((data) => setDonors(data))
      .catch((error) => console.error("Error fetching donors:", error));
  }, []);

  // Delete donor function
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/donors/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDonors(donors.filter((donor) => donor._id !== id));
      } else {
        console.error("Failed to delete donor");
      }
    } catch (error) {
      console.error("Error deleting donor:", error);
    }
  };

  return (
    <div className="delete-donor">
      <h1>Delete Donor</h1>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id}>
              <td>{donor.fullname.firstname} {donor.fullname.lastname}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.gender}</td>
              <td>{donor.mobileNo}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(donor._id)}
                >
                  <i className="ri-delete-bin-line"></i> Delete
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
