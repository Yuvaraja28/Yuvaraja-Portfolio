import TDImage from '../assets/projects/td.png';
import devleyImage from '../assets/projects/devley.png';
import frixImage from '../assets/projects/frix-cloud.png';
import discoPlayerImage from '../assets/projects/disco-player.png';
import studentConnect from '../assets/projects/students-connect.png';
import pterodactylTrialServers from '../assets/projects/trial-servers.png';

const projectsData = [
  { 
    name: 'Devley',
    title: 'Digital Marketplace',
    banner: devleyImage,
    link: 'https://devley.yuvaraja.tech/',
    technologies: ['Next.js', 'Websocket', 'Cloudflare Workers', 'Cryptography', 'Discord OAuth', 'MongoDB'],
    description: "As the founder of Devley, I lead a digital marketplace offering solutions like Devactyl Bot and MineCore Bot. The dashboard uses Discord OAuth for authentication and MongoDB for database management, serving verified customers."
  },
  { 
    name: 'Pterodactyl Trial Servers',
    title: 'Cloud Servers',
    banner: pterodactylTrialServers,
    link: 'https://github.com/yuvaraja28/Pterodactyl-Trial-Servers',
    technologies: ['Vite', 'React.js', 'Express.js', 'Websocket', 'Pterodactyl', 'reCaptcha'],
    description: "Developed to offer a seamless method for users to create trial servers, this project simplifies server management and enhances user experience by enabling server access without requiring accounts in the Pterodactyl panel. Highlights my expertise in delivering customized, client-focused solutions in cloud hosting.",
  },
  { 
    name: 'Frix Cloud',
    title: 'Remote Server Management',
    banner: frixImage,
    link: 'https://github.com/Yuvaraja28/FrixCloud',
    technologies: ['Next.js', 'Python', 'Subprocesses', 'Websocket', 'Linux Server'],
    description: "FrixCloud is a dynamic project that empowers users to remotely manage their local PC or server from any device, offering seamless control over programs, services, and server resources through an intuitive web dashboard.",
  },
  {
    name: 'Diso Player',
    title: 'Spotify Inspired',
    banner: discoPlayerImage,
    link: 'https://yuvaraja28.github.io/Disco_Player/',
    technologies: ['Javascript', 'jsmediatags', 'HTML', 'CSS'],
    description: "Developed a Spotify-inspired web application that allows users to listen to local songs through a web dashboard, providing seamless playback and control of music directly in the browser.",
  },
  { 
    name: 'TD Problem Solver',
    title: 'Thermodynamics',
    banner: TDImage,
    link: 'https://td.yuvaraja.tech',
    technologies: ['Next.js', 'Node.js', 'CSS', 'Thermodynamics Formulae'],
    description: "Developed a thermodynamics project that enables users to calculate problems related to Otto, Diesel, Brayton, and Dual Cycles by inputting valid data, providing accurate and efficient solutions for various thermodynamic cycles.",
  },
  {
    active: true,
    name: 'Student Connect',
    banner: studentConnect,
    link: 'https://github.com/Yuvaraja28/Student-Connect',
    technologies: ['Python', 'Node.js', 'Next.js', 'HTML & CSS'],
    description: "Developed a project to enhance communication between college management and students, allowing students to log in and access tasks assigned by staff, with a centralized dashboard for efficient task management.",
  },
  { 
    active: false,
    name: 'Block Chat',
    link: 'https://github.com/Yuvaraja28/BlockChat',
    banner: '',
    technologies: ['Python', 'Node.js', 'Next.js', 'HTML & CSS', 'Cryptography', 'HTTP API\'s', 'Websocket'],
    description: "This is Chat WebApp Project based on blockchain Technology which creates Hash value and validates it with each and every block of message before sending it to other clients",
  },
]

export default projectsData;