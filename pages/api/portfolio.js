const portfolio = [
    {
        id: 0,
        projectName: "Ecommerce",
        url: "https://ecommerce-six-xi-13.vercel.app/",
        image: "images/ecommerce.png",
        projectDetail: "Developed a dynamic site using Next.js,MongoDB, and Firebase for a comprehensive e-commerce solution.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "CarHub",
        url: "https://car-hub-six-ivory.vercel.app/",
        image: "images/carhub.png",
        projectDetail: "An interactive web application for exploring car models, using Next.js and RapidAPI.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Rappid API"
            },
        ]
    },
    {
        id: 0,
        projectName: "Youtube Clone",
        url: "https://you-tube-silk.vercel.app/",
        image: "images/youtube.png",
        projectDetail: "JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Rappid API"
            },
        ]
    },
    {
        id: 0,
        projectName: "SmartStay: Guest Room Booking System",
        url: "https://github.com/kk0139317/GuestRoomBooking",
        image: "images/guest-room.png",
        projectDetail: "Utilized HTML, CSS, JavaScript, Bootstrap, Django, and SQLite-3 for a booking platform, designing an intuitive user interface and secure backend to handle reservations efficiently and ensure data integrity.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Django"
            },
            {
                tech: "PostgreSQL"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Django-rest-framework"
            },
            {
                tech: "Django-cors-headers"
            },
        ]
    },
    {
        id: 0,
        projectName: "HelpDesk: Ticketing System",
        url: "https://github.com/kk0139317/Ticketing-System",
        image: "images/helpdesk.png",
        projectDetail: "Developed using Django; focused on real-time, scalable web application features for efficient issue resolution.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Bootsrap"
            },
            {
                tech: "Django/Python"
            },
            {
                tech: "SQLite"
            },
        ]
    },
   
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
