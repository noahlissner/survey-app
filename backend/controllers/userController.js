const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	// Check so no fields are empty
	if (!firstName || !lastName || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check if user exists already
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const user = await User.create({
		firstName,
		lastName,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc    Login new user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// Check for user in DB
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid credentials');
	}
});

const editUser = asyncHandler(async (req, res) => {
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	const editedUser = await User.findOneAndUpdate(
		{ email: req.user.email },
		req.body,
		{ new: true }
	);

	res.status(200).json({
		_id: editedUser.id,
		firstName: editedUser.firstName,
		lastName: editedUser.lastName,
		email: editedUser.email,
		token: generateToken(editedUser._id),
	});
});

const editPassword = asyncHandler(async (req, res) => {
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	const user = await User.findOne({ email: req.user.email });

	if (user && (await bcrypt.compare(req.body.oldPassword, user.password))) {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

		const editedUser = await User.findOneAndUpdate(
			{ email: req.user.email },
			{ password: hashedPassword }
		);
		res.status(200).json({
			_id: editedUser.id,
			firstName: editedUser.firstName,
			lastName: editedUser.lastName,
			email: editedUser.email,
			token: generateToken(editedUser._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid credentials');
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};

module.exports = {
	registerUser,
	loginUser,
	editUser,
	editPassword,
};
