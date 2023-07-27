import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Son Mac | Personal website',
  description: 'Personal website of Son Mac',
  keywords: [
    'Next.js',
    'Software Engineering',
    'Personal website',
    'Tailwind CSS',
  ],
  creator: 'Son Mac',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-indigo'>
      <head>
        <Script
          async
          src='https://kit.fontawesome.com/ead8c78b5a.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <meta
          property='og:image'
          content='https://drive.google.com/uc?id=10SqUacEbE7gWVBzBGVBaqf6Kq353E8n-'
        />
      </head>
      <body
        className={`${inter.className} text-ash bg-gradient-to-r from-gunmetal via-prussian to-gunmetal`}
      >
        {children}
      </body>
    </html>
  );
}
