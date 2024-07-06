import { Box, Link } from '@mui/material';
import React from 'react';

const CustomLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link href={href} color="black" underline="hover" className="mr-4 text-xl underline-offset-4 ">
      {children}
    </Link>
  );
};

export default function DesktopNav() {
  return (
    <Box component="nav" className="py-5 px-10">
      <Box className="flex items-center justify-end gap-4">
        <CustomLink href="#about">À propos</CustomLink>
        <CustomLink href="#compétences">Compétences</CustomLink>
        <CustomLink href="#projets">Projets</CustomLink>
        <CustomLink href="#contact">Contact</CustomLink>
      </Box>
    </Box>
  );
}
