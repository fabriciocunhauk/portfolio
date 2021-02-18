import React from 'react';
import mainBg from '../../images/pexels-neo-2653362.jpg';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectSection';

import './main-page.scss';
import ContactSection from '../../components/ContactSection/ContactSection';
// import SideMenu from '../../components/SideMenu/SideMenu';

const MainSection = () => {
    return (
        <>
            <img className="main-bg" src={mainBg} alt="main-background" />
            <div className="main-container" id="/">
                {/* <SideMenu /> */}
                <header>
                    <h1>Hi, I'm Fabricio Cunha</h1>
                    <p>A Frontend Developer</p>
                </header>
            </div>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}

export default MainSection;
