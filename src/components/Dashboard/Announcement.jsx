import React, { useState } from 'react';
import Butoon from '../Snipits/Butoon';


const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Blood Drive Next Week', description: 'We are organizing a blood drive next week on Friday. Come and donate!' },
    { id: 2, title: 'Urgent Blood Needed', description: 'Urgent blood needed for a patient in the hospital. O+ blood type preferred.' },
    { id: 3, title: 'New Volunteer Program', description: 'Join our new volunteer program starting next month. Sign up now!' },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    if (newAnnouncement.title && newAnnouncement.description) {
      setAnnouncements([
        ...announcements,
        { id: announcements.length + 1, title: newAnnouncement.title, description: newAnnouncement.description },
      ]);
      setNewAnnouncement({ title: '', description: '' });
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
              <div key={announcement.id} className="announcement-item">
                <h3>{announcement.title}</h3>
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
          <Butoon name='submit'/>
        </form>
      </section>
    </div>
  );
};

export default AnnouncementPage;
