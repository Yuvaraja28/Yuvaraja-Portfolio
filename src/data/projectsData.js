const projectsData = {
  devley: {
    name: 'Devley',
    title: 'Digital Marketplace',
    showcase: 'assets/projects/devley/devley.png',
    banner: 'assets/projects/devley/devley-banner.png',
    links: [
      {
        name: 'web',
        url: 'https://devley.1he.dev',
      }
    ],
    technologies: ['next', 'react', 'node', 'motion', 'mongodb', 'websocket', 'cfWorkers', 'discordOAuth2', 'git'],
    description: "As the founder of Devley, I lead a digital marketplace offering solutions like Devactyl Bot and MineCore Bot. The dashboard uses Discord OAuth for authentication and MongoDB for database management, serving verified customers."
  },
  pts: { 
    name: 'Pterodactyl Trial Servers',
    title: 'Cloud Servers',
    showcase: 'assets/projects/trial-servers/trial-servers.png',
    banner: 'assets/projects/trial-servers/trial-servers-banner.png',
    links: [
      {
        name: 'github',
        url: 'https://github.com/yuvaraja28/Pterodactyl-Trial-Servers',
      },
      {
        name: 'web',
        url: 'https://trial.mysticlouds.com',
      }
    ],
    technologies: ['react', 'vite', 'express', 'websocket', 'pterodactyl', 'reCaptcha', 'git'],
    description: "Developed a client project that simplifies server management and enhances user experience by enabling temporary server access without requiring account in the Pterodactyl panel.",
  },
  fic: { 
    name: 'Frix Cloud',
    title: 'Remote Server Management',
    showcase: 'assets/projects/frix-cloud/frix-cloud.png',
    banner: 'assets/projects/frix-cloud/frix-cloud-banner.png',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Yuvaraja28/FrixCloud',
      }
    ],
    technologies: ['next', 'react', 'websocket', 'py', 'git'],
    description: "FrixCloud is a dynamic project that empowers users to remotely manage their local PC or server from any device, offering seamless control over programs, services, and server resources through an intuitive web dashboard.",
  },
  dip: {
    name: 'Diso Player',
    title: 'Spotify Inspired',
    showcase: 'assets/projects/disco-player/disco-player.png',
    banner: 'assets/projects/disco-player/disco-player-banner.png',
    links: [
      {
        name: 'web',
        url: 'https://yuvaraja28.github.io/Disco-Player',
      },
      {
        name: 'github',
        url: 'https://github.com/yuvaraja28/Disco-Player',
      }
    ],
    technologies: ['js', 'html', 'css', 'git'],
    description: "Developed a Spotify-inspired web application that allows users to listen to local songs through a web dashboard, providing seamless playback and control of music directly in the browser.",
  },
  tds: { 
    name: 'TD Problem Solver',
    title: 'Thermodynamics',
    showcase: 'assets/projects/td/td.png',
    banner: 'assets/projects/td/td-banner.png',
    links: [
      {
        name: 'web',
        url: 'https://td.1he.dev',
      },
      {
        name: 'github',
        url: 'https://github.com/Yuvaraja28/TD-NextJS',
      }
    ],
    technologies: ['next', 'node', 'css', 'git'],
    description: "Developed a thermodynamics project that enables users to calculate problems related to Otto, Diesel, Brayton, and Dual Cycles by inputting valid data, providing accurate and efficient solutions for various thermodynamic cycles.",
  },
  stc: {
    active: true,
    name: 'Student Connect',
    showcase: 'assets/projects/students-connect/students-connect.png',
    banner: 'assets/projects/students-connect/students-connect-banner.png',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Yuvaraja28/Student-Connect',
      }
    ],
    technologies: ['py', 'next', 'node', 'css', 'git'],
    description: "Developed a project to enhance communication between college management and students, allowing students to log in and access tasks assigned by staff, with a centralized dashboard for efficient task management.",
  },
  blc: { 
    active: false,
    name: 'Block Chat',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Yuvaraja28/BlockChat',
      }
    ],
    showcase: '',
    technologies: ['py', 'next', 'node', 'css', 'websocket', 'git'],
    description: "This is Chat WebApp Project based on blockchain Technology which creates Hash value and validates it with each and every block of message before sending it to other clients",
  },
}

export default projectsData;