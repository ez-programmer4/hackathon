// Mock data for Connect AI Platform

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  university: string;
  discipline: string;
  skills: string[];
  interests: string[];
  role: string;
  commitmentLevel: string;
  location: string;
  avatar: string;
  coFounderReady: boolean;
  academyProgress: number;
  matchScore?: number;
  bio?: string;
}

export interface AcademyModule {
  week: number;
  phase: "THINK" | "BUILD" | "LAUNCH";
  title: string;
  description: string;
  tasks: Task[];
  resources: Resource[];
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface Resource {
  title: string;
  type: "video" | "pdf" | "worksheet";
  url: string;
}

export const disciplines = [
  "Computer Science",
  "Agriculture",
  "Health Sciences",
  "Business Administration",
  "Engineering",
  "Economics",
];

export const skills = [
  "React.js",
  "Python",
  "UI/UX Design",
  "Market Research",
  "Financial Analysis",
  "Product Management",
  "Mobile Development",
  "Data Analysis",
  "Supply Chain",
  "Digital Marketing",
  "Sales",
  "Business Development",
];

export const industries = [
  "Agri-tech",
  "Health-tech",
  "Logistics",
  "E-commerce",
  "Fintech",
  "Edtech",
  "Supply Chain",
  "Value Chain Innovation",
];

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Abebe Kebede",
    email: "abebe.k@jimma.edu.et",
    age: 23,
    university: "Jimma University",
    discipline: "Computer Science",
    skills: ["React.js", "Python", "UI/UX Design"],
    interests: ["Agri-tech", "Supply Chain"],
    role: "Technical",
    commitmentLevel: "Full-time",
    location: "Jimma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe",
    coFounderReady: true,
    academyProgress: 100,
    bio: "Passionate about using technology to solve agricultural challenges in Ethiopia.",
  },
  {
    id: "2",
    name: "Hanna Solomon",
    email: "hanna.s@jimma.edu.et",
    age: 22,
    university: "Jimma University",
    discipline: "Agriculture",
    skills: ["Market Research", "Supply Chain", "Business Development"],
    interests: ["Agri-tech", "Value Chain Innovation"],
    role: "Business",
    commitmentLevel: "Full-time",
    location: "Jimma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hanna",
    coFounderReady: true,
    academyProgress: 100,
    bio: "Agricultural expert focused on connecting farmers to markets.",
  },
  {
    id: "3",
    name: "Dawit Tesfaye",
    email: "dawit.t@jimma.edu.et",
    age: 24,
    university: "Jimma University",
    discipline: "Health Sciences",
    skills: ["Product Management", "Data Analysis", "Market Research"],
    interests: ["Health-tech", "Edtech"],
    role: "Hybrid",
    commitmentLevel: "Part-time",
    location: "Jimma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dawit",
    coFounderReady: true,
    academyProgress: 85,
    bio: "Healthcare professional interested in digital health solutions.",
  },
  {
    id: "4",
    name: "Sara Mohammed",
    email: "sara.m@jimma.edu.et",
    age: 21,
    university: "Jimma University",
    discipline: "Business Administration",
    skills: ["Financial Analysis", "Sales", "Digital Marketing"],
    interests: ["E-commerce", "Fintech"],
    role: "Business",
    commitmentLevel: "Full-time",
    location: "Jimma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    coFounderReady: true,
    academyProgress: 92,
    bio: "Business strategist with a passion for digital commerce.",
  },
  {
    id: "5",
    name: "Yonas Bekele",
    email: "yonas.b@jimma.edu.et",
    age: 23,
    university: "Jimma University",
    discipline: "Engineering",
    skills: ["Mobile Development", "Python", "Data Analysis"],
    interests: ["Logistics", "Supply Chain"],
    role: "Technical",
    commitmentLevel: "Full-time",
    location: "Addis Ababa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yonas",
    coFounderReady: true,
    academyProgress: 100,
    bio: "Engineer focused on building scalable logistics solutions.",
  },
  {
    id: "6",
    name: "Meron Alemayehu",
    email: "meron.a@jimma.edu.et",
    age: 22,
    university: "Jimma University",
    discipline: "Computer Science",
    skills: ["UI/UX Design", "React.js", "Product Management"],
    interests: ["Edtech", "Health-tech"],
    role: "Design",
    commitmentLevel: "Part-time",
    location: "Jimma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meron",
    coFounderReady: true,
    academyProgress: 78,
    bio: "Designer passionate about creating intuitive user experiences.",
  },
];

