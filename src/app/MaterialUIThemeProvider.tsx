"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import "./globals.css";


declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#455b79",
    },
  },
});

function MaterialUIThemeProvider ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default MaterialUIThemeProvider;