import React from 'react';
import mainBg from '../../images/main-bg.jpg';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectSection';

import './main-page.scss';

const MainSection = () => {
    return (
        <>
            <div className="main-container">
                <img src={mainBg} alt="main" />
            </div>
            <AboutSection />
            <ProjectsSection />
        </>
    )
}

export default MainSection;
