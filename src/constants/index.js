import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring Software Developer pursuing by B.Tech in ECE From PES University. I am a dedicated and Undergraduate student with a passion for creating Deep learning based applications. I have worked with a variety of technologies, including PyTorch, TensorFlow, Node.js, and more. My journey in this field  began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex and real-world problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open source projects.`;
export const ABOUT_TEXT = `I am a dedicated and Undergraduate student with a passion for creating Deep learning based applications. With 2 years of project based experience, I have worked with a variety of technologies, including PyTorch, TensorFlow, Node.js, C++, Python and more. My journey in this field  began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to various projects.`;

export const EXPERIENCES = [
  {
    duration: "June 2024 - Present",
    role: "Research Trainee",
    company: "Center of Information Security, Forensics and Cyber Resilience, PES University",
    description: `Working on Building a predictive Model for Throughput prediction in IEEE 802.11ax Networks. Also exploring predictions in Wired LAN or IEEE 802.3 networks`,
    technologies: ["PyTorch", "Apache netbeans", "Komondor Network simulator"],
  },
  {
    duration: "May 2024 - Present",
    role: "Artificial Intelligence Intern",
    company: "iNeuBytes (Remote)",
    description: `Working on Random Forest, and various other Deep learning models to perform micro tasks. As part of the Major project, I am implementing Naive Bayes Classification for Twitter Sentiment Analysis.`,
    technologies: ["Python", "Machine learning", "Deep learning", "TensorFlow"],
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
  email: "kskg031644@gmail.com",
};


