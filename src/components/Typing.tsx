import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function TypingEffect({ text, classNames }: Readonly<{ text: string, classNames?: string, comp?: string }>) {
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);


    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1)
            } else {
                clearInterval(typingEffect);
            }
        }, 100);

        return () => {
            clearInterval(typingEffect);
        };
    }, [text, i]);


    return (
        <Typography className={classNames} >
            {displayedText || text}
        </Typography>
    );
}
