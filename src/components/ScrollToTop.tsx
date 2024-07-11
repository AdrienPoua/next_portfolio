import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';

const hasWindow = typeof window !== 'undefined';

function ScrollTop({ children }: Readonly<{ children: React.ReactNode }>) {
  const trigger = useScrollTrigger({
    target: hasWindow ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasWindow) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;
        const isMobile = window.innerWidth < 900;
        if (scrollPosition + 25 >= totalHeight && isMobile) {
          setAtBottom(true);
        } else {
          setAtBottom(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const anchor = document.querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Zoom in={trigger && !atBottom}>
      <Box
        onClick={handleClick}
        className="fixed bottom-4 right-4"
        role="go top"
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function BackToTop() {
  return (
    <ScrollTop >
      <Fab size="large" aria-label="scroll back to top" color="primary"
        className="z-40">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
}