export const academyModules: AcademyModule[] = [
  {
    week: 1,
    phase: "THINK",
    title: "Problem Discovery & Customer Validation",
    description:
      "Learn to identify real problems worth solving through customer interviews.",
    tasks: [
      { id: "t1", title: "Conduct 10 customer interviews", completed: true },
      { id: "t2", title: "Identify 3 key pain points", completed: true },
      { id: "t3", title: "Create problem statement", completed: true },
    ],
    resources: [
      { title: "Customer Discovery Guide", type: "pdf", url: "#" },
      { title: "Interview Techniques Video", type: "video", url: "#" },
      { title: "Problem Statement Worksheet", type: "worksheet", url: "#" },
    ],
  },
  {
    week: 2,
    phase: "THINK",
    title: "Market Research & Competition Analysis",
    description:
      "Analyze your market and understand the competitive landscape.",
    tasks: [
      { id: "t4", title: "Map out 5 competitors", completed: true },
      { id: "t5", title: "Define target market size", completed: true },
      {
        id: "t6",
        title: "Create competitive advantage matrix",
        completed: false,
      },
    ],
    resources: [
      { title: "Market Research Framework", type: "pdf", url: "#" },
      { title: "Competition Analysis Template", type: "worksheet", url: "#" },
    ],
  },
  {
    week: 3,
    phase: "THINK",
    title: "Value Proposition & Business Model",
    description:
      "Design your unique value proposition and business model canvas.",
    tasks: [
      { id: "t7", title: "Complete Business Model Canvas", completed: false },
      { id: "t8", title: "Define value proposition", completed: false },
      { id: "t9", title: "Identify revenue streams", completed: false },
    ],
    resources: [
      { title: "Business Model Canvas Guide", type: "pdf", url: "#" },
      { title: "Ethiopian Startup Success Stories", type: "video", url: "#" },
    ],
  },
  {
    week: 4,
    phase: "THINK",
    title: "Solution Design & User Stories",
    description: "Translate customer needs into concrete product features.",
    tasks: [
      { id: "t10", title: "Write 10 user stories", completed: false },
      { id: "t11", title: "Prioritize features (MoSCoW)", completed: false },
      { id: "t12", title: "Create user journey map", completed: false },
    ],
    resources: [
      { title: "User Story Writing Guide", type: "pdf", url: "#" },
      {
        title: "Feature Prioritization Worksheet",
        type: "worksheet",
        url: "#",
      },
    ],
  },
  {
    week: 5,
    phase: "BUILD",
    title: "MVP Planning & Prototyping",
    description:
      "Design your minimum viable product and create initial prototypes.",
    tasks: [
      { id: "t13", title: "Define MVP scope", completed: false },
      { id: "t14", title: "Create wireframes", completed: false },
      { id: "t15", title: "Build low-fidelity prototype", completed: false },
    ],
    resources: [
      { title: "MVP Development Guide", type: "pdf", url: "#" },
      { title: "Prototyping Tools Tutorial", type: "video", url: "#" },
    ],
  },
  {
    week: 6,
    phase: "BUILD",
    title: "Technical Development Sprint 1",
    description: "Start building your MVP with core functionalities.",
    tasks: [
      { id: "t16", title: "Set up development environment", completed: false },
      { id: "t17", title: "Build core feature #1", completed: false },
      { id: "t18", title: "Conduct code review", completed: false },
    ],
    resources: [
      { title: "Development Best Practices", type: "pdf", url: "#" },
      { title: "Agile Methodology Workshop", type: "video", url: "#" },
    ],
  },
  {
    week: 7,
    phase: "BUILD",
    title: "User Testing & Iteration",
    description:
      "Test your prototype with real users and iterate based on feedback.",
    tasks: [
      { id: "t19", title: "Conduct 5 usability tests", completed: false },
      { id: "t20", title: "Analyze feedback", completed: false },
      { id: "t21", title: "Prioritize improvements", completed: false },
    ],
    resources: [
      { title: "Usability Testing Guide", type: "pdf", url: "#" },
      { title: "Feedback Analysis Template", type: "worksheet", url: "#" },
    ],
  },
  {
    week: 8,
    phase: "BUILD",
    title: "MVP Completion & Documentation",
    description: "Finalize your MVP and create product documentation.",
    tasks: [
      { id: "t22", title: "Complete MVP development", completed: false },
      { id: "t23", title: "Write technical documentation", completed: false },
      { id: "t24", title: "Create product demo video", completed: false },
    ],
    resources: [
      { title: "Product Documentation Template", type: "pdf", url: "#" },
      { title: "Demo Video Creation Guide", type: "video", url: "#" },
    ],
  },
  {
    week: 9,
    phase: "LAUNCH",
    title: "Go-to-Market Strategy",
    description: "Develop your launch strategy and marketing plan.",
    tasks: [
      { id: "t25", title: "Define marketing channels", completed: false },
      { id: "t26", title: "Create launch timeline", completed: false },
      { id: "t27", title: "Develop content calendar", completed: false },
    ],
    resources: [
      { title: "GTM Strategy Framework", type: "pdf", url: "#" },
      { title: "Digital Marketing Basics", type: "video", url: "#" },
    ],
  },
  {
    week: 10,
    phase: "LAUNCH",
    title: "Sales & Customer Acquisition",
    description: "Learn sales fundamentals and acquire your first customers.",
    tasks: [
      { id: "t28", title: "Create sales pitch", completed: false },
      {
        id: "t29",
        title: "Reach out to 20 potential customers",
        completed: false,
      },
      { id: "t30", title: "Close first 3 customers", completed: false },
    ],
    resources: [
      { title: "Sales Fundamentals Guide", type: "pdf", url: "#" },
      { title: "Customer Acquisition Workshop", type: "video", url: "#" },
    ],
  },
  {
    week: 11,
    phase: "LAUNCH",
    title: "Pitch Deck & Fundraising Basics",
    description:
      "Create a compelling pitch deck and understand funding options.",
    tasks: [
      { id: "t31", title: "Build pitch deck (10 slides)", completed: false },
      { id: "t32", title: "Practice pitch presentation", completed: false },
      { id: "t33", title: "Research funding opportunities", completed: false },
    ],
    resources: [
      { title: "Pitch Deck Template", type: "pdf", url: "#" },
      { title: "Ethiopian Investors Database", type: "worksheet", url: "#" },
      { title: "Pitch Coaching Session", type: "video", url: "#" },
    ],
  },
  {
    week: 12,
    phase: "LAUNCH",
    title: "Final Presentations & Graduation",
    description:
      "Present your startup to the community and graduate as Co-Founder Ready.",
    tasks: [
      { id: "t34", title: "Deliver final pitch", completed: false },
      { id: "t35", title: "Submit MVP and documentation", completed: false },
      { id: "t36", title: "Complete peer reviews", completed: false },
    ],
    resources: [
      { title: "Presentation Tips", type: "pdf", url: "#" },
      { title: "Demo Day Guide", type: "video", url: "#" },
    ],
  },
];

export const platformStats = {
  entrepreneursTrained: 500,
  teamsFormed: 120,
  activeMVPs: 45,
  successRate: 78,
};
