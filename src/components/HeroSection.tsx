"use client";

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Adrien from '@/public/poua_adrien.png';
import TypingEffect from "@/components/Typing";
import { contact } from "@/data/index";
import useIsMobile from '@/hooks/useMobile';
import { ButtonBlackEffect } from './Button';


// Right Section Component
const RightSection = () => (
  <Box className="flex justify-center items-center">
    <Box className="overflow-hidden rounded-full shrink-0 aspect-square md:size-fit size-48 shadow-gray-500 shadow-2xl drop-shadow-2xl">
      <Image
        src={Adrien}
        alt="placeholder"
        width={300}
        height={300}
        objectFit="cover"
        className=""
      />
    </Box>
  </Box>
);

const Dev = (): JSX.Element => {
  return (
    <Typography variant="h1" color="#b0916c" className="text-center  text-9xl rotate-90 absolute right-0 opacity-50" >
      DEV
    </Typography>
  )
}

// Left Section Component
const LeftSection = () => (
  <Box className="flex flex-col justify-center w-full md:w-fit order:last md:order-first  items-center">
    <Box className="flex flex-row mb-5">
      <Typography variant="h1" className="text-primary text-center flex items-center ">
        <Typography component={'span'} className="text-primary text-center relative text-6xl after:bg-gradient-to-r from-black to-slate-500 after:p-1  after:shadow-xl after:w-full after:rounded-lg after:filter after:absolute after:-bottom-1 after:left-0 inline-block">
          Poua
        </Typography>
        <Typography component={'span'} className="text-primary text-6xl inline-block ml-2">
          Adrien
        </Typography>
      </Typography>
    </Box>
    <TypingEffect text="Développeur Front-end" classNames="text-2xl text-center mb-5" />
    <Box className="flex md:gap-5 gap-2 flex-wrap justify-center">
      {contact.map((item) => (
        <ButtonBlackEffect key={item.name} href={item.link} text={item.name} icon={item.img} />
      ))}
    </Box>
  </Box>
);

// Main Hero Section Component
const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Box className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20" component="main">
      <LeftSection />
      <RightSection />
      {!isMobile && <Dev />}
    </Box>
  );
}

export default HeroSection;
