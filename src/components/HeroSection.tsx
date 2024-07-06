"use client";
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Adrien from '@public/poua_adrien.jpg';
import useIsMobile from '@/hooks/useMobile';

const Btn = ({ fullWidth }: { fullWidth?: boolean }) => {
  return (
    <Button variant="contained" href="#contact" color="primary" size={"large"} fullWidth={fullWidth} className="w-fit h-fit shrink-1 m-auto my-5" >
      Contactez-moi
    </Button>
  );
}
export default function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <Box className="flex flex-col md:flex-row py-24 px-5 justify-center gap-10" component="main">
      <Box className="flex flex-col justify-center w-full md:w-fit ">
        <Typography variant="h1" className="text-center">
          POUA <br /> Adrien
        </Typography>
        <Typography variant="h2" className="text-2xl text-center">Développeur Front-end</Typography>
        <Typography className="text-2xl text-center">J&apos;adore apprendre</Typography>
        {!isMobile && <Btn fullWidth />}
      </Box>
      <Box className="flex justify-center items-center md:w-fit">
        <Image src={Adrien} alt="placeholder" width={500} height={500} className='rounded-xl overflow-hidden' />
      </Box>
      {isMobile && <Btn />}
    </Box>
  );
}
