import { createTheme, responsiveFontSizes } from "@mui/material/styles";


// Créez un thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#6b7280', // Couleur principale personnalisée
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
      lg: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    body1: {
      color: '#000000',
    },
    body2: {
      color: '#FFFF',
    },
    h1: {
      color: '#000000', // Couleur de texte pour h1
      fontFamily: 'Playfair Display',
      
    },
    h2: {
      fontFamily: 'Playfair Display',
    },
    h3: {
      fontFamily: 'Playfair Display',
      color: '#6b7280', // Couleur de texte pour h3
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
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