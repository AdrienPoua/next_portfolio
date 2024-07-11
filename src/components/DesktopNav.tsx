import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const CustomLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <Link href={href} underline='none' className="relative group mr-4 text-xl overflow-hidden rounded-lg px-8 py-3 ">
      <Box className="bg-black absolute -left-3 -right-3  top-0 bottom-0 translate-x-full -skew-x-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:ease-in-out -z-10" />
      <Typography className="relative text-black group-hover:text-white duration-300 text-xl ease-in-out">{children}</Typography>
    </Link>
  );
};

export default function DesktopNav() {
  return (
    <Box component="nav" className="md:mb-28">
      <Box className="flex items-center justify-end gap-4">
        <CustomLink href="#about">À propos</CustomLink>
        <CustomLink href="#compétences">Compétences</CustomLink>
        <CustomLink href="#projets">Projets</CustomLink>
        <CustomLink href="#contact">Contact</CustomLink>
      </Box>
    </Box>
  );
}
