import file from "../assets/suraj_shahi_resume.pdf";
import Profile from "../assets/profile.jpg";
export const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Experiences" },
  { id: 4, title: "Work" },
  { id: 5, title: "Contact" },
  { id: 6, title: "Resume", url: file },
];

export const banner = {
  subtitle: "Hi, my name is",
  name: "Suraj Shahi.",
  tagLine: "I build digital experiences for the web.",
  description:
    "From React and WordPress to Webflow and GSAP animations, I bring ideas to life by building clean, responsive, and engaging web experiences.",
};
export const about = {
  title: "About Me",
  description: [
    "Hi there! I’m Suraj Shahi, a frontend developer from Nepal, currently living in Finland. I began my journey in 2020 right after finishing my studies. It wasn’t always easy, but I quickly fell in love with building things for the web using HTML, CSS, and JavaScript.",
    "I previously worked as a Junior Developer at Rapid Web Solutions, where I built responsive, accessible, and animated websites using Webflow, GSAP, and custom code.",
    "Right now, I’m pursuing a Master’s Degree in Full-Stack Software Development at JAMK University of Applied Sciences, while continuing to grow my skills and work on personal projects. I’m also expanding my expertise toward full-stack development—especially MERN stack and AI-powered applications.",
    "But who knows where this journey takes me next! I love learning, experimenting with new tools, and solving real problems through clean and user-friendly interfaces.",
  ],
  tools: [
    "HTML5/CSS3",
    "JavaScript",
    "Webflow",
    "React Js & Tailwind",
    "GSAP",
    "Figma",
    "SEO Basics",
    "MERN Stack (In progress)",
    "AI Integration (Learning)",
  ],
  imageUrl: Profile,
};
export const experiences = {
  title: "My Experiences",
  lists: [
    {
      id: 1,
      title: "JR. Developer @ Rapid Web Solutions",
      employee: "Rapid Web Solutions",
      period: "August 2021 - August 2024",
      bullets: [
        "Developed responsive, visually polished websites using Webflow, custom code, and low/no-code solutions based on project needs.",
        "Translated design mockups into pixel-perfect, production-ready pages in collaboration with UI/UX designers.",
        "Worked closely with developers to ensure functionality, accessibility, and cross-browser compatibility.",
        "Managed timelines and deliverables to meet client requirements and launch expectations.",
        "Troubleshot bugs, performed fixes, and provided post-deployment support across active projects.",
        "Used Git and version control workflows to maintain a clean and organized codebase.",
        "Communicated progress and blockers clearly to clients, designers, and internal teams.",
        "Maintained project documentation and kept updates aligned with standards and best practices.",
        "Provided regular feedback, iterations, and improvements throughout the project lifecycle.",
      ],
    },
    {
      id: 2,
      title: "Intern @ Codewing Solutions",
      period: "Feb 2021 - Apr 2021",
      employee: "Codewing Solutions",
      bullets: [
        "Collaborated with senior designers and developers to understand project goals and scope.",
        "Converted UI/UX designs into Webflow layouts and iterated based on reviews and feedback.",
        "Delivered updates and progress reports to the team throughout development cycles.",
        "Finalized layout and styling based on design requirements and client expectations.",
        "Completed assigned project milestones on schedule and ensured all acceptance criteria were met.",
        "Contributed to multiple layouts and themes, including ecommerce, education, blog, news, dashboard, and travel concepts.",
      ],
    },
    {
      id: 3,
      title: "Master's Student — Full-Satck Software Development",
      employee: "JAMK University of Applied Sciences",
      period: "August 2024 – Present",
      bullets: [
        "Pursuing a Master's degree with a focus on Machine Learning, Artificial Intelligence, and data-driven systems.",
        "Developing strong foundations in programming, algorithms, data processing, cloud computing, and model deployment.",
        "Working on academic and personal projects involving Python, data analysis, neural networks, and web-integrated AI applications.",
        "Collaborating with peers on coursework, research tasks, and hands-on problem-solving scenarios.",
        "Balancing specialization in AI with ongoing growth in modern web development and full-stack technologies.",
        "Exploring how emerging AI tools can improve user experiences, automate workflows, and enable smarter web applications.",
      ],
    },
  ],
};
export const contact = {
  title: "Say Hello!",
  description:
    "I’m always open to new projects, collaboration, or just a friendly chat. If you have a question or want to work together, feel free to reach out and I’ll get back to you as soon as I can.",
};
export const cards = [
  {
    id: 1,
    title: "Todo App",
    description:
      "Task manager with CRUD features and theme toggle, built in React.",
    gitHub: "https://github.com/suraj-irukaht/to-do-react",
    tools: ["Vite", "React", "TypeScript"],
    liveUrl: "https://sj-simple-todo-app.netlify.app/",
  },
  {
    id: 2,
    title: "Light SAAS Landing Page",
    description:
      "Responsive landing page with animations using Next.js + Framer Motion.",
    gitHub: "https://github.com/suraj-irukaht/Light-Saas-Landing-Page",
    tools: [
      "Vite",
      "React",
      "TypeScript",
      "NextJs",
      "Tailwind",
      "Framer Motion",
    ],
    liveUrl: "https://light-saas-landing-page.netlify.app/",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "TMDB-powered movie search, genre filtering, and detail pages using React.",
    gitHub: "https://github.com/suraj-irukaht/movie-flix",
    tools: ["Vite", "React", "TypeScript", "TMDB API"],
    liveUrl: "https://sjflix.netlify.app/",
  },
];
