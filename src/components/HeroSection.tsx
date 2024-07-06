"use client";
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Adrien from '@public/poua_adrien.jpg';
import useIsMobile from '@/hooks/useMobile';
import TypingEffect from "@/components/Typing";

const Btn = ({ fullWidth }: { fullWidth?: boolean }) => {
  return (
    <Button variant="contained" href="#contact" color="primary" size={"large"} fullWidth={fullWidth} className="w-fit h-fit shrink-1 m-auto my-0 md:my-5" >
      Contactez-moi
    </Button>
  );
}
export default function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <Box className="flex flex-col md:flex-row py-12 md:py-24 px-5 justify-center gap-10" component="main">
      <Box className="flex flex-col justify-center w-full md:w-fit ">
          <Typography variant="h1" className="text-center md:leading-[6rem]"> POUA</Typography>
        <Typography variant="h1" className="text-center md:leading-[6rem]"> Adrien</Typography>
        <Typography className="text-2xl text-center mt-5 ">Développeur Front-end</Typography>
        <TypingEffect text="J'adore apprendre" classNames="text-2xl text-center" />
        {!isMobile && <Btn fullWidth />}
      </Box>
      <Box className="flex justify-center items-center md:w-fit ">
        <Image src={Adrien} alt="placeholder" width={500} height={500} className='rounded-xl overflow-hidden' />
      </Box>
      {isMobile && <Btn />}
    </Box>
  );
}
