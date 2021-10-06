import React from "react";
import "./Main.css";
import { Github, Mail, Linkedin, Twitter } from "@geist-ui/react-icons";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact-wrapper">
        <div id="contact">
          <a
            href="https://github.com/shubhamPatilsd/"
            rel="noreferrer"
            target="_blank"
          >
            <Github className="contact" color="white" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-patil-5352a3215/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin className="contact" color="white" size={28} />
          </a>
          <a
            href="https://twitter.com/ShubhamPatilsd"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter className="contact" color="white" size={28} />
          </a>
          <a
            href="mailto:shubhampatilsd@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <Mail className="contact" color="white" size={28} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
