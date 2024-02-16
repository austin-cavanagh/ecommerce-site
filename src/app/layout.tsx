import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cavanagh Woodcrafts',
  description: 'Generated by create next app',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col sm:px-6 lg:px-8">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
