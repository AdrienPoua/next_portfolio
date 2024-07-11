import React from 'react'
import logo from "@/public/logo.svg";
import Image from 'next/image';
import { Box } from '@mui/material';

export default function Logo() {
  return (
    <Box className="aspect-square size-24 ">
    <Image src={logo} alt="Logo" width={50} height={50} className="hover:translate-x-3 duration-300 cursor-pointer" />
    </Box>
  )
}
