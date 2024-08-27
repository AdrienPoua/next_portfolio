"use client";
import "./globals.css";
import App from "./App";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/theme";
import ScrollToTopButton from "@components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>

          <CssBaseline />
          <App>
            <ScrollToTopButton />
            {children}
          </App>
        </ThemeProvider>
    </StyledEngineProvider>
  );
}