import React from 'react';
import './Main.css';
import { Github, Mail } from '@geist-ui/react-icons';

class Contact extends React.Component{
    render(){
        return(
            <div id="contact-wrapper">
            <div id="contact">
                <a  href="https://github.com/shubhamPatilsd/"><Github className="contact" color="white" size={28}/></a>
                
                <a href="mailto:shubhampatilsd@gmail.com"><Mail className="contact" color="white" size={28}/></a>
            </div>
            </div>
        );
    }
}

export default Contact;