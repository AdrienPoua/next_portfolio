import React from "@/public/react.png";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import email from "@/public/mail.png";
import nextJS from "@/public/nextjs.png";
import Typescript from "@/public/typescript.png";
import Framer from "@/public/framer.png";
import ABB from "@/public/ABB.png";
import portfolio from "@/public/portfolio.png";
import kasa from "@/public/kasa.png";

export const projectsData = [
  {
    title: "Argenteuil Basketball",
    description: "Site officiel du club de basket d'Argenteuil. Fait de A à Z from scratch.",
    tags: ["Next.js", "MongoDB", "Tailwind", "Sanity", "MUI", "Next-auth", "Design patterns", "Nodemailer", "API", "Scraping"],
    imageUrl: ABB,
    site: "https://argenteuilbasketball.com",
    github: "https://github.com/AdrienPoua/argenteuil_basketball",
  },
  {
    title: "Portfolio",
    description: "Mon ancien portfolio avec three.js et framer-motion",
    tags: ["React", "Framer-motion", "Three.JS"],
    imageUrl: portfolio,
    site: "https://portfolio-space-puce.vercel.app",
    github: "https://github.com/AdrienPoua/Portfolio_space",
  },
  {
    title: "Kasa",
    description: "Site fait en React et Sass pour une agence de location de logements lors de ma formation",
    tags: ["React", "Sass"],
    imageUrl: kasa,
    site: "https://adrienpoua.github.io/Poua_Adrien_6_Kasa_072023/",
    github: "https://github.com/AdrienPoua/Poua_Adrien_6_Kasa_072023",
  },
];

export const contact = [
  {
    link: "https://github.com/AdrienPoua",
    img: github,
    name: "Github",
  },
  {
    link: "https://www.linkedin.com/in/adrien-poua/",
    img: linkedin,
    name: "Linkedin",
  },
  {
    link: "mailto:adrien.poua@gmail.com",
    img: email,
    name: "Email",
  },
]

export const footer = [
  nextJS,
  React,
  Typescript,
  Framer
]

export { github, linkedin, email, nextJS, Typescript, Framer, ABB, portfolio, kasa };