const express = require('express');

const router = express.Router();
const { newSurvey, fetchSurveys } = require('../controllers/surveyController');
const { protect } = require('../middleware/authMiddleware');

router.post('/new', protect, newSurvey);
router.get('/fetch', protect, fetchSurveys);
// router.post('/edit', protect, editSurvey);

module.exports = router;
