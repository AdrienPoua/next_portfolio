import React, { useState } from "react";
import { Box, Container, Button, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type CustomLinkProps = {
  href: string,
  title: string,
  setIsOpen: (x: boolean) => void
}

const CustomLink = ({ href, title, setIsOpen }: CustomLinkProps) => {
  return (
    <ListItem className="p-0">
        <Button href={"#"+href} onClick={() => setIsOpen(false)} className="text-black size-full rounded-none py-6" variant="contained">
          {title}
        </Button>
    </ListItem>
  );
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container component="nav" className="flex items-center justify-end ">
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon className="text-6xl text-black" />
      </Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Box>
          <List className="flex flex-col p-0 min-w-[200px]">
            <CustomLink href="about" title="About" setIsOpen={setIsOpen} />
            <CustomLink href="compétences" title="Compétences" setIsOpen={setIsOpen} />
            <CustomLink href="projets" title="projects" setIsOpen={setIsOpen} />
            <CustomLink href="contact" title="Contact" setIsOpen={setIsOpen} />
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

