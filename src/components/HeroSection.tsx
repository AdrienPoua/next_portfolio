import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Adrien from '@public/poua_adrien.jpg';

const Moi = () => {
  return (
    <Box className="">
    </Box>
  );
}

export default function HeroSection() {
  return (
    <Box className="flex py-5 bg-white text-black justify-center gap-10" component="main">
      <Box className="flex flex-col justify-center ms-24">
        <Typography variant="h1">
          POUA <br /> Adrien
        </Typography>
        <Typography className="text-2xl">Développeur Front-end</Typography>
        <Typography className="text-2xl">J&apos;adore apprendre</Typography>
        <Link href="#contact" passHref className="w-fit mx-auto">
          <Button variant="contained" color="primary" className="my-5 ">
            Contactez-moi
          </Button>
        </Link>
      </Box>
      <Box className="flex justify-center items-center">
        <Image src={Adrien} alt="placeholder" width={500} height={500} className='rounded-xl overflow-hidden'/>
      </Box>
    </Box>
  );
}
