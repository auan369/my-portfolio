import React, { Suspense } from 'react'; 
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const LazyAbout = React.lazy(() => import('./components/About'));
const LazyProjects = React.lazy(() => import('./components/Projects'));
const LazyResume = React.lazy(() => import('./components/Resume'));
const LazyContact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAbout />
        <LazyProjects />
        <LazyResume />
        <LazyContact />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
