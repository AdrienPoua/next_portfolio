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
    <ListItem>
      <Link href={'#' + href} onClick={() => setIsOpen(false)}>
        {title}
      </Link>
    </ListItem>
  );
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container component="nav" className="flex items-center justify-end">
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon className="text-6xl" />
      </Button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Box>
          <List className="flex flex-col">
            <CustomLink href="about" title="About" setIsOpen={setIsOpen} />
            <CustomLink href="projects" title="Projects" setIsOpen={setIsOpen} />
            <CustomLink href="contact" title="Contact" setIsOpen={setIsOpen} />
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

