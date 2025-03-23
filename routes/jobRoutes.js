const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

router.get("/jobs", jobController.listJobs);
router.post("/apply", jobController.applyForJob);
router.get("/my-jobs", jobController.listAppliedJobs);

module.exports = router;