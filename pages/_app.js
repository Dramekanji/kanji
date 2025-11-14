import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
