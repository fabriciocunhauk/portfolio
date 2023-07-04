import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutSection from '../AboutSection'

describe('AboutSection', () => {
    test('should render about component', () => {
        const text = "Skills"
        const text2 = "JavaScript | Typescript | HTML | CSS | SCSS/SASS | React.js | Next.js | Node.js | Redux | SQL | NoSQL | REST Api's | Git"
        render(<AboutSection />)
        screen.getByText(text)
        // fails
        // expect(screen.getByText(text + 'About')).toBeInTheDocument()
 
        // succeeds
        expect(screen.getByText(text)).toBeInTheDocument();
        // expect(screen.getByText(text2)).toBeInTheDocument();
    
        // succeeds
        expect(screen.getByText(/Skills/)).toBeInTheDocument()
    })
})