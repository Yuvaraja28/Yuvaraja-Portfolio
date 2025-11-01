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
        role: 'Senior Frontend Engineer',
        duration: {
          start: new Date('12-27-2024'),
          end: new Date('03-27-2025'),
        },
        points: [
          'Worked on PrintA4, a self-service printing kiosk solution enabling automated, cloud-based printing for institutions, now scaling to a multi-kiosk platform.',
          'Worked on the LucasTVS project, developing a digital test platform with a dashboard to monitor and evaluate worker’s performance via camera feed.',
          'Conducted code reviews for junior interns and collaborated closely with backend and design teams to maintain feature integrity and ensure a consistent user experience.'
        ]
      },
      {
        role: 'App Developer',
        duration: {
          start: new Date('06-27-2024'),
          end: new Date('12-27-2024'),
        },
        points: [
          'Developed Ridemap App in React Native with bus tracking, chat, bus pass, and AI chat; gained 10K+ downloads.',
          'Set up NGINX load balancer for WebSocket server streaming live bus data, improving reliability and availability.',
        ]
      },
      {
        role: 'Associate Trainee',
        duration: {
          start: new Date('03-25-2024'),
          end: new Date('06-25-2024'),
        },
        points: [
          'Revamped Admin Dashboard from single to multi-institute architecture for centralized control.',
        ]
      }
    ]
  }
  // {
  //   name: 'Devley',
  //   link: 'https://devley.1he.dev/',
  //   location: 'India',
  //   mode: 'Remote',
  //   type: 'Freelance',
  //   icon: 'assets/experiences/devley/devley.png',
  //   color: '#0000ff',
  //   positions: [
  //     {
  //       role: 'Full Stack Developer',
  //       duration: {
  //         start: new Date('02-01-2021')
  //       },
  //       points: [
  //         "Operated and managed Devley, a freelance software development service dedicated to providing innovative IT solutions.",
  //         "Independently conceptualized, designed, built, and launched the entire Devley website.",
  //         "Developed all products available in the Devley marketplace.",
  //         "Specializing in serving Discord-based clients with tailored software solutions.",
  //         "Personally handled all customer support tickets, ensuring exceptional service and client satisfaction."
  //       ]
  //     }
  //   ]
  // }
]

export default experienceData