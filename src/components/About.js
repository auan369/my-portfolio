import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h3>About Me</h3>
            <div className="about-subsection">
                <h4>Background</h4>
                <p>
                    Hello, I'm Loki, a Web Developer passionate about building impactful websites and web applications. With a strong background in Mechanical Engineering (Robotics & Mechatronics, NTU, First-Class Honours), I specialise in creating user-friendly web applications, blending engineering precision with software development and data analytics skills.
                </p>
                <p>
                    I'm experienced with React, PostgreSQL, MongoDB, and RESTful APIs, and I enjoy tackling new challenges with every project. Outside of work, I love analog photography, and staying active through sports and nature hikes. I'm passionate about parrots (being a parrot owner) and travelling, and always eager to connect with others in tech and innovation!
                </p>
                <p>
                    I'm currently open to new opportunities in software development and data analytics and am eager to connect with others passionate about tech and innovation!
                </p>
            </div>
            <div className="about-subsection">   
                <h4>Technical Skills</h4>
                <ul>
                    <li className="category">Languages</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>PHP</li>

                    <li className="category">Frontend</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>HTML</li>
                    <li>CSS</li>

                    <li className="category">Backend</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>Socket.io</li>

                    <li className="category">Databases</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>

                    <li className="category">Tools & Technologies</li>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>Vercel</li>
                    <li>Render</li>
                    <li>Postman</li>
                    <li>VS Code</li>

                    <li className="category">Other</li>
                    <li>WordPress</li>
                    <li>AJAX</li>
                    <li>JSON</li>
                    <li>Data Analysis</li>
                    <li>Photography</li>
                </ul>
            </div>

            <div className="about-subsection">
                <h4>Education</h4>
                <p>
                    <strong>Bachelor of Engineering (First-Class Honours)</strong><br />
                    Mechanical Engineering (Robotics & Mechatronics)<br />
                    Nanyang Technological University (NTU), Singapore
                </p>
            </div>
        </section>
    );
};

export default About;