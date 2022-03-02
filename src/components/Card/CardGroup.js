import React from "react";
import Card from "./Card";
import arrProjects from "../../data/arrProjects";
import './CardGroup.css';

const CardGroup = () => {

    return (
        <section className = "project-cards" >
            <h2 className="project-cards-title" id="proyectos">proyectos</h2>
            <div className="cards-container">
                {arrProjects.map(
                    (project, arrInd) => (
                        <Card key={arrInd} 
                            pname={project.pname} 
                            ptext={project.ptext}
                            pimg={project.pimg}
                            purl={project.purl} />
                    )
                )}
            </div>
        </section>
    );
}

export default CardGroup;