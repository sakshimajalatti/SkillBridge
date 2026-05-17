// SkillBridge AI - Centralized Mock Data

export const studentProfile = {
  name: "Arjun Sharma",
  email: "arjun.sharma@university.edu",
  avatar: "/avatar.jpg",
  university: "Indian Institute of Technology, Delhi",
  branch: "Computer Science Engineering",
  year: "3rd Year",
  cgpa: 8.4,
  githubUsername: "arjunsharma-dev",
  linkedIn: "linkedin.com/in/arjunsharma",
  targetRole: "Full Stack Developer",
};

export const industryReadinessScore = {
  overall: 74,
  percentile: 68,
  trend: "+8% this month",
  confidence: 87,
  lastUpdated: "2 hours ago",
};

export const scoreBreakdown = {
  positive: [
    { factor: "Strong GitHub consistency", impact: +12, icon: "github" },
    { factor: "High-quality frontend projects", impact: +10, icon: "code" },
    { factor: "Hackathon participation", impact: +8, icon: "trophy" },
    { factor: "Active open source contributions", impact: +6, icon: "git-branch" },
    { factor: "Strong React/TypeScript skills", impact: +5, icon: "zap" },
  ],
  negative: [
    { factor: "Weak DSA performance", impact: -15, icon: "alert-triangle" },
    { factor: "No deployment experience", impact: -9, icon: "cloud-off" },
    { factor: "Poor ATS optimization", impact: -5, icon: "file-x" },
    { factor: "Limited backend exposure", impact: -4, icon: "server" },
    { factor: "No cloud certifications", impact: -3, icon: "award" },
  ],
};

export const placementProbability = {
  startup: { probability: 82, confidence: 91, trend: "up" },
  service: { probability: 91, confidence: 95, trend: "stable" },
  product: { probability: 68, confidence: 84, trend: "up" },
  faang: { probability: 29, confidence: 72, trend: "up" },
};

export const skillsData = {
  dsa: { level: 45, category: "Technical", urgency: "high" },
  webDev: { level: 85, category: "Technical", urgency: "low" },
  aiml: { level: 35, category: "Technical", urgency: "medium" },
  cloud: { level: 25, category: "Technical", urgency: "high" },
  devops: { level: 40, category: "Technical", urgency: "high" },
  systemDesign: { level: 30, category: "Technical", urgency: "medium" },
  communication: { level: 70, category: "Soft Skills", urgency: "low" },
  aptitude: { level: 65, category: "Core", urgency: "medium" },
};

export const skillGaps = [
  {
    skill: "Docker & Containerization",
    urgency: "High",
    learningTime: "2-3 weeks",
    impact: "+12% placement probability",
    difficulty: "Medium",
  },
  {
    skill: "AWS Fundamentals",
    urgency: "High",
    learningTime: "4-6 weeks",
    impact: "+15% product company eligibility",
    difficulty: "Medium",
  },
  {
    skill: "Data Structures & Algorithms",
    urgency: "Critical",
    learningTime: "8-12 weeks",
    impact: "+24% FAANG eligibility",
    difficulty: "High",
  },
  {
    skill: "System Design Basics",
    urgency: "Medium",
    learningTime: "4-6 weeks",
    impact: "+10% senior role eligibility",
    difficulty: "High",
  },
  {
    skill: "Backend Development (Node.js)",
    urgency: "Medium",
    learningTime: "3-4 weeks",
    impact: "+8% full-stack roles",
    difficulty: "Medium",
  },
];

export const githubStats = {
  totalRepos: 28,
  totalStars: 156,
  totalForks: 42,
  contributions: 847,
  streak: 23,
  longestStreak: 45,
  languages: [
    { name: "TypeScript", percentage: 42, color: "#3178c6" },
    { name: "JavaScript", percentage: 28, color: "#f7df1e" },
    { name: "Python", percentage: 18, color: "#3776ab" },
    { name: "CSS", percentage: 8, color: "#264de4" },
    { name: "Other", percentage: 4, color: "#6b7280" },
  ],
  contributionData: generateContributionData(),
  codingMaturityScore: 72,
  collaborationIndex: 65,
  practicalExposure: 78,
};

