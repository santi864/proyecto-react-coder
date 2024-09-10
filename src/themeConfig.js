import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: { main: "A02334" },
    secondary: { main: "FFAD60" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});
