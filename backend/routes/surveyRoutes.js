const express = require("express");

const router = express.Router();
const {
  newSurvey,
  editSurvey,
  fetchSurveys,
  surveyAccess,
} = require("../controllers/surveyController");
const { protect } = require("../middleware/authMiddleware");

router.post("/new", protect, newSurvey);
router.post("/edit", protect, editSurvey);
router.get("/fetch", protect, fetchSurveys);
router.post("/access", surveyAccess);
// router.post('/edit', protect, editSurvey);

module.exports = router;
