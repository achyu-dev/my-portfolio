import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring Software Developer pursuing by B.Tech in ECE From PES University. I am a dedicated and Undergraduate student with a passion for creating Deep learning based applications. With 2 years of project based experience, I have worked with a variety of technologies, including PyTorch, TensorFlow, Node.js, C++, Python and more. My journey in this field  began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open source projects.`;
export const ABOUT_TEXT = `I am a dedicated and Undergraduate student with a passion for creating Deep learning based applications. With 2 years of project based experience, I have worked with a variety of technologies, including PyTorch, TensorFlow, Node.js, C++, Python and more. My journey in this field  began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to various projects.`;
//18:39
export const EXPERIENCES = [
  {
    duration: "June 2024 - Present",
    role: "Research Trainee",
    company: "Center of Information Security, Forensics and Cyber Resilience, PES University",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Python", "ns3 simulator", "Komondor"],
  },
  {
    duration: "May 2024 - Present",
    role: "Artificial Intelligence Intern",
    company: "iNeuBytes (Remote)",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "Python", "Machine learning", "Deep learning"],
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
    link: ""
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
    link:""
  },
];

export const CONTACT = {
  phoneNo: "+91 94488 26746 ",
  email: "achyugeorge7744@gmail.com",
};
