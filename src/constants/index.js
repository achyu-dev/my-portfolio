import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a budding software developer at PES University, where I'm pursuing a B.Tech in ECE. I am a committed undergraduate student who has a love for developing apps based on deep learning. Among the many technologies I have worked with are PyTorch, TensorFlow, Node.js, and others. I started out in this industry because I had a strong curiosity about how things worked, but it has since developed into a job where I constantly try to learn new skills and overcome obstacles. I work well in groups and take pleasure in finding creative answers to challenging, real-world issues. I like to remain busy, experiment with new technologies, and contribute to open source projects when I'm not developing.`;

export const ABOUT_TEXT = `I am a dedicated Final year Undergraduate student with a passion for creating Deep learning based applications. With 2 years of project based experience, I have worked with a variety of technologies, including PyTorch, TensorFlow, Node.js, C++, Python and more. My journey in this field  began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to various projects.`;

export const EXPERIENCES = [
  {
    duration: "June 2024 - July 2024",
    role: "Research Trainee",
    company: "Center of Information Security, Forensics and Cyber Resilience, PES University",
    description: `Working on Building a predictive Model for Throughput prediction in IEEE 802.11ax Networks. Also exploring predictions in Wired LAN or IEEE 802.3 networks`,
    technologies: ["PyTorch", "Apache netbeans", "Komondor Network simulator"],
  },
  {
    duration: "May 2024 - July 2024",
    role: "Artificial Intelligence and Machine Learning Intern",
    company: "iNeuBytes (Remote)",
    description: `Working on Random Forest, and various other Deep learning models to perform micro tasks. As part of the Major project, I am implementing Naive Bayes Classification for Twitter Sentiment Analysis.`,
    technologies: ["Python", "Machine learning", "Deep learning", "TensorFlow"],
  },
  {
    duration: "August 2024 - Present",
    role: "Full Stack Developer Intern",
    company: "True Data Software (Remote)",
    description: `Leading a team of developers to create a Smart CRM for multiple clients, and handling authnetication and Frontend Development. Also created An Enterprise Flask Application - Dashboard and integrated with HTML and CSS to fetch Device details from Raspberry pico using data recieved using TCP from Wiznet W5500 Ethernet.`,
    technologies: ["React JS", "Vite", "Firebase"],
  },

  
];

export const PROJECTS = [
  {
    title: "Design and Analysis of Different types of Antennas",
    image: project1,
    description:
      "A fully MATLAB Built design for various types of Antena like PIFA, DC Horn antenna.",
    technologies: ["MATLAB"],
    link: "https://github.com/achyu2003/Antenna-Design"
  },
  {
    title: "Digital Twin for University Campus",
    image: project2,
    description:
      "An Augmented reality application simulating the 12th floor of PES University.",
    technologies: ["Unity", "Blender"],
    link: "https://drive.google.com/file/d/12fw6OWqbxU3if4JpDcnLpYPZFckNrZ3N/view?usp=sharing"
  },
  {
    title: "Multi Threaded TCP server",
    image: project3,
    description:
      "A simple TCP server built off of Socket programs in python for simulating communication between a sender and a reciever.",
    technologies: ["Python", "Socket Programming"], 
    link: "https://gitlab.com/achyu2003/multi-threaded-tcp-server"
  },
  {
    title: "Multilingual Sentimental Analysis",
    image: project4,
    description:
      "Sentiment analysis of A twitter sentiment dataset using novel approaches. Still in the process of publishing in an international conference.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    link:""
  },
  {
    title: "Prediction of Handover failues in Cellular Networks",
    description:
      "Predicting Handover failure rates in Cellular networks using machine learning techniques",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    link:"https://github.com/sswayam23/Prediction-of-Handover-Failures-in-5G-Cellular-Networks-Using-Machine-Learning-Concepts"
  },
];

export const CONTACT = {
  phoneNo: "+91 94488 26746 ",
  email: "kskg0316@gmail.com"
};


