import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chatpersona.ai'),
  title: 'ChatPersona AI - Boost Your Revenue 10x',
  description: 'AI-powered personas that engage your audience and increase your earnings by 10x. Perfect for OnlyFans creators and content creators.',
  keywords: 'AI, OnlyFans, content creators, revenue, automation, personas',
  authors: [{ name: 'ChatPersona AI' }],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😈</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😈</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😈</text></svg>',
  },
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#C26FD5" />
        <meta name="apple-mobile-web-app-title" content="ChatPersona AI" />
        <meta name="application-name" content="ChatPersona AI" />
        <meta name="msapplication-TileColor" content="#C26FD5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

