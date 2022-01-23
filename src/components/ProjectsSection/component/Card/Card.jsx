import React, { useState } from 'react';
import githubIcon from '../../../../assets/images/icons/github-2.svg';
import globeIcon from '../../../../assets/images/icons/chrome.svg';

import './card.scss';

const Card = ({ imgURL, name, link, github }) => {
    const [cardAnimationChange, setCardAnimationChange] = useState(false);

    const position = window.pageYOffset;
    console.log(position);

    const handleScroll = () => {
        if (window.scrollY > 1500) {
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
            <div className="buttons-container">
            {link ? <a href={link} className="link-button" target="_blank" rel="noopener noreferrer">Website <img className="card-description-icon" src={globeIcon} alt="website" /></a> : null}
            <a href={github} className="link-button" target="_blank" rel="noopener noreferrer">GitHub <img className="card-description-icon" src={githubIcon} alt="github" /></a>
            </div>
        </div>
    )
}

export default Card;
