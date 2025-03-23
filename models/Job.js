class Job {
  constructor(id, title, company, applyBy) {
      this.id = id;
      this.title = title;
      this.company = company;
      this.applyBy = applyBy;
  }
}

// Manually set "Apply By" dates
const jobs = [
  new Job(1, "Frontend Developer", "TechCorp", "2025-04-10"),
  new Job(2, "Backend Developer", "DevCompany", "2025-04-12"),
  new Job(3, "Full Stack Developer", "InnovateTech", "2025-04-15"),
  new Job(4, "Software Engineer", "CodeWorks", "2025-04-18"),
  new Job(5, "UI/UX Designer", "DesignHub", "2025-04-20"),
  new Job(6, "DevOps Engineer", "CloudNet", "2025-04-22"),
  new Job(7, "Data Scientist", "AI Solutions", "2025-04-25"),
  new Job(8, "Machine Learning Engineer", "DeepMindX", "2025-04-27"),
  new Job(9, "Cybersecurity Analyst", "SecureTech", "2025-04-30"),
  new Job(10, "QA Engineer", "TestLabs", "2025-05-02"),
  new Job(11, "Project Manager", "AgileCorp", "2025-05-05"),
  new Job(12, "Scrum Master", "SprintX", "2025-05-08"),
  new Job(13, "Database Administrator", "DataHive", "2025-05-10"),
  new Job(14, "Business Analyst", "BizLogic", "2025-05-12"),
  new Job(15, "Mobile App Developer", "AppVentures", "2025-05-15"),
  new Job(16, "Embedded Systems Engineer", "IoTNext", "2025-05-18"),
  new Job(17, "Cloud Architect", "CloudSphere", "2025-05-20"),
  new Job(18, "Blockchain Developer", "CryptoHub", "2025-05-22"),
  new Job(19, "AI Researcher", "NeuralTech", "2025-05-25"),
  new Job(20, "Network Engineer", "NetSolutions", "2025-05-28"),
  new Job(21, "Tech Support Engineer", "HelpDeskPro", "2025-05-30"),
  new Job(22, "Game Developer", "GameVerse", "2025-06-02"),
  new Job(23, "Product Manager", "Visionary", "2025-06-05"),
  new Job(24, "Software Architect", "CodeGen", "2025-06-08"),
  new Job(25, "E-commerce Developer", "ShopEasy", "2025-06-10"),
  new Job(26, "SEO Specialist", "MarketingGenius", "2025-06-12"),
  new Job(27, "IT Consultant", "TechAdvisors", "2025-06-15"),
  new Job(28, "Systems Analyst", "SysWorks", "2025-06-18"),
  new Job(29, "Hardware Engineer", "ChipMakers", "2025-06-20"),
  new Job(30, "Robotics Engineer", "RoboTech", "2025-06-25")
];

module.exports = { Job, jobs };