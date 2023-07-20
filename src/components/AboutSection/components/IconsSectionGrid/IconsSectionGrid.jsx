import { mySvgData } from "../../../../data/svg-data"

const IconsSectionGrid = ({skillAnimation}) => {
return (
        <div className={skillAnimation ? "skill-container-content-svg skill-container-content-svg-animation" : "skill-container-content-svg"}>
            {mySvgData.map(svgLink =>
                <a key={svgLink.id} href={svgLink.link} rel="noopener noreferrer" target="_blank">
                    <img src={svgLink.path} alt="name" className="skill-container-content-svg-image" />
                </a>
            )}
        </div>  
    )
}

export default IconsSectionGrid