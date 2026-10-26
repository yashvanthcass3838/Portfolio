import { ProfileInfo, EducationInfo, SkillCategory, Project, Achievement, InternshipTraining } from '../types';

export const profileData: ProfileInfo = {
  name: "Yashvanth R.",
  label: "AI/ML • COMPUTER VISION • DRONE TECHNOLOGY",
  headline: "Building Intelligent Systems for Real-World Problems.",
  subtitle: "AI/ML Developer & Drone Technology Enthusiast",
  bio: "I’m a Computer Science and Engineering student specializing in AI & ML, exploring machine learning, computer vision, and drone technology to develop practical solutions for real-world challenges.",
  detailedBio: [
    "I’m Yashvanth R., a second-year B.E. Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Rathinam Technical Campus.",
    "My interests include machine learning model training, computer vision, OpenCV, drone technology, and hardware-software integration.",
    "I enjoy exploring how intelligent systems can be applied to practical challenges. I am also developing my skills in web development and application development while expanding my understanding of emerging technologies."
  ],
  email: "yashvanthcass3838@gmail.com",
  github: "https://github.com/yashvanthcass3838",
  linkedin: "https://www.linkedin.com/in/yashvanth-r-569214376/",
  location: "Coimbatore, Tamil Nadu, India",
  statusText: "Available for Research, Drone Projects & AI Collaborations"
};

export const educationData: EducationInfo = {
  institution: "Rathinam Technical Campus",
  degree: "Bachelor of Engineering",
  department: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  currentYear: "Second Year",
  cgpa: "8.58",
  expectedGraduation: "2029",
  location: "Coimbatore, Tamil Nadu, India",
  courseworkHighlights: [
    "Data Structures & Algorithms",
    "Artificial Intelligence Fundamentals",
    "Machine Learning Concepts",
    "Object-Oriented Programming (Java/C)",
    "Digital Electronics & Microcontrollers",
    "Applied Mathematics & Linear Algebra"
  ]
};

