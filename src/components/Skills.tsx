"use client";
import React from 'react';
import Layout from "@layouts/Section";
import { Box } from '@mui/material';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { motion } from 'framer-motion';
import { blurInAnimation } from '@/animations';
import useVisibility from '@/hooks/useVisiblity';


const Img: { [key: string]: string } = {
  "react": "/react.png",
  "nextJS": "/nextjs.png",
  "typescript": "/typescript.png",
  "git": "/git.png",
  "github": "/github.png",
  "tailwind": "/tailwind.png",
  "MUI": "/MUI.jpeg",
  "nodeJS": "/nodeJS.png",
  "mongoDB": "/mongoDB.png",
  "bootstrap": "/bootstrap.jpeg",
}

const Circle = () => {
  return (
    <Box className="border-dashed border-2 border-black rounded-full absolute inset-0 animate-spin hover:animate-pulse cursor-pointer">
    </Box>
  )
}

const Item = ({ bottom, skill }: { bottom?: boolean, skill: string }) => {
  return (
    <Tooltip
      title={skill.toUpperCase()}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      placement="top"
      arrow
    >
      <Box className={`rounded-full overflow-hidden h-fit  w-1/3 z-10 border hover:scale-125 cursor-pointer  transition-transform duration-125 ease-in-out border-black ${bottom ? "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" : ""}`}>
        <Image src={Img[skill]} alt={`${skill} logo`} objectFit='cover' className="aspect-square" width={100} height={100} />
      </Box>
    </Tooltip>
  )
}

const Skill = ({ skills }: { skills: string[] }) => {
  const skillRef = React.useRef(null);
  const isVisible = useVisibility(skillRef);
  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      variants={blurInAnimation}
      ref={skillRef}
    >
      <Box className={`flex relative shrink-0 aspect-square justify-between m-8 ${skills.length < 2 ? "size-44" : "size-56"}`} ref={skillRef}>
        <Circle />
        <Box className="p-3  bg-black aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        {skills.map((skill, index) => (
          <Item key={skill} skill={skill} bottom={index === 2} />
        ))}
      </Box>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Layout title="Compétences" >
      <Box className="flex flex-wrap justify-center">
        <Skill skills={['react', 'nextJS', 'typescript']} />
        <Skill skills={['git', 'github']} />
        <Skill skills={['tailwind', 'MUI', 'bootstrap']} />
        <Skill skills={['nodeJS', 'mongoDB']} />
      </Box>
    </Layout>
  )
}
