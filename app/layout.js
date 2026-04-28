import './globals.css';
import Script from "next/script";
import GATracker from "./ga-tracker";

export const metadata = {
  title: 'Sadeed Ahmad | Software Engineer | Australia',
  description: 'Portfolio of Sadeed Ahmad, Software Enginner / Full Stack Developer specialising in React, Next.js, .NET, SQL Server, Azure DevOps and Power Platform.',
  keywords: [
    'Sadeed Ahmad',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    '.NET Developer',
    'Power Platform Developer',
    'Azure DevOps',
    'Healthcare Software Developer',
    'Brisbane Software Engineer'
  ],
  authors: [{ name: 'Sadeed Ahmad' }],
  creator: 'Sadeed Ahmad',
  openGraph: {
    title: 'Sadeed Ahmad | Full Stack Developer',
    description: 'Modern full-stack portfolio for international remote opportunities.',
    type: 'website',
    locale: 'en_AU'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#02030d'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CXS01RW5T3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXS01RW5T3');
          `}
        </Script>

      </head>

      <body>
        <GATracker />
        {children}
      </body>
    </html>
  );
}
