import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaHome, FaUser, FaProjectDiagram, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import Profile from './images/profile.png';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={Profile} alt="Kum Yew Loke" className="navbar-profile" />
                <Link to="/" className="navbar-logo">Kum Yew Loke</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
                <li><Link to="/about"><FaUser className="icon" /> About</Link></li>
                <li><Link to="/projects"><FaProjectDiagram className='icon'/> Projects</Link></li>
                <li><Link to="/resume"><FaFilePdf className='icon'/> Resume</Link></li>
                <li><Link to="/contact"><FaEnvelope className="icon" /> Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
