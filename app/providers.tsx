'use client';

import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
