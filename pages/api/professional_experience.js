// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const professionalExperience = [
    {
      id: 0,
      companyName: 'Emagesoft Private Limited',
      location: 'Bengaluru, Karnataka, India',
      position: 'Full Stack Developer',
      duration: 'May 2024 - Present',
      responsibilities: [
        'Developed dynamic and responsive web applications using Next.js for the frontend, ensuring a seamless user experience.',
        'Implemented backend services with Django and Django Rest Framework, facilitating efficient API integration and data management.',
        'Utilized PostgreSQL as the database for storing and managing application data, ensuring data integrity and performance.',
        'Integrated machine learning models using TensorFlow and Keras, enhancing application functionality with AI capabilities.',
        'Collaborated closely with cross-functional teams to gather requirements, design solutions, and implement new features.',
        'Conducted code reviews and provided mentorship to junior developers, improving overall code quality and team performance.',
        'Configured and managed project dependencies for frontend and backend development.',
        'Ensured secure and efficient handling of user authentication and authorization using JSON Web Tokens (JWT).'
      ],
      technologies: {
        frontend: {
          language: 'JavaScript',
          version: '20.13.1',
          dependencies: {
            axios: '^1.7.2',
            jsonwebtoken: '^9.0.2',
            next: '14.2.3',
            react: '^18',
            'react-dom': '^18',
            'react-select': '^5.8.0',
            'react-table': '^7.8.0',
          },
          devDependencies: {
            postcss: '^8',
            tailwindcss: '^3.4.1'
          }
        },
        backend: {
          language: 'Python',
          version: '3.12.3',
          dependencies: {
            django: '5.0.6',
            djangorestframework: '3.15.1',
            'django-cors-headers': '4.3.1',
            Pillow: '10.3.0',
            json: '2.0.9',
            PyJWT: '2.8.0'
          }
        },
        machineLearning: {
          tensorflow: '2.16.1',
          keras: '3.3.3'
        },
        database: 'PostgreSQL 16'
      }
    },
    {
      id: 1,
      companyName: 'Zidio Development Private Limited',
      location: 'Pune, Maharashtra, India',
      position: 'Full Stack Developer Intern',
      duration: 'March 2024 - May 2024',
      responsibilities: [
        'Developed real-time web applications utilizing ReactJS, NodeJS, NextJS, and MongoDB.',
        'Participated in daily stand-up meetings and sprint planning sessions, contributing to agile development processes.',
        'Worked closely with senior developers to debug and resolve issues, enhancing the functionality and reliability of applications.',
        'Created detailed documentation for developed features, facilitating future maintenance and development.'
      ]
    },
    {
      id: 2,
      companyName: 'Neubitat Consulting Private Limited',
      location: 'Bengaluru, Karnataka, India',
      position: 'Full Stack Developer Intern',
      duration: 'Jan 2024 - March 2024',
      responsibilities: [
        'Led the development of scalable web applications using WebSocket and Django, significantly enhancing real-time data handling capabilities.',
        'Collaborated with UI/UX designers to implement user-friendly interfaces, improving user engagement and satisfaction.',
        'Enhanced operational efficiency by automating workflows and optimizing application performance.',
        'Conducted comprehensive testing and debugging to ensure high-quality code and application stability.',
        'Presented progress reports and project updates to stakeholders, maintaining transparent communication.'
      ]
    },
    {
      id: 3,
      companyName: 'Incoders Lab',
      location: 'New Delhi, India',
      position: 'Python Developer Intern',
      duration: 'Jul 2022 - Aug 2022',
      responsibilities: [
        'Completed industrial training in Python programming, developing a deep understanding of Python and its applications.',
        'Developed multiple projects under the guidance of senior developers, focusing on best practices and efficient coding techniques.',
        'Participated in code reviews and received constructive feedback, leading to continuous improvement and skill enhancement.',
        'Assisted in the development of automation scripts, streamlining internal processes and reducing manual efforts.',
        'Contributed to team meetings and brainstorming sessions, providing innovative solutions and ideas.'
      ]
    }
  ];
  
  export default function handler(req, res) {
    res.status(200).json(professionalExperience);
  }
  