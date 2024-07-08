"use client";
import { Typography, Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { sectionAnimation } from '@/animations';
import useVisibility from '@/hooks/useVisiblity';

export default function Section({ title, children, black, href }: Readonly<{ title: string, children: React.ReactNode, black?: boolean, href?: string }>) {
    const sectionRef = React.useRef(null);
    const isVisible = useVisibility(sectionRef);
    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
            variants={sectionAnimation}
            ref={sectionRef}
        >        <Box component="section" className={`flex flex-col py-16 px-[10%] ${black ? "bg-black" : ""}`} id={href ? href : title.toLowerCase().replace(/\s+/g, '-')}>
                <Box className="flex items-center mb-16">
                    <Box className={`w-8 h-6 inline-block shrink-0 ${black ? "bg-white" : "bg-black"}`} />
                    <Typography variant="h2" className={`ms-4 text-4xl md:text-5xl break-all  ${black ? "text-white" : "text-black"} `}>{title}</Typography>
                </Box>
                {children}
            </Box>
        </motion.div>
    );
}
