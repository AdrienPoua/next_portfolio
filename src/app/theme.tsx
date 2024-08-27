import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



// Créez un thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#6b7280', // Couleur principale personnalisée
    },
    secondary: {
      main: '#b0916c', // Couleur secondaire personnalisée
    },
    text: {
      primary: '#00000', // Couleur de texte principale
      secondary: '#FFFF', // Couleur de texte secondaire
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: firaCode.style.fontFamily,
    body1: {
      color: '#000000',
    },
    body2: {
      color: '#FFFF',
    },
    h1: {
      color: '#000000', // Couleur de texte pour h1

    },
    h2: {
    },
    h3: {
      color: '#6b7280', // Couleur de texte pour h3
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          "&.MuiButton-contained": {
            backgroundColor: "#6b7280", // Utilisation d'une couleur hexadécimale valide
            color: "white",
            borderColor: "gray",
            "&:hover": {
              backgroundColor: "#4b5563",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Style par défaut pour le label
          color: "#6b7280",
          fontWeight: "semibold",
          borderRadius: "0rem",
          "&.Mui-focused": {
            // Style lorsque le label est en focus
            color: "#6b7280",
            BorderColor: "#6b7280",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6b7280",
            borderRadius: "0rem",
          },
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;