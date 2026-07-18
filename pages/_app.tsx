// pages/_app.tsx
import type { AppProps } from 'next/app';
import { JetBrains_Mono } from 'next/font/google';
import Navbar from '../components/NavBar'; // Update path if needed
import Footer from '../components/Footer'; // Update path if needed
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { portfolioData } from '../data/portfolioData';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={`${jetbrainsMono.variable} font-mono`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
            key={router.route}
            className="flex-grow" // <--- THE KEY CHANGE
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer ownerName={portfolioData.owner.name} />
    </div>
  );
}

export default MyApp;