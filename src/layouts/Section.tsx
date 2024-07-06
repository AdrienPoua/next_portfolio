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
        >        <Box component="section" className={`flex flex-col py-24 px-[10%] ${black ? "bg-black" : ""}`} id={href ? href : title.toLowerCase().replace(/\s+/g, '-')}>
                <Box className="flex items-center mb-10">
                    <Box className={`w-8 h-6 inline-block shrink-0 ${black ? "bg-white" : "bg-black"}`} />
                    <Typography component="h3" variant={black ? "body2" : "body1"} className="ms-4 text-4xl md:text-5xl">{title}</Typography>
                </Box>
                {children}
            </Box>
        </motion.div>
    );
}
