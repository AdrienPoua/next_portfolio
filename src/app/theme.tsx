import { createTheme } from "@mui/material/styles";


// Créez un thème personnalisé
const theme = createTheme({
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
          }
        },
      },
    },
  },
});

export default theme;