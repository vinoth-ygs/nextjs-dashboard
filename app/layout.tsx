import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dashboard 1',
  description: 'Sample Next.js Application',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
