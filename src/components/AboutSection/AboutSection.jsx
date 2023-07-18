import React from 'react';
import { useScrollAction } from '../../hooks/useScrollAction';
import IconsSectionGrid from './components/IconsSectionGrid/IconsSectionGrid';
import Description from './components/Description/Description';
import './about-section.scss';

const AboutSection = () => {
    
const  activeOnScroll  = useScrollAction(400);

    return (
        <section className="skill-container" id="about-section">
            <h1 className="skill-container-h1">Skills</h1>
            <div className="skill-container-content">
                <IconsSectionGrid skillAnimation={activeOnScroll} />
                <Description skillAnimation={activeOnScroll}  />
            </div>
        </section>
    )
}

export default AboutSection;
