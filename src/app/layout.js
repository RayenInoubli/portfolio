import { Archivo } from "next/font/google";
import "./globals.css";

// One variable family: the width axis gives condensed display type and
// normal-width text from the same typeface.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Rayen Inoubli | Software Engineer",
  description:
    "Software Engineer and Co-Founder at Attoset. I build software products, systems and infrastructure from idea to production.",
  openGraph: {
    title: "Rayen Inoubli | Software Engineer",
    description:
      "Software Engineer and Co-Founder at Attoset. I build software products, systems and infrastructure from idea to production.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" },
  ],
};

// Runs before first paint so there is no flash of the wrong theme.
// A saved choice wins; otherwise follow the OS, defaulting to dark.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={archivo.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
