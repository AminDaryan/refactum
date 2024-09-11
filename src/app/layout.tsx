import Header from "./components/Header";
import "./globals.css";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
