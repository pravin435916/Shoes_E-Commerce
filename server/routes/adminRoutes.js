const express = require('express');
const router = express.Router();
const User = require('../models/user');
const isAdmin = require('../middleware/admin');
const {getUsers,deleteUserById,getAdminRoutes} = require('../controllers/adminController')

router.get('/users',isAdmin,getUsers)
router.delete('/users/:id',isAdmin,deleteUserById)
router.get('/check',isAdmin,getAdminRoutes)

module.exports = router;