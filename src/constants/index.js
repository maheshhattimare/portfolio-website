import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  genxcoders,
  carrent,
  jobit,
  tripguide,
  threejs,
  todoapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "GenXCoders Pvt. Ltd.",
    icon: genxcoders,
    iconBg: "#383E56",
    date: "May 2024 - Dec 2024",
    points: [
      "Gained hands-on experience in core web technologies including HTML, CSS, JavaScript, Bootstrap, and Couch CMS for backend integration.",
      "Developed a Smart Review System enabling businesses to manage and analyze customer feedback efficiently.",
      "Integrated QR code-based feedback collection system for seamless customer input.",
      "Implemented automated logic to publish reviews with ratings of 3 or higher to Google Reviews, while filtering lower-rated feedback.",
      "Designed and deployed a customer dashboard for real-time data visualization and review management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  // {
  //   name: "BlogStack – Full-Stack Blog Platform",
  //   description:
  //     "A full-featured blog platform with user authentication, post creation, editing, and rich-text support. Integrated Appwrite for backend services and used TinyMCE for text editing.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "appwrite", color: "pink-text-gradient" },
  //     { name: "tinymce", color: "green-text-gradient" },
  //     { name: "react-hook-form", color: "yellow-text-gradient" },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/yourusername/blogstack",
  // },
  {
    name: "React To-Do App",
    description:
      "A clean and responsive To-Do list application allowing users to add, edit, delete, and persist tasks using Context API and LocalStorage.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "context-api", color: "green-text-gradient" },
      { name: "localstorage", color: "orange-text-gradient" },
      { name: "html-css", color: "pink-text-gradient" },
    ],
    image: todoapp,
    source_code_link: "https://github.com/maheshhattimare/react-todo-app", // Replace with actual link
  },
  // {
  //   name: "Personal Portfolio Website",
  //   description:
  //     "A modern, animated portfolio showcasing my skills, projects, and experience. Built with React and Three.js, featuring interactive 3D visuals and smooth user experience.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "threejs", color: "purple-text-gradient" },
  //     { name: "tailwindcss", color: "pink-text-gradient" },
  //     { name: "framer-motion", color: "green-text-gradient" },
  //   ],
  //   image: carrent, // Replace with your image import
  //   source_code_link: "https://github.com/yourusername/portfolio-website", // Replace with actual link
  // },
];

const socials = [
  {
    name: "GitHub",
    icon: "fab fa-github",
    link: "https://github.com/maheshhattimare",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/maheshhattimare/",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/maheshattimare/",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://x.com/MaheshHattimare",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
