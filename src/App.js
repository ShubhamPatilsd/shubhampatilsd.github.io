import Card from './components/Card.js';
import Contact from './components/Contact.js'
import ProjectCard from './components/ProjectCard.js';
import Project from './components/Project.js';
import './components/Main.css';

import {useState, useEffect} from 'react';

import Skill from './components/Skill.js';
import Contribution from './components/Contribution.js';
import Work from './components/Work.js';
import Fade from 'react-reveal/Fade';
import codeday from './images/Logos/SVG/CodeDay/codeday-notext-color.svg'

//Images

import java from './images/java.svg';
import python from './images/python.svg';
import javascript from './images/javascript.svg';
import html from './images/html.svg';
import css from './images/css.svg';
import git from './images/git.svg';
import bash from './images/bash.svg';
import fll from './images/fll_logo.jpg';
import ftc from './images/ftc.jpg';
import firebase from './images/firebase.svg';
import react from './images/react.svg'
import shrub from './images/person.png';

import SortedContributions from './components/SortedContributions.js';
 

function App() {
  
  
  
  return (
    
    <div className="App">
    <Contact/>
    <Fade bottom>
    <div className="center">
    <div className='no-div-center' style={{'margin-bottom':'5rem'}}>
    
        <h2 > Hey there! My name is</h2>
        <h2 id="name" className="title" >Shubham Patil</h2>
        
        <h2 id="sub-text" >I make <span className="title">awesome</span> things with my love for computer science.</h2>
        </div>
        </div>
    
      <Card  title="About Me">
      
        
        <img style={{'float':'right', 'margin-left':'1rem', 'margin-bottom':'1rem', 'border-radius':'100%', 'border': '10px solid'}} src={shrub} width="200px" height=''/>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi bibendum. Integer eget aliquet nibh praesent tristique magna sit. Vel elit scelerisque mauris pellentesque pulvinar. Diam sit amet nisl suscipit adipiscing bibendum. Ut morbi tincidunt augue interdum velit. Sem viverra aliquet eget sit amet. Morbi tristique senectus et netus et malesuada fames. Enim nunc faucibus a pellentesque sit amet porttitor. Pulvinar elementum integer enim neque volutpat ac. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Varius sit amet mattis vulputate enim.</p>
        
      </Card>
      <Card  title="I Work With">
          <Skill icon={java} skillName="Java"/>
          <Skill icon={python} skillName="Python"/>
          <Skill icon={javascript} skillName="JavaScript"/>
          <Skill icon={html} skillName="HTML"/>
          <Skill icon={css} skillName="CSS"/>
          <Skill icon={git} skillName="Git"/>
          <Skill icon={bash} skillName="Bash"/>
          <Skill icon={firebase} skillName="Firebase"/>
          <Skill icon={react} skillName="React"/>
          
          
        </Card>
      <ProjectCard>
          <Project image="https://shubhampatilsd.github.io/space-catch-preview.webp" alt="Space Catch" desc="A game I made in 48 hours for December Virtual CodeDay 2020"/>
          <Project image="https://shubhampatilsd.github.io/space-catch-preview.webp" alt="Space Catch" desc="A game I made in 48 hours for December Virtual CodeDay 2020"/>
      </ProjectCard>

    <Card title="Contributions">
        
       

        {
        //<MediumPosts/>
        }
        {
        //<Contribution date="March 22nd, 2021" link="https://shubhampatilsd.medium.com/firebase-authentication-lowering-headaches-in-developers-adb61a73fbf6" title="📝 Firebase Authentication — Lowering Headaches For Developers" desc="So I had to do some authentication with GitHub the other day for a mini-project I was making. The main idea was that I would use GitHub..."/>
        }
        <SortedContributions/>
        {
        //<Contribution date={new Date("February 26 2021")} link="https://www.youtube.com/watch?v=CMC8isl7wpU&t=144" title="💼 Git Workshop" desc="This was a Git workshop that I gave at Virtual CodeDay"/>
        }
        
        
    </Card>


      <Card title="Experiences">
        
        
        <Work name="CodeDay" image={codeday} width="50px" alt="CodeDay" time="January 2021 &mdash; Present">
            <ul>
                <li>Worked to spread the word about CodeDay</li>
                <li>Helped manage the community</li>
                <li>Write new features and ideas for CodeDay platforms</li>
            </ul>
        </Work>

        <Work name="First Tech Challenge" image={ftc} width="70px" alt="First Lego League" time="September 2019 &mdash; Present">
            <ul>
                <li>Team #16778 Cyber Wizards</li>
                <li>Programmed metal robots with the Java programming language to complete missions</li>
                <li>Worked together with a team of 6-8 people</li>
                <li>Helped to write an engineering notebook</li>
            </ul>
        </Work>

        <Work name="First Lego League" image={fll} width="50px" alt="First Lego League" time="August 2016 &mdash; January 2018">
            <ul>
                <li>Programmed robots made out of Lego Technic pieces to complete missions</li>
                <li>Worked together with a team of 6-8 people</li>
                <li>Collaborated with team members to host outreach events</li>
            </ul>
        </Work>

        
      </Card>
      </Fade>
      <p style={{'text-align':'center', 'margin-top':'6rem', 'margin-bottom': '2rem'}} >🔨&nbsp;&nbsp;&nbsp;&nbsp;Built with enthusiasm by Shubham Patil</p>
      
    </div>
    
  );
}

export default App;
