import React from "react";
import { Helmet } from "react-helmet";

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <Helmet>
                <html lang="fr" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Adrien Poua Portfolio</title>
                <meta name="keywords" content="Adrien POUA, Portfolio, Développeur Web, Fullstack, React, Node.js, Next.js" />
                <meta name="description" content="Portfolio d'Adrien POUA, développeur web fullstack spécialisé en React, Node.js et Next.js." />
                <meta name="author" content="Adrien POUA" />
                <meta property="og:title" content="Adrien POUA Portfolio" />
                <meta property="og:description" content="Portfolio d'Adrien POUA, développeur web fullstack spécialisé en React, Node.js et Next.js." />
                <meta property="og:image" content="/path/to/image.jpg" />
                <meta property="og:url" content="https://www.adrienpoua.fr" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Adrien POUA Portfolio" />
                <meta name="twitter:description" content="Portfolio d'Adrien POUA, développeur web fullstack spécialisé en React, Node.js et Next.js." />
                <meta name="twitter:image" content="/images/logo.png" />
                <link rel="canonical" href="https://www.adrienpoua.fr" />
                <link rel="icon" href="./favicon.ico" />
            </Helmet>
            <body className="flex flex-col font-main min-h-screen">
                {children}
            </body>
        </html>
    );
}
