import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import Interactions from '@/components/Interactions';
import SoonModal from '@/components/SoonModal';

export const metadata = {
  title: 'Legends Investor Meeting — Singapore',
  description: 'Legends Offline · Q4 2026 — investor-only gathering in Singapore, Thursday 8 October 2026, during the Milken Institute Asia Summit week.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <Interactions />
        <SoonModal />
      </body>
    </html>
  );
}
