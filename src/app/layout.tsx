import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'AWZ - Academia Waleska Zanyor',
  description:
    'Academia Waleska Zanyor - Cursos de cabeleireiro, colorimetria, corte e muito mais.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        aria-labelledby="body-title"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h2 id="body-title" className="sr-only">
          Site Academia Waleska Zanyor
        </h2>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
