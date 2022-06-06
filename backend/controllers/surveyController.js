const asyncHandler = require('express-async-handler');

const Survey = require('../models/surveyModel');
const User = require('../models/userModel');

const newSurvey = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400);
	}

	console.log(req.body);

	const survey = await Survey.create({
		user: req.user.id,
		questions: req.body,
		// access: req.body.access,
	});

	res.status(200).json(survey);
});

const getSurvey = asyncHandler(async (req, res) => {
	const survey = Survey.findById(req.body.id);
	res.status(200).json(survey);
});

const fetchSurveys = asyncHandler(async (req, res) => {
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	const surveys = await Survey.find({ user: req.user.id });

	console.log(surveys);

	res.status(200).json(surveys);
});

const editSurvey = asyncHandler(async (req, res) => {
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	const survey = await Survey.findOne({ _id: req.body.id });
	if (survey.user._id != req.user.id) {
		res.status(401);
		throw new Error('Not authorized');
	}

	const editedSurvey = await Survey.findOneAndUpdate(
		{ _id: req.body.id },
		req.body.questions,
		{ new: true }
	);

	res.status(200).json({
		_id: editedSurvey.id,
		questions: editedSurvey.questions,
		access: editedSurvey.access,
	});
});

module.exports = {
	newSurvey,
	fetchSurveys,
};
