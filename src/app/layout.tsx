import { RootLayoutProps } from '@/interfaces/page';
import '@/app/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/Header';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
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
      <body className="bg-primary-950 text-primary-100 min-h-screen antialiased flex flex-col relative">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
