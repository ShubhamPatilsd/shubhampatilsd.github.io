import Card from "./components/Card.js";
import Contact from "./components/Contact.js";
import ProjectCard from "./components/ProjectCard.js";

import "./components/Main.css";

import Skill from "./components/Skill.js";

import Work from "./components/Work.js";
import Fade from "react-reveal/Fade";
import codeday from "./images/Logos/SVG/CodeDay/codeday-notext-color.svg";

import { Github, ExternalLink } from "@geist-ui/react-icons";

//Images

import java from "./images/java.svg";
import python from "./images/python.svg";
import javascript from "./images/javascript.svg";
import html from "./images/html.svg";
import css from "./images/css.svg";
import git from "./images/git.svg";

import fll from "./images/fll_logo.jpg";
import ftc from "./images/ftc.jpg";
import firebase from "./images/firebase.svg";
import react from "./images/react.svg";
import shrub from "./images/person.png";
import express from "./images/express.svg";
import nodejs from "./images/nodejs.svg";
import nextjs from "./images/nextjs.svg";
import tailwindcss from "./images/tailwindcss.svg";
import linux from "./images/linux.svg";
import typescript from "./images/typescript.svg";
import bootstrap from "./images/bootstrap.svg";
import mongodb from "./images/mongodb.svg";
import postgres from "./images/postgres.svg";
import nextauth from "./images/nextauth.png";

import SortedContributions from "./components/SortedContributions.js";

