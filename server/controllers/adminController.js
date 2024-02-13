const User = require('../models/user');
const getUsers = async (req, res) => {
  try {
    const users = await User.find({},{password:0}); 
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAdminRoutes = (req, res) => {
  const { id } = req.user;
  const user = User.find(user => user.id === id);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  res.status(200).json({ message: 'Admin authorized' });
};
module.exports = {
  getUsers,
  getAdminRoutes,
  deleteUserById
};
