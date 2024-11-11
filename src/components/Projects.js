import React from 'react';
import './Projects.css';
import IndivProject from './IndivProject';
import { FaGithub, FaLaptop, FaFile } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h3>Projects</h3>
            <div className="projects-intro">
            
            {/* <!-- Project 1 -->   */}        
            <IndivProject
                title="Tamagotchi-Inspired Pet App"
                description="Dynamic updates to pet's stats, interactive mini-games, real-time pet state management. Created and deployed both frontend and backend on Vercel, with unique animations and interactions for an engaging user experience."
                techStack={['React', 'Node.js', 'Express.js','MongoDB', 'RESTful APIs', 'Vercel', 'Postman']}
                image={require('./images/petapp2.png')}
                device={'laptop'}
                links={[
                    { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/auan369/pet-app-main' },
                    { label: <p><FaLaptop/> Demo</p>, url: 'https://pet-app-frontend-drab.vercel.app/' },
                ]}
            />
            

            {/* <!-- Project 3 --> */}
            <IndivProject
                title="WeatherAtYourLocation: Real-Time Weather Application"
                description="A responsive web app that provides real-time weather information tailored to your location, demonstrating API integration skills and front-end development abilities. Provides real-time weather updates, detailed weather information (temperature, humidity, wind speed), forecast reporting (3-hour forecasts for 5 days), and a User-Friendly Interface. APIs used include IPinfo for location services and OpenWeather for live weather data and forecasting."
                techStack={['HTML', 'CSS', 'JavaScript', 'OpenWeather API', 'IPinfo API']}
                image={require('./images/weather.png')}
                device={'laptop'}
                links={[
                    { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/auan369/WeatherAtYourLocation' },
                    // { label: <p><FaLaptop/> Demo</p>, url: 'https://your-live-demo.com' },
                ]}
            />

            
            {/* <!-- Project 4 --> */}
            <IndivProject
                title="Portfolio Website"
                description="A portfolio website on a single-page design with smooth scrolling navigation, responsive layout, user-friendly interface. Designed on React and deployed on Vercel to create a functional, visually appealing portfolio to showcase my work and experience."
                techStack={['HTML', 'CSS', 'JavaScript', 'React', 'Vercel']}
                image={require('./images/portfolio.png')}
                device={'laptop'}
                links={[
                    { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/auan369/my-portfolio/' },
                    { label: <p><FaLaptop/> Demo</p>, url: 'https://kyloke-portfolio.vercel.app/' },
                ]}
            />

            {/* <!-- Project 2 --> */}
            <IndivProject
                title="Cluck Food App"
                description="Cluck 'n' Crave is a mobile application built as the capstone project for the Meta React Native Specialization. Designed to enhance the restaurant experience, Cluck 'n' Crave provides users with an interactive platform for ordering food, managing profiles, and discovering menu options. The app's development involved extensive UI/UX planning, including wireframes and prototypes, user journey mapping, and iterative design improvements."
                techStack={['React Native', "JavaScript", 'RESTful APIs', "SQL", 'Figma']}
                image={require('./images/CluckFoodHomeScreen.png')}
                device={'phone'}
                links={[
                    { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/auan369/cluckFood' },
                    // { label: <p><FaLaptop/> Demo</p>, url: 'https://your-live-demo.com' },
                ]}
            />

            {/* <!-- Project 5 --> */}
            <IndivProject
                title="Curriculum Development for Coding & Web Development"
                description="Created an engaging, accessible curriculum that simplifies complex topics, helping beginners gain confidence in coding and web development. The curriculum includes interactive exercises, multimedia resources, and practical coding challenges for young learners, designed to foster a love for coding and web development."
                techStack={['JavaScript', 'HTML', 'CSS', 'React']}
                image={require('./images/tym.png')}
                device={'laptop'}
                links={[
                    // { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/your-repo' },
                    // { label: <p><FaLaptop/> Demo</p>, url: 'https://your-live-demo.com' },
                ]}
            />

            {/* <!-- Project 6 --> */}
            <IndivProject
                title="Thesis Publication in the ICSR + BioMed 2024 Conference"
                description="My thesis, Personalised 3D Human Digital Twin with Soft-Body Feet for Walking Simulation, was published at the ICSR + BioMed 2024 Conference. As part of my Final Year Project with the Rehabilitation Research Institute of Singapore, I enhanced a human-robot interaction simulation, implementing soft-body physics to replicate human tissue and improve Ground Reaction Force accuracy. I used Python APIs, custom C++ scripting, and data visualization, gaining skills in source control, testing, debugging, and team collaboration."
                techStack={['C++', 'Python', 'Data Analysis', 'Modeling and Simulation', 'MuJoCo']}
                image={require('./images/ICSR.png')}
                device={'laptop'}
                links={[
                    // { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/your-repo' },
                    { label: <p><FaFile/> Link</p>, url: 'https://link.springer.com/book/9789819789627' },
                ]}
            />
    
            {/* <!-- Project 7 --> */}
            <IndivProject
                title="IMU Mechatronics Capstone Project"
                description="Improved IMU sensor integration, and led data analysis and testing phases, enhancing user experience through design improvements. From the sensor data captured and analysed, I was able to draw data-driven insights."
                techStack={['Arduino', 'C++', 'Python', 'Data Analysis', 'Data Analysis', 'CAD modeling']}
                image={require('./images/imu.png')}
                device={'laptop'}
                // links={[
                //     { label: <p><FaGithub/> GitHub</p>, url: 'https://github.com/your-repo' },
                //     { label: <p><FaLaptop/> Demo</p>, url: 'https://your-live-demo.com' },
                // ]}
            />
            </div>
        </section>

    );
};
export default Projects;