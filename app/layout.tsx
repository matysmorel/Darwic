import type { Metadata, Viewport } from 'next'
import { Roboto_Flex, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const robotoFlex = Roboto_Flex({
  subsets: ["latin", "latin-ext"],
  variable: '--font-roboto-flex',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Darwic | Evolution Accelerated',
  description: 'Darwic engineers high-performance enzyme and protein variants through accelerated directed evolution — pioneering engineered biology for sustainable industry.',
  keywords: ['enzyme', 'protein', 'engineered biology', 'directed evolution', 'biotechnology', 'industrial enzymes'],
  openGraph: {
    title: 'Darwic | Evolution Accelerated',
    description: 'Darwic engineers high-performance enzyme and protein variants through accelerated directed evolution — pioneering engineered biology for sustainable industry.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darwic | Evolution Accelerated',
    description: 'Darwic engineers high-performance enzyme and protein variants through accelerated directed evolution — pioneering engineered biology for sustainable industry.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#64B557',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
