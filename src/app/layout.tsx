import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import { RootLayoutProps } from '@/interfaces/page';
import '@/app/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s | The wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={josefin.className}>
      <body className="bg-primary-950 text-primary-100 min-h-screen antialiased">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
