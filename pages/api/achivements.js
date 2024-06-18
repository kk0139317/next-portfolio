// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const achivements = [
    {
      id: 0,
      title: 'First Prize Winner, Sona College of Technology Hackathon',
      location: 'Salem, Tamil Nadu, India',
      date: 'April 2023',
      description: 'Awarded first prize for developing a project featuring deep learning and computer vision. Demonstrated proficiency in applying AI techniques to solve real-world problems.',
      link: 'https://example.com/sona-hackathon'
    },
    {
      id: 1,
      title: 'HackerRank 5-Star rating in Python',
      date: 'Oct 2023',
      location: 'Virtual',
      description: 'Achieved a 5-star rating on HackerRank for Python proficiency. Demonstrated consistent practice, concept mastery, and efficient code optimization skills.',
      link: 'https://example.com/hackerrank-profile'
    },
    {
      id: 2,
      title: 'Data Analytics Training, ICT Academy, Tamil Nadu',
      date: 'July 2023',
      location: 'Excel Engineering College, Tamil Nadu, India',
      description: 'Completed a 15-day intensive training course in Data Analytics, focusing on real-world applications and data-driven decision-making strategies. Gained hands-on experience with tools and techniques for data analysis.',
      link: 'https://example.com/data-analytics-training'
    }
  ];
  
  export default function handler(req, res) {
    res.status(200).json(achivements);
  }
  