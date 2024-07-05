import { Typography, Box } from '@mui/material';
import React from 'react';

export default function Section({ title, children, white }: Readonly<{ title: string, children: React.ReactNode, white?: boolean }>) {
    return (
        <Box component="section" className={`flex flex-col py-24 px-[10%] ${white ? "bg-white" : ""}`} id={title.toLowerCase().replace(/\s+/g, '-')}>
            <Box className="flex items-center mb-10">
                <Box className={`w-8 h-6 inline-block ${white ? "bg-black" : "bg-white"}`} />
                <Typography variant='h2' className={`ms-4 ${white ? "text-black" : ""}`}>{title}</Typography>
            </Box>
            {children}
        </Box>
    );
}
