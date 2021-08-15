//Edumango images
import edumango from "../images/edumango-screenshot.png";
import nextjs from "../images/nextjs.svg";
import tailwindcss from "../images/tailwindcss.svg";
import react from "../images/react.svg";
import typescript from "../images/typescript.svg";

//Key share, Upperlower, and chatwin98 images
import keyshare from "../images/keyshare.png";
import chat_win98 from "../images/chat-win98.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import firebase from "../images/firebase.svg";
import javascript from "../images/javascript.svg";

//Space catch and Simple Pad
import spacecatch from "../images/spacecatch.png";
import java from "../images/java.svg";

//Upperlower
import upperlower from "../images/upperlower.png";
import bootstrap from "../images/bootstrap.svg";

//Bad apple
import badapple from "../images/badapple.png";
import python from "../images/python.svg";

//gitworkshop
import gitworkshop from "../images/gitworkshopsite.png";

//Simple pad
import simplepad from "../images/simplepad.png";

//discowave
import nextauth from "../images/nextauth.png";
import discowave from "../images/discowave.png";
import p5 from "../images/p5.png";

const projects = [
  {
    name: "DiscoWave",
    image: discowave,
    description:
      "Made a webapp called DiscoWave which provides awesome audio visualizations and an intuitive song suggestions feature. More can be found at the showcase link.",
    techstack: [
      {
        logourl: nextjs,
        name: "NextJS",
      },
      {
        logourl: react,
        name: "React",
      },
      {
        logourl: tailwindcss,
        name: "Tailwind CSS",
      },
      {
        logourl: typescript,
        name: "Typescript",
      },
      {
        logourl: nextauth,
        name: "NextAuth",
      },
      {
        logourl: p5,
        name: "p5.js",
      },
    ],
    link: "https://showcase.codeday.org/project/ckqtyhfmo91620210qu4j6ddiak",
    repo: "https://github.com/codeday-labs/disco-wave",
  },
  {
    name: "Edumango",
    image: edumango,
    description:
      "Created the website for an organization that specializes in educating students free of cost!",
    techstack: [
      {
        logourl: nextjs,
        name: "NextJS",
      },
      {
        logourl: react,
        name: "React",
      },
      {
        logourl: tailwindcss,
        name: "Tailwind CSS",
      },
      {
        logourl: typescript,
        name: "Typescript",
      },
    ],
    link: "https://edumango.vercel.app",
    repo: "https://github.com/ShubhamPatilsd/www-edumango",
  },
  {
    name: "Space Catch",
    image: spacecatch,
    description:
      "Created a game for December Virtual CodeDay 2020! My friend, Aareev Panda, made all of the graphics for the game and his YouTube channel can be found in the game!",
    techstack: [
      {
        logourl: java,
        name: "Java",
      },
    ],
    link: "https://showcase.codeday.org/project/ckib2gjq21499410rvmlgsa8g0",
    repo: "https://github.com/ShubhamPatilsd/space-catch",
  },
  {
    name: "Key Share",
    image: keyshare,
    description:
      "A platform where users can upload sound tests of their mechanical keyboards!",
    techstack: [
      {
        logourl: html,
        name: "HTML",
      },
      {
        logourl: css,
        name: "CSS",
      },
      {
        logourl: firebase,
        name: "Firebase",
      },
      {
        logourl: javascript,
        name: "Javascript",
      },
    ],
    link: "https://key-share-shubhampatilsd.vercel.app/",
    repo: "https://github.com/ShubhamPatilsd/key-share",
  },
  {
    name: "Chat Win98",
    image: chat_win98,
    description:
      "A realtime public chat room which is styled like Windows 98! Uses a special CSS library called OS.css, which contains movable windows.",
    techstack: [
      {
        logourl: html,
        name: "HTML",
      },
      {
        logourl: css,
        name: "CSS",
      },
      {
        logourl: firebase,
        name: "Firebase",
      },
      {
        logourl: javascript,
        name: "Javascript",
      },
    ],
    link: "https://chat-win98.herokuapp.com/",
    repo: "https://github.com/ShubhamPatilsd/chat-app",
  },
  {
    name: "UpperLower",
    image: upperlower,
    description:
      "This is a website I made that can make text appear lIke ThIs. It was mainly made when you didn't want to manually type out that effect so you save time.",
    techstack: [
      {
        logourl: html,
        name: "HTML",
      },
      {
        logourl: bootstrap,
        name: "Bootstrap",
      },
      {
        logourl: javascript,
        name: "Javascript",
      },
    ],
    link: "https://upperlower.vercel.app",
    repo: "https://github.com/ShubhamPatilsd/upperlower-website",
  },
  {
    name: "Terminal Bad Apple",
    image: badapple,
    description:
      'So this was a project that basically played and ASCII art version of the music video "Bad Apple!". It consisted of me parsing the files and converting them into ASCII art, saving that into a .txt file, and then playing them by clearing the terminal and rendering another frame.',
    techstack: [
      {
        logourl: python,
        name: "Python",
      },
    ],

    repo: "https://github.com/ShubhamPatilsd/bad-apple-terminal",
  },
  {
    name: "Git Workshop Platform",
    image: gitworkshop,
    description:
      "Helped to make the platform where people could make pull requests that added a .json file, which then appeared on a website. Kinda like a yearbook of sorts!",
    techstack: [
      {
        logourl: nextjs,
        name: "NextJS",
      },
      {
        logourl: react,
        name: "React",
      },
      {
        logourl: tailwindcss,
        name: "Tailwind CSS",
      },
      {
        logourl: typescript,
        name: "Typescript",
      },
    ],
    link: "https://gitworkshop.vercel.app/",
    repo: "https://github.com/eilla1/GitHub-Workshop",
  },
  {
    name: "Simple Pad",
    image: simplepad,
    description:
      "This is a very simple text editing application designed for quick and simple tasks like editing a README file on the go with traditional key shortcuts.",
    techstack: [
      {
        logourl: java,
        name: "Java",
      },
    ],

    repo: "https://github.com/ShubhamPatilsd/simple-pad/",
  },
];

export default projects;
