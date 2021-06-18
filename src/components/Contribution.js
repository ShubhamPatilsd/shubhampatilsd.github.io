import React from 'react';



class Contribution extends React.Component{
    
 render(){
       return (
           <div style={{'maxWidth':'35em','marginBottom':'2rem'}}>
            <p style={{'margin':'0', 'fontSize':'16px'}}><small>{this.props.date.toLocaleDateString(undefined, {dateStyle:"long"})}</small></p>
            

            

            <h3 style={{'margin':'0'}}><a className="no-underline" href={this.props.link} rel="noreferrer" target="_blank">{this.props.blog ? "📝 " : ""}{this.props.title+" ->"}</a></h3>

            <p style={{'margin':'0', 'fontSize':'18px'}}><small>{this.props.desc}</small></p>
           </div>
       );
 }
}

export default Contribution;