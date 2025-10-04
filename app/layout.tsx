import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChatPersona AI - Boost Your Revenue 10x',
  description: 'AI-powered personas that engage your audience and increase your earnings by 10x. Perfect for OnlyFans creators and content creators.',
  keywords: 'AI, OnlyFans, content creators, revenue, automation, personas',
  authors: [{ name: 'ChatPersona AI' }],
  openGraph: {
    title: 'ChatPersona AI - Boost Your Revenue 10x',
    description: 'AI-powered personas that engage your audience and increase your earnings by 10x.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

