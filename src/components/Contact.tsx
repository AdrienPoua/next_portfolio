"use client";
import Layout from "@layouts/Section";
import { Box } from '@mui/material';
import ContactLinks from "@components/ContactLinks";
import ContactForm from "@components/ContactForm";



export default function Contact() {
  return (
    <Layout title="Contact" black>
      <Box className="flex flex-col md:flex-row justify-center gap-5">
        <ContactLinks />
        <ContactForm />
      </Box>
    </Layout>
  );
}
