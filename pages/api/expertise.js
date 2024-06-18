const expertise = [
    {
        id: 0,
        title: 'Web Development',
        desc: 'I am a proficient web developer with comprehensive experience in creating robust web applications utilizing Next.js, Django, PostgreSQL, MongoDB, Express.js, React.js, Node.js, and SpringBoot. I have a solid grasp of server-side rendering, API integration, and database management. My expertise allows me to deliver dynamic and efficient web solutions tailored to meet clients unique needs.',
    },
    {
        id: 1,
        title: 'Machine Learning/Deep Learning',
        desc: 'With a foundation in machine learning and deep learning, I have designed and showcased projects incorporating these technologies, including securing first place in a 30-hour non-stop hackathon. My skills encompass developing models for diverse applications and integrating them into scalable systems. I am passionate about utilizing AI to solve intricate problems and improve user experiences.',
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I am adept at using Jira and Scrum methodologies. I employ Jira to streamline project management tasks such as task assignment, prioritization, and progress tracking. Scrum has enhanced my teamwork capabilities through daily stand-ups, sprint planning, and retrospectives. My proficiency ensures the timely delivery of high-quality software products.",
    },
    {
        id: 3,
        title: 'Designing (UI/UX)',
        desc: 'I excel in using design tools like Figma, Adobe XD, and Adobe Illustrator. Through hackathons and freelance projects, I have gained hands-on experience in UI/UX and graphic design. Design is my passion, and it has enabled me to continually develop my creative skills and grow in the field.',
    },
    {
        id: 4,
        title: 'GitHub',
        desc: "GitHub is crucial for version control and collaboration. Its user-friendly interface and features like pull requests and issue tracking simplify the development process. Continuous integration keeps code updated. GitHub plays a key role in my success as a developer.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
