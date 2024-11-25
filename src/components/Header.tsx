"use client";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import { Box } from "@mui/material";
import useIsMobile from "@/hooks/useMobile";
import Logo from "@/components/Logo";
import MusicButton from "@/components/MusicButton";

export default function Header() {
  return (
    <header id="back-to-top-anchor" className="w-full">
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

