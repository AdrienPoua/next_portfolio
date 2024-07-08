"use client";

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Adrien from '@public/poua_adrien.jpg';
import TypingEffect from "@/components/Typing";
import { contact } from "@/data/index";

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
    <Box className="overflow-hidden rounded-full shrink-0 aspect-square ">
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

// Left Section Component
const LeftSection = () => (
  <Box className="flex flex-col justify-center w-full md:w-fit order:last md:order-first  items-center">
    <Typography variant="h1" className="text-primary text-center">
      Poua Adrien
    </Typography>
    <TypingEffect text="Développeur Front-end" classNames="text-2xl text-center mb-5" />
    <Box className="flex md:gap-5 gap-2 flex-wrap justify-center">
      {contact.map((item) => (
        <Button
          key={item.name}
          href={item.link}
          size="small"
          target="_blank"
          variant="outlined"
          className="rounded-2xl px-5 py-1 text-black hover:bg-black hover:text-white transition-colors duration-150 ease-in-out"
          endIcon={<Image src={item.img} alt={item.name} width={30} height={30} className="rounded-full " />}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  </Box>
);

// Main Hero Section Component
const HeroSection = () => (
  <Box className="flex flex-col md:flex-row justify-center items-center gap-10 py-32" component="main">
    <LeftSection />
    <RightSection />
  </Box>
);

export default HeroSection;
