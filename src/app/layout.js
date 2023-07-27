import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Son Mac',
  description: 'Personal website of Son Mac',
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
      </head>
      <body
        className={`${inter.className} text-ash bg-gradient-to-r from-gunmetal via-prussian to-gunmetal`}
      >
        {children}
      </body>
    </html>
  );
}
