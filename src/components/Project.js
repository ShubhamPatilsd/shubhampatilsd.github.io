import React from "react";
import './Main.css';
class Project extends React.Component{
    render() {
        
      return(
        <div class="responsive">
            <div class="gallery">
              
                <img src={this.props.image} alt={this.props.alt}/>
              
              <div class="desc">{this.props.desc}</div>
            </div>
          </div>
      );
      
    
        
}
}
export default Project;

//Example URL: https://shubhampatilsd.github.io/space-catch-preview.webp