export const skillsData: SkillCategory[] = [
  {
    id: "programming",
    category: "Programming",
    shortDescription: "Core computer science fundamentals and algorithmic thinking",
    icon: "Code2",
    accent: "cyan",
    skills: [
      { name: "Python", description: "Primary language for ML, scripting, and CV workflows" },
      { name: "C", description: "Low-level system programming and embedded logic" },
      { name: "Java", description: "Object-oriented software architecture and engineering" },
      { name: "Data Structures", description: "Algorithmic problem solving, trees, graphs, and dynamic arrays" }
    ]
  },
  {
    id: "ai-vision",
    category: "AI and Computer Vision",
    shortDescription: "Computer vision pipelines, neural processing, and image analysis",
    icon: "Scan",
    accent: "violet",
    skills: [
      { name: "Machine Learning Model Training", description: "Supervised workflows, data preprocessing, and evaluation" },
      { name: "OpenCV", description: "Spatial filtering, edge detection, feature matching, and video streams" },
      { name: "Image Processing Projects", description: "Real-world visual classification and matrix manipulations" }
    ]
  },
  {
    id: "hardware-embedded",
    category: "Hardware and Embedded Systems",
    shortDescription: "Hardware-software integration, aerial platforms, and avionics",
    icon: "Cpu",
    accent: "cyan",
    skills: [
      { name: "Drone Hardware Integration & Operations", description: "Flight controllers, telemetry links, ESCs, and propulsion testing" },
      { name: "Microcontrollers", description: "Sensor interfacing, digital/analog I/O, and real-time execution" },
      { name: "Circuit Design", description: "Schematic analysis, power distribution, and component selection" },
      { name: "Communication Protocols", description: "UART, I2C, SPI, and wireless transmission protocols" }
    ]
  },
  {
    id: "currently-learning",
    category: "Currently Learning",
    shortDescription: "Expanding full-stack engineering and software product delivery",
    icon: "Sparkles",
    accent: "emerald",
    skills: [
      { name: "Web Development", description: "Modern React, TypeScript, responsive interfaces, and REST APIs" },
      { name: "Application Development", description: "Cross-platform architectures and interactive user applications" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "greenminds",
    number: "01",
    title: "GreenMinds",
    tagline: "Innovative Agricultural Technology Solution",
    domain: "Agricultural Technology",
    status: "Concept & Research",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
    description: "An agricultural technology project focused on addressing a real-world farming challenge through an innovative technical solution.",
    problemStatement: "[Editable Field] The specific agricultural challenge and regional crop context are currently being finalized. Planned to address critical agricultural inefficiencies or resource optimization.",
    solutionOverview: "Formulating a combined sensor-driven monitoring and computational evaluation framework to empower farmers with actionable agricultural insights.",
    softwareStack: ["Python", "Machine Learning (Exploration)", "Embedded C"],
    hardwareStack: ["Environmental Sensors", "Microcontroller Unit (TBD)"],
    features: [
      "Targeted at sustainable farming practices",
      "Sensor telemetry integration framework",
      "Modular architecture for localized adaptations",
      "Designed for low-power rural deployment"
    ],
    currentMilestone: "Literature review and system architecture modeling.",
    githubUrl: undefined, // Real repository to be linked upon publishing
    demoUrl: undefined,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    isFeatured: true
  },
  {
    id: "rescueswarm",
    number: "02",
    title: "RescueSwarm",
    tagline: "Drone Search & Rescue Vision Concept",
    domain: "Drone Technology & Search & Rescue",
    status: "Prototype",
    statusColor: "text-accent-cyan bg-cyan-950/40 border-cyan-500/30",
    description: "A drone-based search-and-rescue concept focused on exploring how intelligent systems and computer vision can support locating people during emergency scenarios.",
    problemStatement: "[Editable Field] Rapid disaster response and difficult-terrain search operations present extreme visibility and access obstacles for manual rescue crews.",
    solutionOverview: "Investigating the integration of aerial optical payloads with lightweight computer vision detection to accelerate survivor identification in remote zones.",
    softwareStack: ["Python", "OpenCV", "Flight Control Protocols", "Image Processing"],
    hardwareStack: ["Quadcopter Frame", "Flight Controller (Configurable)", "Optical Camera Payload", "Telemetry Radio"],
    features: [
      "Aerial search grid path formulation",
      "Onboard optical feed capture and visual preprocessing",
      "Investigation of lightweight vision models for edge inference",
      "Ground control telemetry link evaluation"
    ],
    currentMilestone: "Hardware baseline integration and bench camera test bench setup.",
    githubUrl: undefined,
    demoUrl: undefined,
    accentColor: "from-cyan-500/20 to-blue-500/10",
    isFeatured: true
  },
  {
    id: "opencv-experiments",
    number: "03",
    title: "OpenCV Visual Intelligence",
    tagline: "Computer Vision & Image Processing Experiments",
    domain: "Computer Vision",
    status: "Experimentation",
    statusColor: "text-accent-violet bg-violet-950/40 border-violet-500/30",
    description: "Computer vision experiments exploring image processing and visual analysis using OpenCV.",
    problemStatement: "[Editable Field] Exploring algorithmic image feature extraction, spatial thresholding, and real-time visual tracking across varying lighting conditions.",
    solutionOverview: "A modular suite of Python and OpenCV scripts demonstrating edge detection (Canny/Sobel), contour analysis, color space transformations (HSV), and video frame processing.",
    softwareStack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    hardwareStack: ["Webcam / HD Camera Sensor", "Host Computing Unit"],
    features: [
      "Real-time video stream feature extraction and tracking",
      "Morphological operations and noise reduction pipelines",
      "Color-based object segmentation and geometric localization",
      "Modular testbench for computer vision algorithm benchmarking"
    ],
    currentMilestone: "Core filter library implemented; preparing documentation and test suite.",
    githubUrl: "https://github.com/yashvanthcass3838",
    demoUrl: undefined,
    accentColor: "from-violet-500/20 to-purple-500/10",
    isFeatured: true
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "next-gen",
    title: "Next Gen Competition",
    roleOrStatus: "Winner",
    description: "Awarded Winner at the Next Gen Competition for demonstrating technical innovation and practical problem-solving capabilities.",
    yearOrNote: "Event details and year to be confirmed",
    domain: "Technical Innovation & Engineering",
    highlight: true,
    certificateAvailable: false
  },
  {
    id: "sih",
    title: "Smart India Hackathon",
    roleOrStatus: "Participated",
    description: "Participated in the premier nationwide innovation hackathon solving real-world technological challenges with high-impact potential.",
    yearOrNote: "Nationwide Hackathon Initiative",
    domain: "Collaborative Engineering & Problem Solving",
    highlight: false,
    certificateAvailable: false
  },
  {
    id: "codefusion",
    title: "CodeFusion",
    roleOrStatus: "Participated",
    description: "Participated in the competitive coding and algorithm event, tackling algorithmic optimization, problem-solving, and efficient implementation.",
    yearOrNote: "Competitive Programming & Problem Solving",
    domain: "Data Structures & Algorithmic Design",
    highlight: false,
    certificateAvailable: false
  }
];

export const experienceData: InternshipTraining[] = [
  {
    id: "drone-training",
    type: "Industrial Training",
    organization: "[Organization Details - To Be Confirmed]",
    title: "Drone Technology Training & Practical Operations",
    period: "26 July 2026 (Training Milestone / Scheduled Verification)",
    status: "Completed",
    location: "Tamil Nadu, India",
    description: "Hands-on technical training program centered on drone architecture, hardware components, flight controller dynamics, and field operating protocols.",
    responsibilities: [
      "Studied multirotor airframe assembly, motor mounting, and electronic speed controller (ESC) calibration",
      "Practiced flight controller firmware configuration and sensor orientation checks",
      "Explored radio telemetry transmission and failsafe return-to-launch procedures",
      "Conducted hardware continuity testing and pre-flight safety checklists"
    ],
    technologies: ["Multirotor Airframes", "Flight Controllers", "Telemetry Radios", "ESCs & BLDC Motors", "LiPo Power Systems"],
    skillsGained: ["UAV Hardware Assembly", "Telemetry Calibration", "Aviation Safety Protocols", "Hardware Troubleshooting"],
    verificationNote: "Official documentation and organization name are maintained as editable fields pending institutional verification."
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
