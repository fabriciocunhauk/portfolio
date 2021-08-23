import React, { useState } from 'react';
import { mySvgData } from '../../data/svg-data';
import './about-section.scss';

const AboutSection = () => {
    const [skillAnimation, setSkillAnimation] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 400) {
            setSkillAnimation(true);
        } else {
            setSkillAnimation(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <section className="skill-container" id="about-section">
            <h1 className="skill-container-h1">Skills</h1>
            <hr />
            <div className="skill-container-content">
                <div className={skillAnimation ? "skill-container-content-svg skill-container-content-svg-animation" : "skill-container-content-svg"}>
                    {mySvgData.map(svgLink =>
                        <a key={svgLink.id} href={svgLink.link} rel="noopener noreferrer" target="_blank"><img src={svgLink.path} alt="name" className="skill-container-content-svg-image" /></a>
                    )}
                </div>
                <div className={skillAnimation ? "skill-container-side-text skill-container-side-text-animation" : "skill-container-side-text"}>
                    <h1 className="skill-container-side-text-h1">JavaScript | Typescript | HTML | CSS | SCSS/SASS | React.js | Next.js | Node.js |  Redux | SQL | NoSQL | REST Api's | Git</h1>
                    <p>Highly motivated, a self-starting developer seeking to launch a career building web applications and services. Familiar with the development and deployment process for many web-based technologies.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
