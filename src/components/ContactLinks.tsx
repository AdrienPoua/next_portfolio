import { Box } from '@mui/material'
import React from 'react'
import { contact } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactLinks() {
    return (
        <Box className="flex flex-col gap-5 shrink-1 w-fit">
            {
                contact.map((item, index) => (
                    <Link href={Object.values(item)[0]} key={index} target="_blank" rel="noreferrer" className="overflow-hidden rounded-full aspect-square">
                        <Image src={Object.values(item)[1]} alt={Object.keys(item)[0]} className="w-10 h-10 mb-4" />
                    </Link>
                ))
            }
        </Box>
    )
}
