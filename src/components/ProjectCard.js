import React from "react";
import './Main.css';
import projects from '../json/projects.js'
import Project from "./Project";









class ProjectCard extends React.Component{
    render() {
        
      return(
        <div class="center">
        <div class="card-wrapper-projects">
        <div class="card">
        <div id="card-projects">
            <h1 class="title">My Projects</h1>
            {//this.props.children
            }
            
            <div className="project-grid"> 
              {projects.map((project, i)=>{return <Project key={i} repo={project.repo} image={project.image} name={project.name} desc={project.description} link={project.link} techstack={project.techstack}/> })}
            </div>
        </div>
        </div>
        </div>
    </div>
      );
      
    
        
}
}
export default ProjectCard;
