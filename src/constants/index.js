import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I'm a Software Engineer at KPMG India focused on backend systems, developer tooling, automation, and AI-assisted engineering workflows.
I work primarily with Python, FastAPI, Linux, test automation, and agentic tooling, building systems that are reliable, maintainable, and easy to validate.
I enjoy solving messy engineering problems, modernizing legacy workflows, experimenting with local AI systems, and contributing to open-source software.
`;

// export const ABOUT_TEXT = `
// I'm a software engineer with experience in deep learning, NLP, and full-stack development.
// Currently at KPMG India, I engineer scalable AI-driven solutions that streamline business processes.
// I have worked extensively with Python, PyTorch, TensorFlow, Node.js, and React.
// I thrive in collaborative environments that challenge me to design efficient systems and deliver production-ready applications.
// Outside of work, I explore emerging tech, build side projects, and contribute to the developer community.
// `;

export const EXPERIENCES = [
  {
    duration: "Jan 2025 - Present",
    role: "Analyst - Software Engineer",
    company: "KPMG India",
    description: `
    Working across backend engineering, AI-assisted automation, and developer tooling.
    Built Python and FastAPI services, developed a defect similarity platform integrating enterprise project-management systems, and worked on modernizing legacy UFT/VBScript automation into Selenium + Behave BDD workflows.
    Also explored agentic coding workflows and MCP-based tooling for structured code generation, validation, and test automation.
  `,
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Selenium",
      "Behave",
      "MCP",
      "Agentic AI",
    ],
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
    duration: "Aug 2023 - Oct 2024",
    role: "Full Stack Developer Intern",
    company: "True Data Software",
    description: `
    Developed ERP/CRM features using React, Python, Flask, and REST APIs.
    Worked on authentication, frontend development, data ingestion, and backend automation.
    Also built an enterprise Flask dashboard integrating device telemetry received over TCP from embedded hardware.
  `,
    technologies: ["React", "Vite", "Python", "Flask", "REST APIs", "TCP/IP"],
  },
  {
    duration: "May 2024 - Jul 2024",
    role: "AI/ML Intern",
    company: "iNeuBytes",
    description: `
    Implemented and evaluated classical machine learning and deep learning models across small applied ML tasks, including sentiment classification using Naive Bayes and NLP preprocessing techniques.
  `,
    technologies: ["Python", "scikit-learn", "TensorFlow", "NLP"],
  },
  {
    duration: "Jun 2024 - Jul 2024",
    role: "Research Trainee",
    company:
      "Center for Information Security, Forensics and Cyber Resilience, PES University",
    description: `
    Researched throughput prediction in IEEE 802.11ax wireless networks using machine-learning-based approaches and network simulation.
    Explored prediction techniques across both wireless and wired networking environments.
  `,
    technologies: ["Python", "Machine Learning", "Komondor", "Networking"],
  },
];

export const PROJECTS = [
  {
    title: "Design and Analysis of Antenna Systems",
    image: project1,
    description:
      "Designed and simulated multiple antenna configurations in MATLAB, including PIFA and horn antenna models, and analyzed their radiation characteristics.",
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
    title: "Multi-Threaded TCP Server",
    image: project3,
    description:
      "A multi-threaded TCP server built in Python using socket programming to explore concurrent client-server communication and network programming concepts.",
    technologies: ["Python", "Socket Programming", "TCP/IP"],
    link: "https://gitlab.com/achyu2003/multi-threaded-tcp-server",
  },
  {
    title: "Multilingual Sentiment Analysis",
    image: project4,
    description:
      "Sentiment analysis of A twitter sentiment dataset using novel approaches. Still in the process of publishing in an international conference.",
    technologies: ["Python", "TensorFlow", "PyTorch"],
    link: "",
  },
  {
    title: "Prediction of Handover Failures in Cellular Networks",
    description:
      "Built a machine learning pipeline to analyze cellular network telemetry and predict handover failures using feature engineering and classification techniques.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    link: "https://github.com/sswayam23/Prediction-of-Handover-Failures-in-5G-Cellular-Networks-Using-Machine-Learning-Concepts",
  },
];

export const CONTACT = {
  phoneNo: "+91 94488 26746 ",
  email: "achyuthss2003@gmail.com",
};
