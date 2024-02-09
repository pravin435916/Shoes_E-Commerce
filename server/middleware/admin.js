const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAdmin = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req.header('Authorization');
    if (!token) {
      throw new Error('Authorization token is missing');
    }

    // Verify token
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);

    // Find user by ID
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if user is admin
    if (!user.isAdmin) {
      throw new Error('Admin access required');
    }

    // Attach user object to request for further processing if needed
    req.user = user;
    next();
  } catch (error) {
    console.error('Admin middleware error:', error.message);
    res.status(401).json({ error: error.message });
  }
};

module.exports = isAdmin;
