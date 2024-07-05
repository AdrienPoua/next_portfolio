import { createTheme } from "@mui/material/styles";


// Créez un thème personnalisé
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            backgroundColor: "#424242", // Utilisation d'une couleur hexadécimale valide
            color: "white",
            borderColor: "gray",
          },
          "&.Mui-disabled": {
            backgroundColor: "#424242", // Utilisation d'une couleur hexadécimale valide
            color: "white",
            borderColor: "gray",
          },
        },
      },
    },
  },
});

export default theme;