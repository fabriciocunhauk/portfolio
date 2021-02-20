import React from 'react';
import mainBg from '../../images/pexels-neo-2653362.jpg';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectSection';
import Typical from 'react-typical';
import ContactSection from '../../components/ContactSection/ContactSection';

import './main-page.scss';

const MainSection = () => {


    return (
        <>
            <img className="main-bg" src={mainBg} alt="main-background" />
            <div className="main-container" id="/">
                <header>
                    <h1>Hi,
                    <Typical
                            wrapper="b"
                            steps={[
                                1000,
                                " I'm Fabricio Cunha",
                            ]}
                        />
                    </h1>
                    <p>
                        <Typical
                            wrapper="b"
                            steps={[
                                3000,
                                "A Frontend Developer",
                            ]}
                        />
                    </p>
                </header>
            </div>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}

export default MainSection;
