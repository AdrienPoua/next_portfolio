import React from 'react'
import logo from "@/public/logo.svg";
import Image from 'next/image';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();
  return (
    <Box onClick={() => router.push("/")} className="aspect-square size-fit ">
      <Image src={logo} alt="Logo" width={50} height={50} className="hover:translate-x-3 duration-300 cursor-pointer" />
    </Box>
  )
}
