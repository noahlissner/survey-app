const express = require('express');

const router = express.Router();
const {
	newSurvey,
	getSurvey,
	getSurveys,
	editSurvey,
} = require('../controllers/surveyController');
const { protect } = require('../middleware/authMiddleware');

router.post('/edit', protect, editSurvey);
