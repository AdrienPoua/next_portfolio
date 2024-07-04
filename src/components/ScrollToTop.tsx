import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';

const hasWindow = typeof window !== 'undefined';

function ScrollTop({children} : Readonly<{ children: React.ReactNode }>) {
  const trigger = useScrollTrigger({
    target: hasWindow ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event : React.MouseEvent<HTMLElement> ) => {
    const anchor = document.querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Zoom in={trigger}>
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
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
  );
}