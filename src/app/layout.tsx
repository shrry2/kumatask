import { Inter } from 'next/font/google';

import './globals.css';

import { Header } from '@/src/components/layout/header';

export const metadata = {
  title: 'KumaTask',
  description: "The only TODO app you'll ever need",
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
