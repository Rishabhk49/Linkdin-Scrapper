const express = require('express');
const Profile = require('../models/profile');
const router = express.Router();

// POST API to save LinkedIn profile data
router.post('/api/profile', async (req, res) => {
  try {
    const { name, url, about, bio, location, followerCount, connectionCount, bioLine } = req.body;
    const profile = await Profile.create({ name, url, about, bio, location, followerCount, connectionCount, bioLine });
    res.status(201).json({ message: 'Profile saved successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile', error: error.message });
  }
});

module.exports = router;
