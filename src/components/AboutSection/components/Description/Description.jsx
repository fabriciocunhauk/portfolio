const Description = ({skillAnimation}) => {
return (
        <div className={skillAnimation ? "skill-container-side-text skill-container-side-text-animation" : "skill-container-side-text"}>
            <h2>Hey, Im Fabricio Cunha</h2>
            <h3>A self-taught Front-end Developer.</h3>
            <p>Hi there! I'm driven and passionate software engineer with a strong track record of delivering outstanding results. I have 3 years of experience in software development, with expertise in Frontend Development such as  JavaScript, Typescript, HTML5, CSS3, React.js, REMIX JS, Tailwind, Sass, Styled-components, MUI, Redux, GraphQL, APIs, Git And GitHub.</p>
        </div>
    )
}

export default Description