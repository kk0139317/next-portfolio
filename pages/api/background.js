const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Excel Engineering College ( Anna University ), Tamil Nadu ( India )',
                degree: 'Bachelor of Engineering (BE) in Computer Science and Engineering',
                detail: "Bachelor's Degree in Computer Science and Engineering from Excel Engineering College ( Anna University ), Tamil Nadu ( India ).",
                year: '2020-2024'
            },
            {
                id: 1,
                title: 'Anugrah Narayan College, Patna, Bihar, India',
                degree: 'HSSC, PCM ( Physics, Chemistry , Mathematics )',
                detail: "Completed  HSSC, PCM ( Physics, Chemistry , Mathematics  from Anugrah Narayan College, Patna, Bihar, India.",
                year: '2018-2020'
            },
            {
                id: 2,
                title: 'G.D. High School Deokund, Bihar, India',
                degree: 'SSC, Bihar Board',
                detail: "Completed SSC from G.D. High School Deokund, Bihar, India.",
                year: '2016-2018'
            },
        ]
    },
    {
        expCards: [
  {
    id: 1,
    title: 'Emagesoft Private Limited',
    role: 'Full Stack Developer',
    url: 'https://emagevisionpl.com/',
    desc: 'Developed dynamic web applications using React, Next.js, and JavaScript, focusing on creating responsive and user-friendly interfaces.',
    year: 'May 2024 - Present',
    location: 'Bengaluru, Karnataka, India'
  },
  {
    id: 2,
    title: 'Zidio Development Private Limited',
    role: 'Full Stack Developer Intern',
    url: 'https://zidio.in/',
    desc: 'Developed real-time web applications using ReactJS, NodeJS, and NextJS, emphasizing performance and scalability.',
    year: 'March 2024 - May 2024',
    location: 'Pune, Maharashtra, India'
  },
  {
    id: 3,
    title: 'Neubitat Consulting Private Limited',
    role: 'Full Stack Developer Intern',
    url: 'no website',
    desc: 'Led the development of scalable web applications using WebSocket and Django, enhancing real-time data handling capabilities.',
    year: 'Jan 2024 - March 2024',
    location: 'Bangalore, Karnataka, India'
  },
  {
    id: 4,
    title: 'Incoders Lab',
    role: 'Python Developer Intern',
    url: 'https://incoderslab.com/',
    desc: 'Completed industrial training in Python programming, gaining practical experience in Python development under senior developer guidance.',
    year: 'Jul 2022 - Aug 2022',
    location: 'New Delhi, India'
  }


        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
