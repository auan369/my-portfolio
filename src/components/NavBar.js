import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaHome, FaUser, FaProjectDiagram, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import Profile from './images/profile.png';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={Profile} alt="Kum Yew Loke" className="navbar-profile" />
                <a href="/" className="navbar-logo">Kum Yew Loke</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/"><FaHome className="icon" /> Home</a></li>
                <li><a href="#about"><FaUser className="icon" /> About</a></li>
                <li><a href="#projects"><FaProjectDiagram className='icon'/> Projects</a></li>
                <li><a href="#resume"><FaFilePdf className='icon'/> Resume</a></li>
                <li><a href="#contact"><FaEnvelope className="icon" /> Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
