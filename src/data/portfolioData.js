// src/data/portfolioData.js

import { FaGithub, FaLaptop, FaFile } from 'react-icons/fa';

// Import project images
import pluginImage from '../assets/images/plugin.png';
import demoGif from '../assets/images/demo.gif';
import petAppImage from '../assets/images/petapp2.png';
import weatherImage from '../assets/images/weather.png';
import portfolioImage from '../assets/images/portfolio.png';
import cluckFoodImage from '../assets/images/CluckFoodHomeScreen.png';
import tymImage from '../assets/images/tym.png';
import icsrImage from '../assets/images/ICSR.png';
import imuImage from '../assets/images/imu.png';

export const portfolioData = {
  projects: [
    {
      id: 0,
      title: "Inventory Management WordPress plugins [Freelance Web Developer]",
      description: "In this project, I developed a custom WordPress plugin with MySQL, AJAX, shortcodes, and admin menus for seamless integration. Key features include drag-and-drop hierarchy management and interactive inventory management systems. I also designed REST API endpoints for efficient data retrieval and management. A master MongoDB database was also developed and optimised to populate the local MySQL database with updated loot items, with queries optimised and real-time UI implemented to display and edit inventory items and their details.",
      techStack: ['WordPress', 'PHP', 'MySQL', 'MongoDB', 'JavaScript', 'CSS', 'HTML5', 'Node.js', 'Vercel'],
      image: pluginImage,
      device: 'laptop',
      links: [
        // Commented out as in original
        // { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/auan369/rockpaperscissors-frontend' },
        // { label: <p><FaLaptop/> Demo</p>, url: 'https://rockpaperscissors-frontend.onrender.com/' },
      ],
      category: 'Full Stack',
      status: 'Completed',
      featured: true
    },
    {
      id: 1,
      title: "Multiplayer Rock Paper Scissors WebSocket Game",
      description: "This is a real-time multiplayer Rock Paper Scissors game that allows players to create or join game rooms, play rounds with others, and receive instant feedback on game outcomes. The application features a dynamic backend powered by WebSockets for seamless real-time communication and a responsive frontend for engaging user interaction. It supports game room management, live updates, and multiplayer functionality.",
      techStack: ['React', 'Socket.IO', 'Node.js', 'Express.js', 'MongoDB', 'dotenv', 'CORS', 'Render'],
      image: demoGif,
      device: 'laptop',
      links: [
        { 
          label: 'GitHub', 
          icon: <FaGithub/>, 
          url: 'https://github.com/auan369/rockpaperscissors-frontend' 
        },
        { 
          label: 'Demo', 
          icon: <FaLaptop/>, 
          url: 'https://rockpaperscissors-frontend.onrender.com/' 
        },
      ],
      category: 'Full Stack',
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: "Tamagotchi-Inspired Pet App",
      description: "A web-based, Tamagotchi-inspired pet app where users care for a digital pet by managing hunger, happiness, and health bars through activities like feeding, mini-games, and cleaning. It is built with a React frontend for real-time updates and a backend API that is connected to MongoDB to store pet and user data, it offers a nostalgic experience reminiscent of classic virtual pet games. Deployed on Vercel for smooth performance and enhanced user engagement.",
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Vercel', 'Postman'],
      image: petAppImage,
      device: 'laptop',
      links: [
        { 
          label: 'GitHub', 
          icon: <FaGithub/>, 
          url: 'https://github.com/auan369/pet-app-main' 
        },
        { 
          label: 'Demo', 
          icon: <FaLaptop/>, 
          url: 'https://pet-app-frontend-drab.vercel.app/' 
        },
      ],
      category: 'Full Stack',
      status: 'Completed',
      featured: true
    },
    {
      id: 3,
      title: "WeatherAtYourLocation: Real-Time Weather Application",
      description: "A responsive web app that provides real-time weather information tailored to your location, demonstrating API integration skills and front-end development abilities. Provides real-time weather updates, detailed weather information (temperature, humidity, wind speed), forecast reporting (3-hour forecasts for 5 days), and a User-Friendly Interface. APIs used include IPinfo for location services based on IP address and OpenWeather for live weather data and forecasting.",
      techStack: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: weatherImage,
      device: 'laptop',
      links: [
        { 
          label: 'GitHub', 
          icon: <FaGithub/>, 
          url: 'https://github.com/auan369/WeatherAtYourLocation' 
        },
      ],
      category: 'Frontend',
      status: 'Completed',
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A portfolio website on a single-page design with smooth scrolling navigation, responsive layout, user-friendly interface. Designed on React and deployed on Vercel to create a functional, visually appealing portfolio to showcase my work and experience.",
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Vercel'],
      image: portfolioImage,
      device: 'laptop',
      links: [
        { 
          label: 'GitHub', 
          icon: <FaGithub/>, 
          url: 'https://github.com/auan369/my-portfolio/' 
        },
        { 
          label: 'Demo', 
          icon: <FaLaptop/>, 
          url: 'https://kyloke-portfolio.vercel.app/' 
        },
      ],
      category: 'Frontend',
      status: 'Completed',
      featured: false
    },
    {
      id: 5,
      title: "Cluck Food App",
      description: "Cluck 'n' Crave is a mobile application built as the capstone project for the Meta React Native Specialisation. Designed to enhance the restaurant experience, Cluck 'n' Crave provides users with an interactive platform for ordering food, managing profiles, and discovering menu options. The app's development involved extensive UI/UX planning, including wireframes and prototypes, user journey mapping, and iterative design improvements.",
      techStack: ['React Native', 'JavaScript', 'RESTful APIs', 'SQL', 'Figma'],
      image: cluckFoodImage,
      device: 'phone',
      links: [
        { 
          label: 'GitHub', 
          icon: <FaGithub/>, 
          url: 'https://github.com/auan369/cluckFood' 
        },
      ],
      category: 'Mobile',
      status: 'Completed',
      featured: true
    },
    {
      id: 6,
      title: "Curriculum Development for Coding & Web Development",
      description: "Created an engaging, accessible curriculum that simplifies complex topics, helping beginners gain confidence in coding and web development. The curriculum includes interactive exercises, multimedia resources, and practical coding challenges for young learners, designed to foster a love for coding and web development.",
      techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
      image: tymImage,
      device: 'laptop',
      links: [
        { 
          label: 'Link', 
          icon: <FaFile/>, 
          url: 'https://theyoungmaker.com/' 
        },
      ],
      category: 'Education',
      status: 'Completed',
      featured: false
    },
    {
      id: 7,
      title: "Thesis Publication in the ICSR + BioMed 2024 Conference",
      description: "My thesis, Personalised 3D Human Digital Twin with Soft-Body Feet for Walking Simulation, was published at the ICSR + BioMed 2024 Conference. As part of my Final Year Project with the Rehabilitation Research Institute of Singapore, I enhanced a human-robot interaction simulation, implementing soft-body physics to replicate human tissue and improve Ground Reaction Force accuracy. I used Python APIs, custom C++ scripting, and data visualisation, gaining skills in source control, testing, debugging, and team collaboration.",
      techStack: ['C++', 'Python', 'Data Analysis', 'Modeling and Simulation', 'MuJoCo'],
      image: icsrImage,
      device: 'laptop',
      links: [
        { 
          label: 'Link', 
          icon: <FaFile/>, 
          url: 'https://link.springer.com/book/9789819789627' 
        },
      ],
      category: 'Research',
      status: 'Published',
      featured: true
    },
    {
      id: 8,
      title: "IMU Mechatronics Capstone Project",
      description: "Improved IMU sensor integration, and led data analysis and testing phases, enhancing user experience through design improvements. From the sensor data captured and analysed, I was able to draw data-driven insights.",
      techStack: ['Arduino', 'C++', 'Python', 'Data Analysis', 'CAD modeling'],
      image: imuImage,
      device: 'laptop',
      links: [
        // Commented out as in original
      ],
      category: 'Hardware',
      status: 'Completed',
      featured: false
    }
  ],

  // Additional portfolio metadata
  owner: {
    name: "Kum Yew Loke",
    nickname: "Loki",
    title: "Web Developer",
    description: "A detail-oriented Full-Stack Developer dedicated to building and managing impactful websites and web applications, driving product success through meticulous design and functionality."
  },
  contact: {
    email: "lokekumyew@gmail.com",
    linkedin: "https://www.linkedin.com/in/kum-yew-loke-74a0b0205/",
    github: "https://github.com/auan369/",
    instagram: "https://www.instagram.com/lokey_ky/"
  },

  // Categories for filtering
  categories: [
    'All',
    'Full Stack',
    'Frontend', 
    'Mobile',
    'Education',
    'Research',
    'Hardware'
  ],

  // Skills/Technologies
  technologies: {
    languages: ['JavaScript', 'Python', 'PHP', 'C++'],
    frontend: ['React', 'React Native', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['GitHub', 'Vercel', 'Docker', 'CI/CD', 'Figma', 'Arduino']
  }
};

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  if (category === 'All') {
    return portfolioData.projects;
  }
  return portfolioData.projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return portfolioData.projects.find(project => project.id === id);
};

export const getProjectsByTechnology = (tech) => {
  return portfolioData.projects.filter(project => 
    project.techStack.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

export default portfolioData;