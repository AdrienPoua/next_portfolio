"use client";
import "./globals.css";
import App from "./App";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/app/theme";
import ScrollToTopButton from "@components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <App>
            <ScrollToTopButton />
            {children}
          </App>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}