const { jobs } = require("../models/job");

let appliedJobs = [];

const listJobs = (req, res) => {
    res.render("jobs", { jobs });
};

const applyForJob = (req, res) => {
    const jobId = parseInt(req.body.jobId);
    const job = jobs.find(j => j.id === jobId);

    if (job && !appliedJobs.includes(job)) {
        appliedJobs.push(job);
    }
    res.redirect("/my-jobs");
};

const listAppliedJobs = (req, res) => {
    res.render("my-jobs", { appliedJobs });
};

module.exports = { listJobs, applyForJob, listAppliedJobs };