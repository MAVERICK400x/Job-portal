const applications = require("../models/Application");
const { jobs } = require("../models/Job");

exports.applyJob = (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const { jobId } = req.body;
  if (!jobs.find((job) => job.id == jobId)) return res.redirect("/jobs");

  if (!applications[req.session.user]) applications[req.session.user] = [];
  applications[req.session.user].push(jobId);

  res.redirect("/my-jobs");
};

exports.listAppliedJobs = (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const appliedJobs =
    applications[req.session.user]?.map((jobId) =>
      jobs.find((job) => job.id === jobId)
    ) || [];

  res.render("my-jobs", { appliedJobs, user: req.session.user });
};