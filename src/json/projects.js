//Edumango images
import edumango from '../images/edumango-screenshot.png'
import nextjs from '../images/nextjs.svg'
import tailwindcss from '../images/tailwindcss.svg'
import react from '../images/react.svg'
import typescript from '../images/typescript.svg'

//Key share and chatwin98 images 
import keyshare from '../images/keyshare.png'
import chat_win98 from '../images/chat-win98.png'
import html from '../images/html.svg';
import css from '../images/css.svg';
import firebase from '../images/firebase.svg';
import javascript from '../images/javascript.svg';


//Space catch
import spacecatch from '../images/spacecatch.png';
import java from '../images/java.svg';


const projects = [
    {
        name: "Edumango",
        image: edumango,
        description : "Created the website for an organization that specializes in educating students free of cost!",
        techstack: [
            {
                logourl: nextjs,
                name: "NextJS"
            },
            {
                logourl: react,
                name: "React"
            },
            {
                logourl: tailwindcss,
                name: "Tailwind CSS"
            },
            {
                logourl: typescript,
                name: "Typescript"
            }
        ],
        link:"https://edumango.vercel.app",
        repo:"https://github.com/ShubhamPatilsd/www-edumango"
  
    },
    {
        name: "Space Catch",
        image: spacecatch,
        description : "Created a game for December Virtual CodeDay 2020! My friend, Aareev Panda, made all of the graphics for the game and his YouTube channel can be found in the CodeDay showcase link.",
        techstack: [
            {
                logourl: java,
                name: "Java"
            },
            
        ],
        link:"https://showcase.codeday.org/project/ckib2gjq21499410rvmlgsa8g0",
        repo:"https://github.com/ShubhamPatilsd/space-catch"
  
    },
    {
      name: "Key Share",
      image: keyshare,
      description : "A platform where users can upload sound tests of their mechanical keyboards!",
      techstack: [
          {
              logourl: html,
              name: "HTML"
          },
          {
              logourl: css,
              name: "CSS"
          },
          {
              logourl: firebase,
              name: "Firebase"
          },
          {
              logourl: javascript,
              name: "Javascript"
          }
      ],
      link:"https://key-share-shubhampatilsd.vercel.app/",
      repo:"https://github.com/ShubhamPatilsd/key-share"
  
  },
  {
    name: "Chat Win98",
    image: chat_win98,
    description : "A realtime public chat room which is styled like Windows 98! Uses a special CSS library called OS.css, which contains movable windows.",
    techstack: [
        {
            logourl: html,
            name: "HTML"
        },
        {
            logourl: css,
            name: "CSS"
        },
        {
            logourl: firebase,
            name: "Firebase"
        },
        {
            logourl: javascript,
            name: "Javascript"
        }
    ],
    link:"https://chat-win98.herokuapp.com/",
    repo:"https://github.com/ShubhamPatilsd/chat-app"

},



  ]

export default projects