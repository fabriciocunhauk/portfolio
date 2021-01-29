import React from 'react';
import { mySvgData } from '../../svg-data';
import './about-section.scss';

const AboutSection = () => {
    return (
        <div className="skill-container">
            <h1>My Skills</h1>
            <hr />
            <div className="skill-container-content">
                <div className="skill-container-content-svg">
                    {mySvgData.map(svgLink =>
                        <a key={svgLink.id} href={svgLink.link} rel="noopener noreferrer" target="_blank"><img src={svgLink.path} alt="name" className="skill-container-content-svg-image" /></a>
                    )}
                </div>
                <div className="skill-container-side-text">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem architecto ipsam, voluptatum nulla quis blanditiis, aliquid saepe error suscipit laudantium consectetur libero optio, sit autem adipisci corrupti nobis possimus aut numquam facilis! Doloribus illo repudiandae ea architecto? Non quam perspiciatis omnis nihil! Pariatur consectetur debitis, id consequuntur ipsa excepturi!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
