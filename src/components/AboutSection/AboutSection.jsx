import React, { useState } from 'react';
import './about-section.scss';
import IconsSectionGrid from './components/IconsSectionGrid/IconsSectionGrid';
import Description from './components/Description/Description';

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
                <IconsSectionGrid skillAnimation={skillAnimation} />
                <Description skillAnimation={skillAnimation}  />
            </div>
        </section>
    )
}

export default AboutSection;
