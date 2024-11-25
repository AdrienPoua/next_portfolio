import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { wavyAnimation } from '@/animations'

const contact = [
    {
        link: "https://github.com/AdrienPoua",
        img: "/github.png",
        name: "Github",
    },
    {
        link: "https://www.linkedin.com/in/adrien-poua/",
        img: "/linkedin.png",
        name: "Linkedin",
    },
    {
        link: "mailto:adrien.poua@gmail.com",
        img: "/mail.png",
        name: "Email",
    },
]

export default function ContactLinks() {
    return (
        <Box className="hidden md:flex-col justify-center md:justify-start w-full gap-5 shrink-0 md:w-fit">
            {
                contact.map((item, index) => (
                    <motion.div
                        variants={wavyAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key={item.img}
                        className="overflow-hidden rounded-full aspect-square"
                        transition={{ yoyo: Infinity, duration: 1, repeat: Infinity, repeatType: "mirror", delay: index * 0.25, ease: "easeInOut" }}
                    >
                        <Link href={item.link} target="_blank" rel="noreferrer">
                            <Image src={item.img} alt={"Way to contact me"} className="w-10 h-10 mb-4" width={100} height={100} />
                        </Link>
                    </motion.div>
                ))
            }
        </Box>
    )
}
