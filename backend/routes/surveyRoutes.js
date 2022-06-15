const express = require('express');

const router = express.Router();
const {
	newSurvey,
	fetchSurveys,
	surveyAccess,
} = require('../controllers/surveyController');
const { protect } = require('../middleware/authMiddleware');

router.post('/new', protect, newSurvey);
router.get('/fetch', protect, fetchSurveys);
router.post('/access', surveyAccess);
// router.post('/edit', protect, editSurvey);

module.exports = router;
