import React  from  'react';
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
                    {/* <!-- Languages --> */}
                    <li class="category">Languages</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>PHP</li>

                    {/* <!-- Frontend --> */}
                    <li class="category">Frontend</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>HTML</li>
                    <li>CSS</li>

                    {/* <!-- Backend --> */}
                    <li class="category">Backend</li>
                    <li>Node.js</li>
                    <li>Express.js</li>

                    {/* <!-- Databases --> */}
                    <li class="category">Databases</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>

                    {/* <!-- DevOps & Deployment --> */}
                    <li class="category">Tools</li>
                    <li>GitHub</li>
                    <li>Vercel</li>
                    <li>Docker</li>
                    <li>CI/CD</li>

                    {/* <!-- Data & Analysis --> */}
                    <li class="category">Other Skills</li>
                    <li>RESTful APIs</li>
                    <li>API Integration</li>
                    <li>UI/UX Design</li>
                    <li>Data Analysis</li>
                    <li>Project Management</li>
                    {/* <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>API Integration</li>
                    <li>UI/UX Design</li>
                    <li>Data Analysis</li>
                    <li>Project Management</li>
                    <li>GitHub</li>
                    <li>Vercel</li> */}
                </ul>
            </div>
        </section>
    );
};
export default About;