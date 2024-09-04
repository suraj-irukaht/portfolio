import file from '../assets/surajshahi_resume.pdf';
import Profile from '../assets/profile.jpg';
export const navLinks = [
   { id: 1, title: 'Home' },
   { id: 2, title: 'About' },
   { id: 3, title: 'Experiences' },
   { id: 4, title: 'Work' },
   { id: 5, title: 'Contact' },
   { id: 6, title: 'Resume', url: file },
];

export const banner = {
   subtitle: 'Hi, my name is',
   name: 'Suraj Shahi.',
   tagLine: 'I build pixel perfect page for web.',
   description:
      'Hey there! I’m a frontend developer, and I love creating pixel-perfect pages. Currently, I’m putting my skills to work at Rapid Web Solutions.',
};
export const about = {
   title: 'About Me',
   description: [
      'Hi there! I’m Suraj Shahi, and I began my journey as a web developer in 2020 right after finishing my studies. It was tough at first, but I quickly developed a passion for creating things with HTML, CSS, and JavaScript.',
      'I’m currently working at Rapid Web Solutions, where I’m focused on using Webflow and Gsap to make awesome animated websites.',
      'I’m also working towards becoming a full-stack WordPress and React JS developer. Can’t wait to see where this journey takes me!',
   ],
   tools: [
      'HTML5/CSS3',
      'JavaScript',
      'Webflow',
      'Bootstrap and Tailwind',
      'React Js',
      'GSAP',
      'Hubspot',
   ],
   imageUrl: Profile,
};
export const experiences = {
   title: 'My Experiences',
   lists: [
      {
         id: 1,
         title: 'JR. Developer @ Rapid Web Solutions',
         employee: 'Rapid Web Solutions',
         period: 'July 2022 - Present',
         bullets: [
            'Delivering high-quality, flawless work to the client, which may involve coding or no-code/low-code Webflow development for the webpage upon request.',
            'Working closely with designers to create a visually appealing and user-friendly design.',
            'Collaborating with developers to ensure the designs are implemented correctly.',
            'Managing the project timeline and ensuring the client receives the expected deliverables.',
            'Handling any issues or bugs that may arise during the development process.',
            'Leveraging version control systems (Git) to maintain a clean and organized codebase.',
            'Communicating effectively with clients and stakeholders to ensure the project is on track and meets their expectations.',
            'Maintaining the project’s documentation and ensuring it is up-to-date with the latest changes and best practices.',
            'Providing regular feedback and updates to the client on the progress of the project.',
            'Handling any requests, updates, feedback, and other requirements that may arise after the development process.',
         ],
      },
      {
         id: 2,
         title: 'Intern @ Codewing Solutions',
         period: 'Feb 2021 - Apr 2012',
         employee: 'Codewing Solutions',
         bullets: [
            'Always attend the meeting with the manager, senior designer, and other team members to discuss the task.',
            'Ensure that the task is completed on time.',
            'Provide regular updates to the team.',
            'Completed the design task and sent it for review. Updated the design according to feedback.',
            'Delivered the final version of the website to the senior designer.',
            'Completed the project on time and met all the requirements.',
            'Completed 5 design projects, including food blog, feminine, ecommerce, educational, and news themes, as well as dashboard UI and travel theme designs.',
         ],
      },
   ],
};
export const contact = {
   title: 'Say Hello!',
   description:
      'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
};
export const cards = [
   {
      id: 1,
      title: 'Todo App',
      description:
         'This is a simple Todo App using React. You can add, delete, toggle dark or light mode, and mark tasks as completed.',
      gitHub: 'https://github.com/suraj-irukaht/to-do-react',
      tools: ['Vite', 'React', 'TypeScript'],
      liveUrl:
         'https://to-do-react-qx2axpuev-suraj-shahis-projects.vercel.app/',
   },
   {
      id: 2,
      title: 'Light SAAS Landing Page',
      description:
         'This is a SAAS landing page which is simple and minimalistic and modern with the Nextjs and Framer Motion',
      gitHub: 'https://github.com/suraj-irukaht/Light-Saas-Landing-Page',
      tools: [
         'Vite',
         'React',
         'TypeScript',
         'NextJs',
         'Tailwind',
         'Framer Motion',
      ],
      liveUrl: 'https://light-saas-landing-page.netlify.app/',
   },
   {
      id: 3,
      title: 'Movie App',
      description:
         'This is a simple movie app using React and the TMDB API. You can search for movies, get movie details and you can search by genre,',
      gitHub: 'https://github.com/suraj-irukaht/movie-flix',
      tools: ['Vite', 'React', 'TypeScript', 'TMDB API'],
      liveUrl: 'https://sjflix.netlify.app/',
   },
];
