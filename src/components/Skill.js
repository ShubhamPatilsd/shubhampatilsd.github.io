import React from "react";
import './Main.css';



class Skill extends React.Component{
    render() {
        
      return(
        
        <div className="skill">
            <img src={this.props.icon} width='30px' height="30px" alt={"icon"}/>
            <span >{this.props.skillName}</span>
        </div>
    
      );
      
    
        
}
}
export default Skill;
