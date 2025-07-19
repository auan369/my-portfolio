// Home.js
import React from 'react';
import './Home.css';
import portfolioData from '../data/portfolioData';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <h1>Hello, I'm {portfolioData.owner.nickname}</h1>
            <p>{portfolioData.owner.description}</p>
        </section>
    );
};
export default Home;