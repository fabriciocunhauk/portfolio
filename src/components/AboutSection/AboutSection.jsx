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
            <div className="skill-container-content">
                <div className={skillAnimation ? "skill-container-content-svg skill-container-content-svg-animation" : "skill-container-content-svg"}>
                    {mySvgData.map(svgLink =>
                        <a key={svgLink.id} href={svgLink.link} rel="noopener noreferrer" target="_blank"><img src={svgLink.path} alt="name" className="skill-container-content-svg-image" /></a>
                    )}
                </div>
                <div className={skillAnimation ? "skill-container-side-text skill-container-side-text-animation" : "skill-container-side-text"}>
                    <h1 className="skill-container-side-text-h1">
                        Hey, Im Fabricio Cunha</h1>
                        <h2>a self-taught front-end developer.</h2>
                    <p>From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into
the world of software development. But software development has never been "just a job" for me, it's offered an
engaging challenge to continually learn and improve my skills in creating high-quality software. What's started
with a simple "Hello World" has become a full-fledged passion that only gets more exciting as time goes by.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
