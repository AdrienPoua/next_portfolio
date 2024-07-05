"use client";
import React from 'react'
import Layout from "@layouts/Section"
import { Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import ReactIMG from '@public/react.png'
import NextIMG from '@public/nextjs.png'
import TypescriptIMG from '@public/typescript.png'
import GitIMG from '@public/git.png'
import GithubIMG from '@public/github.png'
import TailwindIMG from '@public/tailwind.png'
import MUIIMG from '@public/MUI.jpeg'
import NodeJSIMG from '@public/nodejs.png'
import MongoDBIMG from '@public/mongodb.png'
import Tooltip from '@mui/material/Tooltip'
import Fade from '@mui/material/Fade'
import BoostrapIMG from '@public/bootstrap.jpeg'
import { motion } from 'framer-motion'
import { blurInAnimation } from '@/animations'
import useVisibility from '@/hooks/useVisiblity'


const Img: { [key: string]: StaticImageData } = {
  "react": ReactIMG,
  "nextJS": NextIMG,
  "typescript": TypescriptIMG,
  "git": GitIMG,
  "github": GithubIMG,
  "tailwind": TailwindIMG,
  "MUI": MUIIMG,
  "nodeJS": NodeJSIMG,
  "mongoDB": MongoDBIMG,
  "bootstrap": BoostrapIMG,
}

const Circle = () => {
  return (
    <Box className="border-dashed border-2 border-black rounded-full absolute inset-0 animate-spin">
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
      <Box className={`rounded-full overflow-hidden h-fit w-1/3 z-10 border border-black ${bottom ? "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" : ""}`}>
        <Image src={Img[skill]} alt={`${skill} logo`} objectFit='cover' className="aspect-square" />
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
        <Box className="p-3 bg-black aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        {skills.map((skill, index) => (
          <Item key={skill} skill={skill} bottom={index === 2} />
        ))}
      </Box>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Layout title="Compétences" white >
      <Box className="flex flex-wrap justify-center">
        <Skill skills={['react', 'nextJS', 'typescript']} />
        <Skill skills={['git', 'github']} />
        <Skill skills={['tailwind', 'MUI', 'bootstrap']} />
        <Skill skills={['nodeJS', 'mongoDB']} />
      </Box>
    </Layout>
  )
}
