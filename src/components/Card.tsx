"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Box } from '@mui/material';
import Link from "next/link";
import { github as githubImg } from "@/data";


type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  site: string;
  github: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  site,
  github,
}: Readonly<ProjectProps>) {
  console.log("🚀 ~ github:", github)
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Box
        component="section"
        onClick={() => window.open(site, "_blank")}
        className="bg-gray-100 max-w-[42rem] border cursor-pointer border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <Box className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Box className="flex items-center z-10">
            <Typography variant="h3" component="h3" className="text-xl font-semibold mr-2">
              {title}
            </Typography>
            <Link href={github} target="_blank"
              onClick={() => window.open(github, "_blank")}
              rel="noreferrer"
              className="z-30 overflow-hidden rounded-full aspect-square hover:scale-125 duration-150" >
              <Image src={githubImg} alt={"Way to contact me"} className="w-10 h-10 mb-4" />
            </Link>
          </Box>
          <Typography variant="body1" className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </Typography>
          <Box component="ul" className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <Box
                component="li"
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={tag}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={250}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </Box>
    </motion.div>
  );
}
