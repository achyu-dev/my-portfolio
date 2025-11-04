import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I'm an Analyst at KPMG India, passionate about building intelligent and scalable systems. 
With hands-on experience across AI, full-stack development, and system design, I specialize in creating high-impact solutions powered by Python, PyTorch, and modern web frameworks. 
Curiosity drives my craft — I enjoy solving real-world problems, experimenting with new technologies, and contributing to open-source projects.
`;

export const ABOUT_TEXT = `
I'm a software engineer with experience in deep learning, NLP, and full-stack development. 
Currently at KPMG India, I engineer scalable AI-driven solutions that streamline business processes. 
I have worked extensively with Python, PyTorch, TensorFlow, Node.js, and React. 
I thrive in collaborative environments that challenge me to design efficient systems and deliver production-ready applications. 
Outside of work, I explore emerging tech, build side projects, and contribute to the developer community.
`;

export const EXPERIENCES = [
  {
    duration: "Jan 2025 - Present",
    role: "Analyst",
    company: "KPMG India",
    description: `Engineering a defect similarity engine using advanced NLP techniques to streamline the software testing process. The project focuses on leveraging natural language processing to identify and categorize software defects, thereby enhancing the efficiency and accuracy of testing procedures.`,
    technologies: ["Python", "Gradio"],
  },
  {
    duration: "June 2024 - July 2024",
    role: "Research Trainee",
    company:
      "Center of Information Security, Forensics and Cyber Resilience, PES University",
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
    duration: "August 2024 - October 2024",
    role: "Full Stack Developer Intern",
    company: "True Data Software (Remote)",
    description: `Leading a team of developers to create a Smart CRM for multiple clients, and handling authnetication and Frontend Development. Also created An Enterprise Flask Application - Dashboard and integrated with HTML and CSS to fetch Device details from Raspberry pico using data recieved using TCP from Wiznet W5500 Ethernet.`,
    technologies: ["React JS", "Vite", "Supabase", "Flask", "Raspberry Pi"],
  },
];

export const PROJECTS = [
  {
    title: "Design and Analysis of Different types of Antennas",
    image: project1,
    description:
      "A fully MATLAB Built design for various types of Antena like PIFA, DC Horn antenna.",
    technologies: ["MATLAB"],
    link: "https://github.com/achyu2003/Antenna-Design",
  },
  {
    title: "Digital Twin for University Campus",
    image: project2,
    description:
      "An Augmented reality application simulating the 12th floor of PES University.",
    technologies: ["Unity", "Blender"],
    link: "https://drive.google.com/file/d/12fw6OWqbxU3if4JpDcnLpYPZFckNrZ3N/view?usp=sharing",
  },
  {
    title: "Multi Threaded TCP server",
    image: project3,
    description:
      "A simple TCP server built off of Socket programs in python for simulating communication between a sender and a reciever.",
    technologies: ["Python", "Socket Programming"],
    link: "https://gitlab.com/achyu2003/multi-threaded-tcp-server",
  },
  {
    title: "Multilingual Sentimental Analysis",
    image: project4,
    description:
      "Sentiment analysis of A twitter sentiment dataset using novel approaches. Still in the process of publishing in an international conference.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    link: "",
  },
  {
    title: "Prediction of Handover failues in Cellular Networks",
    description:
      "Predicting Handover failure rates in Cellular networks using machine learning techniques",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    link: "https://github.com/sswayam23/Prediction-of-Handover-Failures-in-5G-Cellular-Networks-Using-Machine-Learning-Concepts",
  },
];

export const CONTACT = {
  phoneNo: "+91 94488 26746 ",
  email: "achyuthss2003@gmail.com",
};
