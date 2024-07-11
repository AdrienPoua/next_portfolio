import { Box } from '@mui/material'
import React from 'react'
import { contact } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import { wavyAnimation } from '@/animations'

export default function ContactLinks() {
    return (
        <Box className="flex lg:flex-col justify-center lg:justify-start w-full gap-5 shrink-0 lg:w-fit">
            {
                contact.map((item, index) => (
                    <motion.div
                        variants={wavyAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key={uuidv4()}
                        className="overflow-hidden rounded-full aspect-square"
                        transition={{ yoyo: Infinity, duration: 1, repeat: Infinity, repeatType: "mirror", delay: index * 0.25, ease: "easeInOut" }}
                    >
                        <Link href={item.link} target="_blank" rel="noreferrer">
                            <Image src={item.img} alt={"Way to contact me"} className="w-10 h-10 mb-4" />
                        </Link>
                    </motion.div>
                ))
            }
        </Box>
    )
}
