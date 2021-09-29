import React, { useState } from 'react';
import githubIcon from '../../../../assets/images/icons/github-2.svg';
import globeIcon from '../../../../assets/images/icons/globe.svg';

import './card.scss';

const Card = ({ imgURL, name, link, github }) => {
    const [cardAnimationChange, setCardAnimationChange] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 1200) {
            setCardAnimationChange(true);
        } else {
            setCardAnimationChange(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div className={cardAnimationChange ? "card card__animation" : "card"}>
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
