// App.js

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyProjects = React.lazy(() => import('./components/Projects'));
const LazyResume = React.lazy(() => import('./components/Resume'));
const LazyContact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#f5f7fa] text-[#333] font-sans">
        <Navbar />
        <Home />
        <Suspense fallback={
          <div className="min-h-screen flex justify-center items-center">
            <p className="text-xl font-semibold">Loading Section...</p>
          </div>
        }>
          <LazyAbout />
          <LazyProjects />
          <LazyResume />
          <LazyContact />
        </Suspense>
        
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;