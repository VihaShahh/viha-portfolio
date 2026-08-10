import {
  Award,
  BriefcaseBusiness,
  Building2,
  Bot,
  Code2,
  Database,
  ChartNoAxesCombined,
  GraduationCap,
  Layers3,
  Monitor,
  Trophy,
  UsersRound,
} from "lucide-react";

export const profile = {
  name: "Viha Shah",
  role: "Backend Software Developer",
  location: "Anand, Gujarat, India",
  email: "vihashah1103@gmail.com",
  linkedin: "https://linkedin.com/in/vihashah",
  github: "https://github.com/vihashahh",
  phone: "+91-7990376108",
  employer: "Chinmay Finlease Ltd.",
  heroEyebrow: "Backend systems · Intelligent workflows",
  heroLead: "I build reliable backends and intelligent workflows.",
  heroIntro:
    "Software developer at Chinmay Finlease Ltd., working across financial workflows, asynchronous processing, Node.js services, and applied AI.",
};

export const navItems = [
  ["Experience", "#experience"],
  ["Work", "#projects"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

const springerPublicationHref =
  "https://link.springer.com/chapter/10.1007/978-3-032-10303-1_39";

// Display order is independent of project content.
export const projectCatalog = {
  freightReconciliation: {
    title: "AI-Powered Freight Reconciliation Agent",
    icon: Bot,
    eyebrow: "AI-assisted financial validation",
    status: "Completed",
    state: "completed",
    accent: "#337d5d",
    githubHref: profile.github,
    description:
      "Designed an async multi-step workflow for freight invoice reconciliation against contracts and shipment records, with retry recovery, state persistence, and parallel validation flows.",
    tags: ["FastAPI", "LangGraph", "PostgreSQL", "Docker", "GCP", "Python"],
  },
  workpulse: {
    title: "Workpulse",
    icon: ChartNoAxesCombined,
    eyebrow: "Manufacturing analytics",
    status: "Delivered",
    state: "completed",
    accent: "#a14875",
    githubHref: profile.github,
    description:
      "Delivered a desktop analytics platform to a manufacturing firm with MySQL schemas and real-time data pipelines for attendance, productivity, and workload dashboards.",
    tags: ["Python", "Tkinter", "MySQL", "Data Analytics"],
  },
  waterQuality: {
    title: "Water Quality Monitoring System",
    icon: Database,
    eyebrow: "Citizen reporting platform",
    status: "Completed",
    state: "completed",
    accent: "#0c8ea0",
    githubHref: profile.github,
    description:
      "Built a Java-based complaint tracking system with admin dashboards, scalable backend APIs, and structured lifecycle management for water contamination and supply issue reports.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  emotionRecognition: {
    title: "Real-Time Emotion Recognition",
    icon: Bot,
    eyebrow: "Research published by Springer",
    status: "Published",
    state: "completed",
    accent: "#7654b4",
    publicationHref: springerPublicationHref,
    description:
      "Developed a real-time computer vision pipeline for facial feature extraction and emotion classification for autism support, with Gujarati audio output for accessible emotional feedback.",
    tags: ["CNNs", "Computer Vision", "Deep Learning", "OpenCV", "Python"],
  },
};

export const projectOrder = [
  "freightReconciliation",
  "workpulse",
  "waterQuality",
  "emotionRecognition",
];

export const projects = projectOrder.map((id) => ({ id, ...projectCatalog[id] }));

const contributionBullets = [
  "Engineered backend integration pipelines for Apollo Finvest APIs, including authentication, schema mapping, transactional data synchronisation, and fault handling",
  "Designed async workflow automation for financial monitoring, reducing manual workload by 50%",
  "Developed payment automation with event-driven status handling, improving turnaround by 20%",
  "Optimised PostgreSQL queries and indexing for loan defaulter reports, reducing execution time from 8 seconds to 1 second",
  "Built a centralised compliance document tracking platform with REST APIs and structured database architecture"
];

export const timeline = [
  {
    id: "education",
    years: "Jan 2027",
    startDate: "2027-01-01",
    endDate: null,
    durationLabel: "Starting January 2027",
    journeyLabel: "Graduate Education",
    title: "Master's in Software Engineering",
    org: "Ontario Tech University",
    orgHref: "https://ontariotechu.ca/programs/graduate/engineering-and-applied-science/masters-software-engineering/",
    status: "Incoming student",
    state: "education",
    description:
      "Starting a master's in Software Engineering at Ontario Tech University in January 2027.",
    icon: GraduationCap,
    tone: "blue",
    points: [],
  },
  {
    years: "Mar 2025 - Present",
    startDate: "2025-03-01",
    endDate: null,
    journeyLabel: "Professional / Full-time Experience",
    title: "Software Developer",
    org: "Chinmay Finlease Ltd.",
    meta: "Chinmay Finlease Ltd.",
    status: "Current role",
    state: "progress",
    summary: "Backend financial workflow systems at Chinmay Finlease Ltd., with Apollo Finvest integrations, async automation, and compliance tooling.",
    description:
      "Software Developer at Chinmay Finlease Ltd., engineering backend systems for financial workflows, API integration pipelines, asynchronous payment automation, reporting performance, and compliance document tracking.",
    icon: BriefcaseBusiness,
    tone: "purple",
    visual: "api",
    points: contributionBullets,
  },
  {
    years: "May 2024 - Jul 2024",
    startDate: "2024-05-01",
    endDate: "2024-07-31",
    journeyLabel: "Internship Experience",
    title: "Software Development Intern",
    org: "AlgoAcharya",
    meta: "AlgoAcharya",
    status: "Completed role",
    state: "completed",
    summary: "Computer vision pipeline work for infrastructure monitoring and reporting.",
    description:
      "Built applied computer vision workflows for pothole detection and bridge crack analysis using OpenCV, contour extraction, and severity classification.",
    icon: Building2,
    tone: "violet",
    visual: "workflow",
    points: [
      "Built real-time computer vision pipeline for pothole detection and bridge crack analysis using OpenCV",
      "Implemented contour extraction and severity classification, achieving 90%+ detection accuracy",
      "Designed structured image analysis workflows for automated infrastructure monitoring and reporting"
    ]
  },
  {
    id: "undergraduate-education",
    years: "2021 - 2025",
    startDate: "2021-08-01",
    endDate: "2025-05-01",
    durationLabel: "4 years",
    journeyLabel: "College Education",
    title: "B.E. Information Technology",
    org: "G H Patel College of Engineering & Technology",
    meta: "G H Patel College of Engineering & Technology",
    status: "Education",
    state: "education",
    summary: "Information Technology degree with foundations in systems, databases, AI, machine learning, and computer vision.",
    description:
      "Computer Science and Information Technology foundation with project-heavy work across backend systems, AI, computer vision, and intelligent automation.",
    icon: GraduationCap,
    iconSize: 34,
    tone: "blue",
    visual: "orbit",
    points: [
      "GPA: 8.08/10.0",
      "Winner, CM University Hackathon 2023",
      "LinkedIn Top Voice for contributions to collaborative technical articles",
      "Core Team Member, Computer Society of India (CSI), GCET Chapter"
    ],
    coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Machine Learning", "Software Engineering", "OOP", "Artificial Intelligence", "Computer Vision"]
  }
];

export const skills = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Django", "REST APIs"]
  },
  {
    title: "Data Layer",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"]
  },
  {
    title: "Infrastructure & Tooling",
    icon: Layers3,
    items: ["Docker", "Linux", "Git", "GitHub", "CI/CD", "GCP"]
  },
  {
    title: "AI & Data",
    icon: Bot,
    items: ["OpenCV", "Scikit-Learn", "NumPy", "Pandas", "Computer Vision", "CNNs", "Deep Learning"]
  },
  {
    title: "Languages & Frontend",
    icon: Monitor,
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "React.js"]
  },
];

// Recognition documented in Viha's source portfolio. Evidence links are added
// only when supplied.
export const achievements = [
  {
    year: "PICET 2024",
    title: "Springer Research Publication",
    organization: "Springer",
    href: springerPublicationHref,
    action: "View Springer publication",
    platform: "Website",
    description:
      "Real-Time Emotion Recognition Using CNNs is published by Springer. The work received the Best Research Paper award at PICET 2024 and combines live facial emotion classification with Gujarati audio feedback for autism support applications.",
    icon: Award,
    accent: "#7654b4",
  },
  {
    year: "2023",
    title: "CM University Hackathon Winner",
    organization: "CM University",
    description: "Winner of the CM University Hackathon 2023.",
    icon: Trophy,
    accent: "#0c8ea0",
  },
  {
    year: "College",
    title: "CSI GCET Core Team Member",
    organization: "Computer Society of India, GCET Chapter",
    description:
      "Core team member of the Computer Society of India, GCET Chapter during her Information Technology degree.",
    icon: UsersRound,
    accent: "#a14875",
  },
];

export const achievementMoments = [];
export const hobbies = [];
