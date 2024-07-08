import React, { useState } from "react";
import { Box, Container, Button, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DevicesIcon from '@mui/icons-material/Devices';

type CustomLinkProps = {
  href: string,
  title: string,
  endIcon: React.ReactNode,
  setIsOpen: (x: boolean) => void
}

const CustomLink = ({ href, title, setIsOpen, endIcon }: CustomLinkProps) => {
  return (
    <ListItem className="p-0">
      <Button href={"#" + href} onClick={() => setIsOpen(false)} className="text-black size-full rounded-none py-6 " variant="contained" endIcon={endIcon}>
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
            <CustomLink href="about" title="À propos" setIsOpen={setIsOpen} endIcon={<PersonOutlineIcon />
            } />
            <CustomLink href="compétences" title="Compétences" setIsOpen={setIsOpen} endIcon={<BlurCircularIcon />
            } />
            <CustomLink href="projets" title="projets" setIsOpen={setIsOpen} endIcon={<DevicesIcon />
            } />
            <CustomLink href="contact" title="Contact" setIsOpen={setIsOpen} endIcon={<MailOutlineIcon />
            } />
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

