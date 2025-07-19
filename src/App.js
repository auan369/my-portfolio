import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
