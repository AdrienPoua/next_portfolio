import React from 'react'
import Layout from "@layouts/Section"
import Card from "@components/Card"
import { projectsData } from '@/data'
import { Box } from '@mui/material'

export default function Projets() {
  return (
    <Layout title="Projets">
      <Box className="flex flex-col justify-center m-auto">
      {
        projectsData.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            tags={Array.from(project.tags)}
            imageUrl={project.imageUrl}
            site={project.site}
          />
        ))
      }
      </Box>
    </Layout>
  )
}
