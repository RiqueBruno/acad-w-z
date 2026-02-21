import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Academia Waleska Zanyor | Cursos de Beleza e Estética",
    template: "%s | Academia Waleska Zanyor",
  },
  description:
    "Formação profissional em cabeleireiro, colorimetria, corte e mechas. Estrutura completa e ensino prático na Academia Waleska Zanyor.",
  keywords: [
    "curso de cabeleireiro",
    "colorimetria",
    "Waleska Zanyor",
    "escola de beleza",
  ],
  authors: [{ name: "Waleska Zanyor" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com.br",
    siteName: "Academia Waleska Zanyor",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academia Waleska Zanyor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
