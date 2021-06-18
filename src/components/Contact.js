import React from 'react';
import './Main.css';
import { Github, Mail, Linkedin } from '@geist-ui/react-icons';

class Contact extends React.Component{
    render(){
        return(
            <div id="contact-wrapper">
            <div id="contact">
                <a  href="https://github.com/shubhamPatilsd/" target="_blank"><Github className="contact" color="white" size={28}/></a>
                <a  href="https://www.linkedin.com/in/shubham-patil-5352a3215/" target="_blank"><Linkedin className="contact" color="white" size={28}/></a>
                <a href="mailto:shubhampatilsd@gmail.com" target="_blank"><Mail className="contact" color="white" size={28}/></a>
            </div>
            </div>
        );
    }
}

export default Contact;