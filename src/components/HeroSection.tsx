"use client";
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Adrien from '@public/poua_adrien.jpg';
import useIsMobile from '@/hooks/useMobile';

const Btn = () => {
  return (
    <Button variant="contained" color="primary" className="my-5 w-full ">
      Contactez-moi
    </Button>)
}
export default function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <Box className="flex flex-col md:flex-row py-5 bg-white text-black justify-center gap-10" component="main">
      <Box className="flex flex-col justify-center ms-24 ">
        <Typography variant="h1" className="text-center">
          POUA <br /> Adrien
        </Typography>
        <Typography className="text-2xl text-center">Développeur Front-end</Typography>
        <Typography className="text-2xl text-center">J&apos;adore apprendre</Typography>
        <Link href="#contact" passHref className="w-full mx-auto">
          { !isMobile && <Btn />}
        </Link>
      </Box>
      <Box className="flex justify-center items-center">
        <Image src={Adrien} alt="placeholder" width={500} height={500} className='rounded-xl overflow-hidden' />
      </Box>
          { isMobile && <Btn />}
    </Box>
  );
}
