"use client";
import React, { useEffect, useState } from 'react';
import Layout from "@layouts/Section";
import { Box, TextField, Button, Alert } from '@mui/material';
import { sendEmail } from "@actions";
import ContactLinks from "@components/ContactLinks";

export default function Contact() {
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
    <Layout title="Contact">
      <Box className="flex justify-center gap-5">
        <ContactLinks />
        <Box component="form" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
          <TextField
            label="Votre email"
            variant="outlined"
            value={from}
            onChange={handleFromChange}
            className="min-w-[800px] w-full bg-white"
          />
          <TextField
            label="Entrez votre message ici"
            multiline
            rows={10}
            variant="outlined"
            value={content}
            onChange={handleContentChange}
            className="max-w-[800px] w-full bg-white"
          />
          <Button type="submit" variant="contained" color="primary" disabled={disabled}>
            Soumettre
          </Button>
        </Box>
      </Box>
        {result && (
          <Box mt={4} className="max-w-[800px] mx-auto">
            <Alert severity={result.success ? "success" : "error"}>
              {result.message}
            </Alert>
          </Box>
        )}
    </Layout>
  );
}
