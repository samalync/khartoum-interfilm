//  'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import { LanguageProvider } from '../components/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khartoum Inter Film - Marketing Agency',
  description: 'High-quality content production and marketing solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}