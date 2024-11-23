"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Layout from "@layouts/Section"
import { Globe, Code, Lightbulb, LucideProps } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 }
}


export default function Services() {
  return (
    <Layout title="Services" black href="services">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <ServiceCard
          title="Applications Web Innovantes"
          description="Création de solutions complètes, du frontend au backend."
          content="Développez une application web puissante et intuitive. Conçue pour offrir une expérience utilisateur fluide et performante."
          icon={Code}
        />

        <ServiceCard
          title="Sites Web Personnalisés"
          description="Création de site web personnalisés, optimisés pour tous les appareils."
          content="Présentez votre entreprise, vos produits ou services. Optimisé pour tous les appareils et les moteurs de recherche, assure une visibilité maximale et engage vos clients en ligne."
          icon={Globe}
        />

        <ServiceCard
          title="Projets Sur-Mesure"
          description="Une idée ? Je la réalise."
          content="Que ce soit un site interactif, un outil spécifique ou une idée originale, je réalise des solutions sur mesure, entièrement adaptées à vos exigences."
          icon={Lightbulb}
        />
      </motion.div>
    </Layout>
  )
}

const ServiceCard = ({ title, description, content, icon: Icon }: { title: string, description: string, content: string, icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">> }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white overflow-hidden group h-full cursor-pointer">
      <CardHeader className="relative z-10">
        <motion.div
          variants={iconVariants}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Icon size={48} />
        </motion.div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
          {content}
        </p>
      </CardContent>
    </Card>
  </motion.div>
)
