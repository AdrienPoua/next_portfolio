import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <Box className="flex py-5">
      <Box className="flex lg:flex-col justify-center items-center w-1/2">
        <Typography variant='h1'>Adrien POUA</Typography>
        <Typography className="text-2xl">Développeur Front-end</Typography>
        <Typography className="text-2xl">J&apos;adore apprendre</Typography>
        <Link href="#contact" passHref>
          <Button variant="contained" color="primary">
            Contactez-moi
          </Button>
        </Link>
      </Box>
      <Box className="flex justify-center items-center w-1/2">
        <Image src="https://via.placeholder.com/300" alt="placeholder" width={500} height={500} />
      </Box>
    </Box>
  )
}
