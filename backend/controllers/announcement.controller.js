const Announcement = require("../models/announcement.model");

module.exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch announcements" });
  }
};

module.exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newAnnouncement = new Announcement({ title, description });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: "Failed to create announcement" });
  }
};
module.exports.deleteAnnouncement = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
  
      if (!deletedAnnouncement) {
        return res.status(404).json({ error: "Announcement not found" });
      }
  
      res.json({ message: "Announcement deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete announcement" });
    }
  };
