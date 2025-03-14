import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ClientAnalytics } from '@/components/ClientAnalytics';
import { Consent } from '@/components/Consent';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SEELE',
  description:
    'SEELE is a high-quality pitch-shifting plugin for music producers',
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Consent />
        <ClientAnalytics />
      </body>
    </html>
  );
}
