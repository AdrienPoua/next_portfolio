/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Layout from "@layouts/Section"
import { Typography } from '@mui/material'

export default function About() {
  return (
    <Layout title="À propos">
      <Typography variant="body1" paragraph className="hover:border-blue-500 hover:border transition-colors p-4 duration-300 leading-8 ">
        Développeur web frontend passionné basé en Île-de-France, je suis titulaire d'une certification RNCP obtenue avec OpenClassrooms. Mon enthousiasme pour le codage ne cesse de croître chaque jour.
        Je suis actuellement à la recherche d'une opportunité au sein d'une équipe dynamique et innovante. Mon objectif est de contribuer avec mes compétences techniques tout en continuant à apprendre et à évoluer professionnellement.
        Je m'efforce constamment d'améliorer mes compétences et je suis prêt à apporter une valeur ajoutée significative à nos futures collaborations. Si vous cherchez un développeur frontend passionné et déterminé pour renforcer votre équipe, n'hésitez pas à me contacter.
        Au plaisir de discuter de nos futures collaborations et de partager nos ambitions respectives !
      </Typography>
    </Layout>
  )
}
