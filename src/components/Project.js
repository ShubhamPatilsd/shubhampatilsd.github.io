import React from "react";
import './Main.css';
import {ExternalLink, Github} from '@geist-ui/react-icons'

class Project extends React.Component{
    render() {
        
      return(
        <div class="responsive">
            <div class="gallery">
              
                <img className="resize" src={this.props.image} alt={this.props.name}/>

                <div className="words">
                  <h2>{this.props.name}</h2>
                  <p style={{marginBottom:"0"}}>{this.props.desc}</p>
                 
              </div>

              <div style={{marginLeft:"10px"}}>
                <a style={{color:"#98B9F2", display:`${this.props.link ? "" : "none"}`}} href={this.props.link} target="_blank">
                  <p style={{display:`${this.props.link ? "flex" : "none"}`, alignItems:"center"}}>Link&nbsp;<ExternalLink size={20}/></p>
                </a>

                <a style={{color:"#98B9F2"}} href={this.props.repo} target="_blank">
                  <p style={{display:"flex", alignItems:"center"}}><Github size={20}/>&nbsp;&nbsp;Code&nbsp;<ExternalLink size={20}/></p>
                </a>

              </div>
              
              <div className="techstack">
              <h4 style={{marginBottom:"0.5rem"}}>Made with:</h4>
                  {this.props.techstack.map((tech, i)=>{
                    
                    return <img key={i} src={tech.logourl} width='30px' height="30px" alt={tech.name}/>

                  })}
              </div>
            </div>
          </div>
      );
      
    
        
}
}
export default Project;

//Example URL: https://shubhampatilsd.github.io/space-catch-preview.webp