"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null); // Référence pour l'élément audio

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const pulseVariants = {
        playing: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
        stopped: {
            scale: 1,
        },
    };

    const noteVariants = {
        hover: {
            y: [-2, 2],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse" as const, // Fix: specify repeatType as a constant
            },
        },
    };

    return (
        <motion.div
            animate={isPlaying ? "playing" : "stopped"}
            variants={pulseVariants}
        >
            <Button
                variant="outline"
                size="icon"
                className="rounded-full "
                onClick={toggleMusic}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <motion.div
                    animate={isHovered ? "hover" : ""}
                    variants={noteVariants}
                >
                    <Music size={48} />
                </motion.div>
            </Button>
            {/* Élément audio caché */}
            <audio ref={audioRef} src="/music.mp3" />
        </motion.div>
    );
}
