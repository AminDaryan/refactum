import { createTheme } from "@mui/material";
import Header from "./components/Header";
import "./globals.css";
import MaterialUIThemeProvider from "./MaterialUIThemeProvider";


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

export const metadata = {
  title: 'Refactum',
  description: 'Refactum test project',
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MaterialUIThemeProvider>
          <Header />
          {children}
        </MaterialUIThemeProvider>
      </body>
    </html>
  );
}
