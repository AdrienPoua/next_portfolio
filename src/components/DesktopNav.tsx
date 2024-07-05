import { Box, Container, Link } from '@mui/material'
import React from 'react'

export default function DesktopNav() {
  return (
    <Container component="nav" className="py-5">
      <Box className="flex items-center justify-end">
        <Link href="#about" className="mr-4">About</Link>
        <Link href="#competences" className="mr-4">Compétences</Link>
        <Link href="#projets" className="mr-4">Projets</Link>
        <Link href="#contact">Contact</Link>
      </Box>
    </Container>
  )
}
