import React, { useEffect, useState } from 'react'
import { Box, TextField, Button, Alert, LinearProgress } from '@mui/material';
import { sendEmail } from "@actions";

export default function ContactForm() {
    const [content, setContent] = useState("");
    const [from, setFrom] = useState("");
    const [result, setResult] = useState<{ success: boolean; message: string; error?: unknown } | null>(null);
    const [disabled, setDisabled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Indiquer que le composant est monté
    }, []);

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(event.target.value);
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidEmail(from)) {
            setResult({ success: false, message: "Adresse e-mail invalide", error: null });
            return;
        }
        try {
            setDisabled(true);
            const res = await sendEmail(from, content);
            setResult(res);
            setDisabled(!res.success);
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            setResult({ success: false, message: "Erreur lors de l'envoi de l'email", error });
            setDisabled(false);
        }
    };

    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                setResult(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    if (!mounted) {
        return null; // Ne rien rendre jusqu'à ce que le composant soit monté
    }

    return (
        <Box component="form" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 max-w-full w-[800px]">
            <TextField
                label="Votre email"
                variant="outlined"
                required
                error={result?.success === false}
                value={from}
                onChange={handleFromChange}
                className="w-full bg-white"
            />
            <TextField
                label="Entrez votre message ici"
                multiline
                rows={10}
                required
                autoComplete="off"
                variant="outlined"
                value={content}
                onChange={handleContentChange}
                className="w-full bg-white"
            />
            {!disabled && <Button type="submit" variant="contained" color="primary" disabled={disabled}>
                Soumettre
            </Button>}
            {
                disabled && (
                    <Box className="w-full">
                        <LinearProgress color='primary' />
                    </Box>
                )
            }
            {result && (
                <Box mt={2} className="max-w-[800px] mx-auto">
                    <Alert severity={result.success ? "success" : "error"}>
                        {result.message}
                    </Alert>
                </Box>
            )}
        </Box>

    )
}
