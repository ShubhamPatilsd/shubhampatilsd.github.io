import React from "react";
import './Main.css';
class ProjectCard extends React.Component{
    render() {
        
      return(
        <div class="center">
        <div class="card-wrapper-projects">
        <div class="card">
        <div id="card-projects">
            <h1 class="title">My Projects</h1>
            {this.props.children}
        </div>
        </div>
        </div>
    </div>
      );
      
    
        
}
}
export default ProjectCard;
