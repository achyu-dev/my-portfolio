export const HERO_CONTENT = `
I'm a Software Engineer at KPMG India focused on building reliable backend systems, developer tools, and production-ready applications.
I work primarily with Python, FastAPI, databases, Linux, and modern web technologies, with experience across APIs, automation, distributed systems, and AI-assisted workflows.
I enjoy solving complex engineering problems, improving existing systems, and building software that is scalable, maintainable, and easy to debug.
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
  {
    duration: "May 2024 - Jul 2024",
    role: "AI/ML Intern",
    company: "iNeuBytes",
    description: `
    Implemented and evaluated classical machine learning and deep learning models across small applied ML tasks, including sentiment classification using Naive Bayes and NLP preprocessing techniques.
  `,
    technologies: ["Python", "scikit-learn", "TensorFlow", "NLP"],
  },
];

export const PROJECTS = [
  {
    title: "Project Pegasus",
    description:
      "Building a local-first AI voice assistant for Linux using on-device speech recognition, local LLM inference, and structured tool-execution workflows across Debian- and Arch-based environments.",
    technologies: [
      "C++",
      "Python",
      "Linux",
      "llama.cpp",
      "whisper.cpp",
      "Local LLMs",
    ],
    status: "Coming Soon",
    link: null,
  },
  {
    title: "Prediction of Handover Failures in Cellular Networks",
    description:
      "Built a machine learning pipeline for cellular network telemetry, combining structured data processing, feature engineering, and classification techniques to predict handover failures.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    link: "https://github.com/sswayam23/Prediction-of-Handover-Failures-in-5G-Cellular-Networks-Using-Machine-Learning-Concepts",
  },
  {
    title: "Multilingual Sentiment Analysis",
    description:
      "Developed and evaluated multilingual sentiment-classification workflows using NLP preprocessing and machine learning techniques across social-media text datasets.",
    technologies: ["Python", "NLP", "TensorFlow", "PyTorch"],
    link: "",
  },
  {
    title: "Pharma Information Retrieval System",
    description:
      "Built a Flask-based document retrieval service with modular REST APIs for indexing, searching, and retrieving structured pharmaceutical information.",
    technologies: ["Python", "Flask", "REST APIs", "Information Retrieval"],
    link: "",
  },
];
