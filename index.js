const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.static('public')); // Serve static files (CSS)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'jobportal',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Set true if using HTTPS
    })
);

// Mock job data
const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      applyBy: "2025-04-10",
      requirements: ["HTML", "CSS", "JavaScript", "React.js"],
      salary: "$60,000 - $80,000",
      location: "Remote"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "DevCompany",
      applyBy: "2025-04-12",
      requirements: ["Node.js", "Express.js", "MongoDB", "REST API"],
      salary: "$70,000 - $90,000",
      location: "New York, USA"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnovateTech",
      applyBy: "2025-04-15",
      requirements: ["React.js", "Node.js", "SQL", "Docker"],
      salary: "$80,000 - $100,000",
      location: "San Francisco, USA"
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "CodeWorks",
      applyBy: "2025-04-18",
      requirements: ["Java", "Spring Boot", "AWS", "Microservices"],
      salary: "$85,000 - $110,000",
      location: "London, UK"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataInsights",
      applyBy: "2025-04-20",
      requirements: ["Python", "Machine Learning", "Data Analysis", "SQL"],
      salary: "$90,000 - $120,000",
      location: "Seattle, USA"
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "DesignHub",
      applyBy: "2025-04-22",
      requirements: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      salary: "$75,000 - $95,000",
      location: "Remote"
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "CloudSolutions",
      applyBy: "2025-04-25",
      requirements: ["Kubernetes", "Docker", "CI/CD", "AWS/Azure/GCP"],
      salary: "$95,000 - $130,000",
      location: "Berlin, Germany"
    },
    {
      id: 8,
      title: "Mobile App Developer",
      company: "MobileInnovate",
      applyBy: "2025-04-28",
      requirements: ["Swift (iOS) or Kotlin (Android)", "React Native", "API Integration"],
      salary: "$80,000 - $105,000",
      location: "Toronto, Canada"
    },
    {
      id: 9,
      title: "QA Engineer",
      company: "QualityAssure",
      applyBy: "2025-04-30",
      requirements: ["Selenium", "Jira", "Test Automation", "API Testing"],
      salary: "$65,000 - $85,000",
      location: "Austin, USA"
    },
      {
      id: 10,
      title: "Product Manager",
      company: "ProductVision",
      applyBy: "2025-05-02",
      requirements: ["Agile/Scrum", "Product Roadmapping", "User Stories", "Stakeholder Management"],
      salary: "$100,000 - $140,000",
      location: "Remote"
    }
  ];

// Home Page
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
});

// Job Listings
app.get('/jobs', (req, res) => {
    res.render('jobs', { jobs, user: req.session.user });
});

// Apply for a Job
app.post('/apply', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?message=Please login to apply for jobs');
    }

    const jobId = parseInt(req.body.jobId);
    const job = jobs.find(j => j.id === jobId);

    if (!job) {
        return res.status(404).send("Job not found");
    }

    if (!req.session.appliedJobs) {
        req.session.appliedJobs = [];
    }

    // Avoid duplicate applications
    if (!req.session.appliedJobs.some(j => j.id === job.id)) {
        req.session.appliedJobs.push(job);
    }

    console.log("Job Applied:", job); // Debugging
    res.redirect('/my-jobs');
});

// Applied Jobs Page
app.get('/my-jobs', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?message=Please login to view your applications');
    }

    res.render('my-jobs', { appliedJobs: req.session.appliedJobs || [], user: req.session.user });
});

// Login Page
app.get('/login', (req, res) => {
    res.render('login', { message: req.query.message || "", user: req.session.user });
});

// Handle Login
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.redirect('/login?message=Username is required');
    }

    req.session.user = username;
    res.redirect('/');
});

// Register Page
app.get('/register', (req, res) => {
    res.render('register', { message: req.query.message || "", user: req.session.user });
});

// Handle Registration
app.post('/register', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.redirect('/register?message=Username is required');
    }

    req.session.user = username;
    res.redirect('/');
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// Set EJS as the templating engine
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});