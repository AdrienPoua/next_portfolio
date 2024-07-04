import React from "react";

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Adrien Poua Portfolio </title>
                <meta
                    name="keywords"
                    content="Adrien POUA Portfolio Développeur Web Fullstack React Node.js Next.js"
                />
                <meta
                    name="description"
                    content="Portfolio d'Adrien POUA, développeur web fullstack spécialisé en React, Node.js et Next.js."
                />
                <meta
                    name="author"
                    content="Adrien POUA"
                />

                {/* Open Graph Tags */}
                <meta
                    property="og:title"
                    content="Adrien POUA"
                />
                <meta
                    property="og:description"
                    content="Portfolio d'Adrien POUA, développeur web fullstack spécialisé en React, Node.js et Next.js."
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta
                    property="og:url"
                    content=""
                />

                {/* Twitter Cards */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content="Argenteuil Basketball"
                />
                <meta
                    name="twitter:description"
                    content="Site officiel du club de basket d'Argenteuil."
                />
                <meta
                    name="twitter:image"
                    content="/images/logo.png"
                />

                {/* Canonical Link */}
                <link
                    rel="canonical"
                    href=""
                />

                {/* Favicon */}
                <link
                    rel="icon"
                    href=""
                />
            </head>
            <body className="flex flex-col font-main min-h-screen">{children}</body>
        </html>
    );
}