function generateContributionData() {
  const data = [];
  for (let week = 0; week < 52; week++) {
    for (let day = 0; day < 7; day++) {
      data.push({
        week,
        day,
        count: Math.floor(Math.random() * 8),
      });
    }
  }
  return data;
}

export const resumeAnalysis = {
  atsScore: 68,
  qualityScore: 74,
  technicalStrength: 81,
  detectedSkills: [
    { name: "Python", confidence: 95 },
    { name: "React", confidence: 92 },
    { name: "TypeScript", confidence: 88 },
    { name: "Node.js", confidence: 85 },
    { name: "MongoDB", confidence: 78 },
    { name: "Git", confidence: 95 },
  ],
  projectsIdentified: 3,
  issues: [
    { type: "warning", message: "Weak ATS optimization detected" },
    { type: "error", message: "No deployment links found" },
    { type: "warning", message: "Missing quantified achievements" },
    { type: "info", message: "Consider adding cloud certifications" },
  ],
};

export const marketDemand = {
  alignmentScore: 61,
  topDemandSkills: [
    { skill: "React", demandPercentage: 78, userLevel: 85, match: true },
    { skill: "Docker", demandPercentage: 73, userLevel: 25, match: false },
    { skill: "AWS", demandPercentage: 71, userLevel: 20, match: false },
    { skill: "TypeScript", demandPercentage: 68, userLevel: 82, match: true },
    { skill: "Node.js", demandPercentage: 65, userLevel: 70, match: true },
    { skill: "Python", demandPercentage: 62, userLevel: 75, match: true },
  ],
  hiringTrends: [
    { month: "Jan", openings: 1200 },
    { month: "Feb", openings: 1350 },
    { month: "Mar", openings: 1500 },
    { month: "Apr", openings: 1420 },
    { month: "May", openings: 1680 },
    { month: "Jun", openings: 1850 },
  ],
};

export const recruiterPerspective = {
  riskIndex: 42,
  strengths: [
    "Strong frontend portfolio",
    "Active GitHub presence",
    "Good project documentation",
    "Hackathon experience",
  ],
  concerns: [
    { issue: "No deployment links in projects", severity: "high" },
    { issue: "Weak README documentation", severity: "medium" },
    { issue: "Low collaboration activity", severity: "medium" },
    { issue: "No cloud/DevOps exposure", severity: "high" },
    { issue: "Limited backend experience", severity: "medium" },
  ],
  interviewReadiness: {
    technicalCommunication: "Moderate",
    problemSolving: "Weak",
    projectExplanation: "Strong",
    confidence: "Medium",
  },
};

export const roadmapData = [
  {
    month: 1,
    title: "Foundation Building",
    tasks: [
      { task: "Learn Docker basics", completed: false, priority: "high" },
      { task: "Improve Arrays & Strings", completed: false, priority: "critical" },
      { task: "Deploy one project to Vercel", completed: false, priority: "high" },
    ],
  },
  {
    month: 2,
    title: "Skill Expansion",
    tasks: [
      { task: "Build MERN full-stack project", completed: false, priority: "high" },
      { task: "Start AWS Cloud Practitioner", completed: false, priority: "medium" },
      { task: "Practice 50 LeetCode problems", completed: false, priority: "critical" },
    ],
  },
  {
    month: 3,
    title: "Interview Prep",
    tasks: [
      { task: "Mock interview practice", completed: false, priority: "high" },
      { task: "System Design basics", completed: false, priority: "medium" },
      { task: "Complete AWS certification", completed: false, priority: "medium" },
    ],
  },
];

export const achievements = [
  {
    type: "hackathon",
    title: "Smart India Hackathon 2024",
    description: "National Finalist - Built AI-powered healthcare solution",
    date: "March 2024",
    badge: "gold",
  },
  {
    type: "certification",
    title: "Meta Frontend Developer",
    description: "Professional Certificate - Coursera",
    date: "January 2024",
    badge: "silver",
  },
  {
    type: "hackathon",
    title: "Google Solution Challenge",
    description: "Top 100 Global - Sustainability project",
    date: "April 2024",
    badge: "gold",
  },
  {
    type: "streak",
    title: "45-Day Coding Streak",
    description: "Longest continuous GitHub contribution",
    date: "February 2024",
    badge: "bronze",
  },
];

