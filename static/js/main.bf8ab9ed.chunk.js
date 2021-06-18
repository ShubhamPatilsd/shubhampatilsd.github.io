(this["webpackJsonpreact-websitev2"]=this["webpackJsonpreact-websitev2"]||[]).push([[0],{10:function(e,t,i){},18:function(e){e.exports=JSON.parse('[{"title":"\ud83d\udcbc Git Workshop","description":"This was a Git workshop that I gave at Virtual CodeDay, consisting of a demo and a demo of how Git and Github work.","date":"February 26 2021","link":"https://www.youtube.com/watch?v=CMC8isl7wpU&t=144"},{"title":"\ud83d\udcbc Git Workshop V2","description":"A revamped version of the last workshop I helped deliver. This one consisted of attendees actually pull requesting to a repository!","date":"June 11 2021","link":"https://www.twitch.tv/videos/1053164026"}]')},24:function(e,t,i){},350:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),c=i(15),n=i.n(c),r=(i(24),i(5)),o=i(6),l=i(8),h=i(7),d=(i(10),i(4)),p=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("div",{id:this.props.title.toLowerCase(),class:"center",children:Object(d.jsx)("div",{class:"card-wrapper",children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsx)("h1",{className:"title",children:this.props.title}),this.props.children]})})})}}]),i}(s.a.Component),j=i(9),m=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"contact-wrapper",children:Object(d.jsxs)("div",{id:"contact",children:[Object(d.jsx)("a",{href:"https://github.com/shubhamPatilsd/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.Github,{className:"contact",color:"white",size:28})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/shubham-patil-5352a3215/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.Linkedin,{className:"contact",color:"white",size:28})}),Object(d.jsx)("a",{href:"mailto:shubhampatilsd@gmail.com",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.Mail,{className:"contact",color:"white",size:28})})]})})}}]),i}(s.a.Component),b=i.p+"static/media/edumango-screenshot.084c5861.png",u=i.p+"static/media/nextjs.12fe6d50.svg",g=i.p+"static/media/tailwindcss.cb8046c1.svg",x=i.p+"static/media/react.e99c4322.svg",O=i.p+"static/media/typescript.616b2f7e.svg",f=i.p+"static/media/keyshare.1304f2f6.png",v=i.p+"static/media/chat-win98.ec23152d.png",y=i.p+"static/media/html.ecf30964.svg",k=i.p+"static/media/css.30ca7d60.svg",w=i.p+"static/media/firebase.7840999a.svg",S=i.p+"static/media/javascript.e43bba9d.svg",C=i.p+"static/media/spacecatch.dffb404d.png",N=i.p+"static/media/java.1c3d8add.svg",I=[{name:"Edumango",image:b,description:"Created the website for an organization that specializes in educating students free of cost!",techstack:[{logourl:u,name:"NextJS"},{logourl:x,name:"React"},{logourl:g,name:"Tailwind CSS"},{logourl:O,name:"Typescript"}],link:"https://edumango.vercel.app",repo:"https://github.com/ShubhamPatilsd/www-edumango"},{name:"Space Catch",image:C,description:"Created a game for December Virtual CodeDay 2020! My friend, Aareev Panda, made all of the graphics for the game and his YouTube channel can be found in the CodeDay showcase link.",techstack:[{logourl:N,name:"Java"}],link:"https://showcase.codeday.org/project/ckib2gjq21499410rvmlgsa8g0",repo:"https://github.com/ShubhamPatilsd/space-catch"},{name:"Key Share",image:f,description:"A platform where users can upload sound tests of their mechanical keyboards!",techstack:[{logourl:y,name:"HTML"},{logourl:k,name:"CSS"},{logourl:w,name:"Firebase"},{logourl:S,name:"Javascript"}],link:"https://key-share-shubhampatilsd.vercel.app/",repo:"https://github.com/ShubhamPatilsd/key-share"},{name:"Chat Win98",image:v,description:"A realtime public chat room which is styled like Windows 98! Uses a special CSS library called OS.css, which contains movable windows.",techstack:[{logourl:y,name:"HTML"},{logourl:k,name:"CSS"},{logourl:w,name:"Firebase"},{logourl:S,name:"Javascript"}],link:"https://chat-win98.herokuapp.com/",repo:"https://github.com/ShubhamPatilsd/chat-app"}],L=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("div",{class:"responsive",children:Object(d.jsxs)("div",{class:"gallery",children:[Object(d.jsx)("img",{className:"resize",src:this.props.image,alt:this.props.name}),Object(d.jsxs)("div",{className:"words",children:[Object(d.jsx)("h2",{style:{fontSize:"1.6em"},children:this.props.name}),Object(d.jsxs)("div",{className:"techstack",style:{fontSize:"0.9em"},children:[Object(d.jsx)("h4",{style:{marginBottom:"0.5rem"},children:"Made with:"}),this.props.techstack.map((function(e,t){return Object(d.jsx)("img",{src:e.logourl,width:"30px",height:"30px",alt:e.name},t)}))]}),Object(d.jsx)("p",{style:{marginBottom:"0",fontSize:"0.9em"},children:this.props.desc})]}),Object(d.jsxs)("div",{style:{marginLeft:"10px",fontSize:"0.9em"},children:[Object(d.jsx)("a",{style:{color:"#98B9F2",display:"".concat(this.props.link?"":"none")},href:this.props.link,rel:"noreferrer",target:"_blank",children:Object(d.jsxs)("p",{style:{display:"".concat(this.props.link?"flex":"none"),alignItems:"center"},children:["Link\xa0",Object(d.jsx)(j.ExternalLink,{size:20})]})}),Object(d.jsx)("a",{style:{color:"#98B9F2"},href:this.props.repo,rel:"noreferrer",target:"_blank",children:Object(d.jsxs)("p",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)(j.Github,{size:20}),"\xa0\xa0Code\xa0",Object(d.jsx)(j.ExternalLink,{size:20})]})})]})]})})}}]),i}(s.a.Component),P=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsx)("div",{class:"center",children:Object(d.jsx)("div",{class:"card-wrapper-projects",children:Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{id:"card-projects",children:[Object(d.jsx)("h1",{class:"title",children:"Projects"}),Object(d.jsx)("div",{className:"project-grid",children:I.map((function(e,t){return Object(d.jsx)(L,{style:{display:"table-cell"},repo:e.repo,image:e.image,name:e.name,desc:e.description,link:e.link,techstack:e.techstack},t)}))})]})})})})}}]),i}(s.a.Component),D=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"skill",children:[Object(d.jsx)("img",{src:this.props.icon,width:"30px",height:"30px",alt:"icon"}),Object(d.jsx)("span",{children:this.props.skillName})]})}}]),i}(s.a.Component),F=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"work",children:[Object(d.jsxs)("div",{className:"top-part",style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:this.props.image,width:this.props.width,height:"auto",style:{marginRight:"1em",position:"relative",marginTop:"2%",display:"flex",verticalAlign:"super"},alt:this.props.alt})}),Object(d.jsx)("h1",{className:"work-text",style:{lineHeight:"2.5rem"},children:this.props.name})]}),Object(d.jsx)("h4",{children:this.props.time}),Object(d.jsx)("p",{children:this.props.children})]})}}]),i}(s.a.Component),z=i(16),J=i.n(z),T=i.p+"static/media/codeday-notext-color.88e19e00.svg",A=i.p+"static/media/python.696e5d1f.svg",W=i.p+"static/media/git.ba0b25e0.svg",M=i.p+"static/media/fll_logo.01e6ad31.jpg",_=i.p+"static/media/ftc.2b22970e.jpg",G=i.p+"static/media/person.63045093.png",B=i.p+"static/media/express.c2405ddf.svg",H=i.p+"static/media/nodejs.684672c1.svg",E=i.p+"static/media/linux.5780b5e3.svg",V=i(19),q=i(12),R=i.n(q),U=i(17);function Y(){return(Y=Object(U.a)(R.a.mark((function e(){var t,i,a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],i=[],e.next=4,fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shubhampatilsd");case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,t=s.items,i=t.map((function(e){return{title:"\ud83d\udcdd ".concat(e.title),date:e.pubDate,link:e.link}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(){return Y.apply(this,arguments)},Q=i(18),X=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{style:{maxWidth:"35em",marginBottom:"2rem"},children:[Object(d.jsx)("p",{style:{margin:"0",fontSize:"16px"},children:Object(d.jsx)("small",{children:this.props.date.toLocaleDateString(void 0,{dateStyle:"long"})})}),Object(d.jsx)("h3",{style:{margin:"0"},children:Object(d.jsxs)("a",{className:"no-underline",href:this.props.link,rel:"noreferrer",target:"_blank",children:[this.props.blog?"\ud83d\udcdd ":"",this.props.title+" ->"]})}),Object(d.jsx)("p",{style:{margin:"0",fontSize:"18px"},children:Object(d.jsx)("small",{children:this.props.desc})})]})}}]),i}(s.a.Component);var Z=function(){var e=Object(a.useState)([]),t=Object(V.a)(e,2),i=t[0],s=t[1];return Object(a.useEffect)((function(){K().then((function(e){e=e.concat(Q),s((function(t){return t.concat(e)}))}))}),[]),Object(d.jsx)("div",{children:i.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).map((function(e,t){return Object(d.jsx)(X,{date:new Date(e.date),link:e.link,title:e.title,desc:e.description},t)}))})};var $=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsxs)(J.a,{bottom:!0,children:[Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"no-div-center",style:{"margin-bottom":"5rem"},children:[Object(d.jsx)("h2",{children:" Hey there! My name is"}),Object(d.jsx)("h2",{id:"name",className:"title",children:"Shubham Patil"}),Object(d.jsxs)("h2",{id:"sub-text",children:["I make ",Object(d.jsx)("span",{className:"title",children:"awesome"})," things with my love for computer science."]})]})}),Object(d.jsxs)(p,{title:"About Me",children:[Object(d.jsx)("img",{alt:"Shubham",style:{float:"right","margin-left":"1rem","margin-bottom":"1rem","border-radius":"100%",border:"5px solid"},src:G,width:"150px",height:""}),Object(d.jsx)("p",{children:"Hello there! I\u2019m Shubham Patil. I\u2019m currently a high schooler studying computer science. I\u2019m also working to increase my skills so that I can build amazing things. I value the efficiency and scalability of code, so I absolutely love automation of codebases. An example of this would be storing data in JSON files or fetching data from an API/database instead of directly hardcoding the values into the code. I mainly enjoy programming because it\u2019s fun and it enables me to build awe-inspiring projects. Coding also drives me to learn new things and technologies, which I enjoy. I love\xa0 the concept of open-source code, so all the major projects I\u2019ve worked on are hosted on GitHub. Besides coding, I enjoy watching movies and videos regarding technology in my free time. I don't have a favorite food per say as I enjoy many types of cuisines. I hope you have a good time exploring my site and I wish you a very good day!"})]}),Object(d.jsxs)(p,{title:"I've Worked With",children:[Object(d.jsx)(D,{icon:N,skillName:"Java"}),Object(d.jsx)(D,{icon:A,skillName:"Python"}),Object(d.jsx)(D,{icon:S,skillName:"JavaScript"}),Object(d.jsx)(D,{icon:y,skillName:"HTML"}),Object(d.jsx)(D,{icon:k,skillName:"CSS"}),Object(d.jsx)(D,{icon:W,skillName:"Git"}),Object(d.jsx)(D,{icon:x,skillName:"React"}),Object(d.jsx)(D,{icon:g,skillName:"Tailwind CSS"}),Object(d.jsx)(D,{icon:E,skillName:"Linux"}),Object(d.jsx)(D,{icon:u,skillName:"NextJS"}),Object(d.jsx)(D,{icon:B,skillName:"Express"}),Object(d.jsx)(D,{icon:H,skillName:"NodeJS"}),Object(d.jsx)(D,{icon:O,skillName:"Typescript"}),Object(d.jsx)(D,{icon:w,skillName:"Firebase"})]}),Object(d.jsxs)(P,{children:[Object(d.jsx)(L,{image:"https://websitev1/space-catch-preview.webp",alt:"Space Catch",desc:"A game I made in 48 hours for December Virtual CodeDay 2020"}),Object(d.jsx)(L,{image:"https://github.com/ShubhamPatilsd/websitev1/space-catch-preview.webp",alt:"Space Catch",desc:"A game I made in 48 hours for December Virtual CodeDay 2020"})]}),Object(d.jsx)(p,{title:"Contributions",children:Object(d.jsx)(Z,{})}),Object(d.jsxs)(p,{title:"Experiences",children:[Object(d.jsx)(F,{name:"CodeDay",image:T,width:"50px",alt:"CodeDay",time:"January 2021 \u2014 Present",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Worked to spread the word about CodeDay"}),Object(d.jsx)("li",{children:"Helped manage the community"}),Object(d.jsx)("li",{children:"Write new features and ideas for CodeDay platforms"})]})}),Object(d.jsx)(F,{name:"First Tech Challenge",image:_,width:"70px",alt:"First Lego League",time:"September 2019 \u2014 Present",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Team #16778 Cyber Wizards"}),Object(d.jsx)("li",{children:"Programmed metal robots with the Java programming language to complete missions"}),Object(d.jsx)("li",{children:"Worked together with a team of 6-8 people"}),Object(d.jsx)("li",{children:"Helped to write an engineering notebook"})]})}),Object(d.jsx)(F,{name:"First Lego League",image:M,width:"50px",alt:"First Lego League",time:"August 2016 \u2014 January 2018",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Programmed robots made out of Lego Technic pieces to complete missions"}),Object(d.jsx)("li",{children:"Worked together with a team of 6-8 people"}),Object(d.jsx)("li",{children:"Collaborated with team members to host outreach events"})]})})]}),Object(d.jsxs)(p,{title:"Contact Me",children:[Object(d.jsx)("p",{children:"Let's get in touch. You can click on any of the icons below to go to my profiles on Github, Linkedin, and my email address!"}),Object(d.jsx)("a",{href:"https://github.com/shubhamPatilsd/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)("i",{className:"contact fab fa-4x fa-github-square"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/shubham-patil-5352a3215/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)("i",{class:"contact fab fa-linkedin fa-4x"})}),Object(d.jsx)("a",{href:"mailto:shubhampatilsd@gmail.com",rel:"noreferrer",target:"_blank",children:Object(d.jsx)("i",{class:"contact fas fa-envelope fa-4x"})})]})]}),Object(d.jsx)("p",{style:{"text-align":"center","margin-top":"6rem","margin-bottom":"2rem"},children:"\ud83d\udd28\xa0\xa0\xa0\xa0Built with enthusiasm by Shubham Patil"})]})},ee=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,351)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root")),ee()}},[[350,1,2]]]);
//# sourceMappingURL=main.bf8ab9ed.chunk.js.map