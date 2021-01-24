import React from 'react';
import mainBg from '../../images/main-bg.jpg';
import './main-section.scss';

const MainSection = () => {
    return (
        <div className="main-container">
            <img src={mainBg} alt="main" />
        </div>
    )
}

export default MainSection;
