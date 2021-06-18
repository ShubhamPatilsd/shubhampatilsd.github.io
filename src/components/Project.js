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
                  <h2 style={{fontSize:"1.6em"}}>{this.props.name}</h2>
                  

                  <div className="techstack" style={{fontSize:"0.9em"}}>
                    <h4 style={{marginBottom:"0.5rem"}}>Made with:</h4>
                      {this.props.techstack.map((tech, i)=>{
                         return <img key={i} src={tech.logourl} width='30px' height="30px" alt={tech.name}/>
                        })}
                  </div>



                  <p style={{marginBottom:"0", fontSize:"0.9em"}}>{this.props.desc}</p>
                 
              </div>

              <div style={{marginLeft:"10px", fontSize:"0.9em"}}>
                <a style={{color:"#98B9F2", display:`${this.props.link ? "" : "none"}`}} href={this.props.link} rel="noreferrer" target="_blank">
                  <p style={{display:`${this.props.link ? "flex" : "none"}`, alignItems:"center"}}>Link&nbsp;<ExternalLink size={20}/></p>
                </a>

                <a style={{color:"#98B9F2"}} href={this.props.repo}  rel="noreferrer" target="_blank">
                  <p style={{display:"flex", alignItems:"center"}}><Github size={20}/>&nbsp;&nbsp;Code&nbsp;<ExternalLink size={20}/></p>
                </a>

              </div>
              
              
            </div>
          </div>
      );
      
    
        
}
}
export default Project;

//Example URL: https://shubhampatilsd.github.io/space-catch-preview.webp