function App() {
  return (
    <div className="App">
      <Contact />

      <Fade bottom>
        <div className="center">
          <div className="no-div-center" style={{ "margin-bottom": "5rem" }}>
            <h2> Hey there! I'm</h2>
            <h2 id="name" className="title">
              Shubham Patil
            </h2>

            <h2 id="sub-text">
              I make <span className="title">awesome</span> things with my love
              for computer science.
            </h2>
          </div>
        </div>

        <Card title="About Me">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="about-div" style={{ textAlign: "center" }}>
              <img
                alt="Shubham"
                style={{
                  // float: "right",
                  "margin-left": "1rem",
                  "margin-bottom": "1rem",
                  "border-radius": "100%",
                  border: "5px solid",
                }}
                src={shrub}
                width="150px"
                height=""
              />
              <p>
                {/* Hello there! I’m Shubham Patil. I’m currently a high schooler
                  studying computer science.
                  <br />
                  <br />
                  I’m also working to increase my skills so that I can build amazing
                  things. I value the efficiency and scalability of code, so I
                  absolutely love automation of codebases.
                  <br />
                  <br />
                  An example of this would be storing data in JSON files or fetching
                  data from an API/database instead of directly hardcoding the values
                  into the code. I mainly enjoy programming because it’s fun and it
                  enables me to build awe-inspiring projects.
                  <br />
                  <br />
                  Coding also drives me to learn new things and technologies, which I
                  enjoy. I love the concept of open-source code, so all the major
                  projects I’ve worked on are hosted on GitHub.
                  <br />
                  <br />
                  Besides coding, I enjoy watching movies and videos regarding
                  technology in my free time. I don't have a favorite food per say as
                  I enjoy many types of cuisines.
                  <br />
                  <br />I hope you have a good time exploring my site and I wish you a
                  very good day! */}
                Hey there! I'm Shubham Patil, programmer by night and high
                schooler by day. I'm a fullstack developer who especially loves
                building awesome things with code! I also have a{" "}
                <a href="https://dev.to/shubhampatilsd/">blog</a> and a{" "}
                <a href="https://www.youtube.com/channel/UCExbrmSa1r97Q3AUNvkpdnQ">
                  YouTube channel
                </a>{" "}
                where I talk about tech! At the moment, coding is a hobby of
                mine, but I wish to expand it into a career.
              </p>
            </div>
          </div>
        </Card>
        <Card title="I've Worked With">
          <Skill icon={java} skillName="Java" />
          <Skill icon={python} skillName="Python" />
          <Skill icon={javascript} skillName="JavaScript" />

          <Skill icon={html} skillName="HTML" />
          <Skill icon={css} skillName="CSS" />
          <Skill icon={git} skillName="Git" />
          <Skill icon={react} skillName="React" />
          <Skill icon={nodejs} skillName="NodeJS" />
          <Skill icon={tailwindcss} skillName="Tailwind CSS" />
          <Skill icon={nextjs} skillName="NextJS" />
          <Skill icon={express} skillName="Express" />
          <Skill icon={typescript} skillName="Typescript" />
          <Skill icon={postgres} skillName="Postgres" />
          <Skill icon={linux} skillName="Linux" />

          <Skill icon={mongodb} skillName="MongoDB" />
          <Skill icon={nextauth} skillName="NextAuth" />

          <Skill icon={firebase} skillName="Firebase" />
          <Skill icon={bootstrap} skillName="Bootstrap" />
        </Card>
      </Fade>

      <ProjectCard />

      <Fade bottom>
        <Card title="Contributions">
          <SortedContributions />
        </Card>
        <Card title="Experiences">
          <div className="work-grid">
            <Work
              name="CodeDay"
              image={codeday}
              width="50px"
              alt="CodeDay"
              time={["January 2021"]}
            >
              <ul>
                <li>
                  Assisted with holding CodeDay Bay Area as an Assistant
                  Regional Manager
                </li>
                <li>Worked to spread the word about CodeDay (volunteering)</li>
                <li>Helped manage the community</li>
                <li>Write new features and ideas for CodeDay platforms</li>
              </ul>
            </Work>
            <Work
              name="First Tech Challenge"
              image={ftc}
              width="70px"
              alt="First Lego League"
              time={["September 2019"]}
            >
              <ul>
                <li>Team #16778 Cyber Wizards</li>
                <li>
                  Programmed metal robots with the Java programming language to
                  complete missions
                </li>
                <li>Worked together with a team of 6-8 people</li>
                <li>Helped to write an engineering notebook</li>
                <li>
                  <p style={{ margin: "0" }}>
                    List of awards can be found{" "}
                    <a
                      href="https://ftc-events.firstinspires.org/team/16778"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                  </p>
                </li>
              </ul>
            </Work>
            <Work
              name="First Lego League"
              image={fll}
              width="50px"
              alt="First Lego League"
              time={["August 2016", "January 2018"]}
            >
              <ul>
                <li>Team #612 Circuit Breakers</li>
                <li>
                  Programmed robots made out of Lego Technic pieces to complete
                  missions
                </li>
                <li>Worked together with a team of 6-8 people</li>
                <li>Collaborated with team members to host outreach events</li>
              </ul>
            </Work>
          </div>
        </Card>
        <Card title="Contact Me">
          <p>
            Let's get in touch. You can click on any of the icons below to go to
            my profiles on Github, Linkedin, and my email address!
          </p>

          <a
            href="https://github.com/shubhamPatilsd/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="contact fab fa-4x fa-github-square" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-patil-5352a3215/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="contact fab fa-linkedin fa-4x" />
          </a>
          <a
            href="https://twitter.com/ShubhamPatilsd"
            rel="noreferrer"
            target="_blank"
          >
            <i class="contact fab fa-twitter fa-4x" />
          </a>
          <a
            href="mailto:shubhampatilsd@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <i class="contact-email fas fa-envelope fa-4x" />
          </a>
        </Card>
      </Fade>

      <p
        style={{
          "text-align": "center",
          color: "#98B9F2",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Github size={20} />
        &nbsp;&nbsp;
        <a
          style={{
            color: "#98B9F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          href="https://github.com/ShubhamPatilsd/shubhampatilsd.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Check out the code behind this site!
        </a>
        &nbsp;&nbsp;
        <ExternalLink size={20} />
      </p>
      <h3
        style={{
          "text-align": "center",
          "margin-top": "2rem",
          "margin-bottom": "2rem",
        }}
      >
        🔨&nbsp;&nbsp;&nbsp;&nbsp;Built with enthusiasm by Shubham Patil
      </h3>
    </div>
  );
}

export default App;
