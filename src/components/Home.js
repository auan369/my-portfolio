// Home.js
import React from 'react';
import './Home.css';
import SEO from './SEO';

const Home = () => {
    return (
        <>
            <SEO 
                title="Kum Yew Loke - Web Developer Portfolio"
                description="A detail-oriented Web Developer dedicated to building and managing impactful websites and web applications, driving product success through meticulous design and functionality."
                keywords={['web developer', 'portfolio', 'react', 'javascript', 'full stack']}
                image="/logo192.png"
                url="/"
            />
            <section id="home" className="home-section">
                <h1>Hello, I'm Loki</h1>
                <p>A detail-oriented Web Developer dedicated to building and managing impactful websites and web applications, driving product success through meticulous design and functionality.</p>
            </section>
        </>
    );
};

export default Home;