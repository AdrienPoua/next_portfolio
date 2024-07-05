import ReactImg from "@public/react.png";
import github from "@public/github.png";
import linkedin from "@public/linkedin.png";
import email from "@public/mail.png";

export const projectsData = [
  {
    title: "Argenteuil Basketball",
    description: "Site officiel du club de basket d'Argenteuil. Fait de A à Z from scratch.",
    tags: ["Next.js", "Tailwind", "Sanity", "MUI", "Next-auth", "Nodemailer", "API", "POO", "Design patterns"],
    imageUrl: ReactImg,
    site: "https://argenteuilbasketball.com",
    github: "https://github.com/AdrienPoua/argenteuil_basketball",
  },
  {
    title: "Portfolio",
    description: "Mon ancien portfolio avec three.js et framer-motion",
    tags: ["React", "Framer-motion", "Three.JS"],
    imageUrl: ReactImg,
    site: "https://adrienpoua.fr",
    github: "https://github.com/AdrienPoua/Portfolio_space",
  },
  {
    title: "Kasa",
    description: "Site fait en React et Sass pour une agence de location de logements lors de ma formation",
    tags: ["React", "Sass"],
    imageUrl: ReactImg,
    site: "https://adrienpoua.github.io/Poua_Adrien_6_Kasa_072023/",
    github: "https://github.com/AdrienPoua/Poua_Adrien_6_Kasa_072023.git",
  },
];

export const contact = [
  {
    Github: "https://github.com/AdrienPoua",
    img: github,
  },
  {
    Linkedin: "https://www.linkedin.com/in/adrien-poua/",
    img: linkedin,
  },
  {
    Email: "mailto:adrien.poua@gmail.com",
    img: email,
  },
];
