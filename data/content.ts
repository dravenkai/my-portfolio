export const profile = {
  name: "Kaung Myat Thant",
  alsoKnownAs: "Draven Kai",
  role: "Junior Web Developer",
  school: "Myanmar Institute of Information Technology",
  schoolShort: "MIIT",
  year: "Fourth-year Software Engineering student",
  location: "Mandalay, Myanmar",
  email: "kaungmyatthant2004@gmail.com",
  phone: "09979111501",
  phoneDisplay: "09 979 111 501",
  phoneHref: "tel:+959979111501",
  telegram: "@DravenKai25",
  telegramHref: "https://t.me/DravenKai25",
  viberHref: "viber://chat?number=%2B959979111501",
  github: "https://github.com/dravenkai",
  summary:
    "I design and build full-stack web applications with React, Next.js, and Node.js. I am a fourth-year student at MIIT, and I care about interfaces that are easy to use and code that another developer can pick up.",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend and data",
    items: [
      "Node.js",
      "Express",
      "PHP",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Python",
      "Django",
      "Java",
      "MERN stack",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Figma",
      "VS Code",
      "Cursor",
      "Notion",
    ],
  },
];

export type Project = {
  title: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
  award?: string;
};

export const projects: Project[] = [
  {
    title: "Enginex",
    context: "Team project · MIIT Project Show 2026",
    summary:
      "A role-based engineering marketplace. Public visitors can browse listings, while clients, engineers, teams, and admins each have their own workspace for dashboards, profiles, and post management.",
    highlights: [
      "Next.js App Router, split by role so several people could build in parallel",
      "Authentication screens plus client, engineer, team, and admin areas",
      "Presented at the MIIT Project Show 2026",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/dravenkai/Enginex_React",
    demo: "https://enginex-react.vercel.app",
    image: "/images/enginex.png",
    award: "Certificate of Participation",
  },
  {
    title: "Sar Mal",
    context: "UI/UX design · MIIT Project Show 2026",
    summary:
      "I designed the interface for this campus canteen app. Students search the menu, filter by category, add snacks to a cart, and place an order from the counter.",
    highlights: [
      "Menu, cart, and order flow designed for the MIIT canteen",
      "Special Award for outstanding performance at the Project Show",
      "Also recognized with a certificate of participation",
    ],
    stack: ["UI/UX design"],
    image: "/images/sar-mal-ui.jpg",
    award: "Special Award",
  },
  {
    title: "AzureMed Hub",
    context: "Full-stack product",
    summary:
      "A pharmacy inventory system for English and Myanmar medicines and surgical supplies, with product browsing, sign-in, and AI medicine detection.",
    highlights: [
      "Public catalog with live stock counts and product categories",
      "Next.js interface backed by PHP and MySQL",
      "AI detection flow alongside the normal product browse",
    ],
    stack: ["React", "Next.js", "PHP", "MySQL"],
    award: "Certificate of Participation",
    github: "https://github.com/dravenkai/Medical-Management-Project",
    demo: "https://medical-management-project.vercel.app",
    image: "/images/azuremed.png",
  },
  {
    title: "Anonspace",
    context: "Social media website",
    summary:
      "A social media website with a For You feed, communities, posts, and reposts. Members can join a community and publish from their own profile.",
    highlights: [
      "Home feed, popular posts, and saved posts",
      "Communities with member counts and a way to start a new one",
      "Next.js and TypeScript interface with Tailwind CSS",
      "PHP backend with MongoDB",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "PHP"],
    demo: "https://anonspace4.com",
    image: "/images/anonspace.png",
  },
  {
    title: "Computer Architecture Simulator",
    context: "Personal project",
    summary:
      "A teaching tool for the fetch-decode-execute cycle. The CPU, ALU, registers, memory, and cache run in the browser. An Express and MySQL API stores saved programs and reports.",
    highlights: [
      "Step through instructions without a backend",
      "Performance view for cycles, CPI, and cache ratios",
      "Shared library of assembly programs when MySQL is connected",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MySQL"],
    github: "https://github.com/dravenkai/computer-architecture-simulator",
  },
  {
    title: "Medicine Info Bot",
    context: "Personal project",
    summary:
      "A Telegram bot that explains common medicines in plain language and reminds the user to check with a doctor before taking anything.",
    highlights: [
      "Inline keyboard for choosing a medicine",
      "Short descriptions for everyday drugs such as paracetamol and ibuprofen",
      "Disclaimer shown before any information",
    ],
    stack: ["Python", "python-telegram-bot"],
    github: "https://github.com/dravenkai/my-medicine-bot",
  },
  {
    title: "Plannco Home Decoration",
    context: "Coursework · Web Design",
    summary:
      "A multi-section marketing site for a home-decoration company, built as a web design final project with a custom layout, service pages, and a quote call to action.",
    highlights: [
      "Hand-written HTML, CSS, and JavaScript",
      "Sections for services, properties, customers, and contact",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dravenkai/wdf11project",
  },
];

export const certificates = [
  {
    title: "Special Award",
    issuer: "Myanmar Institute of Information Technology",
    detail: "Sar Mal, MIIT Project Show 2026",
    date: "19 August 2026",
    image: "/images/sar-mal-award.png",
  },
  {
    title: "Certificate of Participation",
    issuer: "Myanmar Institute of Information Technology",
    detail: "Sar Mal, MIIT Project Show 2026",
    date: "19 August 2026",
    image: "/images/sar-mal-participation.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "Myanmar Institute of Information Technology",
    detail: "Enginex, MIIT Project Show 2026",
    date: "19 August 2026",
    image: "/images/enginex-certificate.png",
  },
  {
    title: "Certificate of Participation",
    issuer: "Myanmar Institute of Information Technology",
    detail: "Medicine Inventory and Sales Management System, MIIT Project Show 2026",
    date: "19 August 2026",
    image: "/images/medicine-inventory-certificate.jpg",
  },
  {
    title: "HackAtom",
    issuer: "Science Festival Myanmar 2025",
    detail: "Ministry of Science and Technology",
    date: "2025",
    image: "/images/science-festival-2025.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "Cursor AI Hackathon Myanmar",
    detail: "Team The Boys",
    date: "29 August 2026",
    image: "/images/cursor-hackathon.png",
  },
  {
    title: "Professional MERN Stack Course",
    issuer: "Code Lab",
    detail: "JavaScript, Node.js, Express, MongoDB, React, and APIs",
    date: "9 October 2026",
    image: "/images/code-lab.png",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "AI Singapore and ASEAN Foundation",
    detail: "AI Ready ASEAN Youth Challenge",
    date: "22 May 2026",
    image: "/images/ai-ready-asean.png",
  },
];
