// pages/_app.tsx
import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar'; // Update path if needed
import Footer from '../components/Footer'; // Update path if needed
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';


// In Phase 4 we will import global styles here
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
            key={router.route}
            className="flex-grow pt-16 px-4 sm:px-8" // <--- THE KEY CHANGE
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;