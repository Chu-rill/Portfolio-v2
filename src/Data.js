import about01 from "./assets/about01.png";
import about02 from "./assets/about02.png";
import about03 from "./assets/about03.png";
import about04 from "./assets/about04.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import css from "./assets/css.png";
import tailwind from "./assets/tailwind.png";
import vue from "./assets/vue.png";
import node from "./assets/node.png";
import nextjs from "./assets/nextjs.png";
import graphql from "./assets/graphql.png";
import git from "./assets/git.png";
import mongodb from "./assets/mongodb.png";
import sql from "./assets/sql.png";
import postman from "./assets/postman.png";
import figma from "./assets/figma.png";
import firebase from "./assets/firebase.png";
import redux from "./assets/redux.png";
import sass from "./assets/sass.png";
import typescript from "./assets/typescript.png";

export const about = [
  {
    imgUrl: about01,
    title: "Frontend Developer",
    description:
      "A Frontend Developer with expertise in crafting engaging user experiences.",
  },
  {
    imgUrl: about02,
    title: "Backend Developer",
    description:
      "A Backend Developer with expertise in building robust and scalable server-side applications.",
  },

  {
    imgUrl: about04,
    title: "React Developer",
    description:
      "A React Developer with a passion for building dynamic and interactive user interfaces.",
  },
];

export const works = [
  {
    name: "Conversa",
    imgUrl: project1,
    projectLink: "https://gdsc-chatbot.netlify.app/",
    codeLink: "https://github.com/Chu-rill/GDSC-Ai",
    title: "Conversa",
    description:
      "A chatbot application leveraging Google's Gemini API for intelligent conversation experiences.",
    stacks: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    name: "TaskHub",
    imgUrl: project2,
    projectLink: "https://taskhub123.netlify.app/",
    codeLink: "https://github.com/Chu-rill/Task-Management-Frontend",
    title: "TaskHub",
    description:
      "A comprehensive task management system built with React and Node.js, enabling efficient project organization and tracking.",
    stacks: ["React JS", "EXPRESS", "MYSQL"],
  },
  {
    name: "ChatSpace",
    imgUrl: project3,
    projectLink: "https://chat-space-sand.vercel.app/",
    codeLink: "https://github.com/Chu-rill/ChatSpace",
    title: "ChatSpace",
    description:
      "A real-time full-stack chat application using React, Express, and MongoDB, featuring serverless functions hosted on Google Cloud.",
    stacks: ["REACT", "EXPRESS", "MONGODB", "SOCKET.IO"],
  },
  {
    name: "Weather App",
    imgUrl: project4,
    projectLink: "https://weather-webapp23.netlify.app/",
    codeLink: "https://github.com/Chu-rill/Weather-App",
    title: "Weather App",
    description:
      "A weather application utilizing the OpenWeatherMap API to provide accurate weather information based on user input.",
    stacks: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    name: "Recipe Suggester",
    imgUrl: project5,
    projectLink: "https://chu-rill.github.io/recipe_suggester/",
    codeLink: "https://github.com/Chu-rill/recipe_suggester",
    title: "Recipe Suggester",
    description:
      "An application that randomly suggests three recipes from a database, using an API to inspire your next meal.",
    stacks: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    name: "URL Shortener",
    imgUrl: project6,
    projectLink: "https://url-shortener-7rj6.onrender.com/",
    codeLink: "https://github.com/Chu-rill/URL-Shortener",
    title: "URL Shortener",
    description:
      "A web application that allows users to shorten long URLs into more manageable, shareable links. It also tracks usage statistics, providing insights into link performance.",
    stacks: ["EJS", "MongoDB", "Express"],
  },
];

export const skills = [
  {
    name: "JavaScript",
    bgColor: "#e4e4e4",
    icon: javascript,
  },
  {
    name: "React",
    bgColor: "#e4e4e4",
    icon: react,
  },
  {
    name: "CSS",
    bgColor: "#e4e4e4",
    icon: css,
  },
  {
    name: "tailwind",
    bgColor: "#e4e4e4",
    icon: tailwind,
  },
  {
    name: "node",
    bgColor: "#e4e4e4",
    icon: node,
  },

  {
    name: "Git",
    bgColor: "#e4e4e4",
    icon: git,
  },
  {
    name: "MongoDB",
    bgColor: "#e4e4e4",
    icon: mongodb,
  },
  {
    name: "SQL",
    bgColor: "#e4e4e4",
    icon: sql,
  },
  {
    name: "Postman",
    bgColor: "#e4e4e4",
    icon: postman,
  },
];
