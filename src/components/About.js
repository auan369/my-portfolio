import React  from  'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import './About.css';
const About = () => {
    return (
        <motion.section 
        id="about" className="about-section"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.1 }}
        >
            <h3>About Me</h3>
            <div className="about-subsection">

                <h4>Background</h4>
                    <p>
                        {portfolioData.about.background}
                    </p>

                    <p>
                        {portfolioData.about.skills}
                    </p>
                    <p>
                        {portfolioData.about.openToWork}
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
        </motion.section>
    );
};
export default About;