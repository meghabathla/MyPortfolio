import Project1 from "../assets/Project1.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a frontend developer with a passion for creating efficient and user-friendly web applications. I completed my Bachelor's in Computer Applications (BCA) and Master's in Computer Applications (MCA). My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I like to thrive into collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const PROJECTS = [
  {
    title: "DigitalPro",
    image: Project1,
    description:
      "A responsive e-commerce website with features like product listing, shopping cart, wishlist and user authentication.",
    technologies: [
      "ReactJS",
      "React-Router",
      "Styled Component",
      "Context API",
      "Supabase",
    ],
    live: "https://blog-post-with-appwrite.vercel.app/",
    viewCode: "https://github.com/meghabathla/Blog-post",
  },
  {
    title: "Admin Dashboard",
    image: Project3,
    description:
      "React-based CRM dashboard featuring comprehensive authentication, antd charts, sales management, and a fully operational kanban board with live updates for real-time actions across all devices.",
    technologies: [
      "ReactJS",
      "React-Router",
      "TypeScript",
      "Ant Design",
      "GraphQL",
      "Refine",
      "Codegen",
    ],
    live: "https://admin-dasboard-alpha.vercel.app/",
    viewCode: "https://github.com/meghabathla/Admin-Dasboard",
  },
  // {
  //   title: "Blogging Platform",
  //   image: Project2,
  //   description:
  //     "A platform for creating and publishing blog posts, with features where users can do CRUD operations using Tinymce editor and user authentication.",
  //   technologies: [
  //     "ReactJS",
  //     "React-Router",
  //     "Redux",
  //     "TailwindCSS",
  //     "Appwrite",
  //   ],
  //   live: "https://blog-post-with-appwrite.vercel.app/",
  //   viewCode: "https://github.com/meghabathla/Blog-post",
  // },
  {
    title: "Todo App",
    image: Project4,
    description:
      " Created a Todo application for Task management with E2E integration with backend APIs and implemented all CRUD operations.",
    technologies: ["ReactJS", "TailwindCSS"],
    live: "https://todoapp-with-backend.vercel.app/",
    viewCode: "https://github.com/meghabathla/todoapp-with-backend",
  },
  {
    title: "Currency Convertor App",
    image: Project5,
    description:
      "A Currency Convertor App with functionality to fetch real-time exchange rates from a reliable API and perform currency conversion and calculations for across the world currencies.",
    technologies: ["React", "TailwindCSS"],
    live: "https://currency-convertor-exchange-rate-app.vercel.app/",
    viewCode: "https://github.com/meghabathla/Currency-convertor",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
