import React from 'react';
import mainBg from '../../assets/images/pexels-neo-2653362.jpg';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectSection';
import Typical from 'react-typical';
import ContactSection from '../../components/ContactSection/ContactSection';

import './main-page.scss';

const MainSection = () => {
    return (
        <div>
            <img className="main-bg" src={mainBg} alt="main-background" />
            <div className="main-container" id="/">
                <header>
                    <h1>Hi,
                        <Typical
                            wrapper="b"
                            steps={[
                                3000,
                                " I'm Fabricio Cunha",
                            ]}
                        />
                    </h1>
                    <p>
                        <Typical
                            wrapper="b"
                            steps={[
                                4500,
                                "A Frontend Developer",
                            ]}
                        />
                    </p>
                </header>
            </div>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <a href="https://api.whatsapp.com/send?phone=447453155169&text=Hi," className="float" rel="noreferrer" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </div>
    )
}

export default MainSection;
