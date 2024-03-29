import React from 'react';
import Card from './components/Card/Card';
import cardUrls from '../../data/card-data';

import './project-section.scss';

const ProjectSection = () => {
    return (
        <div className="projects-container" id="projects-section">
            <h1 className="projects-container-h1">Projects</h1>
            <div className="cards-container">
                {cardUrls.map(card => {
                    return <Card
                        key={card.id}
                        imgURL={card.imgURL}
                        name={card.name}
                        link={card.link}
                        github={card.github}
                    />
                })}
            </div>
        </div>
    )
}

export default ProjectSection;
