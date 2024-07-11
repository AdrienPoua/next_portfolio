"use client";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import { Box } from "@mui/material";
import useIsMobile from "@/hooks/useMobile";
import Logo from "@/components/Logo";


export default function Header() {
  const isMobile = useIsMobile();
  return (
    <Box component="header" id="back-to-top-anchor" className="flex justify-between mx-10 my-5">
      <Logo />
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </Box>
  );
};

