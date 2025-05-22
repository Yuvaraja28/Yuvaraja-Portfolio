const experienceData = [
  {
    name: 'Ridemap',
    link: 'https://ridemap.in/',
    location: 'Pondicherry, India',
    mode: 'On-Site',
    type: 'Internship',
    icon: 'assets/experiences/ignite/ignite.png',
    color: '#ff0000',
    positions: [
      {
        role: 'Full Stack App Developer',
        duration: {
          start: new Date('06-27-2024'),
          end: new Date('03-27-2025'),
        },
        points: [
          'Worked on the LucasTVS project, developing a digital test platform with a dashboard to monitor and evaluate worker’s performance via camera feed.',
          'As a Fullstack Developer at Ridemap, led the team, recommended tech stacks, and participated in code reviews.',
          'Developed Ridemap’s V2 Mobile app using Bare React Native, featuring bus tracking,route updates, in app chat, bus pass management, and AI chatbot.'
        ]
      },
      {
        role: 'Technical Support',
        duration: {
          start: new Date('03-25-2024'),
          end: new Date('06-25-2024'),
        },
        points: [
          'Enhanced the Bus and User Management admin panel by adding features and fixing bugs to improve functionality and user experience',
          'Developed a responsive landing page for the company’s product to boost user engagement.'
        ]
      }
    ]
  },
  {
    name: 'Devley',
    link: 'https://devley.1he.dev/',
    location: 'India',
    mode: 'Remote',
    type: 'Freelance',
    icon: 'assets/experiences/devley/devley.png',
    color: '#0000ff',
    positions: [
      {
        role: 'Full Stack Developer',
        duration: {
          start: new Date('02-01-2021')
        },
        points: [
          "Operated and managed Devley, a freelance software development service dedicated to providing innovative IT solutions.",
          "Independently conceptualized, designed, built, and launched the entire Devley website.",
          "Developed all products available in the Devley marketplace.",
          "Specializing in serving Discord-based clients with tailored software solutions.",
          "Personally handled all customer support tickets, ensuring exceptional service and client satisfaction."
        ]
      }
    ]
  }
]

export default experienceData