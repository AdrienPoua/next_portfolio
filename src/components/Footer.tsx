"use client";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      className="bg-black py-8  flex justify-center flex-col relative -z-10"
      component="footer">
      <Box className="w-full min-h-[2px] border-t-2 border-dashed border-white absolute top-0" />
      <Box className="flex justify-center ">
        <Link
          href="https://www.linkedin.com/in/adrien-poua"
          target="_blank"
          className="text-gray-500 flex justify-center items-center no-underline">
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}>
            Made with
            <Box
              component="span"
              className="text-primary mx-1">
              ❤
            </Box>
            by
            <Box
              component="span"
              className="ml-1">
              Adrien POUA
            </Box>
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}