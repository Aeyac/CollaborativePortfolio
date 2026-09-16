export const teamData = [
  {
    id: 1,
    name: "Aaron Castro",
    role: "Full-Stack Web Developer",
    tagline: "Bridging complex backend with lightning-fast React SPAs.",
    avatar: "/src/assets/images/aaron.png",
    bio: "Aspiring Full-Stack Web Developer passionate about building modern Full-Stack applications, AI-Driven Development, and System Architecture.",
    education: {
      degree: "B.S. in Information Technology",
      institution: "Central Luzon State University",
      gradYear: "2028",
    },
    stats: {
      projectsCount: 6,
      contributions: "110+", //github commits count
    },
    skills: [
      { name: "React 18", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Laravel 13 & Java", category: "Backend" },
      { name: "REST API", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "Git & GitHub", category: "DevOps" },
      { name: "Inertia.js", category: "Frontend" },
      { name: "Inertia.js", category: "Backend" },
      { name: "Wordpress", category: "Design and Others" },
      { name: "Figma", category: "Design and Others" },
    ],
    socials: {
      github: "https://github.com/Aeyac",
      linkedin: "https://www.linkedin.com/in/aaron-castro-76a986392/",
      email: "castroaey17@gmail.com",
    },
    projects: [
      {
        id: "p1-1",
        title: "StockVantage",
        description:
          "A SaaS for small business to manage their stocks and inventory flow.",
        tags: ["React 18", "Laravel 13", "Interia.js", "Three.js", "MySQL"],
        image: "src/assets/images/StockVantageImage.png",
        githubUrl: "https://github.com/Aeyac/stockvantage",
      },
      {
        id: "p1-2",
        title: "CEd Registrars Office e-Services and Request Tracking System",
        description:
          "A Web Application for the CLSU College of Education Registrar office to streamline workflow about students' document requests and inquiries.",
        tags: ["React 18", "Laravel 13", "Interia.js", "Tailwind CSS", "MySQL"],
        image: "src/assets/images/CedWebSystem.png",
        githubUrl:
          "https://github.com/Aeyac/College_of_Education_Registrars_Office_e-Services_and_Request_Tracking_System",
      },
      {
        id: "p1-3",
        title: "FoundIT@CLSU",
        description:
          "A Desktop Application that records all lost and found items and tracks who receives and returns items.",
        tags: ["Java", "MySQL"],
        image: "src/assets/images/CLSULAF.png",
        githubUrl: "https://github.com/Aeyac/FoundIT-CLSU",
      },
    ],
  },

//AERON
  {
    id: 2,
    name: "Aeron C. Romano",
    role: "Front-End Web Developer",
    tagline: "Bringing imagination to life through interactive web experiences.",
    avatar: "/src/assets/images/me.jpg",
    bio: "Front-end bridges imagination and interaction, creating dynamic, captivating experiences.",
    education: {
      degree: "B.S. in Information Technology",
      institution: "Central Luzon State University",
      gradYear: "2029",
    },
    stats: {
      projectsCount: 2,
      contributions: "5",
    },
    skills: [
      { name: "Tailwind CSS", category: "Front-End" },
      { name: "JavaScript", category: "Front-End" },
      { name: "React 18", category: "Front-End" },
      { name: "MySQL", category: "Database" },
      { name: "GitHub", category: "Devops" },
      { name: "Git", category: "Devops" },
      { name: "WordPress", category: "Design & Others"},
      { name: "Google Stitch", category: "Design & Others"},
      { name: "Object-Oriented Programming", category: "Back-End"},
      { name: "Java", category: "Languages"},
      { name: "C#", category: "Languages"},
      { name: "C++", category: "Languages"},
      ],
            

    socials: {
      github: "https://github.com/aesy-ru",
      linkedin: "https://www.linkedin.com/feed/",
      email: "romanoaeron@gmail.com",
    },
    projects: [
      {
        id: "p2-1",
        title: "DSA Word Rush",
        description: "In collaboration with Aaron Castro, this is a classic word game that challenges players to form words from a set of letters within a time limit.",
        tags: ["Java", "C#", "Object-Oriented Programming"],
        image: "src/assets/images/DSA.png",
        githubUrl: "https://github.com/aesy-ru/Game",
      },
      {
        id: "p2-2",
        title: "Personal Portfolio",
        description: "A personal portfolio website showcasing my skills and projects.",
        tags: ["JavaScript", "React 18", "Tailwind CSS"],
        image: "src/assets/images/my.png",
        githubUrl: "https://github.com/aesy-ru/Portfolio",
      }
    ],
  },

  {
    id: 3,
    name: "Member Name Placeholder",
    role: "Member Role Placeholder",
    tagline: "Member Tagline Placeholder",
    avatar: "/src/assets/images/placeholder.jpg",
    bio: "Member Bio Placeholder",
    education: {
      degree: "Degree Placeholder",
      institution: "Institution Placeholder",
      gradYear: "YYYY",
    },
    stats: {
      projectsCount: 0,
      contributions: "0+",
    },
    skills: [{ name: "Skill Placeholder", category: "Category Placeholder" }],
    socials: {
      github: "https://github.com/placeholder",
      linkedin: "https://www.linkedin.com/in/placeholder",
      email: "placeholder@example.com",
    },
    projects: [
      {
        id: "p3-1",
        title: "Project Title Placeholder",
        description: "Project Description Placeholder",
        tags: ["Tag Placeholder"],
        image: "src/assets/images/placeholder.png",
        githubUrl: "https://github.com/placeholder/project",
      },
    ],
  },
];

// Static navigation links used by both the desktop nav and mobile drawer.
export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#team-grid", label: "Team" },
  { href: "#detailed-member", label: "Member Details" },
  { href: "#projects-showcase", label: "Projects" },
];