export const leaderboardData = [
  { rank: 1, name: "Priya Patel", score: 92, university: "IIT Bombay", avatar: "PP" },
  { rank: 2, name: "Rahul Verma", score: 89, university: "IIT Delhi", avatar: "RV" },
  { rank: 3, name: "Sneha Gupta", score: 87, university: "NIT Trichy", avatar: "SG" },
  { rank: 4, name: "Arjun Sharma", score: 74, university: "IIT Delhi", avatar: "AS", isUser: true },
  { rank: 5, name: "Ankit Singh", score: 71, university: "BITS Pilani", avatar: "AS" },
  { rank: 6, name: "Kavya Reddy", score: 68, university: "IIT Madras", avatar: "KR" },
  { rank: 7, name: "Rohan Kumar", score: 65, university: "IIIT Hyderabad", avatar: "RK" },
];

export const notifications = [
  {
    id: 1,
    type: "insight",
    title: "Placement Probability Increased",
    message: "Your product company eligibility increased by 8% this week due to improved GitHub activity.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "recommendation",
    title: "Skill Recommendation",
    message: "Improving DSA can increase your product-company eligibility by 24%.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "alert",
    title: "GitHub Activity Drop",
    message: "Your GitHub activity dropped by 30% this month. Maintain consistency for better scores.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "insight",
    title: "Market Trend Alert",
    message: "Students with deployment experience show 37% higher placement rates.",
    time: "2 days ago",
    read: true,
  },
];

export const roleRequirements = {
  "Frontend Developer": {
    skills: ["React", "TypeScript", "CSS", "Testing", "Performance"],
    readiness: 82,
    missingSkills: ["Testing frameworks", "Performance optimization"],
  },
  "Full Stack Developer": {
    skills: ["React", "Node.js", "Databases", "APIs", "DevOps"],
    readiness: 68,
    missingSkills: ["DevOps", "Database optimization", "Cloud deployment"],
  },
  "AI/ML Engineer": {
    skills: ["Python", "TensorFlow", "Data Analysis", "Math", "ML Algorithms"],
    readiness: 35,
    missingSkills: ["TensorFlow", "Deep Learning", "MLOps"],
  },
  "DevOps Engineer": {
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud", "Scripting"],
    readiness: 28,
    missingSkills: ["Docker", "Kubernetes", "AWS/GCP", "CI/CD pipelines"],
  },
  "Cybersecurity Analyst": {
    skills: ["Networks", "Security Tools", "Penetration Testing", "Compliance"],
    readiness: 22,
    missingSkills: ["Security certifications", "Penetration testing", "SIEM tools"],
  },
};

export const progressTimeline = [
  { week: 1, score: 48, milestone: "Started" },
  { week: 2, score: 52, milestone: null },
  { week: 3, score: 55, milestone: null },
  { week: 4, score: 61, milestone: "First hackathon" },
  { week: 5, score: 63, milestone: null },
  { week: 6, score: 66, milestone: null },
  { week: 7, score: 69, milestone: "GitHub streak" },
  { week: 8, score: 74, milestone: "Current" },
];

export const onboardingSlides = [
  {
    title: "Upload Resume",
    description: "AI-powered parsing extracts your skills, projects, and experience automatically.",
    icon: "FileText",
  },
  {
    title: "Connect GitHub",
    description: "We analyze your coding patterns, project quality, and contribution consistency.",
    icon: "Github",
  },
  {
    title: "Analyze Employability",
    description: "Get your Industry Readiness Score based on real evidence, not self-assessment.",
    icon: "BarChart3",
  },
  {
    title: "Detect Skill Gaps",
    description: "Identify exactly what skills you need to become placement-ready.",
    icon: "Target",
  },
  {
    title: "Predict Placement",
    description: "Know your probability of getting placed at different company types.",
    icon: "TrendingUp",
  },
  {
    title: "Generate Roadmap",
    description: "Get a personalized career roadmap tailored to your target role.",
    icon: "Map",
  },
];

export const chatMessages = [
  {
    role: "assistant",
    content: "Hi Arjun! I'm your AI Career Mentor. I've analyzed your profile and I'm ready to help you improve your placement readiness. What would you like to know?",
  },
];

export const suggestedPrompts = [
  "How do I improve my FAANG chances?",
  "What project should I build next?",
  "Why is my readiness score low?",
  "Which skill should I prioritize?",
];
