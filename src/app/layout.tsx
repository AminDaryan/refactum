import Header from "./components/Header";
import "./globals.css";
import MaterialUIThemeProvider from "./MaterialUIThemeProvider";


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
