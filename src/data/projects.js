// Project 1 Images
import project1Main from '../assets/1.Main_Image.png'

// Project 2 Images
import project2Main from '../assets/2.Main_Image.png'
import project2Second from '../assets/2.Second_Image.png'

// Project 3 Images
import project3Main from '../assets/3.Main_Image.jpeg'
import project3Second from '../assets/3.Second_Image.jpeg'
import project3Third from '../assets/3.Third_Image.jpeg'

// Project 4 Images
import project4Main from '../assets/4.Main_Image.jpeg'
import project4Second from '../assets/4.Second_Image.jpeg'

// Project 5 Images
import project5Main from '../assets/5.Main_Image.png'
import project5Second from '../assets/5.Second_Image.png'

// Project 6 Images
import project6Main from '../assets/6.Main_Image.jpg'
import project6Second from '../assets/6.Second_Image.jpg'
import project6Third from '../assets/6.Third_Image.jpg'

// Project 7 Images
import project7Main from '../assets/7.Main_Image.jpg'
import project7Second from '../assets/7.Second_Image.jpg'

export const projectsData = [
  {
    id: 1,
    title: "Version Control System (Git-like) using Database",
    category: "web",
    categoryLabel: "System Design",
    shortDescription:
      "A custom-built version control system that mimics Git fundamentals using database-backed storage.",
    fullDescription:
      "A fully custom version control system engineered from the ground up using database storage instead of a file-object structure. Supports commit creation, branching, restoring versions, file tracking, and repository history management. Inspired by Git internals and built as part of a deep-dive into compilers, file systems, and backend system architecture.",
    icon: "FaCodeBranch",
    technologies: ["Python", "SQLite/PostgreSQL", "Hashing", "Trees", "CLI Tools"],
    features: [
      "Commit creation with unique hashing",
      "Branch creation and switching",
      "File staging and version snapshots",
      "Tree and blob object modeling",
      "Restore previous commits",
      "Repository initialization system"
    ],
    liveUrl: "https://github.com/Tehman700",
    githubUrl: "https://github.com/Tehman700",
    images: [project1Main],
    hasVideo: false
  },
{
  id: 2,
  title: "Full Stack Health Platform for Luther Health LTD",
  category: "web",
  categoryLabel: "Backend Microservices",
  shortDescription:
    "A full-stack medical management platform built for Luther Health LTD, featuring secure authentication, patient records, appointment workflows, and admin dashboards.",
  fullDescription:
    "A production-grade health management system developed for Luther Health LTD using a microservices-based backend architecture. The platform includes secure user authentication, patient health record management, appointment scheduling, medical forms, and admin dashboards. The backend was optimized for scalability with separate services for auth, patient data, and reporting. The system also integrates real-time data updates, cloud deployment, and a responsive frontend for doctors, staff, and admins.",
  icon: "FaHeartbeat",
  technologies: [
    "Python",
    "Django REST Framework",
    "React",
    "Microservices",
    "JWT Authentication",
    "PostgreSQL",
    "Github Actions",
    "Tailwind"
  ],
  features: [
    "Role-based Authentication (Admin, Doctor, Staff)",
    "Patient Record Management",
    "Appointment Booking System",
    "Medical Forms & Health Data Storage",
    "Admin Analytics Dashboard",
    "Fully Responsive Frontend",
    "Secure JWT Token Authentication",
    "Cloud Deployment & Scaling Support"
  ],
  liveUrl: "https://luther.health/",
  githubUrl: "https://github.com/Tehman700/ukreact",
  images: [project2Main, project2Second],
  hasVideo: false
},

{
  id: 3,
  title: "Real-Time Asynchronous Chat Application Using WebSockets with End-to-End Encryption",
  category: "web",
  categoryLabel: "Web Application",
  shortDescription:
    "A secure real-time chat platform built with Django Channels, featuring end-to-end encryption, private rooms, chat history, and user accounts.",
  fullDescription:
    "A fully functional real-time messaging application built using Django Channels and WebSockets. The platform supports secure end-to-end encrypted chat communication, private and public chat rooms, user accounts, and persistent chat history stored in a relational database. Advanced features include message delivery receipts, online/offline indicators, typing status, and efficient async communication. The system was designed for scalability with Redis-backed channel layers and optimized database models for storing preserved chats.",
  icon: "FaComments",
  technologies: [
    "Python",
    "Django",
    "Django Channels",
    "WebSockets",
    "End-to-End Encryption",
    "Redis",
    "PostgreSQL"
  ],
  features: [
    "End-to-End Encrypted Messaging",
    "Public & Private Chat Rooms",
    "Real-Time Messaging with WebSockets",
    "User Accounts & Authentication",
    "Typing Indicators & Online Status",
    "Persistent Chat History",
    "Room Creation & Member Controls",
    "Scalable Redis-Powered Channel Layer"
  ],
  liveUrl:
    "https://github.com/Tehman700/Real-Time-Chat-App-2-Way-Communication-WebSockets",
  githubUrl:
    "https://github.com/Tehman700/Real-Time-Chat-App-2-Way-Communication-WebSockets",
  images: [project3Main, project3Second, project3Third],
  hasVideo: false
},
{
  id: 4,
  title: "Full Stack Blog API using Django REST Framework",
  category: "web",
  categoryLabel: "API",
  shortDescription:
    "A complete blog backend built with Django REST Framework featuring JWT auth, role-based access, comments, reactions, and full CRUD operations.",
  fullDescription:
    "A production-ready Blog REST API developed using Django REST Framework with secure JWT authentication, role-based permissions, and a complete blog management system. The API supports blog creation, editing, deletion, nested comments, reactions, pagination, and user roles such as writer and reader. The platform includes custom user models, optimized database relations, reusable API responses, custom exception handling, and token-protected routes. The project also includes a minimal frontend for testing and integration.",
  icon: "FaPenFancy",
  technologies: [
    "Python",
    "Django REST Framework",
    "JWT Authentication",
    "PostgreSQL",
    "Custom User Model",
    "Pagination",
    "Redis"
  ],
  features: [
    "JWT Authentication & Refresh Tokens",
    "Role-Based Access Control (Writer, Reader)",
    "Create, Edit & Delete Blog Posts",
    "Nested Comments System",
    "Reactions (Like/Dislike)",
    "Custom API Response Format",
    "Custom User Model with Roles",
    "Protected Endpoints via JWT",
    "Paginated Blog & Comments APIs"
  ],
  liveUrl: "https://github.com/Tehman700/full-stack-api",
  githubUrl: "https://github.com/Tehman700/full-stack-api",
  images: [project4Main, project4Second],
  hasVideo: false
},
  {
    id: 5,
    title: "AI Agent for Teachers (CLO & Bloom’s Taxonomy Report Generator)",
    category: "web",
    categoryLabel: "AI Automation",
    shortDescription:
      "AI-powered tool that auto-generates academic reports from documents based on CLOs and Bloom’s Taxonomy.",
    fullDescription:
      "A smart Java-based AI agent that analyzes academic documents and auto-generates structured reports aligned with CLOs and Bloom’s Taxonomy levels. Uses OpenAI GPT models for classification and summaries. Features real-time updates, tree data structures for processing, vector ID storage for offline reliability, and seamless auto PDF generation.",
    icon: "FaRobot",
    technologies: ["Java", "OpenAI GPT", "PDF Generation", "Trees DS", "Vector ID Storage"],
    features: [
      "Automatic CLO extraction",
      "Bloom’s Taxonomy level classification",
      "PDF report generation",
      "Real-time updates",
      "Document analysis using GPT models",
      "Offline vector-based caching"
    ],
    liveUrl: "https://github.com/Tehman700/Dr.Fawad_AI_Agent_Course",
    githubUrl: "https://github.com/Tehman700/Dr.Fawad_AI_Agent_Course",
    images: [project5Main, project5Second],
    hasVideo: false
  },

  {
    id: 6,
    title: "Potholes Complaint System (Winning Project)",
    category: "mobile",
    categoryLabel: "Mobile + Cloud",
    shortDescription:
      "Android system where users report potholes with photos, verified via Azure Vision AI and managed through Spring Boot.",
    fullDescription:
      "A fully functional pothole reporting application built as an OOP semester project and awarded 1st place. Users report potholes through an Android app with image uploads. Azure Vision AI validates the complaints, while a Spring Boot backend manages submission flow with PostgreSQL storage. Admin panel supports verification, resolution, and deletion of reports.",
    icon: "FaMobile",
    technologies: ["Android", "Azure Vision AI", "Spring Boot", "PostgreSQL", "Java"],
    features: [
      "Photo-based pothole detection using Azure AI",
      "User-side Android reporting app",
      "Spring Boot admin backend",
      "Complaint verification workflow",
      "Resolve/delete options for admins",
      "Cloud-based data storage"
    ],
    liveUrl: "#",
    githubUrl: "#",
    images: [project6Main, project6Second, project6Third],
    hasVideo: false
  },
{
  id: 7,
  title: "2-Player Street Shooting Game using OOP in Python",
  category: "Game",
  categoryLabel: "Desktop Game",
  shortDescription:
    "A fast-paced 2-player street shooting game built with Python OOP, featuring traffic obstacles, multiple difficulty modes, timers, and real-time scoring.",
  fullDescription:
    "A competitive 2-player shooting game developed using Python and Object-Oriented Programming principles. Players face off in a street-style arena where they shoot targets and navigate through dynamic obstacles. The game includes three difficulty modes—Easy, Medium, and Hard—each introducing increasingly challenging traffic patterns. The system features real-time scoring, keyboard-based controls, timers per mode, and interactive gameplay mechanics. Designed as a desktop game showcasing clean OOP architecture, class-based game objects, and collision handling.",
  icon: "FaGamepad",
  technologies: [
    "Python",
    "OOP",
    "Pygame"
  ],
  features: [
    "2-Player Real-Time Shooting Gameplay",
    "Easy, Medium & Hard Difficulty Modes",
    "Dynamic Traffic Obstacles (One-Way & Two-Way)",
    "Responsive Keyboard Controls",
    "Score Tracking for Both Players",
    "Penalty System for Hitting Obstacles",
    "Countdown Timer for Each Mode",
    "Collision Detection & Smooth Animations"
  ],
  liveUrl: "https://github.com/Tehman700?tab=repositories",
  githubUrl: "https://github.com/Tehman700?tab=repositories",
  images: [project7Main, project7Second],
  hasVideo: false
}
];

export const filterCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "UI/UX" }
];
