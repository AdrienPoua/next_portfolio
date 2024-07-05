"use client";
import React from "react";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import { useMediaQuery, Theme, Box } from "@mui/material";


export default function Header() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box component="header" id="back-to-top-anchor">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </Box>
  );
};

