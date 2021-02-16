import React from 'react';
import githubIcon from '../../../../images/icons/github-2.svg';
import globeIcon from '../../../../images/icons/globe.svg';

import './card.scss';

const Card = ({ imgURL, name, link, github }) => {
    return (
        <div className="card">
            <div className="card-project-header">
                <img className="card-image" src={imgURL} alt="" />
            </div>
            <h1>{name}</h1>
            {link ? <a href={link} target="_blank" rel="noopener noreferrer"><img className="card-description-icon" src={globeIcon} alt="website" /></a> : null}
            <a href={github} target="_blank" rel="noopener noreferrer"><img className="card-description-icon" src={githubIcon} alt="github" /></a>
        </div>
    )
}

export default Card;
