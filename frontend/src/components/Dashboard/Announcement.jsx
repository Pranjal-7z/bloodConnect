import React, { useEffect, useState } from "react";
import Butoon from "../Snipits/Butoon";

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
  });

  // Fetch announcements from backend
  useEffect(() => {
    fetch("http://localhost:4000/announcements")
      .then((response) => response.json())
      .then((data) => setAnnouncements(data))
      .catch((error) =>
        console.error("Error fetching announcements:", error)
      );
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create new announcement
  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    if (!newAnnouncement.title || !newAnnouncement.description) return;

    try {
      const response = await fetch("http://localhost:4000/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (response.ok) {
        const createdAnnouncement = await response.json();
        setAnnouncements([...announcements, createdAnnouncement]);
        setNewAnnouncement({ title: "", description: "" });
      } else {
        console.error("Failed to create announcement");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };

  // Delete announcement
  const handleDeleteAnnouncement = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/announcements/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAnnouncements(announcements.filter((announcement) => announcement._id !== id));
      } else {
        console.error("Failed to delete announcement");
      }
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <div className="announcement-page">
      <h1>Announcements</h1>

      <section className="current-announcements">
        <h2>Current Announcements</h2>
        {announcements.length === 0 ? (
          <p>No announcements available at the moment.</p>
        ) : (
          <div className="announcement-list">
            {announcements.map((announcement) => (
              <div key={announcement._id} className="announcement-item">
                <div className="holi"><h3>{announcement.title}</h3><button 
                  onClick={() => handleDeleteAnnouncement(announcement._id)}
                  className="delete-button"
                >
                 <i class="ri-delete-bin-6-line"></i>
                </button></div>
                
                <p>{announcement.description}</p>
                
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="create-announcement">
        <h2>Create a New Announcement</h2>
        <form onSubmit={handleCreateAnnouncement} className="announcement-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newAnnouncement.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={newAnnouncement.description}
              onChange={handleChange}
              required
            />
          </div>
          <Butoon name="Submit" />
        </form>
      </section>
    </div>
  );
};

export default AnnouncementPage;
