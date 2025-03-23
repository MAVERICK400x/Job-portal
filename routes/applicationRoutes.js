const express = require("express");
const applicationController = require("../controllers/applicationController");

const router = express.Router();

router.post("/apply", applicationController.applyJob);
router.get("/my-jobs", applicationController.listAppliedJobs);

module.exports = router;