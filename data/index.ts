export const navItems = [
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "CareerCanvas", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Passionate About Coding and Collaboration",
    description: "I thrive on coding and working with others. This space reflects my commitment to impactful projects through both tech skills and teamwork.",
    className: "lg:col-span-2 md:col-span-6 md:row-span-6 lg:min-h-[60vh] relative overflow-hidden p-4",
    imgClassName: "object-contain z-1 w-1/2 h-1/2 mx-auto my-auto",
    titleClassName: "absolute bottom-0 left-0 p-4 text-white bg-opacity-70 w-full z-10",
    // img: "coder1.svg", 
    img: "typingCode.gif", 

    spareImg: "",
}

,
  {
    id: 2,
    title: "Tech Enthusiast & Bodybuilder ",
    description: "Combining my passion for technology with discipline from bodybuilding, I bring dedication and focus to every project.",
    className: "lg:col-span-3 md:col-span-3 md:row-span-4 p-4",
    imgClassName: "center z-2 absolute inset-0 object-fill",
    titleClassName: "justify-start z-50",
    img: "gymmer.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack includes ",
    description: "React , Next.js , Express.js , Tailwind , MongoDB , SQL , PowerBi",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:max-h-[40vh]",
    imgClassName: "center z-2 absolute inset-5 object-fill", 
    titleClassName: "flex flex-col justify-start bottom-20",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Educational Background",
    description: "• B.Tech in Computer Science, Vellore Institute of Technology, Vellore (CGPA: 8.53)\n• 12th Grade, Billabong High International School, ICSE Board (92.5%)\n• 10th Grade, Billabong High International School, ICSE Board (94%)",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 relative overflow-hidden",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "absolute bottom-20 left-0 p-4 text-white bg-opacity-70 w-full z-10",
    img: "", 
    spareImg: "",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 lg:max-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "OurLiftStory.com",
    des: "Welcome to OurLiftStory.com, a React app for fitness enthusiasts. It uses GSAP and Framer Motion for dynamic animations and fetches real-time exercise and nutrition data from API Ninja, all built with React, CSS Modules, and JavaScript.",
    img: "/lifter.png",
    iconLists: ["/re.svg","/gsap_2.svg","css.svg","js_2.svg"],
    link: "https://jayeshrajani.github.io/OurLiftStory.com/",
  },
  {
    id: 2,
    title: "Chess",
    des: "A web-based, real-time multiplayer chess app with a responsive drag-and-drop interface and rotating board for black players. Built with HTML, CSS (TailwindCSS), and JavaScript on the frontend, and Node.js, Express.js, and Socket.io on the backend, leveraging Chess.js for game logic.",
    img: "/chess_2.png",
    iconLists: ["/express.svg", "/tail.svg","js_2.svg","node_2.svg","socketio.png"], 
    link: "https://github.com/jayeshrajani/chess.com",
  },
  {
    id: 3,
    title: "Mercedes-Re-Imagined",
    des: "The re-imagined Mercedes-Benz website uses GSAP, Framer Motion, and ScrollTrigger for smooth transitions and interactive animations, featuring a cutting-edge 3D car configurator and dynamic content.",
    img: "/merc_3.png",
    iconLists: ["/js.svg","css.svg","gsap.svg" ],
    link: "https://jayeshrajani.github.io/Mercedes-Re-Imagined/",
  },
  {
    id: 4,
    title: "Climafy",
    des: "React Weather App: A cutting-edge, responsive weather application leveraging React for dynamic UI and integrating the OpenWeather API for real-time meteorological data. Built with a streamlined tech stack including CSS for custom styling, this app ensures high-performance, real-time updates, and an optimal user experience across devices.",
    img: "/weather_2.jpg",
    iconLists: ["/js.svg","css.svg","re.svg"],
    link: "https://jayeshrajani.github.io/weatherApp/",
  },
  {
    id: 5,
    title: "Iphone 16 sales Prediction Analysis Model",
    des: "Conducted data analysis using SQL to predict iPhone 16 sales based on historical trends and growth rates. Developed a Power BI dashboard for dynamic visualization of the forecast, showcasing key insights and trends in smartphone sales prediction.",
    img: "/i16Gemini.jpeg",
    iconLists: ["/sql.png","/datachart.png","/powerbi.png"],
    link: "https://github.com/jayeshrajani/Iphone-16-prediction-analysis-model",
  },
  {
    id: 6,
    title: "Customer Churn Prediction Analysis Model",
    des: "Conducted a comprehensive customer churn analysis project leveraging SQL, Power BI, and Python. Developed a predictive machine learning model using Random Forest to identify potential churners. Utilized Power BI visualizations to gain insights into churn patterns and customer behavior, facilitating targeted retention strategies",
    img: "/churn.jpeg",
    iconLists: ["/sql.png","/datachart.png","/powerbi.png","/python.png"],
    link: "https://github.com/jayeshrajani/customerChurn_Analysis",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern ,Tech Mahindra",
    desc: "Contributed to the Q-RadarJira Sync Tool using React for the frontend, Node.js with Express.js for the backend, and MySQL for data management.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Digital creator - BioDimension Technology",
    desc: "Contributed to brainstorming and developing innovative digital content through design and concept ideation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/jayeshrajani",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 2,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/jayesh-rajani-010a08225/",
  },
];