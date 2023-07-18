import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutSection from '../AboutSection'

describe('AboutSection', () => {
    test('should render about component', () => {
        const text = "Skills"
        const text2 = "Hi there! I'm driven and passionate software engineer with a strong track record of delivering outstanding results. I have 3 years of experience in software development, with expertise such as frontend development with JavaScript, Typescript, HTML5, CSS3, React.js, REMIX JS, Tailwind, Sass, Styled-components, MUI, Redux, GraphQL, APIs, Git And GitHub."
        render(<AboutSection />)
        screen.getByText(text)
        // fails
        // expect(screen.getByText(text + 'About')).toBeInTheDocument();
 
        // succeeds
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(text2)).toBeInTheDocument();
    
        // succeeds
        expect(screen.getByText(/Skills/)).toBeInTheDocument()
    })
})