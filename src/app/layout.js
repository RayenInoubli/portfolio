import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export const metadata = {
  title: "Rayen Inoubli - Portfolio",
  description: "Software Engineer & Creative Technologist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
