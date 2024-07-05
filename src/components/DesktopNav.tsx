import { Box, Link } from '@mui/material';
import React from 'react';

const CustomLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link href={href} className="mr-4 text-black no-underline text-xl hover:underline underline-offset-4 ">
      {children}
    </Link>
  );
};

export default function DesktopNav() {
  return (
    <Box component="nav" className="py-5 px-10 bg-white">
      <Box className="flex items-center justify-end">
        <CustomLink href="#about">À propos</CustomLink>
        <CustomLink href="#compétences">Compétences</CustomLink>
        <CustomLink href="#projets">Projets</CustomLink>
        <CustomLink href="#contact">Contact</CustomLink>
      </Box>
    </Box>
  );
}
