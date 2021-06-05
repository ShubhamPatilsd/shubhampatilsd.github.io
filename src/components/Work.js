import React from "react";
import './Main.css';



class Work extends React.Component{
    render() {
        
      return(
        
        <div className="work">
            <div class="top-part" style={{'display':'flex', 'alignItems':'center'}}>
                <div >
                    <img src={this.props.image} width={this.props.width} height="auto"  style={{'margin-right':'1em', 'position': 'relative', 'margin-top':'2%', 'display':'flex','verticalAlign':'super'} } alt={this.props.alt}/>  
                </div>
                <h1 style={{'lineHeight':'2.5rem'}}>{this.props.name}</h1>
            </div>
            <h4>{this.props.time}</h4>
            <p>{this.props.children}</p>
            
        </div>
    
      );
      
    
        
}
}
export default Work;
