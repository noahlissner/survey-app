const express = require('express');

const router = express.Router();
const {
	registerUser,
	loginUser,
	editUser,
	editPassword,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/edit', protect, editUser);
router.put('/editpassword', protect, editPassword);

module.exports = router;
