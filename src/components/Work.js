
import React from "react";
import './Main.css';





class Work extends React.Component{
    render() {
        
      return(
        
        <div className="work">
            <div className="top-part" style={{display:'flex', alignItems:'center'}}>
                <div >
                    <img src={this.props.image} width={this.props.width} height="auto"  style={{marginRight:'1em', position: 'relative', marginTop:'2%', display:'flex',verticalAlign:'super'} } alt={this.props.alt}/>  
                </div>
                <h1 className="work-text" style={{'lineHeight':'2.5rem'}}>{this.props.name}</h1>
            </div>
            
            <h4>{this.props.time.length===1 ? `${this.props.time[0]} — Present`: `${this.props.time[0]} — ${this.props.time[1]}`}</h4>
            <p>{this.props.children}</p>
            
        </div>
    
      );
      
    
        
}
}
export default Work;
