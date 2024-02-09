const express = require('express');
const router = express.Router();
const User = require('../models/user');
const isAdmin = require('../middleware/admin');
router.get('/users', isAdmin, async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // Exclude the password field from the response
      res.json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/admin_routes', isAdmin, (req, res) => {
    res.json({ message: 'Admin route accessed successfully' });
  });
  module.exports = router;