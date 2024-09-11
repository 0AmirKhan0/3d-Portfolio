import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  git,
  xd,
  meta,
  starbucks,
  tesla,
  shopify,
  wo,
  ww,
  wow,
  threejs,
  backend,
  github,
  LSK,
  SM,
  SK,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Adobe XD",
    icon: xd,
  },
];

const experiences = [
  {
    title: "Designer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designing and creating visually appealing and user-friendly interfaces for web and mobile applications.",
      "Collaborating with cross-functional teams, including developers, product managers, and stakeholders, to deliver engaging design solutions.",
      "Developing and maintaining design systems and style guides to ensure consistency across products.",
      "Conducting user research and usability testing to gather insights and iterate on designs based on feedback.",
      "Ensuring designs are optimized for responsiveness and accessibility across various devices and platforms.",
      "Participating in design critiques and providing constructive feedback to fellow designers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Exploring the fundamentals of React.js to understand its component-based architecture and state management.",
      "Collaborating with developers to integrate design assets into React components and build dynamic user interfaces.",
      "Learning how to use React libraries like React Router and Redux to manage application state and routing.",
      "Studying best practices for designing responsive and accessible interfaces in React.",
      "Participating in code reviews and pair programming sessions to gain a deeper understanding of React development.",
      "Experimenting with various tools and techniques, such as JSX and hooks, to create interactive and performant web applications.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Learning the fundamentals of Next.js, including its file-based routing system and server-side rendering capabilities.",
      "Collaborating with developers to integrate design assets and build dynamic, server-rendered user interfaces using Next.js.",
      "Exploring how to leverage Next.js features like API routes, dynamic routing, and static site generation to enhance web performance.",
      "Studying best practices for designing responsive and accessible interfaces in a Next.js environment.",
      "Participating in code reviews and pair programming sessions to understand Next.js's full-stack capabilities and deployment strategies.",
      "Experimenting with Next.js tools and techniques, such as incremental static regeneration and middleware, to create scalable web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but AmirKhan proved me wrong.",
    name: "Mohammad Lashkari",
    designation: "CFO",
    company: "Acme Co",
    image: LSK,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like AmirKhan does.",
    name: "Salar Mehri Mahani",
    designation: "COO",
    company: "DEF Corp",
    image: SM,
  },
  {
    testimonial:
      "After AmirKhan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Salar Keshavarzi",
    designation: "CTO",
    company: "456 Enterprises",
    image: SK,
  },
];

const projects = [
  {
    name: "World Wise",
    description:
      "A map-based app for marking locations and adding notes, ideal for planning, documenting, and revisiting places of interest.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css-modules",
        color: "pink-text-gradient",
      },
    ],
    image: ww,
    source_code_link: "https://github.com/0AmirKhan0/World-Wise",
  },
  {
    name: "Wild Oasis",
    description:
      "A hotel management system for a jungle resort, allowing users to book cabins and configure settings for the Wild Oasis website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: wo,
    source_code_link: "https://github.com/0AmirKhan0/the-wild-oasis",
  },
  {
    name: "Wild Oasis Website",
    description:
      "A user-friendly website for a jungle resort, enabling guests to log in, book cabins, and manage their reservations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wow,
    source_code_link: "https://github.com/0AmirKhan0/the-wild-oasis-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
