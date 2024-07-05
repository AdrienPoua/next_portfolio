"use client";
import { Typography, Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { sectionAnimation } from '@/animations';
import useVisibility from '@/hooks/useVisiblity';

export default function Section({ title, children, white, about }: Readonly<{ title: string, children: React.ReactNode, white?: boolean, about?: boolean }>) {
    const sectionRef = React.useRef(null);
    const isVisible = useVisibility(sectionRef);
    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
            variants={sectionAnimation}
            ref={sectionRef}
        >        <Box component="section" className={`flex flex-col py-24 px-[10%] ${white ? "bg-white" : ""}`} id={about ? "about" : title.toLowerCase().replace(/\s+/g, '-')}>
                <Box className="flex items-center mb-10">
                    <Box className={`w-8 h-6 inline-block ${white ? "bg-black" : "bg-white"}`} />
                    <Typography variant='h2' className={`ms-4 ${white ? "text-black" : "text-white"}`}>{title}</Typography>
                </Box>
                {children}
            </Box>
        </motion.div>
    );
}
