"use client";

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Adrien from '@/public/poua_adrien.jpg';
import TypingEffect from "@/components/Typing";
import { contact } from "@/data/index";
import Curv from "@/components/Curv";
import useIsMobile from '@/hooks/useMobile';

// Reusable Button Component
const ContactButton = ({ fullWidth = false }: { fullWidth?: boolean }) => (
  <Button
    variant="contained"
    href="#contact"
    color="primary"
    size="large"
    fullWidth={fullWidth}
    className="w-fit h-fit shrink-1 m-auto my-0 md:my-5"
  >
    Contactez-moi
  </Button>
);

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
    <Typography variant="h1" color="primary" className="text-center  text-9xl rotate-90 absolute right-0 opacity-50" >
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
        <Button
          key={item.name}
          href={item.link}
          size="small"
          target="_blank"
          variant="outlined"
          className="group rounded-2xl relative px-5 py-1 text-black hover:text-white overflow-hidden "
          endIcon={<Image src={item.img} alt={item.name} width={30} height={30} className="rounded-full " />}
        >
          <Box className="bg-black  absolute -left-3  -right-3 top-0 bottom-0 translate-x-full -skew-x-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:ease-in-out -z-10" />
          <Typography component="span" className="relative  group-hover:text-white duration-300 font-secondary ">{item.name}</Typography>
        </Button>
      ))}
    </Box>
  </Box>
);

// Main Hero Section Component
const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Box className="flex flex-col md:flex-row justify-center items-center gap-10" component="main">
        <LeftSection />
        <RightSection />
        {!isMobile && <Dev />}
      </Box>
      <Curv rotate />
    </>
  );
}

export default HeroSection;
