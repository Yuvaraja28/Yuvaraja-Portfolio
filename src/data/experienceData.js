const experienceData = [
  {
    name: 'Ignite Skylabs',
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
          'Developed a fully-featured mobile app using React Native for live bus tracking, route optimization, bus pass and in-app chat — reached 10K+ downloads on the Play Store.',
          'Worked on the LucasTVS project, developing a digital test platform with a dashboard to monitor and evaluate worker’s performance via camera feed.',
          'Implemented an NGINX load balancer for the WebSocket server handling live bus coordinates, enabling horizontal scaling and reducing single points of failure.',
          'Reviewed code for junior interns, and collaborated closely with backend and design teams to ensure feature integrity and user experience consistency.'
        ]
      },
      {
        role: 'Technical Support',
        duration: {
          start: new Date('03-25-2024'),
          end: new Date('06-25-2024'),
        },
        points: [
          'Re-architected a single-instance admin dashboard into a centralized multi-institute system for unified and scalable management.',
          'Developed a preview version of responsive landing page for the company’s product to boost user engagement.'
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