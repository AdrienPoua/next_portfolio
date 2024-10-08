"use client";
import { Typography, Box } from '@mui/material';
import React from 'react';

export default function Section({ title, children, black, href }: Readonly<{ title: string, children: React.ReactNode, black?: boolean, href?: string }>) {
    return (
        <Box component="section" className={`flex flex-col pt-20 pb-32 px-[10%] ${black ? "bg-black" : ""}`} id={href ? href : title.toLowerCase().replace(/\s+/g, '-')}>
            <Box className="flex items-center mb-16">
                <Box className={`w-8 h-6 inline-block shrink-0 ${black ? "bg-white" : "bg-black"}`} />
                <Typography variant="h2" className={`ms-4 text-4xl md:text-5xl break-all underline decoration-[#b0916c] underline-offset-[1.5rem] decoration-2 ${black ? "text-white" : "text-black"} `}>{title}</Typography>
            </Box>
            {children}
        </Box>
    );
}
