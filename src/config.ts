export const siteConfig = {
  name: "Mohammadali Azani",
  title: "Software & Machine Learning Engineer",
  description: "Portfolio website of Mohammadali Azani",
  accentColor: "#06b6d4",
  social: {
    email: "ali_azani@yahoo.com",
    linkedin: "https://www.linkedin.com/in/mohammadali-azani",
    twitter: "https://x.com/Ali___Zn",
    github: "https://github.com/aliazani/",
  },
  aboutMe:
    "Versatile engineer with a strong background in backend development, distributed systems, and data-driven applications. Experienced with Django, Spring Boot, and Docker in scalable projects across e-commerce, IoT, and computer vision. Skilled in building end-to-end ML systems, from model design to deployment on cloud platforms. Strong background in Python, TensorFlow/Keras, and scalable backend technologies. Passionate about combining research-driven methods with practical engineering.",
  skills: [
    "Python", "Java", "C++", "TypeScript", "JavaScript", "Dart", 
    "Spring Boot", "Django", "Express.js", "Vue.js", "Nuxt.js", "Flutter",
    "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "LLMs", "Pandas",
    "Docker", "Kubernetes", "Git", "CI/CD", 
    "PostgreSQL", "MySQL", "MongoDB", "Firebase"
  ],
  projects: [
    {
      name: "Treatment Center Assessment Tool (WHO)",
      description:
        "Developed for the World Health Organization (WHO), this mobile & web application enables rapid structural assessments of healthcare facilities during Ebola and Marburg outbreaks. Built with Flutter, Dart, and Clean Architecture, the tool supports offline assessments, real-time progress tracking, dynamic scoring, and multi-format exports (PDF, Excel, Word).",
      link: "https://github.com/aliazani/treatment_center",
      skills: ["Flutter", "Dart", "Firebase", "CI/CD"],
    },
    {
      name: "LLM-MathEval",
      description:
        "LLM-MathEval is a modular, Dockerized pipeline for fine-tuning, evaluating and benchmarking LLMs on mathematical reasoning: adapter-based tuning on the MathChat benchmark; automated JMeter load tests with CPU/GPU monitoring and performance-load correlations; end-to-end QA accuracy pipelines outputting CSV/JSON; Phoenix observability with carbon-footprint tracking; and fully reproducible deployment.",
      link: "https://github.com/aliazani/LLM-MathEval",
      skills: ["Python", "PyTorch", "Hugging Face", "Docker", "LLMOps"],
    },
    {
      name: "Peace Yoga Website",
      description:
        "A full-stack web application creating a comprehensive yoga platform. The frontend delivers a fully responsive UI with SSR for optimal SEO performance using Nuxt 3, Vue 3, and Tailwind CSS. The backend provides RESTful APIs managing yoga-related data, teacher profiles, and activities, built with Express.js and PostgreSQL. Both components are deployed on Vercel.",
      link: "https://github.com/hajizadeh2079/hyp-frontend", 
      skills: ["Vue.js", "Nuxt.js", "TypeScript", "Express.js", "PostgreSQL"],
    },
    {
      name: "Car Companion App",
      description:
        "Developed a Django-based backend for a vehicle management mobile app featuring real-time 3D visualisation. Implemented RESTful APIs supporting component-level access control, user authentication, and vehicle monitoring. Built with Django, PostgreSQL, JWT, and Guardian, deployed on Azure.",
      link: "https://github.com/car-companion/",
      skills: ["Django", "PostgreSQL", "REST APIs", "JWT", "Docker"],
    },
    {
      name: "BloodCellCNN",
      description:
        "This project focuses on the classification of blood cell images into eight distinct classes using advanced deep-learning techniques. Leveraging state-of-the-art convolutional neural network architectures, the goal is to achieve high accuracy in distinguishing between different types of blood cells, which is crucial for medical diagnostics and research.",
      link: "https://github.com/kian79/BloodCellCNN",
      skills: ["Python", "TensorFlow", "Keras", "Deep Learning", "NumPy"],
    },
    {
      name: "Optimizing E-Bike Charging Infrastructure",
      description:
        "This project designs a strategic e-bike charging infrastructure along linear cycle paths like the Danube. Using a graph-based approach and a Mixed-Integer Programming (MIP) model, it minimises the maximum distance between charging stations while adhering to budget constraints.",
      link: "https://github.com/lorenzo-battiston/for-biglab",
      skills: ["Python", "Operations Research", "MIP"],
    }
  ],
  experience: [
    {
      company: "PoliSpace (Space association of Politecnico di Milano)",
      title: "Software Engineer",
      dateRange: "Apr 2024 - Apr 2025",
      bullets: [
        "Developed a YOLO-based object detection system to identify obstacles for rover navigation.",
        "Implemented ArUco marker pose estimation for enhanced localisation and orientation",
      ],
    },
    {
      company: "Iran Jack Company",
      title: "Web Developer Intern",
      dateRange: "Jun 2021 - Sep 2021",
      bullets: [
        "Designed and developed a full-featured eCommerce website using Spring Boot for the backend",
        "Built an admin interface with Bootstrap, leading to a measurable increase in sales",
      ],
    },
  ],
  education: [
    {
      school: "University of Twente",
      degree: "M.Sc. Computer Science Thesis Period",
      dateRange: "2026 - Present",
      achievements: [],
    },
    {
      school: "Politecnico di Milano",
      degree: "M.Sc. Computer Science and Engineering",
      dateRange: "2023 - Present",
      achievements: [
        "MAECI Scholarship, Italian Ministry of Foreign Affairs",
      ],
    },
    {
      school: "Islamic Azad University, West Tehran Branch",
      degree: "B.Sc., Computer Engineering",
      dateRange: "2018 - 2022",
      achievements: [
        "GPA: 19.20/20",
      ],
    },
  ],
};
