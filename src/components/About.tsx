/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Layout from "@layouts/Section"
import { Typography } from '@mui/material'

export default function About() {
  return (
    <Layout title="À propos" about>
      <Typography variant="body1" paragraph className="p-4 duration-300 leading-8 text-white">
        Développeur web frontend passionné en Île-de-France,
        je suis à la recherche d'une opportunité au sein d'une équipe dynamique. <br />
        Je prend plaisir à améliorer mes compétences et je suis prêt à apporter une valeur ajoutée à nos futures collaborations.<br />
        Si vous cherchez un développeur frontend passionné et déterminé pour renforcer votre équipe, n'hésitez pas à me contacter. <br />
      </Typography>
    </Layout>
  )
}
