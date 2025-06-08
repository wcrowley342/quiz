import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEO IQ Quiz | Will Crowley Marketing',
  description: 'Test your SEO skills and earn free swag if you score 80% or higher.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-navy`}>{children}</body>
    </html>
  );
}
