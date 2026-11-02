import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit, Space_Grotesk } from "next/font/google";
import { Sky } from "@/components/Sky";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Kaung Myat Thant | Junior Web Developer",
  description:
    "Portfolio of Kaung Myat Thant (Draven Kai), a fourth-year Software Engineering student at MIIT and a junior web developer working with React, Next.js, and the MERN stack.",
  authors: [{ name: "Kaung Myat Thant" }],
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans text-ink antialiased">
        <Sky />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
