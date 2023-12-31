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
  metadataBase: new URL('https://www.sonmac.me'),
  openGraph: {
    title: 'Son Mac | Personal website',
    description: 'Personal website of Son Mac',
    url: 'https://www.sonmac.me',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/android-chrome-192x192.png',
    shortcut: '/android-chrome-192x192.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({ children }) {
  const thumbnailUrl =
    'https://res.cloudinary.com/dbugposxw/image/upload/v1690478242/android-chrome-512x512_qgakh7.png';

  return (
    <html lang='en' className='bg-indigo'>
      <head>
        <Script
          async
          src='https://kit.fontawesome.com/ead8c78b5a.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <meta property='og:image' content={thumbnailUrl} />
        <meta property='og:image:secure_url' content={thumbnailUrl} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:height' content='300' />
        <meta property='og:image:width' content='300' />
      </head>
      <body
        className={`${inter.className} text-ash bg-gradient-to-r from-gunmetal via-prussian to-gunmetal`}
      >
        {children}
      </body>
    </html>
  );
}
