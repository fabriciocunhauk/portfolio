import React from 'react';
import mainBg from '../../images/bg-video/Nebula-6044.mp4';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectSection';

import './main-page.scss';
import SideMenu from '../../components/SideMenu/SideMenu';

const MainSection = () => {
    return (
        <>
            <div className="main-container" id="/">
                <SideMenu />
                <header>
                    <h1>Hi, I'm Fabricio Cunha</h1>
                    <p>A Frontend Developer</p>
                </header>
                <video autoPlay muted loop >
                    <source src={mainBg} alt="main" />
                </video>
            </div>
            <AboutSection />
            <ProjectsSection />
        </>
    )
}

export default MainSection;
