import React from "react";
import './Main.css';



class Card extends React.Component{
    render() {
        
      return(
        
        <div id={this.props.title.toLowerCase()} class="center">
        <div class="card-wrapper">
        <div class="card">
            <h1 className="title">{this.props.title}</h1>    
            {this.props.children}
        </div>
        </div>
    </div>
    
      );
      
    
        
}
}
export default Card;
