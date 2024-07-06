import React, { useState } from "react";
import { Box, Container, Button, Drawer, List, ListItem, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type CustomLinkProps = {
  href: string,
  title: string,
  setIsOpen: (x: boolean) => void
}

const CustomLink = ({ href, title, setIsOpen }: CustomLinkProps) => {
  return (
    <ListItem className="bg-gray-500 px-10 py-5 hover:bg-gray-300 transition-colors duration-150 shadow-2xl">
      <Link href={'#' + href} onClick={() => setIsOpen(false)} className="text-black no-underline">
        {title}
      </Link>
    </ListItem>
  );
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container component="nav" className="flex items-center justify-end bg-white">
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon className="text-6xl" />
      </Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Box>
          <List className="flex flex-col p-0">
            <CustomLink href="about" title="About" setIsOpen={setIsOpen} />
            <CustomLink href="compétences" title="Projects" setIsOpen={setIsOpen} />
            <CustomLink href="projets" title="Contact" setIsOpen={setIsOpen} />
            <CustomLink href="contact" title="Contact" setIsOpen={setIsOpen} />
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

