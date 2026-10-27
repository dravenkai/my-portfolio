import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Kaung Myat Thant | Junior Web Developer",
  description:
    "Portfolio of Kaung Myat Thant (Draven Kai), a fourth-year Software Engineering student at MIIT and a junior web developer working with React, Next.js, and the MERN stack.",
  authors: [{ name: "Kaung Myat Thant" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
