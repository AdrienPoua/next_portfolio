/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Layout from "@layouts/Section";
import { Typography } from '@mui/material';

export default function About() {
  return (
    <Layout title="À propos" black href="about">
      <Typography variant="body2" className="leading-loose text-lg ">
        Développeur web frontend passionné basé en Île-de-France, je suis à la recherche d'une opportunité au sein d'une équipe dynamique. <br />
        Je prends plaisir à améliorer mes compétences et je suis prêt à apporter une valeur ajoutée à nos futures collaborations. <br />
        En dehors du développement web, je suis un passionné de basketball, où je suis impliqué en tant que joueur, arbitre et dirigeant. <br />
        Si vous cherchez un développeur frontend passionné et déterminé pour renforcer votre équipe, n'hésitez pas à me contacter. <br />
      </Typography>
    </Layout>
  );
}
